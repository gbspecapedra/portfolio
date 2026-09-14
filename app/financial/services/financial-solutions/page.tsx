import type { Metadata } from "next";

import { financialSolutionsServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";

export const metadata: Metadata = {
  title: "Financial Solutions",
  description:
    "Explore financial solutions with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialSolutionsRoute() {
  return (
    <FinancialServicePage content={financialSolutionsServicePageContent} />
  );
}
