import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";

const services = [
  {
    label: "Life Insurance",
    href: "/financial/services/life-insurance",
  },
  {
    label: "Critical Illness Insurance",
    href: "/financial/services/critical-illness-insurance",
  },
  {
    label: "Disability Insurance",
    href: "/financial/services/disability-insurance",
  },
  {
    label: "Travel Insurance",
    href: "/financial/services/travel-insurance",
  },
  {
    label: "RESP & Education Planning",
    href: "/financial/services/resp",
  },
  {
    label: "Financial Solutions",
    href: "/financial/services/financial-solutions",
  },
];

const resources = [
  {
    label: "Guides",
    href: "/financial/resources/guides",
  },
  {
    label: "Tools",
    href: "/financial/resources/tools",
  },
  {
    label: "FAQ",
    href: "/financial/resources/faq",
  },
];

const contactLinks = [
  {
    label: "Location",
    href: "/financial#contact",
    icon: MapPin,
  },
  {
    label: "Email",
    href: "mailto:teampecapedra@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giselepecapedra/",
    icon: Globe,
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/financial/legal/privacy-policy",
  },
  {
    label: "Regulatory Disclosures",
    href: "/financial/legal/regulatory-disclosures",
  },
  {
    label: "Terms of Use",
    href: "/financial/legal/terms-of-use",
  },
  {
    label: "Cookie Policy",
    href: "/financial/legal/cookie-policy",
  },
  {
    label: "Manage Cookies",
    href: "/manage-cookies",
  },
  {
    label: "Internet Security",
    href: "/financial/legal/internet-security",
  },
  {
    label: "Accessibility",
    href: "/financial/legal/accessibility",
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
              aria-label="Gisele Pecapedra Insurance and Investments home"
            >
              <span className="text-2xl font-semibold tracking-normal">
                Gisele Pecapedra
              </span>
              <span className="mt-1 text-base font-medium text-white/62">
                Insurance &amp; Investments
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
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Financial resources footer links">
            <h2 className="text-base font-semibold text-white">Resources</h2>
            <ul className="mt-4 space-y-2 text-base text-white/70">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <Link
                    href={resource.href}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
                  >
                    {resource.label}
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
                        target="_blank"
                        rel="noopener noreferrer"
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
        <div className="mt-12 flex gap-5 border-t border-white/10 pt-7 text-xs leading-6 text-white/56">
          <p className="max-w">
            Information on this website is for general educational purposes only
            and does not constitute personalized insurance, financial, legal, or
            tax advice. Gisele Pecapedra is licensed in British Columbia as a
            Life Insurance and Accident & Sickness Insurance agent, and
            processes her insurance-related business through a Managing General
            Agent (MGA). Insurance products are subject to eligibility,
            underwriting, availability, terms, conditions, exclusions, and
            approval by the applicable insurer.
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
        <div className="mt-6 flex flex-col items-center text-xs leading-6 text-white/56">
          <p className="shrink-0">
            &copy; 2026 Gisele Pecapedra. All rights reserved.
          </p>
          <p>
            Proudly developed by{" "}
            <a
              href="https://giselepecapedra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a]"
            >
              Gisele Pecapedra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
