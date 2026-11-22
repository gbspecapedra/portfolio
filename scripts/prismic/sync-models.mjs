import { readFile } from "node:fs/promises";
import { isDeepStrictEqual } from "node:util";

const config = JSON.parse(await readFile("prismic.config.json", "utf8"));
const repository = process.env.PRISMIC_REPOSITORY_NAME;
const token = process.env.PRISMIC_WRITE_TOKEN?.trim();
const apply = process.argv.includes("--apply");

if (repository !== config.repositoryName || !token) {
  throw new Error("Set the verified repository name and a Prismic write credential.");
}

const endpoint = "https://customtypes.prismic.io/customtypes";
const headers = {
  repository,
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function request(url, options) {
  const response = await fetch(url, { ...options, headers, redirect: "error" });
  if (!response.ok) throw new Error(`Prismic Types API returned HTTP ${response.status}.`);
  return response;
}

function checkAdditive(remote, local, path) {
  if (remote && local && typeof remote === "object" && typeof local === "object" &&
      !Array.isArray(remote) && !Array.isArray(local)) {
    for (const [key, value] of Object.entries(remote)) {
      checkAdditive(value, local[key], `${path}.${key}`);
    }
  } else if (!isDeepStrictEqual(remote, local)) {
    throw new Error(`Existing model differs at ${path}. Review the remote model before syncing.`);
  }
}

const remoteModels = await (await request(endpoint)).json();
const changes = [];
for (const id of ["about", "experience", "project", "site_settings", "homepage"]) {
  const local = JSON.parse(await readFile(`customtypes/${id}/index.json`, "utf8"));
  const remote = remoteModels.find((model) => model.id === id);
  if (isDeepStrictEqual(remote, local)) {
    console.log(`Up to date: ${id}`);
    continue;
  }
  if (remote) checkAdditive(remote, local, id);
  changes.push({ local, action: remote ? "update" : "insert" });
}

for (const { local, action } of changes) {
  console.log(`${apply ? "Applying" : "Would apply"} ${action}: ${local.id}`);
  if (apply) {
    await request(`${endpoint}/${action}`, { method: "POST", body: JSON.stringify(local) });
  }
}
