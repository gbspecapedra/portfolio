import { cookie } from "@prismicio/client";
import { type NextRequest, NextResponse } from "next/server";

import { validProjectUid } from "@/lib/prismic/map-content";
import { getProjectIndex } from "@/lib/prismic/project-index";

export async function proxy(request: NextRequest) {
  if (request.cookies.has("__prerender_bypass") && request.cookies.has(cookie.preview)) {
    return NextResponse.next();
  }

  const uid = request.nextUrl.pathname.split("/").at(-1);
  if (validProjectUid(uid)) {
    // An unavailable index should let the route perform its own lookup.
    const published = await getProjectIndex().catch(() => null);
    if (!published || published.includes(uid)) return NextResponse.next();
  }
  // Work around the empty server HTML from dynamic notFound() in Next.js.
  // https://github.com/vercel/next.js/issues/99287
  return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
}

export const config = { matcher: "/projects/:slug" };
