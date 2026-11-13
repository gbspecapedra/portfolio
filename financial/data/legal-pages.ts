import {
  Banknote,
  Building2,
  CircleUserRound,
  ClipboardList,
  Cookie,
  ContactRound,
  Database,
  FilePenLine,
  Handshake,
  IdCard,
  Landmark,
  Layers3,
  Laptop,
  Network,
  Scale,
  Share2,
  ShieldCheck,
  Users,
  Info,
  FileText,
  ExternalLink,
  Ban,
  Copyright,
  LockKeyhole,
  Monitor,
  RefreshCw,
  Gavel,
  Mail,
  ChartNoAxesCombined,
  Star,
  CalendarDays,
  Settings2,
  MailWarning,
  AlertTriangle,
  MessageCircle,
  Eye,
  MonitorCheck,
  Accessibility,
} from "lucide-react";

import type { FinancialLegalPageContent } from "@/financial/pages/financial-legal-page";

export const regulatoryDisclosures = {
  hero: {
    title: "Regulatory Disclosures",
    description:
      "Information about my insurance licence, supervision, professional relationships, and compensation.",
  },
  sectionLabel: "Regulatory Disclosures",
  sectionAriaLabel: "Regulatory disclosure details",
  items: [
    {
      id: "professional-status-and-licensing",
      summary: "Professional Status and Licensing",
      icon: ContactRound,
      title: "Professional Status and Licensing",
      paragraphs: [
        "Gisele Pecapedra holds an individual Life Insurance Agent licence in British Columbia, first effective September 8, 2025, authorizing Life Insurance and Accident & Sickness Insurance activities within its scope.",
        "I currently practise under the supervision of a supervisor recorded with the Insurance Council of British Columbia. My insurance activities remain subject to that supervision, my licence conditions, insurer appointments, and applicable law.",
        "I am licensed in British Columbia only. You can verify my current licence and supervision status through the Insurance Council of British Columbia's public Licensee Directory.",
      ],
    },
    {
      id: "managing-general-agent-relationship",
      summary: "Managing General Agent Relationship",
      icon: Users,
      title: "Managing General Agent Relationship",
      paragraphs: [
        "I conduct insurance business as an individually licensed agent and process applications and related business through a Managing General Agent (MGA). An MGA facilitates access to participating insurers and may provide administrative and compliance support.",
        "My activities remain subject to my approved supervisor, applicable insurer authorizations, and contractual and regulatory requirements. This website is not the corporate website of my MGA.",
      ],
    },
    {
      id: "insurance-company-relationships",
      summary: "Insurance Company Relationships",
      icon: Building2,
      title: "Insurance Company Relationships",
      paragraphs: [
        "I may offer products from more than one insurer where I am appropriately appointed and authorized. Product availability depends on those arrangements, client eligibility, and insurer underwriting.",
        "I am not an employee of an insurance company. Any material insurer relationship or conflict relevant to a particular transaction will be disclosed as required.",
      ],
    },
    {
      id: "how-i-am-compensated",
      summary: "How I Am Compensated",
      icon: Banknote,
      title: "How I Am Compensated",
      paragraphs: [
        "When a policy is purchased through me, compensation is generally paid by the insurer, directly or through my MGA. This may include initial or renewal commissions, bonuses, or other monetary or non-monetary benefits; amounts and arrangements can vary by insurer and product.",
        "Some commissions may be repaid if a policy is cancelled early. I disclose whether compensation is payable for a proposed insurance transaction, as required by law, and can explain the applicable compensation arrangement on request.",
      ],
    },
    {
      id: "conflicts-of-interest",
      summary: "Conflicts of Interest",
      icon: Scale,
      title: "Conflicts of Interest and Other Business Activities",
      paragraphs: [
        "I also work as a software developer for an information technology company. I disclose this other employment for transparency and assess whether it creates any conflict with my insurance responsibilities.",
        "I identify and address real, potential, or apparent conflicts of interest. Where disclosure is required, I provide it in writing and obtain express consent where appropriate; I will not act where a conflict cannot be properly managed.",
      ],
    },
    {
      id: "scope-of-insurance-services",
      summary: "Scope of Insurance Services",
      icon: ShieldCheck,
      title: "Scope of Insurance Services",
      paragraphs: [
        "My authorized services include Life Insurance and Accident & Sickness Insurance, such as life, critical illness, disability, and eligible health-related coverage, subject to my licence, supervision, insurer appointments, and product eligibility.",
        "I do not represent that my insurance licence authorizes securities trading or unrestricted investment advice.",
      ],
    },
    {
      id: "transaction-specific-disclosures",
      summary: "Transaction-Specific Disclosures",
      icon: FileText,
      title: "Transaction-Specific Disclosures",
      paragraphs: [
        "Before an insurance transaction, I provide the disclosures required for that transaction, including the insurer's identity, whether insurer compensation is payable to me, and any relationships beyond the ordinary insurer-agent contractual relationship that must be disclosed.",
        "This website's general disclosures do not replace information or consent required for an individual recommendation or transaction.",
      ],
    },
    {
      id: "website-information",
      summary: "Website Information",
      icon: Laptop,
      title: "Website Information",
      paragraphs: [
        "Website content is general information, not personalized insurance, investment, financial, legal, or tax advice. Products are subject to insurer eligibility, underwriting, policy terms, exclusions, and approval.",
      ],
    },
    {
      id: "complaints-and-regulatory-questions",
      summary: "Complaints and Regulatory Questions",
      icon: Landmark,
      title: "Complaints and Regulatory Questions",
      paragraphs: [
        "Please contact me first with questions or concerns about my services. Concerns about an insurance licensee's conduct may also be raised with the Insurance Council of British Columbia. Questions about policy decisions or claims should generally be directed to the issuing insurer and its complaint process.",
      ],
    },
  ],
  effectiveAt: new Date("2026-11-13").toISOString(),
  updatedAt: new Date("2026-11-13").toISOString(),
} satisfies FinancialLegalPageContent;

export const privacyPolicy = {
  hero: {
    title: "Privacy Policy",
    description:
      "How I collect, use, share, safeguard, and retain personal information in my insurance practice and on this website.",
  },
  sectionLabel: "Privacy Policy",
  sectionAriaLabel: "Privacy policy details",
  items: [
    {
      id: "introduction",
      summary: "Introduction",
      icon: CircleUserRound,
      title: "Introduction",
      paragraphs: [
        "I respect the confidentiality of personal information entrusted to my independent insurance practice. This policy describes my privacy practices, including practices relating to this website, under British Columbia's Personal Information Protection Act (PIPA) and other applicable law.",
      ],
    },
    {
      id: "independent-insurance-agent",
      summary: "My Role as an Independent Insurance Agent",
      icon: IdCard,
      title: "My Role as an Independent Insurance Agent",
      paragraphs: [
        "I am individually licensed in British Columbia for Life Insurance and Accident & Sickness Insurance activities, currently under supervision. I process insurance business through a Managing General Agent (MGA) and participating insurers, which may also handle information under their own privacy obligations.",
      ],
    },
    {
      id: "personal-information-collected",
      summary: "Personal Information I Collect",
      icon: Layers3,
      title: "Personal Information I Collect",
      paragraphs: [
        "Depending on your inquiry or insurance needs, I may collect information reasonably necessary for the purposes explained at or before collection, including:",
      ],
      bullets: [
        "Identity and contact details, such as name, address, email, phone number, and date of birth.",
        "Financial, employment, and insurance information relevant to your needs or application.",
        "Health and medical information where necessary for insurance applications or underwriting.",
        "Communications, consent records, applications, and policy service history.",
        "Website information, such as IP address, device/browser details, pages visited, and cookie data, where applicable.",
      ],
    },
    {
      id: "how-information-is-collected",
      summary: "How Personal Information Is Collected",
      icon: ClipboardList,
      title: "How Personal Information Is Collected",
      paragraphs: [
        "I collect information from you through inquiries, meetings, communications, forms, and applications. With consent or other legal authority, I may also obtain information from my MGA, insurers, medical professionals, and other authorized sources.",
      ],
    },
    {
      id: "how-information-is-used",
      summary: "How Personal Information Is Used",
      icon: Handshake,
      title: "How Personal Information Is Used",
      paragraphs: [
        "I use information to respond to inquiries, assess insurance needs, provide recommendations, prepare and service applications and policies, communicate with you, maintain records, prevent fraud, and comply with legal and regulatory obligations.",
      ],
    },
    {
      id: "consent-and-authorization",
      summary: "Consent and Authorization",
      icon: FilePenLine,
      title: "Consent and Authorization",
      paragraphs: [
        "I obtain consent to collect, use, and disclose personal information unless the law permits or requires otherwise. Express consent is generally appropriate for sensitive information, including medical information. You may withdraw consent on reasonable notice, subject to legal or contractual restrictions; withdrawal may affect my ability to provide services.",
      ],
    },
    {
      id: "disclosure-of-personal-information",
      summary: "Disclosure of Personal Information",
      icon: Share2,
      title: "Disclosure of Personal Information",
      paragraphs: [
        "Where appropriate and authorized, information may be shared with my MGA, insurers, reinsurers, medical or paramedical providers, service providers, other professionals you authorize, or regulators and authorities as required or permitted by law. I do not sell personal information or disclose it for third-party advertising.",
      ],
    },
    {
      id: "third-party-insurance-platforms",
      summary: "Third-Party Platforms and Service Providers",
      icon: Network,
      title: "Third-Party Platforms and Service Providers",
      paragraphs: [
        "My website uses Formspree to process Contact form submissions and Cal.com to arrange appointments. These providers receive and process information you submit to deliver their services. Insurance quotes and applications may also use platforms operated by insurers, my MGA, or authorized service providers. Their own privacy notices may apply when you use those services.",
      ],
    },
    {
      id: "protection-and-security",
      summary: "Protection and Security",
      icon: ShieldCheck,
      title: "Protection and Security",
      paragraphs: [
        "I use reasonable administrative, physical, and technical safeguards suited to the sensitivity of the information. No electronic transmission or storage system can be guaranteed completely secure; please use designated secure channels for sensitive documents.",
      ],
    },
    {
      id: "storage-and-retention",
      summary: "Storage and Retention",
      icon: Database,
      title: "Storage and Retention",
      paragraphs: [
        "I retain information while needed for the purposes collected and for legal, regulatory, contractual, and business recordkeeping. Where information is used to make a decision directly affecting you, PIPA generally requires it to be retained for at least one year after that use. When retention is no longer justified, information is securely deleted, destroyed, or de-identified as appropriate.",
        "My MGA, insurers, and service providers may store or process information in Canada or other jurisdictions, where local laws may apply.",
      ],
    },
    {
      id: "privacy-rights",
      summary: "Your Privacy Rights",
      icon: ShieldCheck,
      title: "Your Privacy Rights",
      paragraphs: [
        "Subject to PIPA, you may request access to your personal information, information about its use and disclosure, or correction of errors. I may verify your identity and request sufficient detail to locate records. Written requests are generally answered within 30 days, subject to permitted extensions and exceptions.",
      ],
    },
    {
      id: "cookies-and-analytics",
      summary: "Cookies and Website Analytics",
      icon: Cookie,
      title: "Cookies and Website Analytics",
      paragraphs: [
        "This website may use essential cookies, analytics, and cookies or similar technologies associated with embedded videos, maps, scheduling tools, or insurer services. Their use depends on the features enabled. See my Cookie Policy for details and browser controls.",
      ],
    },
    {
      id: "information-concerning-minors",
      summary: "Information Concerning Minors",
      icon: Users,
      title: "Information Concerning Minors",
      paragraphs: [
        "This website is intended primarily for adults. Information about children may be collected when necessary for insurance services requested by a parent, guardian, or other authorized person, with appropriate consent or legal authority.",
      ],
    },
    {
      id: "privacy-accountability-and-contact",
      summary: "Privacy Accountability and Contact",
      icon: ContactRound,
      title: "Privacy Accountability and Contact",
      paragraphs: [
        "Gisele Pecapedra is the designated Privacy Contact for this insurance practice. For privacy questions, access or correction requests, or privacy complaints, use the contact details published on my Contact page. I review privacy concerns and can provide information about my privacy practices and complaint process on request.",
      ],
      contactDetails: {
        name: "Gisele Pecapedra",
        role: "Privacy Contact",
      },
    },
    {
      id: "changes-to-privacy-policy",
      summary: "Changes to This Privacy Policy",
      icon: Scale,
      title: "Changes to This Privacy Policy",
      paragraphs: [
        "I may revise this policy as services, practices, or legal requirements change. The posted update date identifies the latest version; material changes will be communicated when required by law.",
      ],
    },
    {
      id: "additional-regulatory-information",
      summary: "Additional Regulatory Information",
      icon: Landmark,
      title: "Additional Regulatory Information",
      paragraphs: [
        "If a privacy concern remains unresolved, you may contact the Office of the Information and Privacy Commissioner for British Columbia about your rights and complaint options under PIPA.",
      ],
    },
  ],
  effectiveAt: new Date("2026-11-13").toISOString(),
  updatedAt: new Date("2026-11-13").toISOString(),
} satisfies FinancialLegalPageContent;

export const termsOfUse = {
  hero: {
    title: "Terms of Use",
    description:
      "Important terms governing website content and insurance-related information.",
  },
  sectionLabel: "Terms of Use",
  sectionAriaLabel: "Website terms and conditions",
  items: [
    {
      id: "about-my-services",
      summary: "About My Services",
      icon: Info,
      title: "About My Services",
      paragraphs: [
        "This website is operated by Gisele Pecapedra, an individually licensed Life Insurance and Accident & Sickness Insurance agent in British Columbia, currently practising under supervision. I process insurance business through a Managing General Agent (MGA). Policies are issued by insurers, not by me.",
        "My services are limited by my licence, supervision, insurer appointments, and applicable law. See Regulatory Disclosures for details.",
      ],
    },
    {
      id: "general-information-only",
      summary: "General Information Only",
      icon: FileText,
      title: "General Information Only",
      paragraphs: [
        "This website provides general information, not individualized insurance, investment, financial, tax, or legal advice. Information may change; recommendations require an assessment of your circumstances and needs.",
      ],
    },
    {
      id: "insurance-products-and-coverage",
      summary: "Insurance Products, Quotes, and Coverage",
      icon: ShieldCheck,
      title: "Insurance Products, Quotes, and Coverage",
      paragraphs: [
        "Quotes and illustrations are estimates unless confirmed by the insurer. Premiums, eligibility, coverage, and claims depend on underwriting and the issuing insurer's policy terms, conditions, and exclusions; no outcome is guaranteed.",
        "An inquiry, quote, or application does not itself put coverage in force. You must provide complete and accurate application information; material omissions or misrepresentations may affect coverage or claims under applicable law.",
      ],
    },
    {
      id: "third-party-websites-and-services",
      summary: "Third-Party Websites and Services",
      icon: ExternalLink,
      title: "Third-Party Websites and Services",
      paragraphs: [
        "Links and embedded services may direct you to insurers, my MGA, or other providers with their own terms and privacy practices. Review those terms before sharing information. Responsibility for those services remains subject to applicable law.",
      ],
    },
    {
      id: "acceptable-website-use",
      summary: "Acceptable Website Use",
      icon: Ban,
      title: "Acceptable Website Use",
      paragraphs: [
        "Use this website lawfully. Do not interfere with its security, attempt unauthorized access, submit deliberately misleading information, or misuse its content. Access may be restricted where appropriate and permitted by law.",
      ],
    },
    {
      id: "intellectual-property",
      summary: "Intellectual Property",
      icon: Copyright,
      title: "Intellectual Property",
      paragraphs: [
        "Original content, branding, and graphics are owned by or licensed to the website operator. Personal, non-commercial use is permitted; other copying or commercial use requires permission unless allowed by law.",
      ],
    },
    {
      id: "privacy-and-information-security",
      summary: "Privacy and Information Security",
      icon: LockKeyhole,
      title: "Privacy and Information Security",
      paragraphs: [
        "See the Privacy Policy, Cookie Policy, and Internet Security page for information about personal information and online risks. Do not send sensitive health or financial documents through unsecured website channels.",
      ],
    },
    {
      id: "website-availability-and-accuracy",
      summary: "Website Availability and Accuracy",
      icon: Monitor,
      title: "Website Availability and Accuracy",
      paragraphs: [
        "I aim to keep information accurate and the website available but cannot guarantee error-free content or uninterrupted access. Content and features may change without notice.",
      ],
    },
    {
      id: "limitation-of-liability",
      summary: "Limitation of Liability",
      icon: Scale,
      title: "Limitation of Liability",
      paragraphs: [
        "To the extent permitted by law, I am not responsible for losses arising solely from website interruptions, technical errors, or reliance on general website content without obtaining appropriate individualized guidance. Nothing here excludes liabilities or consumer and professional rights that cannot legally be limited.",
      ],
    },
    {
      id: "regulatory-compliance",
      summary: "Regulatory Compliance",
      icon: Landmark,
      title: "Regulatory Compliance",
      paragraphs: [
        "I am licensed to conduct insurance activities in British Columbia only. Accessing this website from elsewhere does not authorize me to provide insurance services in another jurisdiction. See Regulatory Disclosures for current professional-status information.",
      ],
    },
    {
      id: "changes-to-these-terms",
      summary: "Changes to These Terms",
      icon: RefreshCw,
      title: "Changes to These Terms",
      paragraphs: [
        "I may revise these Terms as the website or applicable requirements change. The posted update date identifies the current version. Continued use after changes may constitute acceptance to the extent permitted by law.",
      ],
    },
    {
      id: "governing-law",
      summary: "Governing Law",
      icon: Gavel,
      title: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of British Columbia and applicable federal laws of Canada, without restricting statutory rights or access to regulators and legal remedies.",
      ],
    },
    {
      id: "contact-information",
      summary: "Contact Information",
      icon: Mail,
      title: "Contact Information",
      paragraphs: [
        "For questions about these Terms or my services, please use the Contact page. See Regulatory Disclosures for licensing and business-relationship information.",
      ],
    },
  ],
  effectiveAt: new Date("2026-11-13").toISOString(),
  updatedAt: new Date("2026-11-13").toISOString(),
} satisfies FinancialLegalPageContent;

export const cookiePolicy = {
  hero: {
    title: "Cookie Policy",
    description:
      "How this website uses cookies and similar technologies, and the choices available to visitors.",
  },
  sectionLabel: "Cookie Policy",
  sectionAriaLabel: "Cookie policy details",
  items: [
    {
      id: "about-cookies",
      summary: "About Cookies",
      icon: Cookie,
      title: "About Cookies",
      paragraphs: [
        "Cookies are small files that websites may store on your device. Similar technologies can help websites function, remember preferences, and understand how visitors use their pages. Some cookies last only for a browsing session; others remain until they expire or are deleted.",
      ],
    },
    {
      id: "essential-cookies",
      summary: "Essential Cookies",
      icon: ShieldCheck,
      title: "Essential Cookies",
      paragraphs: [
        "This website may use essential cookies or similar technologies to support basic operation, security, and requested features. Disabling them may affect how the website works.",
      ],
    },
    {
      id: "analytics-cookies",
      summary: "Analytics Cookies",
      icon: ChartNoAxesCombined,
      title: "Analytics Cookies",
      paragraphs: [
        "This website uses Google Analytics to understand visitor activity and improve website performance. Google Analytics may use cookies and similar identifiers to collect information such as pages visited, interactions, device and browser details, and approximate location. Non-essential analytics will be used with appropriate consent where required by law.",
      ],
    },
    {
      id: "google-business-reviews",
      summary: "Google Business Reviews",
      icon: Star,
      title: "Google Business Reviews",
      paragraphs: [
        "This website displays customer reviews from Google Business Profile. If reviews are loaded through Google or another third-party widget, that provider may receive technical information about your visit and use cookies or similar technologies. If reviews are displayed as content hosted on this website, viewing them does not necessarily involve third-party cookies.",
      ],
    },
    {
      id: "appointment-scheduling",
      summary: "Appointment Scheduling (Cal.com)",
      icon: CalendarDays,
      title: "Appointment Scheduling (Cal.com)",
      paragraphs: [
        "I use Cal.com (app.cal.com) to allow visitors to schedule calls. When you open or use the scheduler, Cal.com may collect technical information and use cookies or similar technologies to operate its booking service. Booking details, such as your name, email address, selected time, and information you choose to provide, are processed to arrange your appointment and are subject to Cal.com's privacy practices.",
      ],
    },
    {
      id: "contact-form",
      summary: "Contact Form",
      icon: ClipboardList,
      title: "Contact Form",
      paragraphs: [
        "The Contact form uses Formspree to receive and process inquiries. Formspree processes the information you submit and may use technical information or security tools for spam prevention and form delivery. Cookies or similar technologies may be involved depending on how these features are configured. Please avoid including sensitive medical or financial details in a general inquiry. See my Privacy Policy for details about personal information.",
      ],
    },
    {
      id: "insurance-quotes-and-external-links",
      summary: "Insurance Quotes and External Links",
      icon: ExternalLink,
      title: "Insurance Quotes and External Links",
      paragraphs: [
        "This website provides direct links to insurers and their quotation systems. Following a link takes you to a third-party website, where that insurer may use its own cookies and collect information under its privacy and cookie policies. Merely displaying an ordinary link on this website does not place the insurer's cookies on your device.",
      ],
    },
    {
      id: "managing-cookies",
      summary: "Managing Cookies",
      icon: Settings2,
      title: "Managing Cookies",
      paragraphs: [
        "You can manage or delete cookies through your browser settings and use any cookie preferences offered on this website or by third-party services. Blocking cookies may affect some features. Browser settings may not control every tracking technology.",
      ],
    },
    {
      id: "privacy-and-contact",
      summary: "Privacy and Contact",
      icon: ContactRound,
      title: "Privacy and Contact",
      paragraphs: [
        "For more information about how personal information is handled, please read my Privacy Policy. For questions or concerns about cookies or privacy, contact Gisele Pecapedra using the information on the Contact page.",
      ],
    },
    {
      id: "changes-to-this-policy",
      summary: "Changes to This Policy",
      icon: RefreshCw,
      title: "Changes to This Policy",
      paragraphs: [
        "I may update this Cookie Policy as website technologies or legal requirements change. The Last updated date shows when this policy was most recently revised.",
      ],
    },
  ],
  effectiveAt: new Date("2026-11-13").toISOString(),
  updatedAt: new Date("2026-11-13").toISOString(),
} satisfies FinancialLegalPageContent;

export const internetSecurity = {
  hero: {
    title: "Internet Security",
    description:
      "How I approach website security and how you can protect your information when using online services.",
  },
  sectionLabel: "Internet Security",
  sectionAriaLabel: "Internet security information",
  items: [
    {
      id: "commitment-to-security",
      summary: "Commitment to Security",
      icon: ShieldCheck,
      title: "Commitment to Security",
      paragraphs: [
        "I take reasonable steps to protect personal information handled through my independent insurance practice, consistent with applicable privacy laws, including British Columbia's Personal Information Protection Act (PIPA). Security measures are selected according to the sensitivity of the information and the risks involved.",
      ],
    },
    {
      id: "website-and-data-protection",
      summary: "Website and Data Protection",
      icon: LockKeyhole,
      title: "Website and Data Protection",
      paragraphs: [
        "I use appropriate administrative and technical safeguards for website operations and information handling, including access controls and secure transmission where supported. No website, email system, or online service can guarantee complete security.",
      ],
    },
    {
      id: "contact-form-security",
      summary: "Contact Form Security",
      icon: ClipboardList,
      title: "Contact Form Security",
      paragraphs: [
        "The website's contact form uses Formspree to process inquiries. Please provide only the information needed for your inquiry. Do not submit medical records, financial account details, identification documents, or other sensitive insurance information through the general contact form. I can direct you to an appropriate channel when sensitive information is required.",
      ],
    },
    {
      id: "appointment-scheduling",
      summary: "Appointment Scheduling",
      icon: CalendarDays,
      title: "Appointment Scheduling",
      paragraphs: [
        "Appointments are scheduled through Cal.com (app.cal.com). Booking information is processed through that service. Please avoid entering sensitive health or financial details in booking notes. Cal.com's security and privacy practices also apply when you use its scheduling features.",
      ],
    },
    {
      id: "insurer-websites-and-applications",
      summary: "Insurer Websites and Applications",
      icon: ExternalLink,
      title: "Insurer Websites and Applications",
      paragraphs: [
        "Links to insurer websites and quotation or application platforms take you to services operated by third parties. Check the destination website and review its security and privacy information before submitting personal information. Insurance application details should be provided through the insurer's or other authorized provider's designated channels.",
      ],
    },
    {
      id: "protecting-yourself-online",
      summary: "Protecting Yourself Online",
      icon: MailWarning,
      title: "Protecting Yourself Online",
      paragraphs: [
        "Use an up-to-date browser, protect your devices and accounts, and check website addresses before entering personal information. Be cautious of unexpected emails, messages, attachments, or requests for payment or sensitive information that appear to come from me or an insurer. If a request seems suspicious, contact me using the details on my Contact page rather than replying or following the message's links.",
      ],
    },
    {
      id: "suspected-security-incidents",
      summary: "Suspected Security Incidents",
      icon: AlertTriangle,
      title: "Suspected Security Incidents",
      paragraphs: [
        "If you believe information you provided through this website has been exposed or you receive a suspicious message claiming to represent my practice, please contact me promptly. I will assess reported concerns and take appropriate steps, including notifications where required by applicable law.",
      ],
    },
    {
      id: "privacy-and-contact",
      summary: "Privacy and Contact",
      icon: ContactRound,
      title: "Privacy and Contact",
      paragraphs: [
        "For details about how I collect, use, share, and retain personal information, please see my Privacy Policy. My Cookie Policy explains website analytics and third-party technologies. For questions or security concerns, please use my Contact page.",
      ],
    },
    {
      id: "changes-to-this-page",
      summary: "Changes to This Page",
      icon: RefreshCw,
      title: "Changes to This Page",
      paragraphs: [
        "I may update this information as website features, security practices, or legal requirements change. The Last updated date indicates the most recent revision.",
      ],
    },
  ],
  effectiveAt: new Date("2026-11-13").toISOString(),
  updatedAt: new Date("2026-11-13").toISOString(),
} satisfies FinancialLegalPageContent;

export const accessibility = {
  hero: {
    title: "Accessibility",
    description:
      "My commitment to making insurance information and services accessible to everyone.",
  },
  sectionLabel: "Accessibility",
  sectionAriaLabel: "Accessibility statement and assistance information",
  items: [
    {
      id: "accessibility-commitment",
      summary: "Accessibility Commitment",
      icon: Accessibility,
      title: "Accessibility Commitment",
      paragraphs: [
        "I want people of all abilities to be able to access information about my insurance services and communicate with me. I work to identify and reduce accessibility barriers and to provide reasonable accommodations in accordance with applicable British Columbia law.",
      ],
    },
    {
      id: "accessibility-standards",
      summary: "Website Accessibility Approach",
      icon: MonitorCheck,
      title: "Website Accessibility Approach",
      paragraphs: [
        "I use the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as a development and testing target. Following an accessibility audit on November 13, 2026, the nine identified issue groups were addressed and subsequent automated and keyboard regression tests passed. These results do not establish full WCAG conformance, and additional manual testing remains necessary.",
      ],
    },
    {
      id: "reading-and-navigation",
      summary: "Reading and Navigation",
      icon: Eye,
      title: "Reading and Navigation",
      paragraphs: [
        "I aim to make information clear and readable, with usable navigation, meaningful labels, suitable text contrast, and support for keyboard navigation and assistive technologies. Some features may not work equally well for every visitor or device.",
      ],
    },
    {
      id: "known-accessibility-limitations",
      summary: "Testing and Remaining Limitations",
      icon: Info,
      title: "Testing and Remaining Limitations",
      paragraphs: [
        "The November 13, 2026 retest found no failures in the tested first-party scenarios after remediation. Further checks are still needed for screen readers, mobile zoom and orientation, image descriptions, and some content displayed over images.",
        "The full Cal.com appointment-booking experience and production contact-form delivery have not been verified in this testing. If you experience difficulty with any feature, please contact me for assistance through the Contact page.",
      ],
    },
    {
      id: "forms-and-appointments",
      summary: "Forms and Appointments",
      icon: ClipboardList,
      title: "Forms and Appointments",
      paragraphs: [
        "My website offers a contact form through Formspree and appointment scheduling through Cal.com. If you experience difficulty using either service, please contact me using another method listed on my Contact page so we can arrange a reasonable alternative.",
      ],
    },
    {
      id: "third-party-content",
      summary: "Third-Party Content and Links",
      icon: ExternalLink,
      title: "Third-Party Content and Links",
      paragraphs: [
        "The website may display Google reviews and link to insurer websites or quote platforms. These services are operated by third parties, and their accessibility may vary. If you encounter a barrier with an insurance-related service, I can help identify an alternative way to obtain the information or assistance you need, where available.",
      ],
    },
    {
      id: "accessibility-assistance-and-feedback",
      summary: "Accessibility Assistance and Feedback",
      icon: MessageCircle,
      title: "Accessibility Assistance and Feedback",
      paragraphs: [
        "If you need information in a different format, require an accommodation, or encounter an accessibility barrier, please use the contact details on my Contact page. Describe the difficulty and your preferred way to communicate, if you are comfortable doing so. I will consider requests individually and work with you on a reasonable solution.",
      ],
    },
    {
      id: "ongoing-improvements",
      summary: "Ongoing Improvements",
      icon: RefreshCw,
      title: "Ongoing Improvements",
      paragraphs: [
        "Accessibility is an ongoing effort. I may update website content, features, and this statement as I identify barriers, receive feedback, and make improvements. The Last updated date shows the most recent revision.",
      ],
    },
  ],
  effectiveAt: new Date("2026-11-13").toISOString(),
  updatedAt: new Date("2026-11-13").toISOString(),
} satisfies FinancialLegalPageContent;
