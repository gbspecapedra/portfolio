import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

import { webhookSecret } from "./prismic-content.mjs";

const [command, ...args] = process.argv.slice(2);
if (!command) throw new Error("Provide a command to run with the Prismic test fixture.");

const preload = fileURLToPath(new URL("./prismic-fetch.mjs", import.meta.url));
const result = spawnSync(command, args, {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --import=${JSON.stringify(preload)}`.trim(),
    PRISMIC_REPOSITORY_NAME: "7l7juw0m",
    PRISMIC_ACCESS_TOKEN: "fixture-access-token",
    PRISMIC_WEBHOOK_SECRET: webhookSecret,
    FORMSPREE_FORM_ID: "portfoliofixture",
    VERCEL_ENV: "production",
    GA_MEASUREMENT_ID: "G-PORTFOLIOFIXTURE",
  },
});
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
