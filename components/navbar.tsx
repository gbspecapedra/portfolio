import Link from "next/link";
import { SectionNav } from "@/components/navigation/section-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteName } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface-soft/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 px-4 pt-4 sm:gap-x-6 sm:px-6 lg:min-h-22 lg:flex-nowrap lg:px-8 lg:py-3">
        <Link
          href="/"
          className="shrink-0 text-2xl leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.375rem]"
        >
          {siteName}
        </Link>

        <SectionNav />

        <ThemeToggle />
      </div>
    </header>
  );
}
