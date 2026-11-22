import type { MetadataRoute } from "next";

import { projectPath, projects } from "@/data/projects";
import { legalPages, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...projects.map(({ slug }) => projectPath(slug)),
    ...Object.values(legalPages).map(({ path }) => path),
  ].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
