import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { homeSectionIds, legalPages } from "@/data/site";
import { getSiteSettings } from "@/lib/prismic/content";
import { legalPageMetadata } from "@/lib/seo";

const page = legalPages.privacy;

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return legalPageMetadata(page, `How ${settings.name}’s portfolio handles contact information, uses Google Analytics, and lets you manage analytics cookies.`, settings);
}

export default async function PrivacyPage() {
  const settings = await getSiteSettings();
  return (
    <LegalPage title={page.title} updated="2026-11-21">
      <section>
        <h2>About this policy</h2>
        <p>
          I’m {settings.name}, a frontend engineer based in British Columbia, Canada.
          This portfolio shares my work and provides a way to contact me. This
          policy explains what information the site collects, how I use it and
          what choices you have.
        </p>
      </section>
      <section>
        <h2>Information collected</h2>
        <ul>
          <li>
            <strong>Contact details.</strong> The contact form asks for your name,
            email address and message. If you email me directly, I receive the
            information you include in your email.
          </li>
          <li>
            <strong>Website usage.</strong> With your permission, Google Analytics
            collects information about visits and interactions.
          </li>
          <li>
            <strong>Website operation.</strong> Your browser stores your theme and
            analytics choice on your device. Vercel, which hosts the site, may
            process request information such as your IP address and browser details
            to deliver and protect the site.
          </li>
        </ul>
      </section>
      <section>
        <h2>Google Analytics</h2>
        <p>
          I use Google Analytics to understand which pages people visit and how
          they use the portfolio. If you accept analytics, Google may collect page
          views, interactions, session information, approximate location and
          browser or device details. First-party cookies such as <code>_ga</code>{" "}
          and <code>_ga_*</code> store identifiers that help distinguish browsers
          and sessions. See{" "}
          <a href="https://support.google.com/analytics/answer/11593727">
            what Google Analytics collects
          </a>.
        </p>
        <p>
          Analytics is off until you accept it. You can accept or reject it on
          your first visit and change your choice at any time using <strong>Manage
          Cookies</strong> in the footer. Turning analytics off stops new tracking
          and removes the Google Analytics cookies this site can access. Google may
          still receive events queued while analytics was on. Your browser keeps
          your updated choice.
        </p>
      </section>
      <section>
        <h2>Formspree</h2>
        <p>
          Formspree processes the name, email address and message submitted
          through the contact form when it is enabled. I use this information to
          respond to your enquiry. Submitting the form does not sign you up for
          marketing. For details on how the service handles submissions, see the{" "}
          <a href="https://formspree.io/legal/privacy-policy/">Formspree privacy policy</a>.
        </p>
      </section>
      <section>
        <h2>Portfolio content</h2>
        <p>
          Prismic stores the portfolio’s public copy and images. The site fetches
          them on the server. An active editorial preview loads Prismic’s preview
          toolbar and uses cookies to display draft content.
        </p>
      </section>
      <section>
        <h2>Data security</h2>
        <p>
          I take reasonable steps to protect the information you share. No
          internet transmission or storage method can be guaranteed completely secure.
        </p>
      </section>
      <section>
        <h2>Retention and third-party services</h2>
        <p>
          I aim to keep enquiry information only as long as needed to respond,
          follow up or meet applicable requirements. Google Analytics, Formspree,
          Prismic and Vercel handle information for the services described above.
          Their own policies and settings affect how long they retain information.
        </p>
      </section>
      <section>
        <h2>Your privacy rights</h2>
        <p>
          You can ask to access, correct or delete personal information I hold
          about you. I’ll handle requests in line with applicable privacy
          requirements and may need to verify your identity before responding.
        </p>
      </section>
      <section>
        <h2>Contact and updates</h2>
        <p>
          For questions or privacy requests, use the{" "}
          <Link href={`/#${homeSectionIds.contact}`}>contact section</Link>. I’ll
          update the date at the top of this page when I revise the policy.
        </p>
      </section>
    </LegalPage>
  );
}
