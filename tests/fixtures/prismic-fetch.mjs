import { readFileSync } from "node:fs";

import { draft, incompleteDraft, published } from "./prismic-content.mjs";

const origin = "https://7l7juw0m.cdn.prismic.io";
const api = `${origin}/api/v2`;
const originalFetch = globalThis.fetch;
const statePath = process.env.PORTFOLIO_PRISMIC_FIXTURE_STATE;

function publishedRef() {
  try {
    return readFileSync(statePath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") return "fixture-master";
    throw error;
  }
}

globalThis.fetch = async (input, init) => {
  const url = new URL(input instanceof Request ? input.url : input, "http://localhost");
  if (url.origin !== origin) return originalFetch(input, init);

  if (url.searchParams.get("access_token") !== "fixture-access-token") {
    return Response.json({ message: "Bad test credential" }, { status: 401 });
  }
  if (url.pathname === "/api/v2") {
    const master = statePath ? publishedRef() : "fixture-master";
    return Response.json({
      refs: [{ id: "master", ref: master, label: "Master", isMasterRef: true }],
      types: Object.fromEntries(published.map(({ type }) => [type, type])),
      languages: [{ id: "en-us", is_master: true }],
      forms: { everything: { action: `${api}/documents/search` } },
    });
  }
  if (url.pathname !== "/api/v2/documents/search") return new Response(null, { status: 404 });

  const ref = url.searchParams.get("ref");
  if (ref === "fixture-expired") {
    return Response.json({ message: "Fixture ref expired; master ref is: fixture-master" }, { status: 410 });
  }
  if (!["fixture-master", "fixture-preview", "fixture-publish", "fixture-unpublish"].includes(ref)) {
    return Response.json({ message: "Invalid fixture ref" }, { status: 401 });
  }
  const types = url.searchParams.getAll("q").join(" ");
  const projectUid = /at\(my\.project\.uid,\s*"([^"]+)"\)/.exec(types)?.[1];
  if (projectUid === "api-error") {
    return Response.json({ message: "Simulated Content API failure" }, { status: 500 });
  }
  const documentType = /at\(document\.type,\s*"([^"]+)"\)/.exec(types)?.[1];
  const documentId = /at\(document\.id,\s*"([^"]+)"\)/.exec(types)?.[1];
  const previewProject = { "fixture-preview": incompleteDraft, "fixture-publish": draft }[ref];
  const documents = previewProject ? [...published, previewProject] : published;
  const results = documents.filter(({ type, uid, id }) =>
    (!documentType || type === documentType) &&
    (!projectUid || uid === projectUid) && (!documentId || id === documentId));
  return Response.json({
    page: 1, results_per_page: results.length, results_size: results.length,
    total_results_size: results.length, total_pages: results.length ? 1 : 0,
    next_page: null, prev_page: null, results,
  });
};
