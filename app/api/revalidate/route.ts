import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";

import { contentTag, repositoryName } from "@/lib/prismic/client";
import { clearProjectIndex } from "@/lib/prismic/project-index";

export async function POST(request: Request) {
  const secret = process.env.PRISMIC_WEBHOOK_SECRET?.trim();
  if (!secret) return Response.json({ error: "Webhook is unavailable." }, { status: 503 });

  const payload: unknown = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object" || !("secret" in payload) ||
      typeof payload.secret !== "string") {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const expected = Buffer.from(secret);
  const provided = Buffer.from(payload.secret);
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected) ||
      !("domain" in payload) || typeof payload.domain !== "string" ||
      ![repositoryName, `${repositoryName}.prismic.io`].includes(payload.domain)) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!("type" in payload)) return Response.json({ error: "Invalid webhook." }, { status: 400 });
  if (payload.type === "test-trigger") return Response.json({ revalidated: false });
  if (payload.type !== "api-update") return Response.json({ error: "Invalid webhook." }, { status: 400 });

  revalidateTag(contentTag, { expire: 0 });
  clearProjectIndex();
  return Response.json({ revalidated: true });
}
