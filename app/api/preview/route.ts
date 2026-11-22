import { cookie, NotFoundError } from "@prismicio/client";
import { redirectToPreviewURL } from "@prismicio/next";
import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/prismic/client";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const token = searchParams.get("token");
  const documentId = searchParams.get("documentId");
  const ref = token ?? request.cookies.get(cookie.preview)?.value;
  if (!ref) {
    return new Response("A Prismic preview is required.", { status: 400 });
  }

  const client = createClient(ref);
  let defaultURL = "/";
  try {
    if (ref === (await client.getMasterRef()).ref) {
      return NextResponse.json({ error: "A Prismic preview ref is required." }, { status: 400 });
    }
    if (documentId) {
      defaultURL = await client.resolvePreviewURL({ previewToken: ref, documentID: documentId, defaultURL });
    } else {
      // The toolbar may resume a session with only its ref cookie.
      await client.getSingle("site_settings", { fetch: ["site_settings.display_name"] });
    }
  } catch (error) {
    if (error instanceof NotFoundError) {
      return NextResponse.json({ error: "Preview document not found." }, { status: 404 });
    }
    return NextResponse.json({ error: "Prismic preview is invalid or unavailable." }, { status: 400 });
  }

  // Already resolved the document with an uncached ref.
  searchParams.delete("documentId");
  return redirectToPreviewURL({ client, request, defaultURL });
}
