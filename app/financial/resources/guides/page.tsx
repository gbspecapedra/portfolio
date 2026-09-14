import type { Metadata } from "next";

import { FinancialGuidesPage } from "@/financial/pages/financial-guides-page";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Browse practical guides about life insurance, critical illness insurance, travel insurance, RESP planning, newcomers to Canada and family financial protection.",
};

export default function FinancialGuidesRoute() {
  return <FinancialGuidesPage />;
}
