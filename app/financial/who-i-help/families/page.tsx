import type { Metadata } from "next";

import { FinancialFamiliesPage } from "@/financial/pages/financial-families-page";

export const metadata: Metadata = {
  title: "Families",
  description:
    "Financial guidance for growing families in British Columbia, including insurance, RESP planning, and long-term protection.",
};

export default function FinancialFamiliesRoute() {
  return <FinancialFamiliesPage />;
}
