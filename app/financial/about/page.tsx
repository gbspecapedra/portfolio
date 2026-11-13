import type { Metadata } from "next";

import { FinancialAboutPage } from "@/financial/pages/financial-about-page";

export const metadata: Metadata = {
  title: "About Gisele",
  description:
    "Meet Gisele Pecapedra and learn about her personal approach to insurance and financial planning.",
};

export default function FinancialAboutRoute() {
  return <FinancialAboutPage />;
}
