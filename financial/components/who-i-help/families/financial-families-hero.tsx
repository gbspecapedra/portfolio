import { Leaf, MapPin, MessageCircle, UsersRound } from "lucide-react";

import { FinancialHero } from "@/financial/components/financial-hero";

const highlights = [
  {
    label: "Family-focused guidance",
    description: "Your family's goals come first.",
    icon: UsersRound,
  },
  {
    label: "Clear explanations",
    description: "No jargon, just clarity.",
    icon: MessageCircle,
  },
  {
    label: "Long-term support",
    description: "Through life's changing seasons.",
    icon: Leaf,
  },
  {
    label: "Based in British Columbia",
    description: "Local insight, brighter futures.",
    icon: MapPin,
  },
];

export function FinancialFamiliesHero() {
  return (
    <FinancialHero
      eyebrow="For Families"
      title="Financial Guidance for Growing Families"
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          I help parents and households review their priorities, protect what
          matters most, and build long-term financial security - so you can
          focus on what matters most: your family.
        </p>
      }
      primaryButtonLabel="Book a Family Consultation"
      secondaryButtonLabel="Explore Services"
      highlights={highlights}
    />
  );
}
