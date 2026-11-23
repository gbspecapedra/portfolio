import { expect, test } from "@playwright/test";
import { cookie } from "@prismicio/client";

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
  for (const query of ["session=without-ref", "token=invalid", "token=invalid&documentId=id-draft-example",
    "session=invalid%2Fpath~id", "token=fixture-expired&documentId=id-alpha", "token=fixture-master&documentId=id-alpha"]) {
    const invalid = await request.get(`/api/preview?${query}`, { maxRedirects: 0 });
    expect(invalid.status()).toBe(400);
    expect(invalid.headers()["set-cookie"]).toBeUndefined();
  }
  const missing = await request.get("/api/preview?token=fixture-preview&documentId=missing", { maxRedirects: 0 });
  expect(missing.status()).toBe(404);
  expect(missing.headers()["set-cookie"]).toBeUndefined();

  for (const path of ["https://example.test", "//example.test", "/.//example.test"]) {
    const redirect = await request.get("/api/preview", {
      params: { token: "fixture-preview", documentId: "id-draft-example", path },
      maxRedirects: 0,
    });
    expect(redirect.status()).toBe(307);
    expect(redirect.headers().location).toBe("/projects/draft-example");
    expect(redirect.headers()["referrer-policy"]).toBe("no-referrer");
    expect(redirect.headers()["cache-control"]).toContain("no-store");
  }
  await request.get("/api/exit-preview");

  await page.context().addCookies([{ name: cookie.preview, value: "fixture-preview", url: "http://127.0.0.1:3100" }]);
  expect((await page.request.get(path)).status()).toBe(404);
  await page.route("https://static.cdn.prismic.io/**", (route) => route.abort());
  const response = await page.goto("/api/preview?token=fixture-preview&documentId=id-draft-example");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveURL(/\/projects\/draft-example$/);
  await expect(page.getByRole("heading", { level: 1, name: draftTitle })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  expect(await (await page.request.get("/sitemap.xml")).text()).not.toContain(path);
  expect((await request.get(path)).status()).toBe(404);
  await page.goto("/projects/alpha");
  await expect(page.getByRole("heading", { level: 1, name: alphaTitle })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await page.goto(path);
  await expect(page.getByRole("heading", { level: 1, name: draftTitle })).toBeVisible();

  const exit = await page.request.get("/api/exit-preview");
  expect(exit.ok()).toBe(true);
  expect(exit.headers()["cache-control"]).toBe("no-store");
  expect((await page.request.get(path)).status()).toBe(404);
});

test("opens an incomplete case study from a session-only Prismic editor link", async ({ page, request }) => {
  const session = "fixture-session~fixture-website";
  const url = `/api/preview?documentId=id-draft-example&session=${session}`;
  const path = "/projects/draft-example";
  const toolbarHandoff = Promise.withResolvers<void>();
  await page.route("https://static.cdn.prismic.io/prismic.js?**", async (route) => {
    if (new URL(route.request().url()).searchParams.get("v") !== "5") return route.abort();
    if (!new URL(page.url()).searchParams.has("session")) return route.abort();
    await toolbarHandoff.promise;
    return route.fulfill({
      contentType: "application/javascript",
      body: `
        if (document.cookie.split("; ").includes("${cookie.previewSession}=${session}")) {
          document.cookie = "${cookie.preview}=fixture-preview; Path=/; SameSite=Lax";
          window.dispatchEvent(new CustomEvent("prismicPreviewStart", { cancelable: true }));
        }
      `,
    });
  });
  await page.context().addCookies([{ name: cookie.preview, value: "fixture-master", url: "http://127.0.0.1:3100" }]);
  try {
    const response = await page.goto(url, { waitUntil: "commit" });
    expect(response?.status()).toBe(200);
    expect(response?.headers()["cache-control"]).toContain("no-store");
    expect(response?.headers()["referrer-policy"]).toBe("no-referrer");
    expect((await page.context().cookies()).map(({ name }) => name)).not.toContain(cookie.preview);
    expect((await page.request.get(path)).status()).toBe(404);
  } finally {
    toolbarHandoff.resolve();
  }
  await expect(page).toHaveURL(/\/projects\/draft-example$/);
  await expect(page.getByRole("heading", { level: 1, name: draftTitle })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator('meta[name="description"]')).toHaveCount(0);
  expect((await request.get(path)).status()).toBe(404);
  await page.goto("/");
  await expect(page.getByRole("link", { name: `View case study ${draftTitle}` })).toBeVisible();
  expect((await page.request.get("/api/exit-preview")).status()).toBe(200);
  expect((await page.request.get(path)).status()).toBe(404);
});

test("authenticates Prismic revalidation requests", async ({ request }) => {
  const send = (data: Record<string, unknown>) => request.post("/api/revalidate", { data });
  const base = { domain: "7l7juw0m", apiUrl: "https://7l7juw0m.prismic.io/api" };
  const valid = { ...base, secret: webhookSecret };
  const update = { ...valid, type: "api-update", masterRef: "fixture-master", documents: ["id-alpha"] };
  expect((await request.get("/api/revalidate")).status()).toBe(405);
  expect((await request.post("/api/revalidate", { data: "{wrong" })).status()).toBe(400);
  expect((await send({ ...base, type: "api-update" })).status()).toBe(401);
  expect((await send({ ...update, secret: "wrong" })).status()).toBe(401);
  expect((await send({ ...update, domain: "example" })).status()).toBe(401);
  expect((await send({ ...valid, type: "unknown" })).status()).toBe(400);
  expect((await send({ ...update, masterRef: "" })).status()).toBe(400);
  expect((await send({ ...update, documents: [null] })).status()).toBe(400);
  expect(await (await send({ ...valid, type: "test-trigger" })).json()).toEqual({ revalidated: false });
  expect(await (await send({ ...valid, type: "api-update", documents: [], releases: { update: [] } })).json())
    .toEqual({ revalidated: false });
});

test("distinguishes a failed Prismic request from an unknown project", async ({ page }) => {
  const preview = await page.request.get("/api/preview?token=fixture-preview&documentId=id-draft-example");
  expect(preview.ok()).toBe(true);
  const response = await page.request.get("/projects/api-error");
  expect(response.status()).toBe(500);
  expect(await response.text()).not.toContain("fixture-access-token");
});
