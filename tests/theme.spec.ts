import { expect, test, type Page } from "@playwright/test";

type Theme = "light" | "dark";

const labels = { light: "Light theme", dark: "Dark theme" };
const backgrounds = { light: "rgb(250, 247, 243)", dark: "rgb(33, 30, 32)" };

async function expectTheme(page: Page, theme: Theme) {
  const otherTheme = theme === "dark" ? "light" : "dark";
  await expect(page.locator("html")).toHaveClass(theme);
  for (const landmark of ["banner", "contentinfo"] as const) {
    const toggle = page.getByRole(landmark).getByRole("group", { name: "Color theme" });
    await expect(toggle.getByRole("button")).toHaveCount(2);
    await expect(toggle.getByRole("button", { name: labels[theme] })).toHaveAttribute("aria-pressed", "true");
    await expect(toggle.getByRole("button", { name: labels[otherTheme] })).toHaveAttribute("aria-pressed", "false");
  }
}

for (const theme of ["light", "dark"] as const) {
  test(`initializes OS ${theme} appearance before hydration`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (/hydrat/i.test(message.text()) && ["error", "warning"].includes(message.type())) {
        errors.push(message.text());
      }
    });

    await page.emulateMedia({ colorScheme: theme });
    const { promise: hydrationReady, resolve: allowHydration } = Promise.withResolvers<void>();
    await page.route(/\/_next\/static\/.*\.js(\?|$)/, async (route) => {
      await hydrationReady;
      await route.continue();
    });

    const selected = page.getByRole("banner").getByRole("button", { name: labels[theme] });
    try {
      await page.goto("/", { waitUntil: "commit" });
      await expect(page.locator("html")).toHaveClass(theme);
      await expect(page.locator("body")).toHaveCSS("background-color", backgrounds[theme]);
      await expect(selected).toHaveCSS("background-color", backgrounds[theme]);
      await expect(selected).not.toHaveAttribute("aria-pressed");
    } finally {
      allowHydration();
    }

    await expectTheme(page, theme);
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBeNull();
    expect(errors).toEqual([]);
  });
}

test("follows system changes through navigation until a manual choice is saved", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.getByRole("button", { name: "Reject Analytics" }).click();
  await expectTheme(page, "light");

  await page.emulateMedia({ colorScheme: "dark" });
  await expectTheme(page, "dark");
  await page.getByRole("link", { name: "View case study eMed", exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/emed$/);
  await expectTheme(page, "dark");
  expect(await page.evaluate(() => localStorage.getItem("theme"))).toBeNull();

  // Choosing the already displayed theme still makes it a manual preference.
  await page.getByRole("banner").getByRole("button", { name: "Dark theme" }).press("Enter");
  expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("dark");
  await page.emulateMedia({ colorScheme: "light" });
  await page.reload();
  await expectTheme(page, "dark");
  await page.emulateMedia({ colorScheme: "dark" });
  await page.emulateMedia({ colorScheme: "light" });
  await expectTheme(page, "dark");
});

test("uses system appearance when the saved preference is invalid", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("theme", "hidden"));
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expectTheme(page, "dark");

  await page.emulateMedia({ colorScheme: "light" });
  await expectTheme(page, "light");
});

test("follows the system when storage access is blocked and honors a manual choice for the visit", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Storage blocked", "SecurityError");
      },
    });
  });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expectTheme(page, "dark");
  await page.emulateMedia({ colorScheme: "light" });
  await expectTheme(page, "light");

  await page.getByRole("banner").getByRole("button", { name: "Light theme" }).press("Space");
  await page.emulateMedia({ colorScheme: "dark" });
  await expectTheme(page, "light");
  await page.reload();
  await expectTheme(page, "dark");
});

test("returns to system mode when another tab clears or invalidates the saved theme", async ({ page, context }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const light = page.getByRole("banner").getByRole("button", { name: "Light theme" });
  await light.press("Enter");
  await expectTheme(page, "light");

  const otherTab = await context.newPage();
  await otherTab.goto("/privacy");
  await otherTab.evaluate(() => localStorage.clear());
  await expectTheme(page, "dark");

  await light.press("Enter");
  await expectTheme(page, "light");
  await otherTab.evaluate(() => localStorage.setItem("theme", "invalid theme"));
  await expectTheme(page, "dark");

  await page.emulateMedia({ colorScheme: "light" });
  await expectTheme(page, "light");
});
