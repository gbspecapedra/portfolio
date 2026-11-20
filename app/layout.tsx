import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteName } from "@/data/site";

const siteUrl = "https://www.giselepecapedra.com";
const siteTitle = `${siteName} — UX-driven Frontend Engineer`;
const socialCover = {
  url: "/og-cover.png",
  width: 1200,
  height: 630,
  alt: `${siteTitle}. Accessible interfaces and scalable design systems, with a portrait of ${siteName}.`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  description:
    "UX-driven Frontend Engineer building accessible, high-performance web products with strong design systems and clean architecture.",
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description:
      "Portfolio built as a product, not a gallery. Real case studies, design decisions, and trade-offs.",
    images: [socialCover],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Frontend portfolio with real-world case studies, UI decisions, and trade-offs.",
    images: [socialCover],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
