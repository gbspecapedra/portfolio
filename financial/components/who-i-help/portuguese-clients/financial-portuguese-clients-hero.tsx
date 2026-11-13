import { MapPin, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";

import { FinancialHero } from "@/financial/components/financial-hero";
import ConsultationBookingButton from "../../calendar/consultation-booking-button";

const highlights = [
  {
    label: "Atendimento em português",
    description: "Converse sobre suas dúvidas e objetivos no seu idioma.",
    icon: MessageCircle,
  },
  {
    label: "Clareza e confiança",
    description: "Explicações simples e honestas, sem complicação.",
    icon: UsersRound,
  },
  {
    label: "Suporte para famílias",
    description: "Soluções que protegem o que mais importa para você.",
    icon: ShieldCheck,
  },
  {
    label: "Atendimento na Colúmbia Britânica",
    description:
      "Com orgulho, atendendo brasileiros e famílias de língua portuguesa em toda a B.C.",
    icon: MapPin,
  },
];

export function FinancialPortugueseClientsHero() {
  return (
    <FinancialHero
      eyebrow="Clientes de língua portuguesa"
      title="Atendimento em português para brasileiros e outras famílias de língua portuguesa no Canadá."
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          Decisões sobre seguros e planejamento financeiro ficam mais simples
          quando podemos conversar no seu próprio idioma. Eu ajudo você e sua
          família com clareza, cuidado e orientação personalizada - em
          português.
        </p>
      }
      primaryButtonLabel="Agendar uma consulta"
      primaryButton={({ className, children }) => (
        <ConsultationBookingButton className={className}>
          {children}
        </ConsultationBookingButton>
      )}
      secondaryButtonLabel="Explorar serviços"
      secondaryButtonHref="#servicos"
      highlights={highlights}
    />
  );
}
