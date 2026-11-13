import type { Metadata } from "next";

import { FinancialFaqPage } from "@/financial/pages/financial-faq-page";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find clear answers to common questions about insurance, consultations, and working with Gisele Pecapedra.",
};

export default function FinancialFaqRoute() {
  return <FinancialFaqPage />;
}
