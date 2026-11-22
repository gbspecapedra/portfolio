import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { contactEmail } from "@/data/contact-info";
import { homeSectionIds, legalPages } from "@/data/site";
import { legalPageMetadata } from "@/lib/seo";

const page = legalPages.accessibility;

export const metadata = legalPageMetadata(
  page,
  "Gisele Pecapedra’s accessibility commitment, WCAG 2.2 Level AA target, accessibility features and ways to report barriers.",
);

export default function AccessibilityPage() {
  return (
    <LegalPage title={page.title} updated="2026-11-21">
      <section>
        <h2>My commitment</h2>
        <p>
          I want people with disabilities to be able to read my work, navigate
          this portfolio and get in touch. My target is{" "}
          <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2 Level AA</a>. I use it
          to guide design, development and testing.
        </p>
      </section>
      <section>
        <h2>Accessibility features</h2>
        <ul>
          <li>
            Semantic HTML, headings in a logical order and descriptive labels
            help people navigate with screen readers.
          </li>
          <li>
            Links, buttons and forms support keyboard navigation, with visible
            focus indicators to show which control is active.
          </li>
          <li>
            Layouts adapt to small screens and are designed to reflow as text is
            enlarged. Text and controls use colours chosen for contrast in both
            themes.
          </li>
          <li>
            Interface effects respect the browser’s reduced-motion preference
            where supported.
          </li>
          <li>
            Contact fields have visible labels, required-field validation and
            submission feedback, including errors and success messages.
          </li>
        </ul>
      </section>
      <section>
        <h2>Testing and limitations</h2>
        <p>
          I use automated accessibility scans and browser tests to check
          selected pages, keyboard interactions and form feedback. These checks
          cover part of the site. Manual review with screen readers and other
          assistive technologies is still pending, so conformance has yet to be
          established. I use test findings and feedback to guide improvements.
        </p>
        <p>
          Linked demos and other external sites may have their own accessibility
          barriers. If you have trouble accessing a project or using this
          portfolio, I can help you find another way to get the information.
        </p>
      </section>
      <section>
        <h2>Accessibility feedback</h2>
        <p>
          If you encounter a barrier, use the{" "}
          <Link href={`/#${homeSectionIds.contact}`}>contact section</Link> or{" "}
          <a href={`mailto:${contactEmail}`}>email me directly</a>. Please include
          the page address and what you were trying to do. If you’re comfortable
          sharing them, details about your browser or assistive technology can
          help me investigate.
        </p>
      </section>
    </LegalPage>
  );
}
