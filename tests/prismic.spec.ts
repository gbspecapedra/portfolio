import { expect, test } from "@playwright/test";

import { alphaTitle, betaTitle, draftTitle, webhookSecret } from "./fixtures/prismic-content.mjs";

test("lists the featured project first and renders experience newest first", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 3 }).filter({ hasText: /Sample Project/ }))
    .toHaveText([alphaTitle, betaTitle]);
  const timeline = page.getByRole("region", { name: "Career timeline" });
  await expect(timeline.getByRole("button")).toHaveText([
    "Example Frontend Engineer at Example Company",
    "Former Role at Second Example Company",
  ]);
});

test("isolates draft project access and exits preview", async ({ request, page }) => {
  const path = "/projects/draft-example";
  expect((await request.get(path)).status()).toBe(404);
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(path);
  expect((await request.get("/api/preview")).status()).toBe(400);
  expect((await request.get("/api/preview?token=invalid&documentId=id-draft-example")).status()).toBe(400);

  await page.route("https://static.cdn.prismic.io/**", (route) => route.abort());
  const response = await page.goto("/api/preview?token=fixture-preview&documentId=id-draft-example");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveURL(/\/projects\/draft-example$/);
  await expect(page.getByRole("heading", { level: 1, name: draftTitle })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  expect(await (await page.request.get("/sitemap.xml")).text()).not.toContain(path);
  expect((await request.get(path)).status()).toBe(404);

  const exit = await page.request.get("/api/exit-preview");
  expect(exit.ok()).toBe(true);
  expect(exit.headers()["cache-control"]).toBe("no-store");
  expect((await page.request.get(path)).status()).toBe(404);
});

test("authenticates Prismic revalidation requests", async ({ request }) => {
  const send = (data: Record<string, unknown>) => request.post("/api/revalidate", { data });
  const base = { domain: "7l7juw0m", secret: webhookSecret };
  expect((await send({ ...base, secret: "wrong", type: "api-update" })).status()).toBe(401);
  expect((await send({ ...base, domain: "example", type: "api-update" })).status()).toBe(401);
  expect((await send({ ...base, type: "unknown" })).status()).toBe(400);
  expect(await (await send({ ...base, type: "test-trigger" })).json()).toEqual({ revalidated: false });
  expect(await (await send({ ...base, type: "api-update" })).json()).toEqual({ revalidated: true });
});

test("distinguishes a failed Prismic request from an unknown project", async ({ page }) => {
  const preview = await page.request.get("/api/preview?token=fixture-preview&documentId=id-draft-example");
  expect(preview.ok()).toBe(true);
  const response = await page.request.get("/projects/api-error");
  expect(response.status()).toBe(500);
  expect(await response.text()).not.toContain("fixture-access-token");
});
