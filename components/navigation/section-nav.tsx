"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

import { homeSectionIds } from "@/data/site";
import { cn } from "@/lib/utils";

const sections = [
  { label: "Home", id: homeSectionIds.home },
  { label: "Case Studies", id: homeSectionIds.projects },
  { label: "Experience", id: homeSectionIds.experience },
  { label: "About", id: homeSectionIds.about },
  { label: "Contact", id: homeSectionIds.contact },
];

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
  variant = "header",
}: {
  variant?: "header" | "footer";
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
      aria-label={isFooter ? "Explore" : "Main navigation"}
      className={
        isFooter
          ? "mt-2.5 grid justify-items-start gap-1.5"
          : "order-3 flex w-full items-center justify-between gap-1 py-3 text-xs font-semibold sm:gap-3 sm:text-sm lg:order-0 lg:ml-auto lg:w-auto lg:gap-8 lg:py-0 lg:text-base xl:gap-10 xl:text-lg"
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
              "transition-colors hover:text-brand-clay",
              isActive
                ? "text-brand-clay"
                : isFooter
                  ? "text-muted-foreground"
                  : "text-foreground",
              isFooter
                ? "inline-flex min-h-6 items-center rounded-sm hover:underline hover:underline-offset-4 aria-[current]:font-semibold"
                : cn(
                    "border-b-2 px-0.5 py-2 whitespace-nowrap sm:px-1",
                    isActive ? "border-brand-clay" : "border-transparent",
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
