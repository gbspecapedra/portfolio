# `/financial` — WCAG 2.2 Level AA audit

> Historical baseline: the nine issue groups below have since been repaired. See the [remediation and retest results](remediation.md) for the current status. Original evidence is preserved here.

Tested November 13, 2026 against the current working tree at `http://localhost:3000`.

**Result: does not meet WCAG 2.2 Level AA.** Nine issue groups were confirmed through rendered styles, keyboard interaction, source inspection, and automated checks. This is a local development audit, not a certification or a claim that every remaining criterion passes. No application code was changed.

## Scope and method

- All 22 implemented `/financial` routes, including six legal pages.
- Chrome 157.0.8103.51, Playwright, and axe-core 4.11.0. Automated scans used `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, and `wcag22aa` tags. These include applicable Level A requirements as well as AA.
- Automated checks at 1440 × 900 and 390 × 844 CSS pixels; reflow measurements at 320 × 800 on every route.
- A 720 × 450 layout check approximated the available CSS viewport when a 1440 × 900 browser is zoomed to 200%. This is viewport emulation, not a physical browser zoom or mobile pinch-zoom test.
- Keyboard checks covered desktop navigation, the mobile drawer, FAQ expansion/collapse, guide filtering, contact form validation, and backward navigation through form fields.
- Text-spacing overrides at desktop width used line height 1.5, paragraph spacing 2em, letter spacing 0.12em, and word spacing 0.16em on every route.
- Form success was tested with an intercepted, mocked Formspree response. One request was intercepted; no real consultation request or appointment was sent.
- The booking calendar was opened and its initial iframe scanned. Booking completion, real mobile zoom, assistive-technology speech, and other browser engines remain unverified.
- The site defaults to a dark root theme, while financial sections use light backgrounds. The default rendered state was retained. The Next.js development portal was excluded from axe scans and hidden in the delivered screenshots.

Reference: [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Confirmed findings

Severity indicates practical impact and repair priority; it is not a WCAG conformance level.

| ID | Severity | Finding | WCAG |
| --- | --- | --- | --- |
| F01 | High | Mobile drawer content and its initial focus fall below the viewport | 1.4.10 AA, 2.4.7 AA |
| F02 | High | All six legal pages require horizontal scrolling to read ordinary paragraphs | 1.4.10 AA; related 1.4.3 AA |
| F03 | High | Sticky header entirely covers focused contact fields during backward navigation | 2.4.11 AA, 2.4.7 AA |
| F04 | Medium | Small text and form placeholders have insufficient contrast | 1.4.3 AA |
| F05 | Medium | Gold keyboard focus indicators have insufficient contrast on light surfaces | 1.4.11 AA |
| F06 | Medium | Contact text-field boundaries have insufficient contrast | 1.4.11 AA |
| F07 | Medium | Portuguese passages inherit English language metadata | 3.1.2 AA |
| F08 | Medium | Review ratings put an accessible label on an element that prohibits naming | 4.1.2 A — axe classification |
| F09 | Medium | “No guides found” is not exposed as a status message | 4.1.3 AA |

### F01 — Mobile drawer content is inaccessible visually

**Affected:** shared navigation on all financial pages. Reproduced at 390 × 844.

1. Open the navigation menu.
2. Attempt to scroll the drawer to the bottom.
3. Tab through its controls.

The drawer has a client height of 844px and scroll height of 1008px, with `overflow-y: visible`. Its navigation does not provide an internal scroll container. “Contact” starts at y=831px and is clipped; “Book a Free Consultation” starts at y=936px and is entirely offscreen. Opening the drawer places focus on this offscreen consultation button. Wheel scrolling did not reveal it. Tab eventually reaches it again without scrolling it into view.

**Repair:** constrain the drawer to the visible height and make the navigation area scrollable with `min-height: 0` and `overflow-y: auto`, or make the entire drawer scroll. Keep all controls reachable and ensure initial focus is visible. Verify at short viewport heights as well as mobile widths.

Source: [financial-navigation.tsx:181](../../financial/components/financial-navigation.tsx#L181), [sheet.tsx:56](../../components/ui/sheet.tsx#L56). Evidence: [mobile drawer screenshot](evidence/mobile-menu-stable.png), `interactions.json → menu`.

### F02 — Legal pages do not reflow

**Affected:** accessibility, cookie policy, internet security, privacy policy, regulatory disclosures, and terms of use.

At a viewport width of 320px, document widths were:

| Route suffix under `/financial/legal/` | Document width |
| --- | ---: |
| accessibility | 772px |
| cookie-policy | 905px |
| internet-security | 892px |
| privacy-policy | 1612px |
| regulatory-disclosures | 965px |
| terms-of-use | 1267px |

On privacy policy, the main legal content column measured approximately 1596px wide. Ordinary paragraphs extend well beyond the viewport, requiring horizontal and vertical scrolling. This is not limited to the horizontal table-of-contents navigation. All six pages also overflow at the 720px viewport used for the 200% layout approximation.

Scrolling horizontally exposes paragraph text beyond the white section background, against the dark body. The rendered `#415066` text on `#070709` measures approximately 2.45:1, causing a related contrast failure.

**Repair:** allow the mobile grid and its children to shrink (`minmax(0, 1fr)` and/or `min-width: 0`), constrain the aside, and keep any horizontal scrolling confined to the table of contents. Ensure paragraph backgrounds cover their content.

Source: [financial-legal-content.tsx:75](../../financial/components/legal/financial-legal-content.tsx#L75). Evidence: [legal content at 320px](evidence/legal-content-320.png), [content after horizontal scrolling](evidence/legal-content-scrolled.png), `scan.json → results[].reflow`.

### F03 — Focused contact fields disappear behind the header

**Affected:** `/financial/contact`; the shared sticky header may affect other pages and should be retested throughout.

At 1440 × 900, tab through the form into the FAQ section, then focus the message field and press Shift+Tab through preferred contact method, service, city, and phone. The browser does not move fields that are already inside its viewport below the sticky header.

The City field received focus at y≈9.83px with height 48px. The header extended to y=81px, covering the entire focused field. Phone reproduced the same behavior. This fails the AA requirement that author-created content must not entirely hide the focused component. [W3C explanation of 2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

**Repair:** reserve scroll padding for the sticky header and apply appropriate scroll margins to focusable controls. Retest both Tab and Shift+Tab, including after form validation moves focus.

Source: [financial-navigation.tsx:108](../../financial/components/financial-navigation.tsx#L108), [contact-consultation-form.tsx:108](../../financial/components/contact/contact-consultation-form.tsx#L108). Evidence: [hidden focus screenshot](evidence/contact-hidden-focus.png), `interactions.json → formTab`, `final-checks.json → sticky`.

### F04 — Insufficient text contrast

Normal-size text requires at least 4.5:1. Confirmed examples:

| Content | Foreground / background | Measured ratio | Scope |
| --- | --- | ---: | --- |
| “Our Services”, “About Gisele”, “Latest Articles” | `#6f835f` / `#ffffff` | 4.12:1 reported by axe | Home |
| “Who I Help”, “How It Works” | `#6f835f` / `#fbfcfa` | 4.01:1 | Home |
| Guide category captions | `#6f835f` / `#ffffff` | 4.12:1 reported by axe | Guides; nine visible captions initially |
| Advisor quote attribution | `#8d7442` / `#f3f0e8` | 3.91:1 | All six service pages |
| Name, email, phone, city, and message placeholders | `#9aa3af` / `#ffffff` | 2.55:1 | Contact form |

The placeholders were measured from computed browser styles; axe's initial clean result on the contact page does not cover this manual finding. Additional image-backed text appears in axe's `incomplete` results and must not be treated as passing.

**Repair:** darken these text colors or adjust their backgrounds until the required ratio is met in all states. Keep meaningful examples and instructions readable even when fields have separate labels.

Sources: [home services](../../financial/components/home/financial-services-section.tsx), [guides browser](../../financial/components/resources/guides/financial-guides-browser.tsx), [financial-service-page.tsx:249](../../financial/pages/financial-service-page.tsx#L249), [contact-consultation-form.tsx:85](../../financial/components/contact/contact-consultation-form.tsx#L85). Evidence: `scan.json → color-contrast`, [contact screenshot](evidence/contact-contrast.png).

### F05 — Low-contrast focus rings

**Affected:** navigation and numerous links, buttons, accordion triggers, and filters using the shared gold focus color on light backgrounds.

Keyboard-focus Home in the desktop navigation. Its native outline is removed, and focus is shown using a `#b89b5e` ring with a white offset. This ring has a contrast ratio of approximately 2.66:1 against white, below 3:1. Against `#f8faf6`, it is approximately 2.53:1. Home's focus state does not introduce another sufficient visual indicator.

This finding concerns non-text contrast, not the AAA focus-indicator area requirement. [W3C explanation of 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

**Repair:** use an indicator color with at least 3:1 against adjacent surfaces, retain a sufficient native outline, or provide an additional sufficient focus indicator. Check each actual background. Contact fields also change their border to green on focus; their pale gold halo alone was not treated as the only indicator.

Source: [financial-navigation.tsx:99](../../financial/components/financial-navigation.tsx#L99). Evidence: [focused navigation screenshot](evidence/navigation-focus.png), `final-checks.json → focusRing`.

### F06 — Low-contrast contact field boundaries

The contact form's text inputs and textarea use a white fill and `#d8dfd4` boundary, measuring approximately 1.36:1 against white. The adjacent card surface is also very light. The faint shadow does not provide a sufficient boundary. After clearing a text field, these boundaries are the primary visual indication of its editable area; its placeholder also fails text contrast as described in F04.

**Repair:** provide a sufficiently contrasting boundary or fill for editable text fields. The information necessary to identify the control must reach 3:1. Retest blank, filled, focused, disabled, and error states. This is not a claim that every decorative border on the site needs 3:1.

Source: [contact-consultation-form.tsx:85](../../financial/components/contact/contact-consultation-form.tsx#L85), [textarea:180](../../financial/components/contact/contact-consultation-form.tsx#L180). Evidence: [contact fields](evidence/contact-contrast.png), computed colors in `interactions.json → formStyles`.

### F07 — Portuguese content is identified as English

**Affected:** the home page's Portuguese language section and `/financial/who-i-help/portuguese-speaking-clients`.

The Portuguese client page's heading, “Atendimento em português para brasileiros e outras famílias de língua portuguesa no Canadá.”, inherits `lang="en"` from `<html>`. The rendered document contains no other `lang` attributes. The home page's Portuguese sentences and CTA have the same issue.

**Repair:** mark Portuguese sections or individual passages with the appropriate language, such as `lang="pt-BR"`, and identify English passages separately where needed. Preserve English metadata for English navigation and footer content. Verify language switching with a screen reader.

Sources: [app/layout.tsx](../../app/layout.tsx), [Portuguese page:14](../../financial/pages/financial-portuguese-clients-page.tsx#L14), [home language section:41](../../financial/components/home/financial-language-section.tsx#L41). Evidence: `interactions.json → language`.

### F08 — Invalid ARIA naming of review ratings

The home page's three star ratings use `<div aria-label="5 out of 5 stars">` with no semantic role, while the individual stars are `aria-hidden`. axe reports three `aria-prohibited-attr` violations, classified under 4.1.2.

Chrome's accessibility tree currently exposes these nodes as named `generic` elements. This audit does not claim that Chrome entirely omits their labels or that every screen reader fails to announce them. The markup nevertheless uses a name on a role that prohibits author naming, making its accessibility support unreliable.

**Repair:** use `role="img"` with the rating label for the graphic, or expose a text equivalent and hide the decorative stars.

Source: [financial-client-reviews-section.tsx:37](../../financial/components/home/financial-client-reviews-section.tsx#L37). Evidence: `scan.json → /financial → aria-prohibited-attr`, `final-checks.json → ratingAX`.

### F09 — Search failure status is not announced

**Affected:** `/financial/resources/guides`.

Enter `zzznomatch` in Search guides. “No guides found” appears without moving focus from the search field. The message has neither a status role nor live-region properties, and there is no live region in the page's main content. This status therefore cannot be automatically announced through the expected mechanism.

The failure is the unannounced status message. The changing article grid itself is not required to be a live region. [W3C explanation of 4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).

**Repair:** use a concise, polite status region for the no-results message and, optionally, a result count. Keep focus in the search input while typing. Avoid announcing entire cards on each keystroke.

Source: [financial-guides-browser.tsx:165](../../financial/components/resources/guides/financial-guides-browser.tsx#L165). Evidence: `interactions.json → search`.

## Checks with no failure observed in the tested sample

- All 22 routes returned HTTP 200 and each had one H1, a page title, a main landmark, and a declared document language. Correct language changes are still a failure under F07.
- Desktop menu opens by keyboard, ArrowDown moves between items, Escape closes it, and focus returns to its trigger. The mobile drawer also closes with Escape and returns focus to its trigger.
- FAQ Enter and Space toggle the expanded state; expanded panels exist and are referenced by the button. The first FAQ is expanded initially, so Enter collapses it and Space reopens it.
- Guide category buttons expose `aria-pressed`; the RESP filter updates its state.
- Contact fields have programmatic labels. Required identity fields expose `required` and appropriate autocomplete tokens. Blank submission focuses Name; invalid email focuses Email and produces the browser's validation message.
- The mocked successful consultation submission creates a `role="status"` confirmation.
- No document-level overflow or clipped text was detected by the desktop text-spacing checks. This was a geometry check, not an exhaustive visual review of all spacing combinations.
- Target-size checks on home, contact, guides, and the travel quote selector found no failures. The AA minimum is 24 × 24 CSS pixels with exceptions, not a universal 44 × 44 requirement. A small close control alone is not enough to establish failure when spacing satisfies the exception. [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

These are observations about tested states, not full-criterion pass declarations.

## Findings requiring further validation

- **Third-party booking:** its initial iframe scan reported a missing document title and a restrictive viewport meta tag (`maximum-scale=1`, `user-scalable=no`). The containing iframe has the accessible title “Book a call”; embedding and parent-page zoom affect interpretation. These scanner signals are not counted as confirmed first-party failures here. Test the full calendar, attendee form, error recovery, focus containment, dismissal, mobile zoom, and appointment confirmation with real assistive technology before a conformance claim. No appointment was booked.
- **Image-backed contrast and alternatives:** axe retained `incomplete` results for text over images or gradients. Alt attribute presence does not establish that every image description is adequate. These require a full visual/content review.
- **Open-menu scanner signals:** axe reports `aria-hidden-focus` against the background when the Radix desktop modal menu is open. The tested keyboard path remained in the menu and Escape restored the trigger. This signal is retained in the evidence rather than counted as an independently confirmed failure.
- **Logo exception:** the raw travel-quote scan flags the turquoise “tu” in the TuGo logo for contrast. Logo text is exempt under 1.4.3, so this is not counted as a failure. The quote page's zero confirmed text-contrast failures does not clear the shared navigation findings.
- **Screen readers and browser coverage:** no VoiceOver, NVDA, JAWS, Safari, Firefox, actual touch hardware, orientation interaction, or forced-colors session was run.
- **Forms:** production delivery, server-side errors, network failure, anti-spam challenges, and final booking states were not tested. The form success check used a mocked response.
- **Other WCAG 2.2 additions:** no first-party dragging interaction, authentication flow, or multi-step redundant-entry process was found in the scoped local pages. The external booking flow still needs review for applicable requirements.
- **Skip navigation:** no skip link was found. Main landmarks and headings exist, so absence of a skip link alone was not recorded as a 2.4.1 failure. Adding a visible-on-focus skip link would improve keyboard navigation.

## Evidence and reproduction

- [Page scan data](scan.json): violations, incomplete checks, structure, and reflow measurements for every route.
- [Interaction evidence](interactions.json): stable menu, keyboard, FAQ, form, language, and calendar results.
- [Final checks](final-checks.json): exact hidden-focus geometry, focus color, accessibility-tree rating nodes, mocked success, target sizes, and zoom-layout measurements.
- [Route summary](route-summary.md): per-route scanner counts and reflow widths.
- Screenshots are in [evidence/](evidence/). Development overlays were hidden only for the final evidence captures.

To reproduce the automated page checks, use Chrome and axe-core with the tags listed above, scan the full document excluding the development portal, and include both desktop and mobile states. Scroll through each page to load lazy images before scanning. Scanner output includes raw signals that need the dispositions in this report; it must not be equated directly with a conformance decision.

Fix F01–F03 first, then contrast, language, and semantics. Retest every affected shared component across the 22 routes and complete the unverified assistive-technology and third-party flows before asserting AA conformance.
