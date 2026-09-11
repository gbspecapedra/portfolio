import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Leaf, UsersRound } from "lucide-react";

const audiences = [
  {
    title: "Families",
    anchorId: "families",
    description: "Protect your loved ones now and plan for tomorrow.",
    href: "/financial#contact",
    icon: UsersRound,
  },
  {
    title: "Professionals",
    anchorId: "professionals",
    description: "Solutions for your career, lifestyle and long-term goals.",
    href: "/financial#contact",
    icon: BriefcaseBusiness,
  },
  {
    title: "Newcomers to Canada",
    anchorId: "newcomers-to-canada",
    description: "Guidance to help you build a secure future in your new home.",
    href: "/financial/who-i-help/newcomers-to-canada",
    icon: Leaf,
  },
];

export function FinancialWhoIHelpSection() {
  return (
    <section
      id="who-i-help"
      aria-labelledby="who-i-help-title"
      className="bg-[#fbfcfa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f835f] sm:text-sm">
            Who I Help
          </p>
          <h2
            id="who-i-help-title"
            className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            Financial Guidance Built Around Real Life
          </h2>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <article
                key={audience.title}
                id={audience.anchorId}
                className="group flex min-h-44 gap-5 rounded-md border border-[#dfe6dc] bg-white p-6 shadow-[0_16px_40px_rgba(16,33,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_22px_54px_rgba(16,33,59,0.08)] sm:p-7"
              >
                <div className="flex size-14 shrink-0 items-center justify-center text-[#526f46] sm:size-16">
                  <Icon
                    className="size-12 stroke-[1.8] sm:size-14"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-xl font-semibold leading-snug text-[#10213b] sm:text-2xl">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#617087]">
                    {audience.description}
                  </p>

                  <Link
                    href={audience.href}
                    className="mt-auto inline-flex w-fit items-center gap-3 pt-6 text-base font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={`Learn more about support for ${audience.title}`}
                  >
                    Learn More
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
