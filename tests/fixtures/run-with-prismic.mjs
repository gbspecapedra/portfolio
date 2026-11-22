import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

import { webhookSecret } from "./prismic-content.mjs";

const [command, ...args] = process.argv.slice(2);
if (!command) throw new Error("Provide a command to run with the Prismic test fixture.");

const preload = fileURLToPath(new URL("./prismic-fetch.mjs", import.meta.url));
const stateDirectory = command === "playwright" ? mkdtempSync(join(tmpdir(), "portfolio-prismic-")) : undefined;
const result = spawnSync(command, args, {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --import=${JSON.stringify(preload)}`.trim(),
    // Override any local setting so the build and browser tests use the checked-in default.
    PRISMIC_REPOSITORY_NAME: "",
    PRISMIC_ACCESS_TOKEN: "fixture-access-token",
    PRISMIC_WEBHOOK_SECRET: webhookSecret,
    PORTFOLIO_PRISMIC_FIXTURE_STATE: stateDirectory ? join(stateDirectory, "ref") : "",
    FORMSPREE_FORM_ID: "portfoliofixture",
    VERCEL_ENV: "production",
    GA_MEASUREMENT_ID: "G-PORTFOLIOFIXTURE",
  },
});
if (stateDirectory) rmSync(stateDirectory, { recursive: true, force: true });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
