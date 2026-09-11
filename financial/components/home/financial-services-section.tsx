import Link from "next/link";
import {
  ArrowRight,
  ChartColumnIncreasing,
  GraduationCap,
  HeartPulse,
  Plane,
  Umbrella,
  UserRoundCheck,
} from "lucide-react";

const services = [
  {
    title: "Life Insurance",
    anchorId: "life-insurance",
    description: "Protect your loved ones and ensure financial security.",
    action: "Learn More",
    href: "/financial#contact",
    icon: Umbrella,
  },
  {
    title: "Critical Illness Insurance",
    anchorId: "critical-illness-insurance",
    description: "Financial support when you need it most.",
    action: "Learn More",
    href: "/financial#contact",
    icon: HeartPulse,
  },
  {
    title: "Disability Insurance",
    anchorId: "disability-insurance",
    description: "Help keep your income and lifestyle on track.",
    action: "Learn More",
    href: "/financial#contact",
    icon: UserRoundCheck,
  },
  {
    title: "Travel Insurance",
    anchorId: "travel-insurance",
    description: "Coverage for a worry-free journey, wherever life takes you.",
    action: "Get a Quote",
    href: "/financial#contact",
    icon: Plane,
  },
  {
    title: "RESP & Education Planning",
    anchorId: "resp-education-planning",
    description: "Help build a brighter future for the next generation.",
    action: "Learn More",
    href: "/financial#contact",
    icon: GraduationCap,
  },
  {
    title: "Financial Solutions",
    anchorId: "financial-solutions",
    description: "Personalized strategies for your short- and long-term goals.",
    action: "Learn More",
    href: "/financial#contact",
    icon: ChartColumnIncreasing,
  },
];

export function FinancialServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f835f] sm:text-sm">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl">
            Financial Protection for Every Stage of Life
          </h2>
          <p className="mt-4 text-base leading-7 text-[#617087] sm:text-lg">
            Comprehensive insurance and financial solutions to help you and your
            loved ones move forward with confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                id={service.anchorId}
                className="group flex min-h-48 gap-5 rounded-md border border-[#dfe6dc] bg-white p-6 shadow-[0_16px_40px_rgba(16,33,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_22px_54px_rgba(16,33,59,0.08)]"
              >
                <div className="flex size-14 shrink-0 items-center justify-center text-[#526f46] sm:size-16">
                  <Icon
                    className="size-12 stroke-[1.8] sm:size-14"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-xl font-semibold leading-snug text-[#10213b]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#617087]">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-auto inline-flex w-fit items-center gap-3 pt-6 text-base font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={`${service.action} about ${service.title}`}
                  >
                    {service.action}
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
