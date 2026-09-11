import { MessageCircle, ShieldCheck, UsersRound, MapPin } from "lucide-react";
import { FinancialHero } from "@/financial/components/financial-hero";

const highlights = [
  {
    label: "Clear Answers",
    description: "Straightforward information you can trust.",
    icon: UsersRound,
  },
  {
    label: "Bilingual Support",
    description: "English & Portuguese at your comfort level.",
    icon: ShieldCheck,
  },
  {
    label: "Serving British Columbia",
    description: "In-person and virtual consultations available.",
    icon: MapPin,
  },
  {
    label: "No-Pressure Guidance",
    description: "Supportive advice, always focused on your best interests.",
    icon: MessageCircle,
  },
];

export function FinancialFaqHero() {
  return (
    <FinancialHero
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          Here you&apos;ll find clear, helpful answers to common questions about
          insurance, consultations, and next steps. My goal is to make things
          simple and transparent so you can feel informed and confident about
          your financial journey.
        </p>
      }
      highlights={highlights}
    />
  );
}
