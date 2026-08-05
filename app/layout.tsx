import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giselepecapedra.com"),
  title: {
    default: "Gisele Pecapedra — UX-driven Frontend Engineer",
    template: "%s — Gisele Pecapedra",
  },
  description:
    "UX-driven Frontend Engineer building accessible, high-performance web products with strong design systems and clean architecture.",
  alternates: {
    canonical: "https://www.giselepecapedra.com",
  },
  authors: [{ name: "Gisele Pecapedra" }],
  openGraph: {
    type: "website",
    url: "https://www.giselepecapedra.com",
    siteName: "Gisele Pecapedra",
    title: "Gisele Pecapedra — UX-driven Frontend Engineer",
    description:
      "Portfolio built as a product, not a gallery. Real case studies, design decisions, and trade-offs.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Gisele Pecapedra — UX-driven Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gisele Pecapedra — UX-driven Frontend Engineer",
    description:
      "Frontend portfolio with real-world case studies, UI decisions, and trade-offs.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
