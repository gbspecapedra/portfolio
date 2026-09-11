"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Plus, Globe2 } from "lucide-react";
import { useState } from "react";

const categories = [
  "All Questions",
  "Consultation",
  "Insurance",
  "Travel Insurance",
  "RESP",
  "Newcomers",
  "Portuguese Service",
];

const faqs = [
  {
    id: "free-consultation",
    question: "Is the first consultation free?",
    answer:
      "Yes! The first consultation is completely free and comes with no obligation. It's a chance for us to get to know each other, talk about your goals, and explore how I can help you and your family.",
    category: "Consultation",
  },
  {
    id: "british-columbia",
    question: "Do you only work with clients in British Columbia?",
    answer:
      "I proudly serve clients across British Columbia, with both in-person and virtual options depending on what works best for you.",
    category: "Consultation",
  },
  {
    id: "virtual-meetings",
    question: "Can I meet with you virtually?",
    answer:
      "Yes. Virtual meetings are available, so you can get guidance from wherever you are in British Columbia.",
    category: "Consultation",
  },
  {
    id: "newcomers",
    question: "Do you help newcomers to Canada?",
    answer:
      "Yes. I help newcomers and immigrant families understand insurance and financial options in Canada with clear, supportive guidance.",
    category: "Newcomers",
  },
  {
    id: "portuguese",
    question: "Do you offer service in Portuguese?",
    answer:
      "Yes. I offer support in English and Portuguese so you can have important conversations in the language that feels most comfortable.",
    category: "Portuguese Service",
  },
  {
    id: "insurance-types",
    question: "What kinds of insurance do you help with?",
    answer:
      "I can help with life insurance, critical illness insurance, travel insurance, and related planning for families and individuals.",
    category: "Insurance",
  },
  {
    id: "visitor-travel-insurance",
    question: "Can you help with travel insurance for visitors or family members?",
    answer:
      "Yes! I can help you find travel insurance for visitors to Canada, family members, or your own trips abroad. I'll explain the options, coverage details, and help you choose a plan that fits your needs.",
    category: "Travel Insurance",
  },
  {
    id: "resp",
    question: "What is RESP and who is it for?",
    answer:
      "An RESP is a Registered Education Savings Plan designed to help families save for a child's future education in Canada.",
    category: "RESP",
  },
  {
    id: "right-solution",
    question: "How do I know which solution is right for me?",
    answer:
      "We'll look at your goals, family needs, budget, timeline, and current situation, then compare options in plain language.",
    category: "Insurance",
  },
  {
    id: "no-obligation",
    question: "Is there any obligation after the consultation?",
    answer:
      "No. The consultation is simply a conversation. You'll have the information you need, and you can decide what feels right for you.",
    category: "Consultation",
  },
];

const contactMethods = [
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
    value: "Atendimento tambem em Portugues.",
    description: "Fico feliz em conversar com voce.",
    icon: Globe2,
  },
];

export function FinancialFaqQuickAnswersSection() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openItems, setOpenItems] = useState<string[]>([
    "free-consultation",
    "visitor-travel-insurance",
  ]);

  const visibleFaqs =
    activeCategory === "All Questions"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems((currentItems) =>
      currentItems.includes(id)
        ? currentItems.filter((item) => item !== id)
        : [...currentItems, id],
    );
  };

  return (
    <section
      aria-labelledby="faq-quick-answers-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <h2
            id="faq-quick-answers-title"
            className="font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            Quick Answers to Common Questions
          </h2>
          <p className="mt-2 text-sm font-medium text-[#617087] sm:text-base">
            Select a category or browse all questions below.
          </p>

          <div
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Filter frequently asked questions"
          >
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-9 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-[#526f46] bg-[#526f46] text-white"
                      : "border-[#dfe6dc] bg-[#f8faf6] text-[#617087] hover:border-[#c8d2c3] hover:text-[#526f46]"
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-2.5">
            {visibleFaqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <article
                  key={faq.id}
                  className="overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_8px_24px_rgba(16,33,59,0.035)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-left font-serif text-lg font-semibold leading-tight text-[#10213b] transition-colors hover:bg-[#f8faf6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b89b5e] sm:px-5"
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                  >
                    <span>{faq.question}</span>
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
                      id={`${faq.id}-answer`}
                      className="px-4 pb-4 text-sm leading-6 text-[#617087] sm:px-5 sm:text-base sm:leading-7"
                    >
                      {faq.answer}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <aside className="overflow-hidden rounded-md border border-[#dfe6dc] bg-[#f7f7f3] shadow-[0_16px_42px_rgba(16,33,59,0.055)]">
          <div className="relative h-48 bg-[#e8eee7]">
            <Image
              src="/financial/travel-insurance-banner.png"
              alt="Mountain landscape with evergreen trees"
              fill
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover object-[47%_center]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.56))]"
              aria-hidden="true"
            />
            <p
              className="pointer-events-none absolute right-6 top-7 max-w-[11rem] rotate-[-8deg] font-[cursive] text-2xl italic leading-[1.05] text-[#526f46] drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)]"
              aria-hidden="true"
            >
              Good questions
              <span className="block">lead to brighter</span>
              <span className="block">tomorrows.</span>
              <span className="absolute -right-4 bottom-0 font-sans text-3xl not-italic leading-none">
                ♡
              </span>
            </p>
          </div>

          <div className="p-6">
            <h3 className="font-serif text-3xl leading-tight text-[#10213b]">
              Still Have Questions?
            </h3>
            <p className="mt-3 text-base leading-7 text-[#617087]">
              I&apos;m here to help. If you couldn&apos;t find the answer
              you&apos;re looking for, feel free to reach out. I&apos;d be
              happy to chat and provide the information you need.
            </p>

            <div className="mt-5 grid gap-3">
              <Link
                href="/financial/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#526f46] px-5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(82,111,70,0.2)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f7f3]"
              >
                Book a Free Consultation
                <MessageCircle className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="mailto:teampecapedra@gmail.com"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#c8d2c3] bg-white px-5 text-sm font-semibold text-[#526f46] transition-colors hover:bg-[#f8faf6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f7f3]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Send a Message
              </Link>
            </div>

            <div className="mt-7 border-t border-[#dfe6dc] pt-5">
              <p className="font-serif text-lg font-semibold text-[#10213b]">
                Prefer to connect another way?
              </p>
              <div className="mt-4 grid gap-3">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <div key={method.label} className="flex gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#eef2ec] text-[#526f46]">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-tight text-[#10213b]">
                          {method.value}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-[#617087]">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
