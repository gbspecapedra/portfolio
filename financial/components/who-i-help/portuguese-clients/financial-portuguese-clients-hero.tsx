import { Languages, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

import { FinancialHero } from "../../financial-hero";

const highlights = [
  {
    label: "Atendimento em Português",
    description: "Converse sobre suas mestas financeiras no seu idioma",
    icon: MessageCircle,
  },
  {
    label: "Clareza e Confiança",
    description: "Explicações simples e honestas, sem complicações.",
    icon: Languages,
  },
  {
    label: "Soluções para Famílias",
    description: "Proteção e tranquilidade para seus entes queridos.",
    icon: ShieldCheck,
  },
  {
    label: "Baseado na Colúmbia Britânica",
    description: "Apoiando orgulhosamente os recém-chegados em B.C.",
    icon: MapPin,
  },
];

export function FinancialPortugueseClientsHero() {
  return (
    <FinancialHero
      eyebrow="Clientes que falam Português"
      title="Orientação Financeira em Português"
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          Eu ajudo famílias brasileiras e de língua portuguesa, profissionais e
          recém-chegados no Canadá a entenderem soluções de seguros e
          financeiras com clareza e confiança - no seu idioma, para um amanhã
          mais brilhante.
        </p>
      }
      highlights={highlights}
    />
  );
}
