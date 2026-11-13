"use client";

import { useForm } from "@formspree/react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import Link from "next/link";

const fieldLabels: Record<string, string> = {
  name: "Full name",
  email: "Email",
  phone: "Phone",
  city: "City",
  service: "Service of interest",
  contactMethod: "Preferred contact method",
  message: "Message",
};

export function ContactConsultationForm() {
  const formId =
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() ?? "mqpqelej";
  const [state, handleSubmit] = useForm(formId || "unconfigured");

  return (
    <div className="rounded-md border border-[#e5e9e1] bg-white/78 p-6 shadow-[0_18px_55px_rgba(16,33,59,0.06)] backdrop-blur-sm sm:p-8 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
        Request a Consultation
      </p>
      <h2
        id="consultation-title"
        className="mt-3 font-serif text-4xl leading-[1.08] text-[#10213b] sm:text-5xl"
      >
        Tell Me a Little About You
      </h2>
      <p className="mt-3 text-lg leading-7 text-[#617087] sm:text-xl">
        Fill out the form below and I&apos;ll be in touch to schedule your free
        consultation.
      </p>

      {state.succeeded ? (
        <div
          role="status"
          className="mt-7 rounded-md border border-[#d8dfd4] bg-[#f7f7f3] p-6 text-[#31415b]"
        >
          <p className="text-lg font-semibold">Thank you for reaching out!</p>
          <p className="mt-2 leading-7">
            Your consultation request has been sent. I&apos;ll be in touch to
            arrange a time that works for you.
          </p>
        </div>
      ) : (
        <form
          className="mt-7 grid gap-5"
          action={formId ? `https://formspree.io/f/${formId}` : undefined}
          method="POST"
          aria-busy={state.submitting}
          onSubmit={(event) => {
            if (!formId || state.submitting) {
              event.preventDefault();
              return;
            }

            return handleSubmit(event);
          }}
        >
          <input
            type="hidden"
            name="_subject"
            value="New consultation request"
          />
          <div hidden aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
              <span>
                Full Name <span className="text-[#c35f4f]">*</span>
              </span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                className="min-h-12 rounded-md border border-[#7b8775] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#617087] focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
              <span>
                Email <span className="text-[#c35f4f]">*</span>
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="your@email.com"
                className="min-h-12 rounded-md border border-[#7b8775] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#617087] focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
              <span>
                Phone <span className="text-[#c35f4f]">*</span>
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(604) 555-0123"
                className="min-h-12 rounded-md border border-[#7b8775] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#617087] focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
              <span>
                City <span className="text-[#c35f4f]">*</span>
              </span>
              <input
                name="city"
                type="text"
                required
                autoComplete="address-level2"
                placeholder="Your city (e.g. Vancouver)"
                className="min-h-12 rounded-md border border-[#7b8775] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#617087] focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
              Service of Interest
              <select
                name="service"
                defaultValue=""
                className="min-h-12 rounded-md border border-[#7b8775] bg-white px-4 text-base font-normal text-[#617087] shadow-sm outline-none transition-colors focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Life Insurance</option>
                <option>Critical Illness Insurance</option>
                <option>Disability Insurance</option>
                <option>Travel Insurance</option>
                <option>RESP & Education Planning</option>
                <option>Financial Solutions</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
              Preferred Contact Method
              <select
                name="contactMethod"
                defaultValue=""
                className="min-h-12 rounded-md border border-[#7b8775] bg-white px-4 text-base font-normal text-[#617087] shadow-sm outline-none transition-colors focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>Phone call</option>
                <option>Text message</option>
                <option>Email</option>
                <option>Video consultation</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
            Your Message <span className="font-normal">(Optional)</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me a bit about your goals or how I can help you..."
              className="min-h-32 resize-y rounded-md border border-[#7b8775] bg-white px-4 py-3 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#617087] focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
            />
          </label>

          {!formId && (
            <p role="status" className="text-sm leading-6 text-[#617087]">
              Online requests are temporarily unavailable. Please email{" "}
              <a
                className="font-semibold underline"
                href="mailto:teampecapedra@gmail.com"
              >
                teampecapedra@gmail.com
              </a>{" "}
              to arrange your consultation.
            </p>
          )}

          {state.errors && (
            <div
              role="alert"
              className="rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
            >
              <p>
                Your request could not be sent. Please try again or email{" "}
                <a
                  className="font-semibold underline"
                  href="mailto:teampecapedra@gmail.com"
                >
                  teampecapedra@gmail.com
                </a>
                .
              </p>
              <ul className="mt-2 list-disc pl-5">
                {state.errors.getFormErrors().map((error, index) => (
                  <li key={`form-${index}`}>{error.message}</li>
                ))}
                {state.errors.getAllFieldErrors().flatMap(([field, errors]) =>
                  errors.map((error, index) => (
                    <li key={`${field}-${index}`}>
                      {fieldLabels[field] || field}: {error.message}
                    </li>
                  )),
                )}
              </ul>
            </div>
          )}

          <button
            type="submit"
            disabled={!formId || state.submitting}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#526f46] px-7 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.24)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
          >
            {state.submitting ? "Sending Request…" : "Request a Free Consultation"}
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>

          <p className="flex items-center justify-center gap-3 text-center text-sm leading-6 text-[#617087]">
            <LockKeyhole
              className="size-5 shrink-0 text-[#526f46]"
              aria-hidden="true"
            />
            <span>
              Your request is processed by Formspree so I can respond. See the{" "}
              <Link className="underline" href="/financial/legal/privacy-policy">
                Privacy Policy
              </Link>
              .
            </span>
          </p>
        </form>
      )}
    </div>
  );
}
