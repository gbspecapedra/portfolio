import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { createContactDraft } from "@/lib/contact-draft";

import { alphaTitle, coverAlt, homeTitle, owner } from "./fixtures/prismic-content.mjs";

test("supports keyboard navigation between the homepage and a case study", async ({ page }) => {
  await page.goto("/");
  const header = page.getByRole("banner");
  const navigation = header.getByRole("navigation", { name: "Main navigation" });
  const caseStudies = navigation.getByRole("link", { name: "Case Studies" });

  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);
  await expect(navigation.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "location");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(header.getByRole("link", { name: owner })).toBeFocused();
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

  await page.getByRole("link", { name: `View case study ${alphaTitle}`, exact: true }).press("Enter");
  await expect(page).toHaveURL(/\/projects\/alpha$/);
  await expect(page.getByRole("heading", { level: 1, name: alphaTitle })).toBeVisible();
  await expect(caseStudies).toHaveAttribute("aria-current", "page");

  const backLink = page.getByRole("navigation", { name: "Project navigation" })
    .getByRole("link", { name: "Back to projects", exact: true });
  await backLink.press("Enter");
  await expect(page).toHaveURL(/\/#projects$/);
});

test("reduced motion removes the hover lift and accordion animation while retaining their states", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Reject Analytics" }).click();

  const heroLink = page.getByRole("link", { name: "Explore case studies", exact: true });
  await heroLink.hover();
  await expect(heroLink).toHaveCSS("transition-property", "none");
  await expect(heroLink).toHaveCSS("translate", "none");

  const timeline = page.getByRole("region", { name: "Career timeline" });
  const trigger = timeline.getByRole("button", { name: "Example Frontend Engineer at Example Company", exact: true });
  const panel = timeline.locator('[data-slot="accordion-content"]').first();
  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(trigger.locator("svg")).toHaveCSS("rotate", "180deg");
  await expect(panel).toBeVisible();
  await expect(panel).toHaveCSS("animation-name", "none");
  await trigger.press("Space");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(panel).toBeHidden();
});

test("reverse tabbing reveals a contact field behind the sticky header", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Reject Analytics" }).click();

  const form = page.getByRole("form", { name: "Contact form" });
  const message = form.getByRole("textbox", { name: "Message", exact: true });
  await form.getByRole("button", { name: "Send message" }).focus();
  await message.evaluate((field) => window.scrollBy(0, field.getBoundingClientRect().top - 1));
  await page.keyboard.press("Shift+Tab");
  await expect(message).toBeFocused();
  await expect.poll(() => message.evaluate((field) => {
    const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
    return field.getBoundingClientRect().top - headerBottom;
  })).toBeGreaterThanOrEqual(0);
});

test("button and accordion focus indicators stay visible in forced colors", async ({ page }) => {
  await page.emulateMedia({ forcedColors: "active" });
  await page.goto("/");
  await page.keyboard.press("Tab");

  const link = page.getByRole("link", { name: "Explore case studies", exact: true });
  const trigger = page.getByRole("button", { name: "Example Frontend Engineer at Example Company", exact: true });
  for (const control of [link, trigger]) {
    await control.focus();
    await expect(control).toHaveCSS("outline-style", "solid");
    await expect(control).toHaveCSS("outline-width", "2px");
  }
});

test("the light hero label and contact field boundary meet their contrast thresholds", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Reject Analytics" }).click();
  const lightTheme = page.getByRole("banner").getByRole("button", { name: "Light theme" });
  await lightTheme.click();
  await expect(lightTheme).toHaveAttribute("aria-pressed", "true");

  const hero = page.getByRole("link", { name: "Explore case studies", exact: true });
  await hero.hover();
  const image = await hero.screenshot({
    style: 'a[data-slot="button"][href="#projects"] { color: transparent !important }',
  });

  const { heroRatio, fieldRatio } = await hero.evaluate(async (button, image) => {
    const context = document.createElement("canvas").getContext("2d")!;
    const luminance = ([red, green, blue]: Uint8ClampedArray) => {
      const linearize = (channel: number) => {
        const value = channel / 255;
        return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * linearize(red) + 0.7152 * linearize(green) + 0.0722 * linearize(blue);
    };
    const contrast = (a: number, b: number) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    const colorLuminance = (color: string) => {
      context.fillStyle = color;
      context.fillRect(0, 0, 1, 1);
      return luminance(context.getImageData(0, 0, 1, 1).data);
    };

    const field = getComputedStyle(document.getElementById("contact-email")!);
    const fieldRatio = contrast(colorLuminance(field.borderTopColor), colorLuminance(field.backgroundColor));
    const label = colorLuminance(getComputedStyle(button).color);
    const gradient = await createImageBitmap(await (await fetch(`data:image/png;base64,${image}`)).blob());
    context.canvas.width = gradient.width;
    context.canvas.height = gradient.height;
    context.drawImage(gradient, 0, 0);
    const inset = 8;
    const pixels = context.getImageData(inset, inset, gradient.width - 2 * inset, gradient.height - 2 * inset).data;
    let heroRatio = Infinity;
    for (let offset = 0; offset < pixels.length; offset += 4) {
      heroRatio = Math.min(heroRatio, contrast(label, luminance(pixels.subarray(offset, offset + 3))));
    }
    return { heroRatio, fieldRatio };
  }, image.toString("base64"));

  expect(heroRatio).toBeGreaterThanOrEqual(4.5);
  expect(fieldRatio).toBeGreaterThanOrEqual(3);
});

test("synchronizes theme controls and remembers the selected theme", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
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
  await page.emulateMedia({ colorScheme: "light" });
  await dark.press("Enter");
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await expect(header.getByRole("button", { name: "Dark theme" })).toHaveAttribute("aria-pressed", "true");
  await page.reload();
  await expect(dark).toHaveAttribute("aria-pressed", "true");
});

test("contact fields are keyboard reachable and use native validation", async ({ page }) => {
  await page.route("https://formspree.io/f/**", (route) => route.abort());
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#contact");
  const form = page.getByRole("form", { name: "Contact form" });
  const name = form.getByRole("textbox", { name: "Name", exact: true });
  const email = form.getByRole("textbox", { name: "Email", exact: true });
  const message = form.getByRole("textbox", { name: "Message", exact: true });
  const send = form.getByRole("button", { name: "Send message" });

  const action = await form.getAttribute("action");
  expect(action).toMatch(/^(?:mailto:|https:\/\/formspree\.io\/f\/[a-z0-9]+$)/i);
  if (action?.startsWith("mailto:")) {
    await expect(send).toHaveAccessibleDescription("Opens your email app.");
  }
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

test("shows Formspree submission errors and lets visitors retry", async ({ page }) => {
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Reject Analytics" }).click();
  const form = page.getByRole("form", { name: "Contact form" });
  const action = (await form.getAttribute("action")) ?? "";
  test.skip(action.startsWith("mailto:"), "Build with a Formspree form ID to test submissions.");
  expect(action).toMatch(/^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i);

  let attempts = 0;
  let releaseFirstResponse: (() => void) | undefined;
  const firstResponse = new Promise<void>((resolve) => {
    releaseFirstResponse = resolve;
  });
  await page.route(action, async (route) => {
    attempts++;
    if (attempts === 1) {
      await firstResponse;
      await route.fulfill({
        status: 422,
        json: { errors: [{ field: "email", code: "TYPE_EMAIL", message: "is not accepted" }] },
      });
      return;
    }

    await route.fulfill({ json: { next: "/thanks" } });
  });

  const name = form.getByRole("textbox", { name: "Name", exact: true });
  const email = form.getByRole("textbox", { name: "Email", exact: true });
  const message = form.getByRole("textbox", { name: "Message", exact: true });
  const send = form.getByRole("button", { name: "Send message" });
  await name.fill("Ada & Jo");
  await email.fill("ada+jo@example.test");
  await message.fill("A test message from the portfolio.");

  try {
    await send.click();
    await expect(form.getByRole("button", { name: "Sending message…" })).toBeDisabled();
  } finally {
    releaseFirstResponse?.();
  }
  await expect(form.getByRole("alert")).toContainText("Email is not accepted");
  await expect(email).toHaveAttribute("aria-invalid", "true");
  await expect(email).toHaveAccessibleDescription("Email is not accepted");
  await expect(name).not.toHaveAttribute("aria-invalid", "true");
  await expect(name).toHaveValue("Ada & Jo");
  await expect(message).toHaveValue("A test message from the portfolio.");
  await email.fill("ada@example.test");

  const requestPromise = page.waitForRequest((request) => request.url() === action && request.method() === "POST");
  await send.click();
  const request = await requestPromise;
  const fields = await new Response(request.postData(), { headers: request.headers() }).formData();
  expect(fields.get("name")).toBe("Ada & Jo");
  expect(fields.get("email")).toBe("ada@example.test");
  expect(fields.get("message")).toBe("A test message from the portfolio.");
  const confirmation = page.getByRole("status").filter({ hasText: "Message sent" });
  await expect(confirmation).toBeVisible();
  await expect(confirmation).toBeFocused();
  await expect(form).toBeHidden();
  await expect(page).toHaveURL(/\/#contact$/);
  expect(attempts).toBe(2);
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
  const title = homeTitle;
  const alt = coverAlt;
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
  { name: "case study in dark mode", path: "/projects/alpha", theme: "Dark theme", width: 1440 },
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
