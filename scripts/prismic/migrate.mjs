import { constants } from "node:fs";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { basename, extname } from "node:path";
import { setTimeout } from "node:timers/promises";

import { createClient, createMigration, createWriteClient } from "@prismicio/client";

import { mapSource } from "./map-source.mjs";

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const config = await readJson("prismic.config.json");
const source = await readJson("scripts/prismic/source.json");
const plan = mapSource(source);
const keyOf = ({ type, uid }) => uid ? `${type}/${uid}` : type;
const documentKeys = new Set(plan.map(keyOf));
const mode = process.argv[2] ?? "--dry-run";
const directory = "artifacts/prismic";
const journal = `${directory}/migration-journal.json`;
const sizes = new Map();
const assets = new Map();
const mimeTypes = { ".png": "image/png", ".webp": "image/webp" };

if (!["--dry-run", "--check", "--apply", "--resume", "--verify"].includes(mode) || process.argv.length > 3) {
  throw new Error("Choose --dry-run, --check, --apply, --resume, or --verify.");
}
if (documentKeys.size !== plan.length) throw new Error("Duplicate documents in the migration source.");

function walk(value, visit) {
  if (Array.isArray(value)) return value.map((item) => walk(item, visit));
  if (!value || typeof value !== "object") return value;
  if ("sourceImage" in value || "projectUid" in value) return visit(value);
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, walk(item, visit)]));
}

for (const document of plan) {
  walk(document.data, (reference) => {
    if ("sourceImage" in reference) {
      const image = reference.sourceImage;
      if (assets.has(image.src) && JSON.stringify(assets.get(image.src)) !== JSON.stringify(image)) {
        throw new Error(`Conflicting image details for ${image.src}.`);
      }
      assets.set(image.src, image);
    } else if (!documentKeys.has(`project/${reference.projectUid}`)) {
      throw new Error(`Unknown project relationship: ${reference.projectUid}.`);
    }
    return reference;
  });
  console.log(`${mode}: ${keyOf(document)}`);
}

for (const [path] of assets) {
  if (!/^\/[-\w/]+\.(png|webp)$/.test(path)) throw new Error(`Invalid local asset path: ${path}`);
  const file = await readFile(`public${path}`);
  sizes.set(path, { bytes: file.length, sha256: createHash("sha256").update(file).digest("hex") });
}

console.log(`Plan: ${plan.length} documents, ${assets.size} assets.`);
await mkdir(directory, { recursive: true });
await writeFile(`${directory}/migration-plan.json`, JSON.stringify({ documents: plan, assets: [...sizes] }, null, 2) + "\n");

if (mode !== "--dry-run") {
  await runAgainstRepository();
}

async function runAgainstRepository() {
  const repository = process.env.PRISMIC_REPOSITORY_NAME;
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN?.trim() || undefined;
  if (repository !== config.repositoryName) {
    throw new Error("Set the verified Prismic repository name.");
  }
  const client = createClient(repository, { accessToken, fetchOptions: { cache: "no-store" } });
  const metadata = await client.getRepository().catch(() => {
    throw new Error("Prismic repository verification failed. Check Content API access.");
  });
  const locale = metadata.languages.find((language) => language.is_master)?.id;
  if (locale !== "en-us") throw new Error("The target repository master locale must be en-us.");

  const documents = await client.dangerouslyGetAll({ lang: locale }).catch(() => {
    throw new Error("Could not inspect published Prismic documents.");
  });
  if (mode === "--verify") {
    await verify(documents);
    return;
  }
  const writeToken = process.env.PRISMIC_WRITE_TOKEN?.trim();
  if (!writeToken) throw new Error("Set a Prismic write credential to inspect the target models.");
  const modelResponse = await fetch("https://customtypes.prismic.io/customtypes", {
    headers: { repository, Authorization: `Bearer ${writeToken}` },
    redirect: "error",
  });
  if (!modelResponse.ok) throw new Error(`Prismic Types API returned HTTP ${modelResponse.status}.`);
  const models = await modelResponse.json();
  const missingModels = [...new Set(plan.map(({ type }) => type))]
    .filter((type) => !models.some(({ id, status }) => type === id && status));
  if (missingModels.length) throw new Error(`Models are missing: ${missingModels.join(", ")}.`);

  const conflicts = documents.filter((document) => documentKeys.has(keyOf(document)));
  if (conflicts.length) throw new Error(`Existing published documents require review: ${conflicts.map(keyOf).join(", ")}.`);

  for (const ref of metadata.refs.filter(({ isMasterRef }) => !isMasterRef)) {
    const released = await client.dangerouslyGetAll({ ref: ref.ref, lang: locale }).catch(() => {
      throw new Error("Could not check a visible Prismic release for conflicts.");
    });
    if (released.some((document) => documentKeys.has(keyOf(document)))) {
      throw new Error(`Conflicting content exists in visible release: ${ref.label}.`);
    }
  }
  console.log("Verified target repository, locale, models, and visible documents.");
  if (mode === "--check") return;

  if (mode === "--resume") {
    await resume(repository, writeToken);
    return;
  }

  const alreadyStarted = await access(journal, constants.F_OK).then(() => true, () => false);
  if (alreadyStarted) throw new Error("A migration journal exists. Reconcile its entries in Prismic before another apply.");

  const migration = createMigration();
  const uploaded = new Map();
  for (const [path, { alt }] of assets) {
    const filename = basename(path);
    const file = new File([await readFile(`public${path}`)], filename, { type: mimeTypes[extname(filename)] });
    uploaded.set(path, migration.createAsset(file, filename, { alt }));
  }
  const pending = new Map();
  for (const { title, ...entry } of plan) {
    const data = walk(entry.data, (reference) => "sourceImage" in reference
      ? uploaded.get(reference.sourceImage.src)
      : () => migration.getByUID("project", reference.projectUid));
    pending.set(keyOf(entry), migration.createDocument({ ...entry, data, lang: locale }, title));
  }

  const events = [];
  const record = () => ({
    repository, state: "started", events,
    documents: [...pending].map(([key, item]) => ({ key, id: item.document.id })),
  });
  await writeFile(journal, JSON.stringify(record(), null, 2) + "\n", { flag: "wx" });

  const writeClient = createWriteClient(repository, { accessToken, writeToken });
  try {
    await writeClient.migrate(migration, {
      reporter(event) {
        const { document, asset, ...counts } = event.data;
        const identifier = document ? keyOf(document.document) : asset?.config.filename;
        const entry = { event: event.type, identifier, ...counts };
        events.push(entry);
        console.log(event.type, identifier ?? "");
      },
    });
    await writeFile(journal, JSON.stringify({ ...record(), state: "staged" }, null, 2) + "\n");
  } catch (error) {
    console.error("Migration SDK error:", error?.name ?? "Error");
    await writeFile(journal, JSON.stringify({ ...record(), state: "incomplete" }, null, 2) + "\n");
    // eslint-disable-next-line preserve-caught-error -- The SDK error can contain credentials.
    throw new Error("Migration stopped. Reconcile the journal and Migration Releases dashboard before retrying.");
  }
  console.log("Migration staged in Prismic Migration Releases.");
}

async function resume(repository, writeToken) {
  const state = await readJson(journal);
  const ids = new Map(state.documents.map(({ key, id }) => [key, id]));
  if (state.repository !== repository || state.state !== "incomplete" ||
      ids.size !== plan.length || new Set(ids.values()).size !== plan.length ||
      plan.some((document) => !/^[\w-]+$/.test(ids.get(keyOf(document)) ?? ""))) {
    throw new Error("Resume requires a matching incomplete journal with all draft IDs allocated.");
  }
  const headers = { repository, Authorization: `Bearer ${writeToken}`, "Content-Type": "application/json" };
  const library = await fetch("https://asset-api.prismic.io/assets", { headers, redirect: "error" });
  if (!library.ok) throw new Error(`Prismic Asset API returned HTTP ${library.status}.`);
  const { items } = await library.json();
  const media = new Map();
  for (const [path, image] of assets) {
    const matches = items.filter((item) => item.filename === basename(path) &&
      item.size === sizes.get(path).bytes && item.width === image.width &&
      item.height === image.height && (item.alt ?? "") === image.alt);
    if (matches.length !== 1) throw new Error(`Cannot uniquely match the staged asset ${path}.`);
    media.set(path, matches[0].id);
  }

  state.updated ??= [];
  for (const document of plan) {
    const key = keyOf(document);
    if (state.updated.includes(key)) continue;
    const { title, uid } = document;
    const data = walk(document.data, (reference) => "sourceImage" in reference
      ? { id: media.get(reference.sourceImage.src), alt: reference.sourceImage.alt || null }
      : { link_type: "Document", id: ids.get(`project/${reference.projectUid}`) });
    const response = await fetch(`https://migration.prismic.io/documents/${ids.get(key)}`, {
      method: "PUT", headers, redirect: "error", body: JSON.stringify({ title, uid, data }),
    });
    if (!response.ok) {
      const details = await response.json().catch(() => null);
      // Only print field identifiers returned by validation, not request bodies or URLs.
      const fields = Array.isArray(details?.errors) ? details.errors.map(({ field }) => field).filter(Boolean) : [];
      throw new Error(`Prismic Migration API returned HTTP ${response.status} for ${key} ${fields.join(", ")}.`);
    }
    await response.text();
    state.updated.push(key);
    await writeFile(journal, JSON.stringify(state, null, 2) + "\n");
    console.log(`Updated migration draft: ${key}`);
    await setTimeout(1100);
  }
  await writeFile(journal, JSON.stringify({ ...state, state: "staged" }, null, 2) + "\n");
  console.log("Migration staged in Prismic Migration Releases.");
}

async function verify(published) {
  const mismatches = [];
  const publishedAssets = new Map();
  const compare = (expected, actual, path) => {
    if (expected === undefined) return;
    if (Array.isArray(expected)) {
      if (!Array.isArray(actual) || expected.length !== actual.length) {
        mismatches.push(path);
        return;
      }
      expected.forEach((item, index) => compare(item, actual[index], `${path}[${index}]`));
    } else if (expected && typeof expected === "object") {
      if ("sourceImage" in expected) {
        const { src, alt, width, height } = expected.sourceImage;
        const url = actual?.url && URL.parse(actual.url);
        if (!url || url.origin !== "https://images.prismic.io" ||
            !url.pathname.startsWith(`/${config.repositoryName}/`) ||
            (actual.alt ?? "") !== alt || actual.dimensions?.width !== width ||
            actual.dimensions?.height !== height) {
          mismatches.push(path);
        } else {
          url.search = "";
          publishedAssets.set(src, url);
        }
      } else if ("projectUid" in expected) {
        if (actual?.type !== "project" || actual.uid !== expected.projectUid || actual.isBroken) mismatches.push(path);
      } else {
        for (const [key, item] of Object.entries(expected)) compare(item, actual?.[key], `${path}.${key}`);
      }
    } else if (expected !== actual) {
      mismatches.push(path);
    }
  };

  for (const expected of plan) {
    const key = keyOf(expected);
    const found = published.filter((document) => keyOf(document) === key);
    if (found.length === 1) compare(expected.data, found[0].data, key);
    else mismatches.push(key);
  }

  if (mismatches.length) throw new Error(`Published content parity failed: ${mismatches.join(", ")}.`);
  await Promise.all([...publishedAssets].map(async ([src, url]) => {
    const response = await fetch(url, { redirect: "error" }).catch(() => null);
    if (!response?.ok) throw new Error(`Could not download the published original for ${src}.`);
    const digest = createHash("sha256").update(Buffer.from(await response.arrayBuffer())).digest("hex");
    if (digest !== sizes.get(src).sha256) throw new Error(`Published image bytes differ for ${src}.`);
  }));
  console.log(`Published parity verified for ${plan.length} documents and ${publishedAssets.size} original images.`);
}
