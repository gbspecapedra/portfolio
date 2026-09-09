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

export function FinancialFooter() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0d314a] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.45fr_0.9fr_0.8fr_1.6fr] lg:gap-14">
          <div>
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

            <p className="mt-6 max-w-md text-base leading-8 text-white/70">
              Helping individuals and families build a more secure tomorrow
              through personalized insurance and financial solutions.
            </p>
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.85fr_1fr]">
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

            <div className="border-t border-white/12 pt-7 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-9 shrink-0 fill-white text-white" aria-hidden="true" />
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
      </div>
    </footer>
  );
}
