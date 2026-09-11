import type { LucideIcon } from "lucide-react";
import { DollarSign, Globe2, Laptop } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqItems: FaqItem[] = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes! There's no cost and no obligation. It's a chance for us to get to know each other and explore your options.",
    icon: DollarSign,
  },
  {
    question: "Do you offer virtual meetings?",
    answer:
      "Yes, I offer both virtual and in-person consultations across British Columbia - whatever works best for you.",
    icon: Laptop,
  },
  {
    question: "Do you serve Portuguese-speaking clients?",
    answer:
      "Sim! Eu tambem atendo em Portugues, e ficarei muito feliz em conversar com voce no seu idioma.",
    icon: Globe2,
  },
];

export function FinancialContactFaqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="financial-contact-faqs-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(16rem,0.9fr)_repeat(3,minmax(0,1fr))] lg:gap-0">
        <div className="lg:border-r lg:border-[#dfe6dc] lg:pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
            Frequently Asked Questions
          </p>
          <h2
            id="financial-contact-faqs-title"
            className="mt-3 font-serif text-4xl leading-[1.08] text-[#10213b] sm:text-5xl"
          >
            Quick Answers
          </h2>
        </div>

        {faqItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.question}
              className={`flex gap-5 lg:px-8 ${index > 0 ? "lg:border-l lg:border-[#dfe6dc]" : ""}`}
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ec] text-[#526f46]">
                <Icon className="size-8 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="font-serif text-xl font-semibold leading-tight text-[#10213b]">
                  {item.question}
                </h3>
                <p className="mt-2 text-base leading-7 text-[#617087]">
                  {item.answer}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
