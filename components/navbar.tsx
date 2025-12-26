"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Projects", hash: "#projects" },
  { label: "Experience", hash: "#experience" },
  { label: "Contact", hash: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-gradient">Gisele</span> Pecapedra
        </Link>

        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <Button
              key={item.label}
              asChild
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href={isHome ? item.hash : `/${item.hash}`}>
                {item.label}
              </Link>
            </Button>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
