import { cookie, getToolbarSrc, NotFoundError } from "@prismicio/client";
import { redirectToPreviewURL } from "@prismicio/next";
import { draftMode } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

import { createClient, repositoryName } from "@/lib/prismic/client";

async function startPreviewSession(session: string) {
  // The v5 toolbar writes the ref cookie before dispatching prismicPreviewStart.
  const response = new NextResponse(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Opening Prismic preview</title>
    <script defer src="${getToolbarSrc(repositoryName, { version: 5 }).replaceAll("&", "&amp;")}"></script>
  </head>
  <body>
    <main>
      <h1>Prismic preview</h1>
      <p id="status" role="status">Opening your preview…</p>
      <noscript>Enable JavaScript, then reopen the preview from Prismic.</noscript>
    </main>
    <script>
      function showRetry() {
        document.getElementById("status").textContent = "Preview could not be opened. Reopen it from Prismic.";
      }
      window.addEventListener("prismicPreviewStart", (event) => {
        event.preventDefault();
        const url = new URL(window.location.href);
        url.searchParams.delete("session");
        window.location.replace(url);
      }, { once: true });
      window.addEventListener("prismicPreviewEnd", (event) => {
        event.preventDefault();
        showRetry();
      }, { once: true });
      window.setTimeout(showRetry, 15000);
    </script>
  </body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });

  // A new editor session should start without another document's preview ref.
  (await draftMode()).disable();
  const options = { path: "/", sameSite: "none", secure: true } as const;
  response.cookies.set(cookie.preview, "", { ...options, expires: new Date(0) });
  response.cookies.set(cookie.previewSession, session, options);
  return response;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const token = searchParams.get("token");
  const session = searchParams.get("session");
  if (session !== null && (session.length > 256 || !/^[\w-]+~[\w-]+$/.test(session))) {
    return new Response("Invalid Prismic preview session.", { status: 400 });
  }
  if (session && !token) return startPreviewSession(session);

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
