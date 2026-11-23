import type { Metadata } from "next";

import type { ProjectImage } from "@/data/project-types";
import { siteUrl } from "@/data/site";
import type { SiteSettings } from "@/lib/prismic/map-content";

export const personId = new URL("/#person", siteUrl).href;
export const websiteId = new URL("/#website", siteUrl).href;

export function pageMetadata({
  url,
  title,
  description,
  settings,
  image = settings.socialImage,
}: {
  url: string;
  title: string;
  description?: string;
  settings: Pick<SiteSettings, "name" | "socialImage">;
  image?: ProjectImage;
}): Metadata {
  const socialImage = { url: image.src, width: image.width, height: image.height, alt: image.alt };
  return {
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: settings.name,
      url,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export function legalPageMetadata(
  { path, title }: { path: string; title: string },
  description: string,
  settings: SiteSettings,
): Metadata {
  return {
    ...pageMetadata({ url: new URL(path, siteUrl).href, title, description, settings }),
    title,
  };
}
