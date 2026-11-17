"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", hash: "#home" },
  { label: "Case Studies", hash: "#projects" },
  { label: "Experience", hash: "#experience" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

function subscribeToHashChange(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHash() {
  return window.location.hash;
}

function getServerHash() {
  return "";
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hash = useSyncExternalStore(
    subscribeToHashChange,
    getHash,
    getServerHash,
  );
  const activeHash = isHome
    ? hash || "#home"
    : pathname.startsWith("/projects/")
      ? "#projects"
      : "";

  return (
    <header className="sticky top-0 z-50 bg-surface-soft/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-4 pt-4 sm:px-6 lg:min-h-22 lg:flex-nowrap lg:px-8 lg:py-3">
        <Link
          href="/"
          className="shrink-0 text-2xl leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.375rem]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Gisele Pecapedra
        </Link>

        <nav
          aria-label="Main navigation"
          className="order-3 flex w-full items-center justify-between gap-1 py-3 text-xs font-semibold sm:gap-3 sm:text-sm lg:order-none lg:ml-auto lg:w-auto lg:gap-8 lg:py-0 lg:text-base xl:gap-10 xl:text-lg"
        >
          {nav.map((item) => {
            const isActive = activeHash === item.hash;

            return (
              <a
                key={item.label}
                href={isHome ? item.hash : `/${item.hash}`}
                aria-current={
                  isActive ? (isHome ? "location" : "page") : undefined
                }
                className={`whitespace-nowrap border-b-2 px-0.5 py-2 transition-colors hover:text-brand-clay sm:px-1 ${
                  isActive
                    ? "border-brand-clay text-brand-clay"
                    : "border-transparent text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
