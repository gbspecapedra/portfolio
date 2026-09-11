import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";

const services = [
  "Life Insurance",
  "Critical Illness Insurance",
  "Disability Insurance",
  "Travel Insurance",
  "RESP & Education Planning",
  "Financial Solutions",
];

const resources = ["Articles", "Tools", "FAQ", "Glossary"];

const contactLinks = [
  {
    label: "Location",
    href: "/financial#contact",
    icon: MapPin,
  },
  {
    label: "Email",
    href: "/financial#contact",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "/financial#contact",
    icon: Linkedin,
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Regulatory Disclosures",
    href: "/regulatory-disclosures",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
  {
    label: "Manage Cookies",
    href: "/manage-cookies",
  },
  {
    label: "Internet Security",
    href: "/internet-security",
  },
  {
    label: "Accessibility",
    href: "/accessibility",
  },
];

export function FinancialFooter() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0d314a] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_0.8fr_0.5fr_0.5fr] lg:gap-14">
          <div className="flex flex-col justify-between">
            <Link
              href="/financial"
              className="inline-flex flex-col"
              aria-label="Gisele Pecapedra Insurance and Financial Solutions home"
            >
              <span className="text-2xl font-semibold tracking-normal">
                Gisele Pecapedra
              </span>
              <span className="mt-1 text-base font-medium text-white/62">
                Insurance &amp; Financial Solutions
              </span>
            </Link>

            <p className="max-w-md text-base leading-8 text-white/70">
              Helping individuals and families build a more secure tomorrow
              through personalized insurance and financial solutions.
            </p>

            <div className="flex items-start gap-4">
              <MapPin
                className="mt-1 size-8 shrink-0 text-white"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-base font-semibold text-white">
                  Based in British Columbia
                </h2>
                <p className="mt-1 text-sm leading-6 text-white/62">
                  Proudly serving communities.
                </p>
              </div>
            </div>
          </div>

          <nav aria-label="Financial services footer links">
            <h2 className="text-base font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2 text-base text-white/70">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/financial#services"
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Financial resources footer links">
            <h2 className="text-base font-semibold text-white">Resources</h2>
            <ul className="mt-4 space-y-2 text-base text-white/70">
              {resources.map((resource) => (
                <li key={resource}>
                  <Link
                    href="/financial#resources"
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.7fr_1.6fr]">
            <nav aria-label="Financial contact footer links">
              <h2 className="text-base font-semibold text-white">Contact</h2>
              <ul className="mt-4 space-y-4 text-base text-white/70">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-3 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
                      >
                        <span className="flex size-8 items-center justify-center rounded-md border border-white/15 text-white/72">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs leading-6 text-white/56 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-4xl">
            Information is for general educational purposes only and does not
            constitute financial advice. Please consult a licensed professional
            for personalized guidance. Services and coverage availability may
            vary by province.
          </p>
          <p className="shrink-0">
            &copy; 2026 Gisele Pecapedra. All rights reserved.
          </p>
        </div>
        <nav
          aria-label="Financial legal links"
          className="mt-6 flex justify-center flex-wrap gap-x-6 gap-y-2 text-xs leading-6 text-white/56"
        >
          {legalLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
