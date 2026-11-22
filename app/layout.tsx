import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { PrismicPreview } from "@prismicio/next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/data/site";
import { repositoryName } from "@/lib/prismic/client";
import { getSiteSettings } from "@/lib/prismic/content";

export async function generateMetadata(): Promise<Metadata> {
  const [settings, draft] = await Promise.all([getSiteSettings(), draftMode()]);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: settings.name, template: `%s — ${settings.name}` },
    authors: [{ name: settings.name }],
    robots: draft.isEnabled ? { index: false, follow: false } : undefined,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const draft = await draftMode();
  const measurementId = process.env.GA_MEASUREMENT_ID?.trim();
  const analyticsId =
    !draft.isEnabled &&
    process.env.VERCEL_ENV === "production" &&
    measurementId &&
    /^G-[A-Z0-9]+$/.test(measurementId)
      ? measurementId
      : undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CookieConsent analyticsId={analyticsId}>{children}</CookieConsent>
        </ThemeProvider>
        {draft.isEnabled && <PrismicPreview repositoryName={repositoryName} />}
      </body>
    </html>
  );
}
