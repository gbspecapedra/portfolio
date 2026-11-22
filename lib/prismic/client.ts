import "server-only";

import { createClient as createPrismicClient, type FetchLike } from "@prismicio/client";
import config from "../../prismic.config.json";
import type { AllDocumentTypes } from "../../prismicio-types";

export const repositoryName = config.repositoryName;
const isVercelPreview = process.env.VERCEL_ENV === "preview";
export const contentTag = isVercelPreview ? "prismic-preview" : "prismic";

const fetchPreview: FetchLike = async (url, options) => {
  const response = await fetch(url, options);
  if ((response.status === 404 || response.status === 410) && new URL(url).searchParams.has("ref")) {
    // Prevent the SDK from logging the rejected ref and retrying against published content.
    return Response.json({ message: "Prismic preview ref is invalid or expired." }, { status: 401 });
  }
  return response;
};

export function createClient(previewRef?: string) {
  const configuredRepository = process.env.PRISMIC_REPOSITORY_NAME?.trim();
  if (configuredRepository && configuredRepository !== repositoryName) {
    throw new Error(`Set PRISMIC_REPOSITORY_NAME to ${repositoryName}.`);
  }
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN?.trim() || undefined;

  const client = createPrismicClient<AllDocumentTypes>(repositoryName, {
    accessToken,
    routes: config.routes,
    fetch: previewRef ? fetchPreview : undefined,
    fetchOptions: previewRef || process.env.NODE_ENV === "development"
      ? { cache: "no-store" }
      : { next: { tags: [contentTag], revalidate: isVercelPreview ? 60 : 3600 } },
  });
  if (previewRef) client.queryContentFromRef(previewRef);
  return client;
}
