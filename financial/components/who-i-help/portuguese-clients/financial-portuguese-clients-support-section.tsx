import { BookOpen, GraduationCap, Plane, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SupportItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const supportItems: SupportItem[] = [
  {
    title: "Understand Insurance in Canada",
    description:
      "Learn how insurance works in Canada and what you really need.",
    icon: BookOpen,
  },
  {
    title: "Protect Your Family",
    description:
      "Find the right coverage to keep your loved ones safe and secure.",
    icon: UsersRound,
  },
  {
    title: "Travel & Visitor Insurance",
    description:
      "Get the right protection for your visits, travel or while family members come to Canada.",
    icon: Plane,
  },
  {
    title: "Plan for Your Children's Future",
    description:
      "Explore education savings options like RESPs and long-term financial planning.",
    icon: GraduationCap,
  },
];

export function FinancialPortugueseClientsSupportSection() {
  return (
    <section
      aria-labelledby="portuguese-clients-support-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
            How I Help Newcomers
          </p>
          <h2
            id="portuguese-clients-support-title"
            className="mt-3 font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            Practical Support for Your New Beginning
          </h2>
          <p className="mt-3 text-base leading-7 text-[#617087] sm:text-lg">
            Moving to a new country is a big step. I provide personalized
            guidance to help you understand your options, protect what matters,
            and build a secure future in Canada.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {supportItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-md bg-[#f7f7f3] p-6 shadow-[0_12px_34px_rgba(16,33,59,0.045)] sm:p-7"
              >
                <Icon
                  className="size-10 text-[#526f46] sm:size-11"
                  aria-hidden="true"
                />
                <h3 className="mt-5 max-w-[13rem] font-serif text-2xl font-semibold leading-[1.05] text-[#10213b]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#617087]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
