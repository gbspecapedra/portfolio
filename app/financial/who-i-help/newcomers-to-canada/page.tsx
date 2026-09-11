import type { Metadata } from "next";

import { FinancialNewcomersPage } from "@/financial/pages/financial-newcomers-page";

export const metadata: Metadata = {
  title: "Newcomers to Canada",
  description:
    "Insurance and financial guidance for newcomers and immigrant families in British Columbia.",
};

export default function FinancialNewcomersRoute() {
  return <FinancialNewcomersPage />;
}
