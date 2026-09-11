import type { LucideIcon } from "lucide-react";
import { Phone, Mail, MapPin, Globe2 } from "lucide-react";

type ContactMethod = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

const contactMethods: ContactMethod[] = [
  {
    label: "Phone",
    value: "(604) 555-0123",
    description: "Call or text - I'd love to hear from you.",
    icon: Phone,
  },
  {
    label: "Email",
    value: "teampecapedra@gmail.com",
    description: "I typically respond within 24 hours.",
    icon: Mail,
  },
  {
    label: "Service Area",
    value: "Serving British Columbia",
    description: "In-person and virtual consultations available.",
    icon: MapPin,
  },
  {
    label: "Languages",
    value: "English & Portuguese",
    description: "Atendimento tambem em Portugues.",
    icon: Globe2,
  },
];

export function FinancialContactDetails() {
  return (
    <section
      id="contact-details"
      aria-label="Contact details"
      className="border-b border-[#dfe6dc] bg-white px-4 py-7 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;

          return (
            <article
              key={method.label}
              className={`flex gap-3.5 lg:px-5 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#dfe6dc]"} ${index === contactMethods.length - 1 ? "lg:pr-0" : ""}`}
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ec] text-[#526f46]">
                <Icon className="size-8 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div className="min-w-0 pt-1">
                <h2 className="font-serif text-xl font-semibold leading-tight text-[#10213b]">
                  {method.label}
                </h2>
                <p className="mt-1 text-base font-semibold leading-snug text-[#10213b]">
                  {method.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#617087] sm:text-base">
                  {method.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
