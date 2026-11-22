import type { MetadataRoute } from "next";

import { legalPages, projectPath, siteUrl } from "@/data/site";
import { getPublishedProjectUids } from "@/lib/prismic/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    "/",
    ...(await getPublishedProjectUids()).map(projectPath),
    ...Object.values(legalPages).map(({ path }) => path),
  ].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
