import AxeBuilder from "@axe-core/playwright";
import { type BrowserContext, expect, type Page, test } from "@playwright/test";

const consentKey = "portfolio-analytics-consent-v1";
const googleTag = "https://www.googletagmanager.com/gtag/js**";
const googleCollect = "https://www.google-analytics.com/g/collect**";

// Model the vendor's config, cookie and automatic page-view calls without sending test data.
const tagFixture = `
  (() => {
    const id = new URL(document.currentScript.src).searchParams.get("id");
    const layer = window.dataLayer;
    let consent = "denied";
    function sendPageView() {
      if (window["ga-disable-" + id] || consent !== "granted") return;
      document.cookie = "_ga=test; Path=/";
      document.cookie = "_ga_TEST=test; Path=/";
      navigator.sendBeacon("https://www.google-analytics.com/g/collect?path=" +
        encodeURIComponent(location.pathname));
    }
    function handle(command) {
      if (command[0] === "consent") consent = command[2].analytics_storage;
      if (command[0] === "config") {
        sendPageView();
        let path = location.pathname;
        const trackHistory = () => {
          if (path === location.pathname) return;
          path = location.pathname;
          sendPageView();
        };
        const pushState = history.pushState;
        history.pushState = function (...args) {
          pushState.apply(this, args);
          trackHistory();
        };
      }
    }
    layer.forEach(handle);
    const push = layer.push.bind(layer);
    layer.push = (command) => {
      handle(command);
      return push(command);
    };
  })();
`;

async function interceptAnalytics(context: BrowserContext) {
  const requests: string[] = [];
  const pageViews: string[] = [];

  await context.route(googleTag, (route) => {
    requests.push(route.request().url());
    return route.fulfill({ contentType: "application/javascript", body: tagFixture });
  });
  await context.route(googleCollect, (route) => {
    pageViews.push(new URL(route.request().url()).searchParams.get("path") ?? "");
    return route.fulfill({ status: 204 });
  });

  return { requests, pageViews };
}

function getConsentControls(page: Page) {
  const footer = page.getByRole("contentinfo");
  const manage = footer.getByRole("button", { name: "Manage Cookies" });
  const banner = page.getByRole("region", { name: "Cookie choices" });
  const dialog = page.getByRole("dialog", { name: "Cookie preferences" });
  const analytics = dialog.getByRole("checkbox", { name: "Analytics" });
  const save = dialog.getByRole("button", { name: "Save preferences" });
  return { footer, manage, banner, dialog, analytics, save };
}

test("keeps analytics off for an undecided or rejected visitor across routes and reloads", async ({ page, context, baseURL }) => {
  const { requests, pageViews } = await interceptAnalytics(context);
  await context.addCookies([
    { name: "_ga", value: "old", url: baseURL! },
    { name: "_ga_TEST", value: "old", url: baseURL! },
    { name: "other", value: "preserved", url: baseURL! },
  ]);
  await page.goto("/");
  const { footer, banner } = getConsentControls(page);
  await expect(banner).toBeVisible();
  await expect.poll(async () => (await context.cookies()).map(({ name }) => name)).toEqual(["other"]);

  await footer.getByRole("link", { name: "Privacy & Cookies" }).press("Enter");
  await expect(page).toHaveURL(/\/privacy$/);
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: "Reject Analytics" }).press("Enter");
  await expect(banner).toHaveCount(0);

  await page.reload();
  await expect(banner).toHaveCount(0);
  await expect.poll(() => page.evaluate((key) => localStorage.getItem(key), consentKey)).toBe("rejected");
  expect(requests).toEqual([]);
  expect(pageViews).toEqual([]);
});

test("loads GA once per document, syncs withdrawal across tabs and removes GA cookies", async ({ page, context }) => {
  const { requests, pageViews } = await interceptAnalytics(context);
  await page.goto("/");
  const { footer, banner, manage, analytics, save } = getConsentControls(page);
  await banner.getByRole("button", { name: "Accept Analytics" }).click();
  await expect.poll(() => pageViews).toEqual(["/"]);
  await expect(banner).toHaveCount(0);

  await footer.getByRole("link", { name: "Terms of Use" }).click();
  await expect.poll(() => pageViews).toEqual(["/", "/terms"]);
  expect(requests).toHaveLength(1);

  await page.reload();
  await expect.poll(() => pageViews).toEqual(["/", "/terms", "/terms"]);
  await expect(banner).toHaveCount(0);
  expect(requests).toHaveLength(2);
  expect((await context.cookies()).map(({ name }) => name)).toEqual(expect.arrayContaining(["_ga", "_ga_TEST"]));

  const secondTab = await context.newPage();
  await secondTab.goto("/accessibility");
  await expect.poll(() => pageViews).toEqual(["/", "/terms", "/terms", "/accessibility"]);
  await manage.click();
  await expect(analytics).toBeChecked();
  await expect(analytics).toHaveJSProperty("form", null);
  await analytics.uncheck();
  await save.press("Enter");
  await expect(manage).toBeFocused();
  await expect.poll(async () => (await context.cookies()).filter(({ name }) => name.startsWith("_ga"))).toEqual([]);

  const secondControls = getConsentControls(secondTab);
  await secondControls.manage.click();
  await expect(secondControls.analytics).not.toBeChecked();
  await secondControls.dialog.getByRole("button", { name: "Cancel" }).click();
  await secondControls.footer.getByRole("link", { name: "Privacy & Cookies" }).click();
  await expect(secondTab).toHaveURL(/\/privacy$/);

  await footer.getByRole("link", { name: "Accessibility" }).click();
  await expect(page).toHaveURL(/\/accessibility$/);
  await page.reload();
  await expect(banner).toHaveCount(0);
  expect(requests).toHaveLength(3);
  expect(pageViews).toEqual(["/", "/terms", "/terms", "/accessibility"]);

  await secondControls.manage.click();
  await secondControls.analytics.check();
  await secondControls.save.click();
  await expect.poll(() => pageViews).toEqual(["/", "/terms", "/terms", "/accessibility", "/accessibility"]);
  await secondControls.footer.getByRole("link", { name: "Terms of Use" }).click();
  await expect.poll(() => pageViews).toEqual(["/", "/terms", "/terms", "/accessibility", "/accessibility", "/terms"]);
  // Only the re-enabled tab whose document has never loaded GA needs a new script.
  expect(requests).toHaveLength(4);
});

test("withdrawal during the Google tag download prevents late configuration", async ({ page, context }) => {
  const { pageViews } = await interceptAnalytics(context);
  let releaseTag!: () => void;
  const pauseTag = new Promise<void>((resolve) => { releaseTag = resolve; });
  await page.route(googleTag, async (route) => {
    await pauseTag;
    await route.fulfill({ contentType: "application/javascript", body: tagFixture });
  });

  await page.goto("/privacy");
  const { banner, manage, analytics, save } = getConsentControls(page);
  const request = page.waitForRequest(googleTag);
  await banner.getByRole("button", { name: "Accept Analytics" }).click();
  await request;
  try {
    await manage.click();
    await analytics.uncheck();
    await save.click();
  } finally {
    releaseTag();
  }
  await page.waitForFunction(() =>
    window.dataLayer && Object.hasOwn(window.dataLayer, "push"),
  );

  const commands = await page.evaluate(() => window.dataLayer?.map((entry) => entry[0]));
  expect(commands).toEqual(["consent", "js"]);
  expect(pageViews).toEqual([]);
  expect(await context.cookies()).toEqual([]);
});

test("legal footer and dialog support keyboard use, reflow, themes and reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/privacy");
  const { footer, manage, banner, dialog, analytics, save } = getConsentControls(page);

  const reject = banner.getByRole("button", { name: "Reject Analytics" });
  await expect(reject).toHaveCSS("transition-property", "none");
  const footerLinks = [
    { label: "Privacy & Cookies", path: "/privacy", title: "Privacy & Cookies" },
    { label: "Terms of Use", path: "/terms", title: "Terms of Use" },
    { label: "Accessibility", path: "/accessibility", title: "Accessibility Statement" },
  ];
  for (const { label, path, title } of footerLinks) {
    await footer.getByRole("link", { name: label, exact: true }).press("Enter");
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    await expect(page.getByRole("heading", { level: 1, name: title, exact: true })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320);
  }

  await manage.focus();
  expect(await manage.evaluate((button) => {
    const panel = document.querySelector('section[aria-labelledby="cookie-banner-title"]');
    return panel && button.getBoundingClientRect().bottom <= panel.getBoundingClientRect().top;
  })).toBe(true);
  await page.keyboard.press("Enter");
  await expect(dialog).toBeVisible();
  await expect(analytics).toBeFocused();
  await expect(analytics).toHaveAccessibleDescription(/Google Analytics cookies/);
  await expect(analytics).not.toBeChecked();
  await expect(analytics).toHaveCSS("outline-style", "solid");
  await page.keyboard.press("Space");
  await expect(analytics).toBeChecked();
  await page.keyboard.press("Tab");
  const cancel = dialog.getByRole("button", { name: "Cancel" });
  await expect(cancel).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(save).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(manage).toBeFocused();
  await expect(banner).toBeVisible();
  await manage.press("Enter");
  await expect(analytics).not.toBeChecked();
  await cancel.press("Enter");
  await expect(manage).toBeFocused();

  for (const theme of ["Light theme", "Dark theme"]) {
    const themeButton = footer.getByRole("button", { name: theme });
    await themeButton.press("Enter");
    await expect(themeButton).toHaveAttribute("aria-pressed", "true");

    const scan = () => new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect((await scan()).violations).toEqual([]);
    await manage.press("Enter");
    expect((await scan()).violations).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(manage).toBeFocused();
  }
});
