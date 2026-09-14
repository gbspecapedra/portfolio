import { FileText, MessageCircle, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExpectationItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const expectations: ExpectationItem[] = [
  {
    title: "Entendo a sua situação",
    description:
      "Conversamos sobre os seus objetivos, sua família e o que é mais importante para você neste momento.",
    icon: MessageCircle,
  },
  {
    title: "Explico suas opções com clareza",
    description:
      "Apresento as alternativas de forma simples e honesta, em português, para que você se sinta seguro para decidir.",
    icon: FileText,
  },
  {
    title: "Te ajudo a seguir em frente",
    description:
      "Com o plano certo, você ganha mais tranquilidade e confiança para o futuro.",
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
            Como funciona
          </p>
          <h2
            id="portuguese-clients-why-gisele-title"
            className="mt-2 font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl"
          >
            Um processo simples e acolhedor
          </h2>
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
