import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gisele Pecapedra | UI Engineer & Designer",
  description:
    "Discover Gisele Pecapedra's portfolio, where innovative UI engineering meets sleek, modern design. Showcasing 8+ years of expertise in crafting user-focused web applications with cutting-edge technologies and a passion for clean, maintainable code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-NER5VKWESN" />
    </html>
  );
}
