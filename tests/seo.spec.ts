import { expect, test } from "@playwright/test";

import { projects } from "@/data/projects";

const origin = "https://www.giselepecapedra.com";
const caseStudies = projects.map((project) => ({
  ...project,
  path: `/projects/${project.slug}`,
}));

test.use({ javaScriptEnabled: false });

test("lists only canonical portfolio pages in the sitemap advertised by robots.txt", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(robots.headers()["content-type"]).toMatch(/^text\/plain\b/);
  const directives = await robots.text();
  expect(directives).toContain("User-Agent: *");
  expect(directives).toContain("Allow: /");
  expect(directives).not.toContain("Disallow:");
  expect(directives).toContain(`Sitemap: ${origin}/sitemap.xml`);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(sitemap.headers()["content-type"]).toMatch(/xml\b/);
  const entries = Array.from((await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g), ([, url]) => url);
  expect(entries.toSorted()).toEqual([
    `${origin}/`,
    ...caseStudies.map(({ path }) => `${origin}${path}`),
  ].toSorted());
});

test("renders the portfolio profile and links to its case studies without JavaScript", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator('head link[rel="canonical"]')).toHaveJSProperty("href", `${origin}/`);
  const socialUrl = await page.locator('head meta[property="og:url"]').getAttribute("content");
  expect(new URL(socialUrl ?? "").href).toBe(`${origin}/`);
  await expect(page.getByRole("main").getByRole("heading", { level: 1 })).toHaveCount(1);

  const data = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(data["@graph"]).toEqual(expect.arrayContaining([
    expect.objectContaining({ "@type": "WebSite", "@id": `${origin}/#website`, url: `${origin}/` }),
    expect.objectContaining({ "@type": "ProfilePage", mainEntity: { "@id": `${origin}/#person` } }),
    expect.objectContaining({ "@type": "Person", "@id": `${origin}/#person`, name: "Gisele Pecapedra" }),
  ]));

  for (const { card, path, title } of caseStudies) {
    if (card) {
      await expect(page.getByRole("link", { name: `View case study ${title}`, exact: true })).toHaveAttribute("href", path);
    }
  }
});

for (const { path, title, subtitle, seoDescription, image } of caseStudies) {
  test(`renders unique metadata and structured data for ${title}`, async ({ page, request }) => {
    const response = await page.goto(path);
    const canonical = `${origin}${path}`;
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(`${title} Case Study — Gisele Pecapedra`);
    await expect(page.locator('head meta[name="description"]')).toHaveAttribute("content", seoDescription ?? subtitle);
    await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('head meta[property="og:url"]')).toHaveAttribute("content", canonical);
    await expect(page.locator('head meta[property="og:title"]')).toHaveAttribute("content", `${title} Case Study`);
    await expect(page.locator('head meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    await expect(page.locator('head meta[name="robots"][content*="noindex"]')).toHaveCount(0);
    await expect(page.getByRole("article", { name: title, exact: true })).toBeVisible();

    const imagePath = image?.src ?? "/og-cover.png";
    await expect(page.locator('head meta[property="og:image"]')).toHaveAttribute("content", `${origin}${imagePath}`);
    await expect(page.locator('head meta[name="twitter:image"]')).toHaveAttribute("content", `${origin}${imagePath}`);
    const socialImage = await request.get(imagePath);
    expect(socialImage.ok()).toBe(true);
    expect(socialImage.headers()["content-type"]).toMatch(/^image\//);

    const data = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
    expect(data["@graph"]).toEqual(expect.arrayContaining([
      expect.objectContaining({ "@type": "WebPage", "@id": canonical, name: title }),
      expect.objectContaining({
        "@type": "BreadcrumbList",
        itemListElement: [
          expect.objectContaining({ position: 1, item: `${origin}/#projects` }),
          expect.objectContaining({ position: 2, item: canonical }),
        ],
      }),
    ]));
  });
}

test("permanently redirects legacy case studies and returns non-indexable 404s for unknown routes", async ({ page, request }) => {
  for (const { path } of caseStudies) {
    for (const alias of [`/developer${path}`, `${path}/`]) {
      const redirect = await request.get(alias, { maxRedirects: 0 });
      expect(redirect.status()).toBe(308);
      const location = new URL(redirect.headers().location, redirect.url());
      expect(location.pathname).toBe(path);
      expect(location.host).toBe(new URL(redirect.url()).host);
    }
  }

  for (const path of ["/about", "/projects", "/projects/unknown-seo-route"]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    await expect(page.locator('meta[name="robots"][content*="noindex"]').first()).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"]')).toHaveCount(0);
  }
});
