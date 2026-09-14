import type { Metadata } from "next";

import { criticalIllnessServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";

export const metadata: Metadata = {
  title: "Critical Illness Insurance",
  description:
    "Explore critical illness insurance options with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialCriticalIllnessRoute() {
  return <FinancialServicePage content={criticalIllnessServicePageContent} />;
}
