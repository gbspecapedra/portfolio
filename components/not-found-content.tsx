import { ArrowLeft, CornerDownRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { homeSectionIds } from "@/data/site";

export function NotFoundContent() {
  return (
    <main className="hero-bg bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-clay uppercase">
            Page not found
          </p>
          <div
            aria-hidden="true"
            className="mt-2 inline-flex items-baseline gap-3 text-[clamp(5.5rem,18vw,9.5rem)] leading-none tracking-[-0.07em] font-editorial"
          >
            404
            <span className="size-2 rounded-full bg-brand-clay sm:size-2.5" />
          </div>
          <h1 className="mt-5 text-[clamp(1.875rem,4.2vw,3rem)] leading-[1.1] font-bold tracking-tight text-balance font-editorial">
            Looks like this route got lost.
          </h1>
          <p className="mx-auto mt-4 max-w-[42ch] text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg lg:mx-0">
            The page you&apos;re looking for might have moved, been removed, or
            never existed. No worries — there&apos;s plenty more to explore.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-lg font-semibold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Link href="/">
                <ArrowLeft aria-hidden="true" />
                Back to home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-brand-clay bg-transparent font-semibold text-accent-foreground motion-reduce:transition-none"
            >
              <Link href={`/#${homeSectionIds.projects}`}>Explore case studies</Link>
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto w-full max-w-100 rounded-3xl border border-border bg-surface-soft/80 p-3 sm:p-5 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-3.5">
              <span className="size-2 rounded-full bg-brand-clay" />
              <span className="size-2 rounded-full bg-brand-clay/45" />
              <span className="size-2 rounded-full bg-brand-clay/25" />
              <span className="ml-auto font-[ui-monospace,monospace] text-xs text-muted-foreground">
                not-found.tsx
              </span>
            </div>
            <div className="px-4 py-5 sm:px-6 sm:py-7 lg:py-9">
              <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-surface-soft/60 p-3 sm:p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground sm:size-10">
                  <CornerDownRight className="size-4.5" />
                </span>
                <span className="text-sm font-semibold sm:text-base">
                  Route not found
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3 font-[ui-monospace,monospace] text-xs text-accent-foreground sm:text-sm">
                <span className="h-px w-5 bg-brand-clay/45" />
                <span>{"<BackToHome />"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
