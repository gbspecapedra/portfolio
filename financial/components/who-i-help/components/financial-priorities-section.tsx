import type { LucideIcon } from "lucide-react";

type Priority = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FinancialPrioritiesSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  priorities: Priority[];
};

export function FinancialPrioritiesSection({
  eyebrow,
  title,
  description,
  priorities,
}: FinancialPrioritiesSectionProps) {
  return (
    <section
      aria-labelledby="financial-priorities-title"
      className="border-b border-[#dfe6dc] bg-[#f7f4ec] px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
              {eyebrow}
            </p>
            <h2
              id="financial-priorities-title"
              className="mt-3 max-w-2xl font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
          </div>

          <p className="max-w-2xl text-base font-medium leading-7 text-[#415066] sm:text-lg lg:pt-7">
            {description}
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {priorities.map((priority) => {
            const Icon = priority.icon;

            return (
              <article
                key={priority.title}
                className="flex min-h-48 flex-col items-center rounded-md bg-white px-5 py-6 text-center shadow-[0_14px_34px_rgba(16,33,59,0.055)]"
              >
                <Icon
                  className="size-11 shrink-0 stroke-[1.8] text-[#526f46]"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-serif text-xl font-semibold leading-[1.08] text-[#10213b]">
                  {priority.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-[#617087]">
                  {priority.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
