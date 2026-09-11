import Image from "next/image";
import { ShieldCheck, Sprout, UsersRound } from "lucide-react";

const values = [
  {
    label: "Client-Focused",
    description: "Your goals come first",
    icon: UsersRound,
  },
  {
    label: "Trusted Guidance",
    description: "Honest and transparent advice",
    icon: ShieldCheck,
  },
  {
    label: "Long-Term Support",
    description: "With you at every stage",
    icon: Sprout,
  },
];

export function FinancialAboutHero() {
  return (
    <section
      aria-labelledby="financial-about-hero-title"
      className="relative isolate overflow-hidden border-b border-[#dfe6dc] bg-[#f5f8f5]"
    >
      <Image
        src="/financial/hero-vancouver-waterfront.png"
        alt="Gisele Pecapedra smiling in front of the Vancouver waterfront"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] sm:object-[66%_center] lg:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_45%,rgba(255,255,255,0.32)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.96)_34%,rgba(255,255,255,0.65)_52%,rgba(255,255,255,0.04)_77%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[47rem] max-w-7xl items-end px-4 pb-10 pt-16 sm:px-6 sm:pb-14 lg:min-h-[41rem] lg:items-center lg:px-8 lg:pb-12 lg:pt-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526f46] sm:text-sm">
            About Gisele
          </p>
          <h1
            id="financial-about-hero-title"
            className="mt-5 max-w-xl font-serif text-4xl leading-[1.08] text-[#10213b] sm:text-5xl lg:text-[3.45rem]"
          >
            People. Protection.
            <br />A Brighter Tomorrow.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#425169] sm:text-lg sm:leading-8">
            I&apos;m Gisele Pecapedra, a financial advisor passionate about
            helping individuals and families feel confident about their future.
            My goal is to make insurance and financial planning simple, clear
            and personalized so you can focus on what truly matters.
          </p>

          <div className="mt-9 grid max-w-2xl gap-7 sm:grid-cols-3 sm:gap-5">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.label}
                  className="flex items-start gap-3 sm:block"
                >
                  <Icon
                    className="mt-0.5 size-8 shrink-0 text-[#526f46] sm:mx-auto sm:mt-0"
                    aria-hidden="true"
                  />
                  <div className="sm:mt-3 sm:text-center">
                    <h2 className="text-sm font-semibold text-[#10213b] sm:text-base">
                      {value.label}
                    </h2>
                    <p className="mt-1 text-sm leading-5 text-[#617087]">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
