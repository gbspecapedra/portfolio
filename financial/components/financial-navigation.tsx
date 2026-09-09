"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/financial" },
  { label: "Services", href: "/financial#services" },
  { label: "About", href: "/financial#about" },
  { label: "Resources", href: "/financial#resources" },
  { label: "Contact", href: "/financial#contact" },
];

const consultationHref = "/financial#contact";

export function FinancialNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9dfd5] bg-white/95 text-[#10213b] shadow-[0_8px_28px_rgba(16,33,59,0.06)] backdrop-blur-md">
      <div className="mx-auto grid min-h-20 w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:min-h-24 lg:grid-cols-[minmax(260px,1fr)_auto_minmax(260px,1fr)] lg:px-8">
        <Link
          href="/financial"
          className="group inline-flex min-w-0 flex-col leading-none"
          aria-label="Gisele Pecapedra Insurance and Financial Solutions home"
        >
          <span className="text-[1.45rem] font-semibold tracking-normal text-[#10213b] transition-colors group-hover:text-[#49633f] sm:text-[1.75rem] lg:text-[2rem]">
            Gisele Pecapedra
          </span>
          <span className="mt-1 text-[0.72rem] font-medium tracking-[0.03em] text-[#617087] sm:text-sm lg:text-base">
            Insurance &amp; Financial Solutions
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-7 lg:flex xl:gap-10"
          aria-label="Financial services navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-1 py-2 text-sm font-semibold text-[#10213b] transition-colors after:absolute after:inset-x-1 after:bottom-0 after:h-px after:origin-center after:scale-x-0 after:bg-[#b89b5e] after:transition-transform hover:text-[#49633f] hover:after:scale-x-100 xl:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Link
            href={consultationHref}
            className="inline-flex h-14 items-center justify-center rounded-md bg-[#526f46] px-7 text-base font-semibold text-white shadow-[0_12px_28px_rgba(82,111,70,0.24)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book a Free Consultation
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center justify-self-end rounded-md border border-[#cfd8cb] bg-white text-[#10213b] shadow-sm transition-colors hover:bg-[#f6f8f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(88vw,24rem)] border-[#d9dfd5] bg-white p-0 text-[#10213b]"
          >
            <SheetHeader className="border-b border-[#e6ebe2] p-6 text-left">
              <SheetTitle className="text-xl font-semibold text-[#10213b]">
                Gisele Pecapedra
              </SheetTitle>
              <p className="text-sm font-medium text-[#617087]">
                Insurance &amp; Financial Solutions
              </p>
            </SheetHeader>

            <nav
              className="flex flex-col px-3 py-4"
              aria-label="Mobile financial services navigation"
            >
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-3 text-base font-semibold text-[#10213b] transition-colors hover:bg-[#f6f8f4] hover:text-[#49633f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e]"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-auto border-t border-[#e6ebe2] p-6">
              <SheetClose asChild>
                <Link
                  href={consultationHref}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#526f46] px-5 text-center text-sm font-semibold text-white shadow-[0_12px_28px_rgba(82,111,70,0.22)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Book a Free Consultation
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
