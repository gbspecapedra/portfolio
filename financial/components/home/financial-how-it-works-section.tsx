import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Me About Your Goals",
    description:
      "We'll discuss your situation, needs and what matters most to you.",
  },
  {
    number: "02",
    title: "Review Your Options",
    description: "I'll present tailored solutions from trusted providers.",
  },
  {
    number: "03",
    title: "Make an Informed Decision",
    description: "You choose what's right for you, with no pressure.",
  },
];

export function FinancialHowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-[#fbfcfa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f835f] sm:text-sm">
            How It Works
          </p>
          <h2
            id="how-it-works-title"
            className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            Getting Started Is Simple
          </h2>
        </div>

        <div className="mx-auto mt-9 grid max-w-6xl gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="contents">
              <article className="flex gap-5 rounded-md border border-[#dfe6dc] bg-white p-5 shadow-[0_14px_34px_rgba(16,33,59,0.045)] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-[#dfe6dc] bg-white text-2xl font-semibold text-[#10213b] shadow-[0_12px_26px_rgba(16,33,59,0.07)] sm:size-20 sm:text-3xl">
                  {step.number}
                </div>

                <div className="min-w-0 pt-1 sm:pt-2">
                  <h3 className="text-lg font-semibold leading-snug text-[#10213b] sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#617087]">
                    {step.description}
                  </p>
                </div>
              </article>

              {index < steps.length - 1 ? (
                <div
                  className="hidden pt-7 text-[#526f46] lg:flex"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-7 stroke-[2.2]" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href="/financial#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#526f46] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.22)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto sm:min-w-80"
          >
            Book Your Free Consultation
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
