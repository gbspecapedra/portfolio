import assert from "node:assert/strict";
import test from "node:test";

import type { ExperienceDocument, HomepageDocument, ProjectDocument, SiteSettingsDocument } from "../prismicio-types";
import {
  mapExperience, mapHomepage, mapProject, mapSiteSettings, orderExperience, orderProjects, validProjectUid,
} from "../lib/prismic/map-content.ts";
import { fixtureSource, published } from "./fixtures/prismic-content.mjs";

const projects = published.filter(({ type }) => type === "project") as unknown as ProjectDocument[];
const roles = published.filter(({ type }) => type === "experience") as unknown as ExperienceDocument[];
const alpha = projects.find(({ uid }) => uid === "alpha")!;

test("normalizes an ordered case study tree, its media and related project fragments", () => {
  const project = mapProject(alpha);
  assert.deepEqual(project.image, fixtureSource.projects.find(({ slug }) => slug === "alpha")?.image);
  assert.equal(project.card?.pitch, "Sample listing introduction.");
  assert.equal(project.sections?.length, 5);
  const decision = project.sections?.[2].sections?.[0];
  assert.deepEqual(decision?.bullets, ["Example bullet."]);
  assert.equal(decision?.tradeOff, "Example trade-off.");
  assert.deepEqual(decision?.relatedLink, { label: "See the Beta filter.", href: "/projects/beta#context-filter" });
});

test("keeps optional fields empty and omits broken relationships", () => {
  const example = structuredClone(alpha);
  const decision = example.data.sections.find(({ section_id }) => section_id === "decision")!;
  Object.assign(decision.related_project, { isBroken: true });
  assert.equal(mapProject(example).sections?.[2].sections?.[0].relatedLink, undefined);
  const gamma = mapProject(projects.find(({ uid }) => uid === "gamma")!);
  assert.equal(gamma.image, undefined);
  assert.equal(gamma.card, undefined);
  assert.deepEqual(gamma.sections, []);
});

test("orders featured projects and roles deterministically and rejects malformed UIDs", () => {
  assert.deepEqual(orderProjects(projects).map(({ uid }) => uid), ["alpha", "gamma", "beta"]);
  assert.deepEqual(orderExperience(roles).map(({ uid }) => uid), ["example-company", "former"]);
  assert.equal(mapExperience(orderExperience(roles)[0]).dates, "Mar 2025 – Present");
  assert.equal(mapExperience(orderExperience(roles)[1]).dates, "Jan 2022 – Jan 2024");
  assert.equal(validProjectUid("example-project"), true);
  for (const uid of [null, "", "Alpha", "example/project", "example--project"]) {
    assert.equal(validProjectUid(uid), false);
  }
});

test("reports an incomplete required singleton with the field name", () => {
  const homepage = published.find(({ type }) => type === "homepage") as unknown as HomepageDocument;
  assert.throws(() => mapHomepage({ ...homepage, data: { ...homepage.data, hero_headline: null } }), /homepage\.hero_headline/);
  const settings = published.find(({ type }) => type === "site_settings") as unknown as SiteSettingsDocument;
  assert.throws(() => mapSiteSettings({ ...settings, data: { ...settings.data, email: "bad-email" } }), /Invalid public email/);
});
