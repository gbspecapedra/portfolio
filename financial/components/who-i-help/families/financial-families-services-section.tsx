import {
  Accessibility,
  BarChart3,
  GraduationCap,
  HeartPulse,
  Umbrella,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FinancialServicesSection } from "../components/financial-services-section";

type StrategyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const strategyItems: StrategyItem[] = [
  {
    title: "Life Insurance",
    description: "Helps replace income and provide for your loved ones.",
    icon: Umbrella,
  },
  {
    title: "Critical Illness Coverage",
    description:
      "Provides a tax-free benefit if you're diagnosed with a covered serious illness.",
    icon: HeartPulse,
  },
  {
    title: "Disability Coverage",
    description:
      "Helps replace your income if you're unable to work due to illness or injury.",
    icon: Accessibility,
  },
  {
    title: "RESP / Education Planning",
    description: "Helps you save for your children's post-secondary dreams.",
    icon: GraduationCap,
  },
  {
    title: "Financial Solutions",
    description:
      "Supports your longer-term goals, from wealth building to a more secure retirement.",
    icon: BarChart3,
  },
];

export function FinancialFamiliesServicesSection() {
  return (
    <FinancialServicesSection
      eyebrow="How It Works Together"
      title="A complete family protection strategy"
      description="These solutions work best together as part of a coordinated plan, helping to protect your family today and build for tomorrow."
      strategyItems={strategyItems}
    />
  );
}
