import {
  MapPin,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { FinancialHero } from "../financial-hero";

const highlights = [
  {
    label: "Personalized Advice",
    description: "Solutions tailored to your needs.",
    icon: UsersRound,
  },
  {
    label: "Multilingual Provider",
    description: "Guidance without language barriers.",
    icon: ShieldCheck,
  },
  {
    label: "Based in British Columbia",
    description: "Proudly serving B.C. communities.",
    icon: MapPin,
  },
  {
    label: "Bilingual Service",
    description: "English & Portuguese.",
    icon: MessageCircle,
  },
];

export function FinancialHomeHero() {
  return (
    <FinancialHero
      eyebrow="Insurance & Financial Solutions"
      title="Protect What You've Built. Plan What Comes Next."
      description={
        <>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#425169] sm:text-xl">
            Personalized insurance and financial solutions for families,
            professionals and newcomers in Canada.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
            Life insurance, critical illness coverage, travel insurance,
            education planning and other financial solutions available in
            English and Portuguese.
          </p>
        </>
      }
      highlights={highlights}
    />
  );
}
