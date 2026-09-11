import { FileText, MessageCircle, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExpectationItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const expectations: ExpectationItem[] = [
  {
    title: "Listen to Your Goals",
    description:
      "I take the time to understand your unique situation, needs and aspirations.",
    icon: MessageCircle,
  },
  {
    title: "Explain Your Options Clearly",
    description:
      "You'll get honest, easy-to-understand advice with no pressure.",
    icon: FileText,
  },
  {
    title: "Help You Move Forward",
    description:
      "Together, we'll find the right solutions so you can feel confident about what's next.",
    icon: Sprout,
  },
];

export function FinancialPortugueseClientsWhyGiseleSection() {
  return (
    <section
      aria-labelledby="portuguese-clients-why-gisele-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
            Why Work With Gisele
          </p>
          <h2
            id="portuguese-clients-why-gisele-title"
            className="mt-2 font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl"
          >
            What You Can Expect
          </h2>
          <p className="mt-3 text-base leading-7 text-[#617087] sm:text-lg">
            A supportive, personalized approach, from our first conversation to
            your next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3 md:gap-0">
          {expectations.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex gap-5 md:border-l md:border-[#dfe6dc] md:px-8 first:md:border-l-0 lg:px-11"
              >
                <Icon
                  className="mt-1 size-12 shrink-0 stroke-[1.75] text-[#526f46] sm:size-14"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-xl font-semibold leading-tight text-[#10213b] sm:text-2xl">
                    <span className="mr-2 font-sans text-base font-bold text-[#10213b]">
                      {index + 1}.
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#617087]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
