import type { Metadata } from "next";

import { disabilityInsuranceServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";

export const metadata: Metadata = {
  title: "Disability Insurance",
  description:
    "Explore disability insurance options with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialDisabilityInsuranceRoute() {
  return (
    <FinancialServicePage content={disabilityInsuranceServicePageContent} />
  );
}
