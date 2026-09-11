"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  label: string;
  href: string;
  items?: {
    label: string;
    href: string;
  }[];
};

const navItems = [
  { label: "Home", href: "/financial" },
  {
    label: "Services",
    href: "/financial#services",
    items: [
      { label: "Life Insurance", href: "/financial#life-insurance" },
      {
        label: "Critical Illness Insurance",
        href: "/financial#critical-illness-insurance",
      },
      { label: "Travel Insurance", href: "/financial#travel-insurance" },
      {
        label: "RESP / Education Planning",
        href: "/financial#resp-education-planning",
      },
    ],
  },
  {
    label: "Who I Help",
    href: "/financial#who-i-help",
    items: [
      {
        label: "Newcomers to Canada",
        href: "/financial/who-i-help/newcomers-to-canada",
      },
      {
        label: "Portuguese-speaking Clients",
        href: "/financial#portuguese-speaking-clients",
      },
    ],
  },
  { label: "About", href: "/financial/about" },
  {
    label: "Resources",
    href: "/financial#resources",
    items: [
      { label: "Blog", href: "/financial#resources" },
      { label: "Guides", href: "/financial#resources" },
      { label: "FAQs", href: "/financial/resources/faqs" },
    ],
  },
  { label: "Contact", href: "/financial/contact" },
] satisfies NavItem[];

const consultationHref = "/financial/contact";
const navLinkClass =
  "relative whitespace-nowrap px-0.5 py-2 text-[0.9rem] font-semibold text-[#10213b] transition-colors after:absolute after:inset-x-0.5 after:bottom-0 after:h-px after:bg-[#49633f] after:transition-transform hover:text-[#49633f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function FinancialNavigation() {
  const pathname = usePathname();
  const isActive = (href: string) => !href.includes("#") && pathname === href;
  const isGroupActive = (item: NavItem) =>
    isActive(item.href) || item.items?.some((child) => isActive(child.href));

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9dfd5] bg-white/95 text-[#10213b] shadow-[0_8px_28px_rgba(16,33,59,0.06)] backdrop-blur-md">
      <div className="mx-auto grid min-h-18 w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:min-h-20 lg:grid-cols-[minmax(220px,0.9fr)_auto_minmax(210px,0.75fr)] lg:px-6 xl:px-8">
        <Link
          href="/financial"
          className="group inline-flex min-w-0 flex-col leading-none"
          aria-label="Gisele Pecapedra Insurance and Financial Solutions home"
        >
          <span className="text-[1.35rem] font-semibold tracking-normal text-[#10213b] transition-colors group-hover:text-[#49633f] sm:text-[1.6rem] lg:text-[1.72rem]">
            Gisele Pecapedra
          </span>
          <span className="mt-1 text-[0.7rem] font-medium tracking-[0.03em] text-[#617087] sm:text-[0.82rem] lg:text-[0.88rem]">
            Insurance &amp; Financial Solutions
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-4 lg:flex xl:gap-5"
          aria-label="Financial services navigation"
        >
          {navItems.map((item) =>
            item.items ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  className={`${navLinkClass} inline-flex items-center gap-1 data-[state=open]:text-[#49633f] data-[state=open]:after:scale-x-100 ${isGroupActive(item) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
                >
                  {item.label}
                  <ChevronDown
                    className="size-3.5 transition-transform"
                    aria-hidden="true"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={14}
                  className="min-w-64 border-[#dfe6dc] bg-white p-2 text-[#10213b] shadow-[0_18px_45px_rgba(16,33,59,0.12)]"
                >
                  {item.items.map((child) => (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link
                        href={child.href}
                        className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-semibold text-[#10213b] transition-colors hover:bg-[#f6f8f4] hover:text-[#49633f] focus:bg-[#f6f8f4] focus:text-[#49633f]"
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`${navLinkClass} ${isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Link
            href={consultationHref}
            className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md bg-[#526f46] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(82,111,70,0.2)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white xl:px-6"
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
                <div key={item.label}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="flex rounded-md px-3 py-3 text-base font-semibold text-[#10213b] transition-colors hover:bg-[#f6f8f4] hover:text-[#49633f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e]"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>

                  {item.items ? (
                    <div className="mb-2 ml-3 grid border-l border-[#dfe6dc] pl-3">
                      {item.items.map((child) => (
                        <SheetClose asChild key={child.label}>
                          <Link
                            href={child.href}
                            className="rounded-md px-3 py-2 text-sm font-medium text-[#617087] transition-colors hover:bg-[#f6f8f4] hover:text-[#49633f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e]"
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  ) : null}
                </div>
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
