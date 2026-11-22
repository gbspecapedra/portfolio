"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

import { homeSectionIds } from "@/data/site";
import { cn } from "@/lib/utils";

function subscribeToHashChange(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getSectionId() {
  return window.location.hash.slice(1);
}

function getServerSectionId() {
  return "";
}

export function SectionNav({
  sections,
  variant = "header",
  label = "Main navigation",
}: {
  sections: readonly { id: string; label: string }[];
  variant?: "header" | "footer";
  label?: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isFooter = variant === "footer";
  const sectionId = useSyncExternalStore(
    subscribeToHashChange,
    getSectionId,
    getServerSectionId,
  );
  const activeSectionId = isHome
    ? sectionId || homeSectionIds.home
    : pathname.startsWith("/projects/")
      ? homeSectionIds.projects
      : "";

  return (
    <nav
      aria-label={label}
      className={
        isFooter
          ? "mt-2.5 grid justify-items-start gap-1.5"
          : "order-3 flex w-full flex-wrap items-center justify-between gap-x-1 gap-y-0.5 py-2.5 text-xs font-semibold sm:gap-x-3 sm:text-sm lg:order-0 lg:ml-auto lg:w-auto lg:flex-nowrap lg:gap-x-8 lg:py-0 lg:text-base xl:gap-x-10 xl:text-lg"
      }
    >
      {sections.map(({ label, id }) => {
        const isActive = activeSectionId === id;

        return (
          <a
            key={id}
            href={`${isHome ? "" : "/"}#${id}`}
            aria-current={isActive ? (isHome ? "location" : "page") : undefined}
            className={cn(
              "transition-colors hover:text-brand-clay motion-reduce:transition-none",
              isActive
                ? "text-brand-clay"
                : isFooter
                  ? "text-muted-foreground"
                  : "text-foreground",
              isFooter
                ? "inline-flex min-h-6 items-center rounded-sm hover:underline hover:underline-offset-4 aria-[current]:font-semibold"
                : cn(
                    "inline-flex min-h-9 items-center border-b-2 py-2 sm:px-1",
                    isActive ? "border-brand-clay" : "border-transparent hover:border-brand-clay/50",
                  ),
            )}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
