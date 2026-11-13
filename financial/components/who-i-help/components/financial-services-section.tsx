import type { LucideIcon } from "lucide-react";

type StrategyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FinancialServicesSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  strategyItems: StrategyItem[];
};

export function FinancialServicesSection({
  eyebrow,
  title,
  description,
  strategyItems,
}: FinancialServicesSectionProps) {
  return (
    <section
      aria-labelledby="families-priorities-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
              {eyebrow}
            </p>
            <h2
              id="families-priorities-title"
              className="mt-3 max-w-3xl font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
          </div>

          <p className="max-w-2xl text-base font-medium leading-7 text-[#415066] sm:text-lg lg:pt-7">
            {description}
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {strategyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="contents">
                <article className="flex min-h-44 flex-col items-center justify-start rounded-md border border-[#dfe6dc] bg-white px-5 py-5 text-center shadow-[0_12px_30px_rgba(16,33,59,0.045)]">
                  <Icon
                    className="size-10 shrink-0 stroke-[1.8] text-[#526f46]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-serif text-lg font-semibold leading-[1.1] text-[#10213b]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-[#617087]">
                    {item.description}
                  </p>
                </article>

                {index < strategyItems.length - 1 && (
                  <div
                    className="hidden items-center justify-center text-3xl font-semibold text-[#526f46] lg:flex"
                    aria-hidden="true"
                  >
                    +
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
