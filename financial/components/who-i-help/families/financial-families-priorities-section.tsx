import {
  BarChart3,
  GraduationCap,
  Heart,
  Shield,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FinancialPrioritiesSection } from "../components/financial-priorities-section";

type Priority = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const priorities: Priority[] = [
  {
    title: "Replacing income if something happens to a parent",
    description:
      "Help keep your family financially secure, even during the unexpected.",
    icon: UsersRound,
  },
  {
    title: "Protecting children and major financial commitments",
    description:
      "Help ensure your children's well-being and be prepared for mortgages and other key obligations.",
    icon: Shield,
  },
  {
    title: "Preparing for serious illness or disability",
    description:
      "Get the support you need to focus on what matters most - your health and your family.",
    icon: Heart,
  },
  {
    title: "Saving for education through an RESP",
    description: "Help give your children more opportunities for the future.",
    icon: GraduationCap,
  },
  {
    title: "Building longer-term financial security",
    description: "Create stability today and more options tomorrow.",
    icon: BarChart3,
  },
];

export function FinancialFamiliesPrioritiesSection() {
  return (
    <FinancialPrioritiesSection
      eyebrow="Your Family's Priorities"
      title="What matters most to your family?"
      description="Every family is different, but these are some of the key priorities I often help families plan for:"
      priorities={priorities}
    />
  );
}
