import "server-only";

import { NotFoundError } from "@prismicio/client";
import { getPreviewRef } from "@prismicio/next";
import { cache } from "react";

import { createClient } from "./client";
import {
  mapAbout, mapExperience, mapHomepage, mapProject, mapSiteSettings,
  orderExperience, orderProjects, validProjectUid,
} from "./map-content";

const requestClient = cache(async () => createClient(await getPreviewRef()));

async function query<T>(label: string, fetchDocument: () => Promise<T>) {
  try {
    return await fetchDocument();
  } catch (error) {
    if (error instanceof NotFoundError) return null;
    // eslint-disable-next-line preserve-caught-error -- The original SDK error can contain an access token or preview ref.
    throw new Error(`Prismic could not read ${label}. Check repository configuration, access, and API availability.`);
  }
}

function singleton<T>(content: T | null, name: string): T {
  if (!content) throw new Error(`Required Prismic document is missing: ${name}. Publish it before building the portfolio.`);
  return content;
}

export const getSiteSettings = cache(async () => {
  const client = await requestClient();
  return mapSiteSettings(singleton(await query("site settings", () => client.getSingle("site_settings")), "site_settings"));
});

export const getHomepage = cache(async () => {
  const client = await requestClient();
  return mapHomepage(singleton(await query("homepage", () => client.getSingle("homepage")), "homepage"));
});

export const getAbout = cache(async () => {
  const client = await requestClient();
  return mapAbout(singleton(await query("about", () => client.getSingle("about")), "about"));
});

export const getExperience = cache(async () => {
  const client = await requestClient();
  const documents = await query("experience", () => client.getAllByType("experience"));
  return orderExperience(documents ?? []).map(mapExperience);
});

export const getProjectCards = cache(async () => {
  const client = await requestClient();
  const documents = await query("project cards", () => client.getAllByType("project", {
    fetch: [
      "project.title", "project.subtitle", "project.image", "project.tags", "project.links",
      "project.project_type", "project.role", "project.show_card", "project.featured", "project.display_order", "project.pitch",
    ],
  }));
  return orderProjects((documents ?? []).filter(({ uid, data }) => validProjectUid(uid) && data.show_card))
    .map(mapProject);
});

export const getProject = cache(async (uid: string) => {
  if (!validProjectUid(uid)) return null;
  const client = await requestClient();
  const project = await query("project", () => client.getByUID("project", uid));
  return project ? mapProject(project) : null;
});

export async function getPublishedProjectUids() {
  // Route enumeration and sitemap use the published ref even inside a preview.
  const client = createClient();
  const documents = await query("published project UIDs", () => client.getAllByType("project", {
    fetch: ["project.title"],
  }));
  return (documents ?? []).map(({ uid }) => uid).filter(validProjectUid).sort();
}
