import type { ReactNode } from "react";

import { SiteMain, SiteShell } from "@/components/site-shell";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const date = new Date(`${updated}T00:00:00Z`);
  const dateLabel = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(date);

  return (
    <SiteShell>
      <SiteMain className="bg-background">
        <article
          aria-labelledby="legal-page-title"
          className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        >
          <header className="border-b border-border pb-5 sm:pb-6">
            <h1
              id="legal-page-title"
              className="text-[clamp(1.875rem,4.2vw,3rem)] leading-[1.1] font-bold tracking-tight text-balance font-editorial"
            >
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated <time dateTime={updated}>{dateLabel}</time>
            </p>
          </header>
          <div className="mt-6 space-y-7 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-8 [&_a]:rounded-sm [&_a]:text-brand-clay [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:font-editorial [&_li]:pl-1 [&_p+p]:mt-3 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </SiteMain>
    </SiteShell>
  );
}
