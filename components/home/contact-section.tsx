import { contactEmail, contactLinks } from "@/data/contact-info";
import { homeSectionIds } from "@/data/site";

import { ContactForm } from "./contact-form";

const links = [contactLinks.email, contactLinks.linkedin, contactLinks.github];

const sprigLeaves = [
  "right-[24%] bottom-[16%] h-[21%] w-[48%] -rotate-48",
  "right-[31%] bottom-[35%] h-[21%] w-[54%] -rotate-11",
  "right-[26%] bottom-[43%] h-[18%] w-[38%] rotate-35",
  "right-[19%] bottom-[47%] h-[23%] w-[51%] rotate-85",
  "right-[15%] bottom-[18%] h-[15%] w-[32%] rotate-91",
];

export function ContactSection() {
  const configuredFormId = process.env.FORMSPREE_FORM_ID?.trim();
  const formId = configuredFormId && /^[a-z0-9]+$/i.test(configuredFormId)
    ? configuredFormId
    : undefined;

  return (
    <section
      id={homeSectionIds.contact}
      aria-labelledby="contact-heading"
      className="isolate mt-[clamp(0.75rem,1.25vw,1.25rem)] scroll-mt-28 overflow-clip bg-[radial-gradient(ellipse_at_70%_35%,var(--contact-wash),transparent_68%)] pt-[clamp(2.25rem,3vw,3rem)] pb-[clamp(3.25rem,4.3vw,4rem)] [--contact-wash:color-mix(in_srgb,var(--brand-clay)_6%,transparent)]"
    >
      <div className="mx-auto grid max-w-[91rem] items-center gap-[clamp(2rem,5vw,5rem)] px-4 min-[30rem]:px-6 min-[52rem]:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] min-[52rem]:items-start min-[75rem]:px-[clamp(2.75rem,4vw,3.75rem)]">
        <div>
          <p className="mb-2.5 text-sm/normal font-[750] tracking-[0.2em] text-brand-clay uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-[length:clamp(2.125rem,3.5vw,3.25rem)] leading-[1.1] font-bold tracking-[-0.04em] text-balance text-[#252237] font-editorial dark:text-foreground"
          >
            Let’s work together.
          </h2>
          <p className="mt-4 max-w-[37ch] text-[length:clamp(1rem,1.5vw,1.25rem)] leading-[1.45]">
            I’m always open to new opportunities, interesting challenges or a
            good conversation about frontend, product and accessibility.
          </p>
          <ul className="mt-[1.125rem] grid gap-2" role="list">
            {links.map(({ label, icon: Icon, ...link }) => {
              const { href } = link;
              if (!href) return null;

              const address = href.startsWith("mailto:")
                ? contactEmail
                : href.replace(/^https?:\/\/(www\.)?/, "");

              return (
                <li key={label}>
                  <a
                    {...link}
                    className="group inline-flex max-w-full items-center gap-[clamp(0.875rem,1.65vw,1.5rem)] rounded-[0.875rem] text-[length:clamp(0.9375rem,1.2vw,1.125rem)] leading-[1.35]"
                  >
                    <span
                      className="grid aspect-square w-[clamp(2.75rem,3.75vw,3.5rem)] shrink-0 place-items-center rounded-[0.875rem] bg-[#fae9df] text-brand-clay dark:bg-accent [&>svg]:h-auto [&>svg]:w-[55%]"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <span className="grid min-w-0">
                      <strong>{label}</strong>
                      <span className="wrap-anywhere text-muted-foreground group-hover:text-accent-foreground group-hover:underline group-hover:underline-offset-[0.2em]">
                        {address}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative min-w-0 min-[52rem]:mt-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <span className="absolute inset-[-9%_48%_30%_-12%] -rotate-16 rounded-[56%_44%_50%_50%] bg-(--contact-wash) min-[52rem]:start-[-29%]" />
            <span className="absolute inset-[40%_48%_4%_-8%] -rotate-28 rounded-[62%_38%_58%_42%] bg-(--contact-wash) min-[52rem]:start-[-22%]" />
          </div>
          <ContactForm email={contactEmail} formId={formId} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2.5 -bottom-10.5 aspect-square w-[clamp(6rem,12vw,11rem)] [--contact-leaf:#a4a787] [--contact-leaf-vein:#777e59] before:absolute before:top-[36%] before:left-[72%] before:h-[64%] before:w-[12%] before:-rotate-17 before:rounded-[70%_0_0] before:border-l-2 before:border-(--contact-leaf-vein) before:opacity-70 before:content-[''] min-[75rem]:-right-7 dark:[--contact-leaf:#8f9982] dark:[--contact-leaf-vein:#626d56]"
          >
            {sprigLeaves.map((placement) => (
              <span
                key={placement}
                className={`${placement} absolute origin-bottom-right rounded-[0_100%_0_100%] bg-[linear-gradient(153deg,transparent_53%,color-mix(in_srgb,var(--contact-leaf-vein)_26%,transparent)_55%,transparent_57%),linear-gradient(145deg,var(--contact-leaf),color-mix(in_srgb,var(--contact-leaf)_68%,var(--contact-leaf-vein)))] opacity-85`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
