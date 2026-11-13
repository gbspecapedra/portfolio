import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import axe from "axe-core";

const baseURL = process.env.A11Y_BASE_URL || "http://localhost:3000";
const output = path.resolve("artifacts/a11y");
const results = { baseURL, scans: [], interactions: [] };
let browser;

function financialRoutes(directory = "app/financial") {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory()
      ? financialRoutes(file)
      : entry.name === "page.tsx"
        ? [`/${path.relative("app", directory).split(path.sep).join("/")}`]
        : [];
  }).sort();
}

async function visit(page, route) {
  const response = await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
  assert.equal(response.status(), 200, route);
  await page.evaluate(() => document.fonts.ready);
}

async function scan(page) {
  await page.evaluate(axe.source);
  return page.evaluate(async () => {
    const { violations, incomplete } = await window.axe.run(
      { exclude: ["nextjs-portal"] },
      { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] } },
    );
    return { violations, incomplete };
  });
}

// WCAG 1.4.3 exempts the TuGo logotype. Keep this narrowly scoped to its known text.
function confirmedViolations(route, violations) {
  return violations.flatMap((violation) => {
    const nodes = violation.nodes.filter((node) => !(
      route === "/financial/services/travel-insurance/get-a-quote" &&
      violation.id === "color-contrast" &&
      /^<span\b[^>]*>tu<\/span>$/.test(node.html)
    ));
    return nodes.length ? [{ ...violation, nodes }] : [];
  });
}

async function screenshot(page, name) {
  await page.addStyleTag({ content: "nextjs-portal { visibility: hidden !important; }" });
  await page.screenshot({ path: path.join(output, `${name}.png`) });
}

function contrast(first, second) {
  function luminance(color) {
    const channels = color.match(/[\d.]+/g).slice(0, 3).map(Number).map((value) => {
      const channel = value / 255;
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return channels.reduce((total, value, index) => total + value * [0.2126, 0.7152, 0.0722][index], 0);
  }
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

before(async () => {
  mkdirSync(output, { recursive: true });
  const macChrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ||
    (process.platform === "darwin" && existsSync(macChrome) ? macChrome : undefined);
  browser = await chromium.launch({ executablePath, headless: true });
});

after(async () => {
  writeFileSync(path.join(output, "results.json"), JSON.stringify(results, null, 2));
  await browser?.close();
});

test("all financial routes: WCAG A/AA scanner checks, reflow, and text spacing", { timeout: 240_000 }, async (t) => {
  const page = await browser.newPage();
  try {
    for (const route of financialRoutes()) {
      await t.test(route, async () => {
        await page.setViewportSize({ width: 1440, height: 900 });
        await visit(page, route);
        // Load lazy images before checking image-backed content.
        for (let y = 0; y < await page.evaluate(() => document.documentElement.scrollHeight); y += 750) {
          await page.evaluate((offset) => window.scrollTo(0, offset), y);
          await page.waitForTimeout(70);
        }
        await page.evaluate(async () => {
          await Promise.all([...document.images].filter((image) => image.loading === "lazy").map((image) => image.decode().catch(() => {})));
          window.scrollTo(0, 0);
        });

        const record = { route, states: [] };
        results.scans.push(record);
        for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
          await page.setViewportSize(viewport);
          const audit = await scan(page);
          record.states.push({ viewport, ...audit });
          const failures = confirmedViolations(route, audit.violations);
          assert.deepEqual(failures.map(({ id, nodes }) => ({ id, nodes: nodes.map((node) => node.failureSummary) })), [], `${route} at ${viewport.width}px`);
        }
        for (const width of [320, 720]) {
          await page.setViewportSize({ width, height: width === 320 ? 800 : 450 });
          const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
          record.states.push({ viewport: { width }, scrollWidth });
          assert.ok(scrollWidth <= width + 1, `${route}: ${scrollWidth}px content at ${width}px`);
        }
        await page.setViewportSize({ width: 1440, height: 900 });
        const override = await page.addStyleTag({ content: "* {line-height:1.5 !important;letter-spacing:0.12em !important;word-spacing:0.16em !important} p {margin-bottom:2em !important}" });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: text-spacing overflow`);
        await override.evaluate((element) => element.remove());
      });
    }
  } finally { await page.close(); }
});

test("mobile navigation keeps initial focus visible and scrolls every link into view", async () => {
  const page = await browser.newPage();
  try {
    for (const viewport of [{ width: 390, height: 844 }, { width: 320, height: 450 }]) {
      await page.setViewportSize(viewport);
      await visit(page, "/financial");
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      const dialog = page.getByRole("dialog", { name: "Gisele Pecapedra", exact: true });
      await dialog.waitFor();
      await page.waitForTimeout(550); // Wait for the drawer's CSS entrance animation.
      assert.equal(await page.evaluate(() => document.activeElement.textContent.trim()), "Home");
      for (let index = 0; index < await dialog.locator("a,button").count(); index++) {
        const visible = await page.evaluate(() => {
          const element = document.activeElement;
          const box = element.getBoundingClientRect();
          const nav = element.closest("nav");
          const clip = nav ? nav.getBoundingClientRect() : { top: 0, bottom: innerHeight };
          return box.top >= Math.max(0, clip.top) - 1 && box.bottom <= Math.min(innerHeight, clip.bottom) + 1;
        });
        assert.ok(visible, `Offscreen menu focus at ${viewport.width}px, tab ${index}`);
        await page.keyboard.press("Tab");
      }
      await screenshot(page, `mobile-menu-${viewport.width}`);
      await page.keyboard.press("Escape");
      await dialog.waitFor({ state: "hidden" });
      assert.equal(await page.evaluate(() => document.activeElement.getAttribute("aria-label")), "Open navigation menu");
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await dialog.getByRole("button", { name: "Book a Free Consultation" }).click();
      await dialog.waitFor({ state: "hidden" });
      await page.locator("iframe.cal-embed").first().waitFor({ state: "attached" });
      results.interactions.push({ name: "mobile navigation", viewport, passed: true });
    }
  } finally { await page.close(); }
});

test("backward form navigation stays below the sticky header; blank field styles meet contrast", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await visit(page, "/financial/contact");
    await page.locator("[name=message]").focus();
    await page.evaluate(() => window.scrollTo(0, 1143));
    for (let index = 0; index < 6; index++) {
      await page.keyboard.press("Shift+Tab");
      const bounds = await page.evaluate(() => ({
        field: document.activeElement.name,
        top: document.activeElement.getBoundingClientRect().top,
        labelTop: document.activeElement.closest("label").getBoundingClientRect().top,
        headerBottom: document.querySelector("header").getBoundingClientRect().bottom,
      }));
      assert.ok(bounds.top >= bounds.headerBottom, `${bounds.field} is covered by the header`);
      assert.ok(bounds.labelTop >= bounds.headerBottom, `${bounds.field} label is covered by the header`);
    }
    const fields = await page.locator("main input[placeholder], main textarea").evaluateAll((elements) => elements.map((element) => ({
      name: element.name,
      placeholder: getComputedStyle(element, "::placeholder").color,
      border: getComputedStyle(element).borderColor,
      background: getComputedStyle(element).backgroundColor,
    })));
    for (const field of fields) {
      assert.ok(contrast(field.placeholder, field.background) >= 4.5, `${field.name} placeholder`);
      assert.ok(contrast(field.border, field.background) >= 3, `${field.name} boundary`);
    }
    await screenshot(page, "contact-focus");
    results.interactions.push({ name: "form focus and contrast", fields, passed: true });
  } finally { await page.close(); }
});

test("guide status, language changes, rating semantics, and skip navigation", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await visit(page, "/financial/resources/guides");
    await page.getByRole("searchbox", { name: "Search guides" }).fill("zzznomatch");
    const status = page.getByRole("status").filter({ hasText: "No guides found" });
    await status.waitFor({ state: "attached" });
    assert.equal(await page.evaluate(() => document.activeElement.id), "guides-search");
    assert.equal(await status.getAttribute("aria-live"), "polite");
    await page.getByRole("button", { name: "View all guides", exact: true }).click();
    await page.getByRole("button", { name: "RESP", exact: true }).click();
    assert.equal(await page.getByRole("button", { name: "RESP", exact: true }).getAttribute("aria-pressed"), "true");

    await visit(page, "/financial/who-i-help/portuguese-speaking-clients");
    assert.equal(await page.locator("h1").evaluate((element) => element.closest("[lang]").lang), "pt-BR");
    assert.equal(await page.locator("header").evaluate((element) => element.closest("[lang]").lang), "en");

    await visit(page, "/financial");
    assert.equal(await page.getByText("Atendimento em português disponível.", { exact: true }).getAttribute("lang"), "pt-BR");
    assert.equal(await page.getByRole("img", { name: /out of 5 stars/ }).count(), 3);
    const home = page.getByRole("link", { name: "Home", exact: true }).first();
    await home.focus();
    const ring = await home.evaluate((element) => {
      const style = getComputedStyle(element);
      // Resolve the computed CSS color through canvas so hex and rgb both work.
      const context = document.createElement("canvas").getContext("2d");
      context.fillStyle = style.getPropertyValue("--tw-ring-color");
      context.fillRect(0, 0, 1, 1);
      return `rgb(${[...context.getImageData(0, 0, 1, 1).data].slice(0, 3).join(",")})`;
    });
    assert.ok(contrast(ring, "rgb(255,255,255)") >= 3, "Navigation focus contrast");
    await page.getByRole("link", { name: "Skip to main content" }).focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.evaluate(() => document.activeElement.tagName), "MAIN");
    results.interactions.push({ name: "search, language, ratings, skip link", passed: true });
  } finally { await page.close(); }
});

test("contact validation and mocked success never send a real consultation request", async () => {
  const page = await browser.newPage();
  try {
    await visit(page, "/financial/contact");
    let intercepted = 0;
    await page.route("https://formspree.io/**", async (route) => {
      intercepted++;
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, next: "/thanks" }) });
    });
    const submit = page.getByRole("button", { name: "Request a Free Consultation", exact: true });
    await submit.click();
    assert.equal(await page.evaluate(() => document.activeElement.name), "name");
    await page.locator("[name=name]").fill("Accessibility Test");
    await page.locator("[name=email]").fill("invalid");
    await submit.click();
    assert.equal(await page.evaluate(() => document.activeElement.name), "email");
    await page.locator("[name=email]").fill("accessibility@example.com");
    await page.locator("[name=phone]").fill("6045550123");
    await page.locator("[name=city]").fill("Vancouver");
    await submit.click();
    await page.getByRole("status").filter({ hasText: "Thank you for reaching out!" }).waitFor();
    assert.equal(intercepted, 1);
    results.interactions.push({ name: "native validation and mocked success", passed: true });
  } finally { await page.close(); }
});
