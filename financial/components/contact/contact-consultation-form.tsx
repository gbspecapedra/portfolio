import { ArrowRight, LockKeyhole } from "lucide-react";

export function ContactConsultationForm() {
  return (
    <div className="rounded-md border border-[#e5e9e1] bg-white/78 p-6 shadow-[0_18px_55px_rgba(16,33,59,0.06)] backdrop-blur-sm sm:p-8 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
        Book a Consultation
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

      <form className="mt-7 grid gap-5" action="/financial/contact">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
            <span>
              Full Name <span className="text-[#c35f4f]">*</span>
            </span>
            <input
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="min-h-12 rounded-md border border-[#d8dfd4] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#9aa3af] focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
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
              placeholder="your@email.com"
              className="min-h-12 rounded-md border border-[#d8dfd4] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#9aa3af] focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
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
              placeholder="(604) 555-0123"
              className="min-h-12 rounded-md border border-[#d8dfd4] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#9aa3af] focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
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
              placeholder="Your city (e.g. Vancouver)"
              className="min-h-12 rounded-md border border-[#d8dfd4] bg-white px-4 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#9aa3af] focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#31415b] sm:text-base">
            Service of Interest
            <select
              name="service"
              defaultValue=""
              className="min-h-12 rounded-md border border-[#d8dfd4] bg-white px-4 text-base font-normal text-[#617087] shadow-sm outline-none transition-colors focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
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
              className="min-h-12 rounded-md border border-[#d8dfd4] bg-white px-4 text-base font-normal text-[#617087] shadow-sm outline-none transition-colors focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
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
            className="min-h-32 resize-y rounded-md border border-[#d8dfd4] bg-white px-4 py-3 text-base font-normal text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#9aa3af] focus:border-[#526f46] focus:ring-2 focus:ring-[#b89b5e]/35"
          />
        </label>

        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#526f46] px-7 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.24)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg"
        >
          Book a Free Consultation
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>

        <p className="flex items-center justify-center gap-3 text-center text-sm leading-6 text-[#617087]">
          <LockKeyhole
            className="size-5 shrink-0 text-[#526f46]"
            aria-hidden="true"
          />
          Your information is private and will never be shared with third
          parties.
        </p>
      </form>
    </div>
  );
}
