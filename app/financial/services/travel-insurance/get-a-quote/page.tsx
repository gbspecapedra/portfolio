import type { Metadata } from "next";

import { FinancialTravelInsuranceQuotePage } from "@/financial/pages/financial-travel-insurance-quote-page";

export const metadata: Metadata = {
  title: "Travel Insurance Quote",
  description:
    "Compare travel insurance quote options for Canadians travelling abroad, visitors to Canada, Super Visa visitors, students, seniors and frequent travellers.",
};

export default function FinancialTravelInsuranceQuoteRoute() {
  return <FinancialTravelInsuranceQuotePage />;
}
