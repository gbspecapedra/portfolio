import assert from "node:assert/strict";
import test from "node:test";

import { handlePrismicWebhook } from "../lib/prismic/webhook.ts";

const repository = "fixture-repository";
const secret = "fixture-secret";
const update = {
  type: "api-update", domain: repository, secret, masterRef: "fixture-master",
  releases: {}, masks: {}, tags: {}, documents: ["fixture-document"],
};

function post(payload: unknown) {
  return new Request("https://example.test/api/revalidate", {
    method: "POST", body: JSON.stringify(payload),
  });
}

test("the webhook fails closed when the secret is absent", async () => {
  const response = await handlePrismicWebhook(post(update), undefined, repository, () => assert.fail("Invalidated without a secret"));
  assert.equal(response.status, 503);
});

test("the webhook sanitizes invalidation errors in logs and responses", async (t) => {
  const log = t.mock.method(console, "error", () => {});
  const response = await handlePrismicWebhook(post(update), secret, repository, () => {
    throw new Error(`Internal error containing ${secret}`);
  });
  assert.equal(response.status, 500);
  assert.deepEqual(await response.json(), { error: "Revalidation failed." });
  assert.equal(log.mock.callCount(), 1);
  assert.deepEqual(log.mock.calls[0].arguments, ["Prismic webhook revalidation failed."]);
});
