import {
  Accessibility,
  BarChart3,
  Database,
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
    description:
      "Provides financial support for your loved ones and helps cover debts.",
    icon: Umbrella,
  },
  {
    title: "Critical Illness Coverage",
    description:
      "Gives you a financial buffer if you're diagnosed with a serious illness.",
    icon: HeartPulse,
  },
  {
    title: "Disability Coverage",
    description:
      "Helps replace your income so you can focus on recovery, not financial stress.",
    icon: Accessibility,
  },
  {
    title: "RRSP / TFSA / FHSA",
    description:
      "Tax-advantage accounts to help you save, invest and reach your goals faster.",
    icon: Database,
  },
  {
    title: "Retirement / Long-Term Planning",
    description:
      "A strategy to help you maintain financial independence and the lifestyle you want.",
    icon: BarChart3,
  },
];

export function FinancialProfessionalsServicesSection() {
  return (
    <FinancialServicesSection
      eyebrow="How I Work Together"
      title="A complete strategy for long-term financial security"
      description="These pieces work best together as part of a coordinated plan, helping you protect your income and build the future you want."
      strategyItems={strategyItems}
    />
  );
}
