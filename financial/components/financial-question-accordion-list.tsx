"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export type FinancialQuestionAccordionItem = {
  question: string;
  answer: string;
};

type FinancialQuestionAccordionListProps = {
  items: FinancialQuestionAccordionItem[];
  idPrefix: string;
};

export function FinancialQuestionAccordionList({
  items,
  idPrefix,
}: FinancialQuestionAccordionListProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((currentItems) =>
      currentItems.includes(id)
        ? currentItems.filter((item) => item !== id)
        : [...currentItems, id],
    );
  };

  return (
    <div className="grid gap-2.5">
      {items.map((item, index) => {
        const itemId = `${idPrefix}-${index}`;
        const isOpen = openItems.includes(itemId);

        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_8px_24px_rgba(16,33,59,0.035)]"
          >
            <button
              type="button"
              onClick={() => toggleItem(itemId)}
              className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-left font-serif text-lg font-semibold leading-tight text-[#10213b] transition-colors hover:bg-[#f8faf6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b89b5e] sm:px-5"
              aria-expanded={isOpen}
              aria-controls={`${itemId}-answer`}
            >
              <span>{item.question}</span>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eef2ec] text-[#526f46]">
                <Plus
                  className={`size-4 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                />
              </span>
            </button>

            {isOpen && (
              <div
                id={`${itemId}-answer`}
                className="px-4 pb-4 text-sm leading-6 text-[#617087] sm:px-5 sm:text-base sm:leading-7"
              >
                {item.answer}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
