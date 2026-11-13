import { Leaf, MapPin, MessageCircle, UsersRound } from "lucide-react";

import { FinancialHero } from "@/financial/components/financial-hero";
import ConsultationBookingButton from "../../calendar/consultation-booking-button";

const highlights = [
  {
    label: "Income-focused guidance",
    description: "Protect what you've built.",
    icon: UsersRound,
  },
  {
    label: "Clear explanations",
    description: "No jargon, just clarity.",
    icon: MessageCircle,
  },
  {
    label: "Long-term strategy",
    description: "For today and what's next.",
    icon: Leaf,
  },
  {
    label: "Based in British Columbia",
    description: "Local insight, brighter futures.",
    icon: MapPin,
  },
];

export function FinancialProfessionalsHero() {
  return (
    <FinancialHero
      eyebrow="For Professionals"
      title="Financial Guidance for Professionals"
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          I help parents and households review their priorities, protect what
          matters most, and build long-term financial security - so you can
          focus on what matters most: your family.
        </p>
      }
      primaryButtonLabel="Book a Professional Consultation"
      primaryButton={({ className, children }) => (
        <ConsultationBookingButton className={className}>
          {children}
        </ConsultationBookingButton>
      )}
      secondaryButtonLabel="Explore Services"
      highlights={highlights}
    />
  );
}
