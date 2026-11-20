import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { createContactDraft } from "@/lib/contact-draft";

test("supports keyboard navigation between the homepage and a case study", async ({ page }) => {
  await page.goto("/");
  const header = page.getByRole("banner");
  const navigation = header.getByRole("navigation", { name: "Main navigation" });
  const caseStudies = navigation.getByRole("link", { name: "Case Studies" });

  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);
  await expect(navigation.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "location");

  await page.keyboard.press("Tab");
  await expect(header.getByRole("link", { name: "Gisele Pecapedra" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(navigation.getByRole("link", { name: "Home" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(caseStudies).toBeFocused();
  await expect(caseStudies).toHaveCSS("outline-style", "solid");
  await expect(caseStudies).toHaveCSS("outline-width", "2px");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/\/#projects$/);
  await expect(caseStudies).toHaveAttribute("aria-current", "location");
  await expect(page.getByRole("navigation", { name: "Explore" }).getByRole("link", { name: "Case Studies" }))
    .toHaveAttribute("aria-current", "location");

  await page.getByRole("link", { name: "View case study eMed", exact: true }).press("Enter");
  await expect(page).toHaveURL(/\/projects\/emed$/);
  await expect(page.getByRole("heading", { level: 1, name: "eMed" })).toBeVisible();
  await expect(caseStudies).toHaveAttribute("aria-current", "page");

  const backLink = page.getByRole("navigation", { name: "Project navigation" })
    .getByRole("link", { name: "Back to projects", exact: true });
  await backLink.press("Enter");
  await expect(page).toHaveURL(/\/#projects$/);
});

test("synchronizes theme controls and remembers the selected theme", async ({ page }) => {
  await page.goto("/");
  const header = page.getByRole("banner").getByRole("group", { name: "Color theme" });
  const footer = page.getByRole("contentinfo").getByRole("group", { name: "Color theme" });
  const light = header.getByRole("button", { name: "Light theme" });
  const dark = footer.getByRole("button", { name: "Dark theme" });

  await expect(dark).toHaveAttribute("aria-pressed", "true");
  await light.press("Space");
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  await expect(light).toHaveAttribute("aria-pressed", "true");
  await expect(footer.getByRole("button", { name: "Light theme" })).toHaveAttribute("aria-pressed", "true");

  await page.reload();
  await expect(light).toHaveAttribute("aria-pressed", "true");
  await dark.press("Enter");
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await expect(header.getByRole("button", { name: "Dark theme" })).toHaveAttribute("aria-pressed", "true");
});

test("contact fields are keyboard reachable and use native validation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#contact");
  const form = page.getByRole("form", { name: "Contact form" });
  const name = form.getByRole("textbox", { name: "Name", exact: true });
  const email = form.getByRole("textbox", { name: "Email", exact: true });
  const message = form.getByRole("textbox", { name: "Message", exact: true });
  const send = form.getByRole("button", { name: "Send message" });

  await expect(form).toHaveAttribute("action", /^mailto:/);
  await expect(send).toHaveAccessibleDescription("Opens your email app.");
  await name.focus();
  await page.keyboard.press("Tab");
  await expect(email).toBeFocused();
  await expect(email).toHaveCSS("outline-style", "solid");
  await expect(email).toHaveCSS("outline-width", "2px");
  await page.keyboard.press("Tab");
  await expect(message).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(send).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(name).toBeFocused();

  await name.fill("Test Visitor");
  await email.fill("invalid-address");
  await message.fill("A test message.");
  await send.press("Enter");
  await expect(email).toBeFocused();
  await expect(form.locator("input:invalid")).toBeFocused();
  await expect(page).toHaveURL(/\/#contact$/);
});

test("encodes contact data as a mailto draft", () => {
  const fields = new FormData();
  fields.set("name", "  Ada & Jo  ");
  fields.set("email", "ada+jo@example.test");
  fields.set("message", "  First line\nSecond line? &  ");

  const draft = new URL(createContactDraft("portfolio@example.test", fields));

  expect(draft.protocol).toBe("mailto:");
  expect(draft.pathname).toBe("portfolio@example.test");
  expect(draft.searchParams.get("subject")).toBe("Portfolio inquiry from Ada & Jo");
  expect(draft.searchParams.get("body")).toBe("First line\r\nSecond line? &\r\n\r\nAda & Jo\r\nada+jo@example.test");
});

test("serves the 1200 × 630 homepage preview advertised by Open Graph and Twitter", async ({ page }) => {
  const path = "/og-cover.png";
  const imageURL = `https://giselepecapedra.com${path}`;
  const title = "Gisele Pecapedra — UX-driven Frontend Engineer";
  const alt = `${title}. Accessible interfaces and scalable design systems, with a portrait of Gisele Pecapedra.`;
  await page.goto("/");

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", title);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", imageURL);
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute("content", "1200");
  await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute("content", "630");
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", title);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute("content", imageURL);
  await expect(page.locator('meta[name="twitter:image:width"]')).toHaveAttribute("content", "1200");
  await expect(page.locator('meta[name="twitter:image:height"]')).toHaveAttribute("content", "630");
  await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute("content", alt);
  await expect(page.locator('meta[name="twitter:image:alt"]')).toHaveAttribute("content", alt);

  const response = await page.request.get(path);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toMatch(/^image\/png\b/);
  const dimensions = await page.evaluate(async (src) => {
    const image = new Image();
    image.src = src;
    await image.decode();
    return [image.naturalWidth, image.naturalHeight];
  }, path);
  expect(dimensions).toEqual([1200, 630]);
});

const accessibilityChecks = [
  { name: "homepage in light mode", path: "/", theme: "Light theme", width: 1440 },
  { name: "mobile homepage in dark mode", path: "/#contact", theme: "Dark theme", width: 390 },
  { name: "case study in dark mode", path: "/projects/coinpay", theme: "Dark theme", width: 1440 },
];

for (const { name, path, theme, width } of accessibilityChecks) {
  test(`passes automated WCAG A and AA checks on the ${name}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    const themeButton = page.getByRole("banner").getByRole("button", { name: theme });
    await themeButton.click();
    await expect(themeButton).toHaveAttribute("aria-pressed", "true");

    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(violations.map(({ id, nodes }) => ({
      id,
      nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })),
    }))).toEqual([]);
  });
}
