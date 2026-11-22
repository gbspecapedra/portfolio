import { cookie } from "@prismicio/client";
import { redirectToPreviewURL } from "@prismicio/next";
import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/prismic/client";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const token = searchParams.get("token");
  const documentId = searchParams.get("documentId");
  const session = searchParams.get("session");
  const ref = token ?? request.cookies.get(cookie.preview)?.value;
  if (!ref && !session) {
    return new Response("A Prismic preview is required.", { status: 400 });
  }

  const client = createClient(ref || session || undefined);
  let defaultURL = "/";
  if (token && documentId) {
    try {
      defaultURL = await client.resolvePreviewURL({ previewToken: token, documentID: documentId, defaultURL });
    } catch {
      return NextResponse.json({ error: "Prismic preview is invalid or unavailable." }, { status: 400 });
    }
    // Already resolved the document with an uncached ref.
    request.nextUrl.searchParams.delete("documentId");
  }

  return redirectToPreviewURL({ client, request, defaultURL });
}
