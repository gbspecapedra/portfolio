import { BarChart4, Heart, House, Shield, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FinancialPrioritiesSection } from "../components/financial-priorities-section";

type Priority = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const priorities: Priority[] = [
  {
    title: "Protecting your income",
    description:
      "Get the coverage you need if you can't work due to illness or injury.",
    icon: Shield,
  },
  {
    title: "Filling gaps in employer benefits",
    description:
      "Understand what's covered and where you may need additional protection.",
    icon: UsersRound,
  },
  {
    title: "Protecting against serious illness",
    description:
      "Help cover the financial impact of a critical illness so you can focus on recovery.",
    icon: Heart,
  },
  {
    title: "Life insurance for loved ones",
    description:
      "Provide for your family, cover debts, or support people who depend on you.",
    icon: House,
  },
  {
    title: "Building retirement savings",
    description:
      "Take advantage of tax-efficient ways to grow your wealth for the future.",
    icon: BarChart4,
  },
];

export function FinancialProfessionalsPrioritiesSection() {
  return (
    <FinancialPrioritiesSection
      eyebrow="Your Priorities"
      title="What matters most to your career and financial life?"
      description="Every professional's situation is unique, but these are some of the key areas I often help clients with:"
      priorities={priorities}
    />
  );
}
