import { Languages, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

import { FinancialHero } from "@/financial/components/financial-hero";

const highlights = [
  {
    label: "Clear Guidance",
    description: "Simple, honest explanations in plain language.",
    icon: MessageCircle,
  },
  {
    label: "Bilingual Support",
    description: "English & Portuguese (Ingles e Portugues).",
    icon: Languages,
  },
  {
    label: "Solutions for Families",
    description: "Protection and peace of mind for your loved ones.",
    icon: ShieldCheck,
  },
  {
    label: "Based in British Columbia",
    description: "Proudly supporting newcomers in B.C.",
    icon: MapPin,
  },
];

export function FinancialNewcomersHero() {
  return (
    <FinancialHero
      eyebrow="Who I Help"
      title="Financial Guidance for Newcomers to Canada"
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          I help newcomers and immigrant families understand insurance and
          financial options in Canada with clarity, confidence, and personalized
          support - so you can focus on building the life you envision here.
        </p>
      }
      highlights={highlights}
    />
  );
}
