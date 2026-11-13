# Retest results — November 13, 2026

`npm run test:a11y`: **27 passed, 0 failed**. Lint, TypeScript, whitespace checks, and the production build also passed.

Counts below are raw axe node warnings. The one travel-quote warning is the TuGo logotype contrast exception documented in the audit; all non-exempt violations fail the suite.

| Route | Desktop warnings | Mobile warnings | 320px content width | 720px content width |
| --- | ---: | ---: | ---: | ---: |
| `/financial` | 0 | 0 | 320px | 720px |
| `/financial/about` | 0 | 0 | 320px | 720px |
| `/financial/contact` | 0 | 0 | 320px | 720px |
| `/financial/legal/accessibility` | 0 | 0 | 320px | 720px |
| `/financial/legal/cookie-policy` | 0 | 0 | 320px | 720px |
| `/financial/legal/internet-security` | 0 | 0 | 320px | 720px |
| `/financial/legal/privacy-policy` | 0 | 0 | 320px | 720px |
| `/financial/legal/regulatory-disclosures` | 0 | 0 | 320px | 720px |
| `/financial/legal/terms-of-use` | 0 | 0 | 320px | 720px |
| `/financial/resources/faq` | 0 | 0 | 320px | 720px |
| `/financial/resources/guides` | 0 | 0 | 320px | 720px |
| `/financial/services/critical-illness-insurance` | 0 | 0 | 320px | 720px |
| `/financial/services/disability-insurance` | 0 | 0 | 320px | 720px |
| `/financial/services/financial-solutions` | 0 | 0 | 320px | 720px |
| `/financial/services/life-insurance` | 0 | 0 | 320px | 720px |
| `/financial/services/resp` | 0 | 0 | 320px | 720px |
| `/financial/services/travel-insurance` | 0 | 0 | 320px | 720px |
| `/financial/services/travel-insurance/get-a-quote` | 1 | 1 | 320px | 720px |
| `/financial/who-i-help/families` | 0 | 0 | 320px | 720px |
| `/financial/who-i-help/newcomers-to-canada` | 0 | 0 | 320px | 720px |
| `/financial/who-i-help/portuguese-speaking-clients` | 0 | 0 | 320px | 720px |
| `/financial/who-i-help/professionals` | 0 | 0 | 320px | 720px |

All routes also passed the desktop text-spacing overflow check.

Interaction checks:

- mobile navigation (390 × 844): passed
- mobile navigation (320 × 450): passed
- form focus and contrast: passed
- search, language, ratings, skip link: passed
- native validation and mocked success: passed

[Raw results](results.json) include automated incomplete results that still require human review. See [remediation scope](../remediation.md#scope-of-the-result) for remaining manual verification.
