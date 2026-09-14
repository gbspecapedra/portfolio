import Link from "next/link";
import {
  Activity,
  ArrowRight,
  GraduationCap,
  Heart,
  House,
  Plane,
  Sprout,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SupportItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  layout: "standard" | "wide";
};

const supportItems: SupportItem[] = [
  {
    title: "Seguro de vida",
    description:
      "Proteção financeira para quem você ama, hoje e no futuro.",
    href: "/financial/services/life-insurance",
    icon: Heart,
    layout: "standard",
  },
  {
    title: "Doenças graves",
    description:
      "Suporte financeiro em caso de diagnóstico de uma doença grave.",
    href: "/financial/services/critical-illness",
    icon: Activity,
    layout: "standard",
  },
  {
    title: "Seguro viagem",
    description:
      "Viaje com mais tranquilidade, sabendo que você e sua família estão protegidos.",
    href: "/financial/services/travel-insurance",
    icon: Plane,
    layout: "standard",
  },
  {
    title: "Seguro para visitantes / Super Visa",
    description:
      "Proteção para seus familiares que vêm te visitar no Canadá.",
    href: "/financial/services/travel-insurance",
    icon: UsersRound,
    layout: "standard",
  },
  {
    title: "RESP e planejamento educacional",
    description:
      "Ajude seus filhos a construírem um futuro com mais oportunidades no Canadá.",
    href: "/financial/services/resp",
    icon: GraduationCap,
    layout: "wide",
  },
  {
    title: "Proteção financeira familiar",
    description:
      "Soluções que trazem estabilidade e tranquilidade para todas as fases da vida.",
    href: "/financial/contact",
    icon: House,
    layout: "wide",
  },
  {
    title: "Soluções para newcomers (quando aplicável)",
    description:
      "Orientação para quem está começando uma nova vida no Canadá, incluindo proteção financeira e planejamento de longo prazo.",
    href: "/financial/who-i-help/newcomers-to-canada",
    icon: Sprout,
    layout: "wide",
  },
];

export function FinancialPortugueseClientsSupportSection() {
  return (
    <section
      aria-labelledby="portuguese-clients-support-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
            Em que posso ajudar sua família
          </p>
          <h2
            id="portuguese-clients-support-title"
            className="mt-2 font-serif text-3xl leading-[1.08] text-[#1f2f75] sm:text-4xl lg:text-5xl"
          >
            Soluções para cada etapa da sua jornada no Canadá
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-base leading-7 text-[#617087] sm:text-lg">
            Conheça as principais áreas em que posso te apoiar. Cada família
            tem uma história única, e meu papel é ajudar você a encontrar as
            soluções certas, com informações claras e um atendimento
            personalizado.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {supportItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group flex min-h-44 flex-col rounded-md bg-[#f7f7f3] p-5 shadow-[0_12px_34px_rgba(16,33,59,0.045)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(16,33,59,0.085)] sm:p-6 ${
                  item.layout === "wide" ? "lg:col-span-4" : "lg:col-span-3"
                }`}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#526f46] text-white sm:size-14">
                  <Icon className="size-7 stroke-[1.9]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 max-w-[17rem] font-serif text-xl font-semibold leading-[1.08] text-[#1f2f75] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-6 text-[#617087]">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-auto inline-flex w-fit items-center gap-3 pt-4 text-base font-semibold text-[#526f46] transition-colors hover:text-[#234a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Saiba mais sobre ${item.title}`}
                >
                  Saiba mais
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
