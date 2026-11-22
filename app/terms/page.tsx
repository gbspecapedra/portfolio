import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { homeSectionIds, legalPages } from "@/data/site";
import { legalPageMetadata } from "@/lib/seo";

const page = legalPages.terms;

export const metadata = legalPageMetadata(
  page,
  "Terms for using Gisele Pecapedra’s portfolio, including content ownership, permitted use and third-party materials.",
);

export default function TermsPage() {
  return (
    <LegalPage title={page.title} updated="2026-11-21">
      <section>
        <h2>Using this portfolio</h2>
        <p>
          By using this site, you agree to these terms. I share my work and
          professional experience here for general information. You’re welcome
          to browse the site, link to it and share brief excerpts with credit.
          Please respect the rights of anyone whose work appears here and avoid
          interfering with the operation of the site.
        </p>
      </section>
      <section>
        <h2>Content and ownership</h2>
        <p>
          I own the original text, design and code I create for this site,
          unless otherwise indicated. The portfolio’s source code is licensed
          under the MIT license included in its repository. Third-party
          trademarks, logos, screenshots and other project assets belong to
          their respective owners or licensors.
        </p>
      </section>
      <section>
        <h2>Projects and professional experience</h2>
        <p>
          Case studies describe my role and contributions. Some projects were
          created with teams, employers or clients. They retain their rights in
          their proprietary code, assets and other material.
        </p>
      </section>
      <section>
        <h2>External links</h2>
        <p>
          Some links lead to third-party websites or live demos. Those sites
          have their own content, terms and privacy practices. The people who
          operate them are responsible for their availability and content.
        </p>
      </section>
      <section>
        <h2>Availability and responsibility</h2>
        <p>
          I aim to keep the portfolio accurate and available. Content can change
          and errors or interruptions can occur. To the extent permitted by
          applicable law, I’m not responsible for losses arising from reliance
          on the portfolio or use of linked third-party sites.
        </p>
      </section>
      <section>
        <h2>Updates and contact</h2>
        <p>
          I may update these terms as the site changes. The date at the top shows
          when they were last revised. If you have questions or want permission
          to reuse material, use the{" "}
          <Link href={`/#${homeSectionIds.contact}`}>contact section</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
