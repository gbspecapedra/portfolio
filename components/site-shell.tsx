import type { ComponentProps, ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getSiteSettings } from "@/lib/prismic/content";
import { cn } from "@/lib/utils";

const mainContentId = "main-content";

export function SiteMain({
  id = mainContentId,
  className,
  ...props
}: ComponentProps<"main">) {
  return <main {...props} id={id} tabIndex={-1} className={cn("scroll-mt-28", className)} />;
}

export async function SiteShell({
  children,
  mainId = mainContentId,
}: {
  children: ReactNode;
  mainId?: string;
}) {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar mainId={mainId} settings={settings} />
      {children}
      <Footer settings={settings} />
    </>
  );
}
