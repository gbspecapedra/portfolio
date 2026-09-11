import Image from "next/image";
import { CircleCheck } from "lucide-react";

const concerns = [
  "Building financial stability",
  "Understanding your options",
  "Protecting your family",
  "Planning for your children",
  "Creating a bright future in Canada",
];

export function FinancialPortugueseClientsConcernsBanner() {
  return (
    <section
      aria-labelledby="portuguese-clients-concerns-title"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#dfe6dc] bg-[#fbfbf7]"
    >
      <div className="grid lg:min-h-[18rem] lg:grid-cols-[42%_58%]">
        <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:min-h-full">
          <Image
            src="/financial/family-guidance-banner-v2.png"
            alt="A newcomer family smiling together near the Vancouver waterfront"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[72%_center]"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.18)_45%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />
          <p
            className="pointer-events-none absolute left-7 top-8 max-w-[15rem] rotate-[-8deg] font-[cursive] text-2xl italic leading-[1.1] text-[#526f46] drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)] sm:left-10 sm:text-3xl lg:left-12"
            aria-hidden="true"
          >
            New country.
            <span className="block">Bright possibilities.</span>
            <span className="ml-28 block text-4xl not-italic leading-none">
              ♡
            </span>
          </p>
        </div>

        <div className="flex items-center px-4 py-10 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,0.72fr)] lg:items-center xl:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
                Common Concerns for Portuguese Clients
              </p>
              <h2
                id="portuguese-clients-concerns-title"
                className="mt-3 font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
              >
                You&apos;re Not Alone
              </h2>
              <p className="mt-5 text-base leading-7 text-[#617087] sm:text-lg">
                Starting a new chapter in Canada can bring many questions, from
                understanding how things work, to finding the right protection
                for your family, to planning for the future. I&apos;m here to
                make the process simpler, clearer and less overwhelming, so you
                can move forward with confidence.
              </p>
            </div>

            <ul className="grid gap-3 text-base font-medium text-[#617087]">
              {concerns.map((concern) => (
                <li key={concern} className="flex items-start gap-3">
                  <CircleCheck
                    className="mt-0.5 size-5 shrink-0 fill-[#526f46] text-white"
                    aria-hidden="true"
                  />
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
