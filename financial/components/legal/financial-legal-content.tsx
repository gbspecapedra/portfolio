import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Leaf,
} from "lucide-react";

import type { FinancialLegalPageContent } from "@/financial/pages/financial-legal-page";

type FinancialLegalContentProps = Pick<
  FinancialLegalPageContent,
  | "items"
  | "effectiveAt"
  | "updatedAt"
  | "sectionLabel"
  | "sectionAriaLabel"
  | "notice"
  | "sidebarPrompt"
>;

function formatUpdatedAt(updatedAt: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(updatedAt));
}

export function FinancialLegalContent({
  items,
  effectiveAt,
  updatedAt,
  sectionLabel,
  sectionAriaLabel,
}: FinancialLegalContentProps) {
  return (
    <section
      aria-label={sectionAriaLabel}
      className="border-b border-[#dfe6dc] bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-[#617087]">
          {effectiveAt && (
            <p className="inline-flex items-center gap-2">
              <CalendarDays
                className="size-4 text-[#526f46]"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-[#10213b]">
                  Effective date:
                </strong>{" "}
                {formatUpdatedAt(effectiveAt)}
              </span>
            </p>
          )}
          <p className="inline-flex items-center gap-2">
            <CalendarDays
              className="size-4 text-[#526f46]"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-[#10213b]">
                Last updated:
              </strong>{" "}
              {formatUpdatedAt(updatedAt)}
            </span>
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-10">
          <aside className="min-w-0 lg:sticky lg:top-24">
            <nav
              aria-label={`${sectionLabel} sections`}
              className="overflow-hidden rounded-md border border-[#dfe6dc] bg-[#f8fafb]"
            >
              <p className="border-l-2 border-[#526f46] bg-[#edf3f6] px-4 py-3 text-sm font-semibold text-[#10213b]">
                {sectionLabel}
              </p>
              <ul className="flex snap-x gap-1 overflow-x-auto p-2 lg:block lg:space-y-0.5 lg:overflow-visible lg:p-2">
                {items.map((item) => (
                  <li key={item.id} className="shrink-0 lg:shrink">
                    <a
                      href={`#${item.id}`}
                      className="block rounded px-3 py-2 text-sm leading-5 text-[#415066] transition-colors hover:bg-white hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f]"
                    >
                      {item.summary}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4 hidden rounded-md bg-[#f1f6f8] p-5 lg:block">
              <Leaf className="size-8 text-[#526f46]" aria-hidden="true" />
              <p className="mt-4 text-sm leading-6 text-[#415066]">
                If you have any questions about this information, please feel
                free to contact me.
              </p>
              <Link
                href="/financial/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#10213b] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f]"
              >
                Get in touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <div className="min-w-0 [overflow-wrap:anywhere]">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  id={item.id}
                  key={item.id}
                  className="scroll-mt-28 border-b border-[#dfe6dc] py-6 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <div className="grid gap-4 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
                    <div className="flex size-14 items-center justify-center rounded-full bg-[#eaf1e9] text-[#526f46]">
                      <Icon
                        className="size-7 stroke-[1.8]"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-semibold leading-tight text-[#123556]">
                        {item.title}
                      </h2>
                      <div className="mt-1.5 space-y-1 text-sm leading-6 text-[#415066] sm:text-base sm:leading-7">
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {item.bullets && (
                          <ul className="list-disc space-y-1 pl-5">
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {item.contactDetails && (
                        <div className="mt-4 flex flex-wrap items-center gap-5 rounded-md bg-[#eef4f7] p-5 text-sm text-[#415066]">
                          <p>{item.contactDetails.role}</p>
                          <p className="font-serif text-xl font-semibold text-[#10213b]">
                            {item.contactDetails.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
