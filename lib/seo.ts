import type { Metadata } from "next";

import { siteName, siteUrl } from "@/data/site";

export const homeTitle = `${siteName} — UX-driven Frontend Engineer`;
export const homeDescription = `${siteName} is a frontend engineer working with React, TypeScript, and Next.js to build accessible interfaces and scalable design systems.`;

export const personId = new URL("/#person", siteUrl).href;
export const websiteId = new URL("/#website", siteUrl).href;

type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

const socialCover: SocialImage = {
  url: "/og-cover.png",
  width: 1200,
  height: 630,
  alt: `${homeTitle}. Accessible interfaces and scalable design systems, with a portrait of ${siteName}.`,
};

export function pageMetadata({
  url,
  title,
  description,
  image = socialCover,
}: {
  url: string;
  title: string;
  description: string;
  image?: SocialImage;
}): Metadata {
  return {
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName,
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
