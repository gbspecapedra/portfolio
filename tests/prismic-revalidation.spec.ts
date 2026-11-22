import { writeFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";

import { draftTitle, webhookSecret } from "./fixtures/prismic-content.mjs";

test("a signed publish or unpublish updates the cached sitemap and project route", async ({ request }) => {
  const state = process.env.PORTFOLIO_PRISMIC_FIXTURE_STATE;
  if (!state) throw new Error("Run this test through npm run test:e2e.");

  const path = "/projects/draft-example";
  const sitemap = async () => (await request.get("/sitemap.xml")).text();
  const send = (ref: string, secret = webhookSecret) => request.post("/api/revalidate", {
    data: {
      type: "api-update", domain: "7l7juw0m", apiUrl: "https://7l7juw0m.prismic.io/api", secret,
      masterRef: ref, releases: {}, masks: {}, tags: {}, documents: ["id-draft-example"],
    },
  });

  expect(await sitemap()).not.toContain(path);
  expect((await request.get(path)).status()).toBe(404);
  await writeFile(state, "fixture-publish");
  expect((await send("fixture-publish", "wrong")).status()).toBe(401);
  expect(await sitemap()).not.toContain(path);

  expect(await (await send("fixture-publish")).json()).toEqual({ revalidated: true });
  await expect.poll(sitemap).toContain(path);
  const published = await request.get(path);
  expect(published.ok()).toBe(true);
  expect(await published.text()).toContain(draftTitle);

  await writeFile(state, "fixture-unpublish");
  expect(await (await send("fixture-unpublish")).json()).toEqual({ revalidated: true });
  await expect.poll(sitemap).not.toContain(path);
  expect((await request.get(path)).status()).toBe(404);
});
