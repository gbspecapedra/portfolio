import { Mail, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import { SectionNav } from "@/components/navigation/section-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { contactInfo, contactSectionId } from "@/data/contact-info";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const socialLinks = [
  { label: "GitHub", href: contactInfo.githubUrl, icon: SiGithub },
  { label: "LinkedIn", href: contactInfo.linkedinUrl, icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${contactInfo.email}`, icon: Mail },
];

const headingClassName =
  "text-xl leading-tight font-bold tracking-tight text-foreground [font-family:Georgia,'Times_New_Roman',serif]";

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-surface-soft/70 to-background">
      <div className="mx-auto max-w-364 px-4 min-[480px]:px-6 min-[1200px]:px-10.5 min-[1400px]:px-14.5">
        <div className="grid gap-x-5 gap-y-6 border-t border-border/80 py-7 text-sm leading-relaxed text-muted-foreground min-[23rem]:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:py-9 sm:text-[0.9375rem] md:grid-cols-3 lg:py-10 xl:gap-x-10">
          <div className="min-w-0 min-[23rem]:col-span-2 md:col-span-1">
            <h2 className={cn(headingClassName, "text-2xl")}>
              Gisele Pecapedra
            </h2>
            <p className="mt-1 font-semibold text-foreground">
              Frontend Engineer
            </p>
            <p className="mt-2 max-w-[32ch]">
              Building accessible, scalable and user-friendly interfaces with
              clarity and care.
            </p>

            <ul
              aria-label="Social and email links"
              className="mt-4 flex flex-wrap gap-2"
              role="list"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => {
                if (!href) return null;

                const external = !href.startsWith("mailto:");

                return (
                  <li key={label}>
                    <Button
                      asChild
                      size="icon-lg"
                      variant="outline"
                      className="rounded-xl border-border bg-transparent text-brand-clay shadow-none"
                    >
                      <a
                        href={href}
                        aria-label={label}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                      >
                        <Icon aria-hidden="true" className="size-4.5" />
                      </a>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className={headingClassName}>Explore</h2>
            <SectionNav variant="footer" />
          </div>

          <div className="min-w-0">
            <h2 className={headingClassName}>Let’s Connect</h2>
            <p className="mt-2.5 max-w-[30ch]">
              Open to new opportunities, collaborations and interesting
              challenges.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-4 h-11 gap-2.5 rounded-lg font-semibold transition-[transform,box-shadow] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <a href={`/#${contactSectionId}`}>
                <Send aria-hidden="true" className="size-4.5" />
                Get in touch
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border/80 py-4 text-sm text-muted-foreground">
          <p>© {currentYear} Gisele Pecapedra. All rights reserved.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
