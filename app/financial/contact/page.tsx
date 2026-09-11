import type { Metadata } from "next";

import { FinancialContactPage } from "@/financial/pages/financial-contact-page";

export const metadata: Metadata = {
  title: "Contact Gisele",
  description:
    "Start a conversation with Gisele Pecapedra about insurance and financial solutions in British Columbia.",
};

export default function FinancialContactRoute() {
  return <FinancialContactPage />;
}
