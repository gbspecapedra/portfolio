import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  projects: [
    { name: "portfolio", testIgnore: "**/prismic-revalidation.spec.ts" },
    {
      name: "prismic-revalidation",
      testMatch: "**/prismic-revalidation.spec.ts",
      dependencies: ["portfolio"],
    },
  ],
  outputDir: "./artifacts/playwright",
  forbidOnly: Boolean(process.env.CI),
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL,
    browserName: "chromium",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm start -- --hostname 127.0.0.1 --port 3100",
    url: baseURL,
  },
});
