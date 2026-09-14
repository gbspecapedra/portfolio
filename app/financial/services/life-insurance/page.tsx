import type { Metadata } from "next";

import { lifeInsuranceServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";

export const metadata: Metadata = {
  title: "Life Insurance",
  description:
    "Explore life insurance options with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialLifeInsuranceRoute() {
  return <FinancialServicePage content={lifeInsuranceServicePageContent} />;
}
