import { ShieldCheck, Sprout, UsersRound } from "lucide-react";
import { FinancialHero } from "../financial-hero";

const values = [
  {
    label: "Client-Focused",
    description: "Your goals come first",
    icon: UsersRound,
  },
  {
    label: "Trusted Guidance",
    description: "Honest and transparent advice",
    icon: ShieldCheck,
  },
  {
    label: "Long-Term Support",
    description: "With you at every stage",
    icon: Sprout,
  },
];

export function FinancialAboutHero() {
  return (
    <FinancialHero
      eyebrow="About Gisele"
      title="People. Protection. A Brighter Tomorrow."
      description={
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
          I&apos;m Gisele Pecapedra, a financial advisor passionate about
          helping individuals and families feel confident about their future. My
          goal is to make insurance and financial planning simple, clear and
          personalized so you can focus on what truly matters.
        </p>
      }
      values={values}
      isCTAbuttonVisible={false}
    />
  );
}
