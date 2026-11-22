import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
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
  const gaMeasurementId = process.env.GA_MEASUREMENT_ID?.trim();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.VERCEL_ENV === "production" &&
          gaMeasurementId &&
          /^G-[A-Z0-9]+$/.test(gaMeasurementId) && (
            <GoogleAnalytics gaId={gaMeasurementId} />
          )}
      </body>
    </html>
  );
}
