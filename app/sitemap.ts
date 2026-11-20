import type { MetadataRoute } from "next";

import { projectPath, projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...projects.map(({ slug }) => projectPath(slug))].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
