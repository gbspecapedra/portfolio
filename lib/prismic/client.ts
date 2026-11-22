import "server-only";

import { createClient as createPrismicClient } from "@prismicio/client";
import config from "../../prismic.config.json";
import type { AllDocumentTypes } from "../../prismicio-types";

export const repositoryName = config.repositoryName;
export const contentTag = "prismic";

export function createClient(previewRef?: string) {
  if (process.env.PRISMIC_REPOSITORY_NAME !== repositoryName) {
    throw new Error(`Set PRISMIC_REPOSITORY_NAME to ${repositoryName}.`);
  }
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN?.trim() || undefined;

  const client = createPrismicClient<AllDocumentTypes>(repositoryName, {
    accessToken,
    routes: config.routes,
    fetchOptions: previewRef || process.env.NODE_ENV === "development"
      ? { cache: "no-store" }
      : { next: { tags: [contentTag], revalidate: 3600 } },
  });
  if (previewRef) client.queryContentFromRef(previewRef);
  return client;
}
