import type { Metadata } from "next";

import { disabilityInsuranceServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";
import ConsultationBookingButton from "@/financial/components/calendar/consultation-booking-button";

export const metadata: Metadata = {
  title: "Disability Insurance",
  description:
    "Explore disability insurance options with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialDisabilityInsuranceRoute() {
  return (
    <FinancialServicePage
      content={disabilityInsuranceServicePageContent}
      heroSecondaryButton={({ className, children }) => (
        <ConsultationBookingButton className={className}>
          {children}
        </ConsultationBookingButton>
      )}
    />
  );
}
