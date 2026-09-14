import type { Metadata } from "next";

import { respServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";

export const metadata: Metadata = {
  title: "RESP",
  description:
    "Explore RESP options with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialRESPRoute() {
  return <FinancialServicePage content={respServicePageContent} />;
}
