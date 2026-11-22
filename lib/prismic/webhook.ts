import { createHash, timingSafeEqual } from "node:crypto";
import { WebhookType } from "@prismicio/client";

function digest(secret: string) {
  return createHash("sha256").update(secret).digest();
}

export async function handlePrismicWebhook(
  request: Request,
  secret: string | undefined,
  repository: string,
  invalidate: () => void,
) {
  if (!secret) return Response.json({ error: "Webhook is unavailable." }, { status: 503 });

  const payload: unknown = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "Invalid webhook." }, { status: 400 });
  }

  if (!("secret" in payload) || typeof payload.secret !== "string" ||
      !timingSafeEqual(digest(payload.secret), digest(secret)) ||
      !("domain" in payload) ||
      (payload.domain !== repository && payload.domain !== `${repository}.prismic.io`)) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const event = "type" in payload ? payload.type : undefined;
  if (event === WebhookType.TestTrigger) return Response.json({ revalidated: false });

  if (event !== WebhookType.APIUpdate || !("documents" in payload) ||
      !Array.isArray(payload.documents) ||
      !payload.documents.every((id) => typeof id === "string" && id.trim().length > 0)) {
    return Response.json({ error: "Invalid webhook." }, { status: 400 });
  }
  // Release-only updates do not change published documents.
  if (!payload.documents.length) return Response.json({ revalidated: false });
  if (!("masterRef" in payload) || typeof payload.masterRef !== "string" || !payload.masterRef.trim()) {
    return Response.json({ error: "Invalid webhook." }, { status: 400 });
  }

  try {
    invalidate();
    return Response.json({ revalidated: true });
  } catch {
    console.error("Prismic webhook revalidation failed.");
    return Response.json({ error: "Revalidation failed." }, { status: 500 });
  }
}
