import { MapPin, Globe2, Mail, Phone } from "lucide-react";
import { FinancialHero } from "../financial-hero";

const highlights = [
  {
    label: "Phone",
    value: "(604) 555-0123",
    description: "Call or text - I'd love to hear from you.",
    icon: Phone,
  },
  {
    label: "Email",
    value: "teampecapedra@gmail.com",
    description: "I typically respond within 24 hours.",
    icon: Mail,
  },
  {
    label: "Service Area",
    value: "Serving British Columbia",
    description: "In-person and virtual consultations available.",
    icon: MapPin,
  },
  {
    label: "Languages",
    value: "English & Portuguese",
    description: "Atendimento tambem em Portugues.",
    icon: Globe2,
  },
];

export function FinancialContactHero() {
  return (
    <FinancialHero
      title="Let's Start the Conversation."
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          I&apos;m Gisele Pecapedra, and I help families, professionals and
          newcomers explore insurance and financial solutions with clarity and
          confidence. Whether you&apos;re planning for your family, building
          your career, or starting a new chapter in Canada, I&apos;m here to
          listen and help you find the right solutions for your unique journey.
        </p>
      }
      highlights={highlights}
      secondaryButtonLabel="Get in Touch"
      secondaryButtonHref="#contact-details"
    />
  );
}
