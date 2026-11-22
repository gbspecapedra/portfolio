import "server-only";

import { getPublishedProjectUids } from "./content";

type ProjectIndex = {
  expiresAt: number;
  uids: Promise<string[]>;
};

// Proxy runs outside the App Router fetch cache. Share this short-lived index
// across requests in the same process, including with the webhook handler.
const runtime = globalThis as typeof globalThis & { portfolioPrismicProjectIndex?: ProjectIndex };

export function getProjectIndex() {
  if (process.env.NODE_ENV === "development") return getPublishedProjectUids();

  const now = Date.now();
  const current = runtime.portfolioPrismicProjectIndex;
  if (current && current.expiresAt > now) return current.uids;

  const next = { expiresAt: now + 15_000, uids: getPublishedProjectUids() };
  runtime.portfolioPrismicProjectIndex = next;
  return next.uids.catch((error: unknown) => {
    if (runtime.portfolioPrismicProjectIndex === next) clearProjectIndex();
    throw error;
  });
}

export function clearProjectIndex() {
  delete runtime.portfolioPrismicProjectIndex;
}
