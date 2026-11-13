type FinancialDescriptionSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function FinancialDescriptionSection({
  eyebrow,
  title,
  description,
}: FinancialDescriptionSectionProps) {
  return (
    <section
      aria-labelledby="families-support-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
            {eyebrow}
          </p>
          <h2
            id="families-support-title"
            className="mt-3 max-w-2xl font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
        </div>

        <p className="max-w-2xl text-base font-medium leading-7 text-[#415066] sm:text-lg lg:pt-7">
          {description}
        </p>
      </div>
    </section>
  );
}
