import { FinancialProfessionalsPage } from "@/financial/pages/financial-professionals-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionals",
  description:
    "Financial guidance for growing families in British Columbia, including insurance, RESP planning, and long-term protection.",
};

export default function FinancialProfessionalsRoute() {
  return <FinancialProfessionalsPage />;
}
