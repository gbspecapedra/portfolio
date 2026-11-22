import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { ThemeProvider } from "@/components/theme-provider";
import { siteName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s — ${siteName}`,
  },
  authors: [{ name: siteName }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const measurementId = process.env.GA_MEASUREMENT_ID?.trim();
  const analyticsId =
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
      </body>
    </html>
  );
}
