import { BookOpen, SearchCheck, ShieldCheck, UsersRound } from "lucide-react";

import { FinancialHero } from "@/financial/components/financial-hero";
import ConsultationBookingButton from "../../calendar/consultation-booking-button";

const highlights = [
  {
    label: "Helpful Guides",
    description: "Plain-language resources for real-life decisions.",
    icon: BookOpen,
  },
  {
    label: "Insurance Clarity",
    description: "Life, illness, travel and education planning topics.",
    icon: ShieldCheck,
  },
  {
    label: "Family Focused",
    description: "Support for families, newcomers and future plans.",
    icon: UsersRound,
  },
  {
    label: "Easy to Explore",
    description: "Search by question, topic or life stage.",
    icon: SearchCheck,
  },
];

export function FinancialGuidesHero() {
  return (
    <FinancialHero
      eyebrow="Guides"
      title="Helpful Guides for a Brighter Tomorrow"
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          Browse practical resources about insurance, education savings and
          family financial protection so you can make confident decisions in
          plain language.
        </p>
      }
      primaryButton={({ className, children }) => (
        <ConsultationBookingButton className={className}>
          {children}
        </ConsultationBookingButton>
      )}
      secondaryButtonLabel="Ask a Question"
      secondaryButtonHref="/financial/contact"
      highlights={highlights}
    />
  );
}
