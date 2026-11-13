# Financial accessibility remediation

Implemented November 13, 2026. This supersedes the findings status in the [original baseline audit](report.md), whose original measurements and screenshots are preserved.

All nine identified issue groups have been addressed in the local implementation.

| Finding | Change | Verification |
| --- | --- | --- |
| F01: offscreen mobile navigation | The drawer uses the dynamic viewport height, a scrollable navigation region, and a visible initial focus target. Header and consultation action remain outside the scrolling region. The booking button now forwards native button props and its React 19 ref so Radix can close the drawer when booking opens. | Keyboard traversal at 390 × 844 and 320 × 450; Escape and focus return; consultation action opens the booking dialog. |
| F02: legal-page reflow | The mobile grid explicitly uses one shrinkable column; aside/content can shrink, and long text can wrap. Horizontal scrolling stays inside the section-navigation list. | All 22 routes fit at both 320px and 720px. All six legal pages now measure 320px at the narrow viewport. |
| F03: covered keyboard focus | Financial anchors reserve space for the sticky header. A scoped focus handler also reveals focused main/footer controls using the actual rendered header height, including reverse tabbing that the browser otherwise leaves under the header. | Backward navigation through six contact controls; each stays below the header. |
| F04: text contrast | Small green captions use the existing darker brand green; gold text is darker. Contact and search placeholders use the existing slate text color. | Desktop/mobile axe scans; contact placeholder contrast measured from computed styles. |
| F05: focus contrast | Light surfaces use a darker gold focus ring. Existing lighter gold indicators on dark footer/banner surfaces are preserved. The drawer close control and travel provider links also get sufficient focus indicators. | Computed navigation focus-ring color meets 3:1 against white. |
| F06: field boundaries | Contact inputs/selects/textarea and the guide search field have darker boundaries. | Computed contact text-field boundaries meet 3:1 against white. |
| F07: language changes | Portuguese main content and home-page Portuguese passages use `lang="pt-BR"`. Shared English descriptions/alt text retain English language metadata. The Portuguese page's final booking CTA is translated. | Heading/passage language inheritance checks; English navigation remains English. |
| F08: rating semantics | Review-star graphics use `role="img"` with their existing rating labels. | Three named rating graphics are exposed; no `aria-prohibited-attr` findings remain on the home page. |
| F09: search status | A persistent polite, atomic status region announces the number of matching guides and the no-results message without moving focus from the search field. Filter containers have explicit group semantics. | A no-match query updates the status; focus remains on Search guides; category selection exposes its pressed state. |

A visible-on-focus skip link now targets the main landmark on every financial page. Existing user edits to the form, legal content, footer, and other files were retained.

## Repeatable checks

Run `npm run dev`, then `npm run test:a11y`. The browser suite is in [financial-accessibility.test.mjs](../../tests/financial-accessibility.test.mjs). Browser setup and environment options are documented in [README.md](../../README.md#financial-accessibility-checks).

The suite includes 44 axe scans across 22 routes, narrow-layout checks, desktop text-spacing overrides, mobile navigation, reverse form focus, contrast measurements, search status, language changes, ratings, skip navigation, and native form validation. Formspree success is mocked using the provider's response shape, so the suite sends no real consultation requests or appointments.

Validation also includes `npm run lint`, `npx tsc --noEmit`, `git diff --check`, and a successful `npm run build` production build. The build required execution outside the sandbox because Turbopack creates a local port.

**Final regression result: 27 passed, 0 failed.** The [route-by-route retest summary](retest/summary.md), raw results, and selected screenshots are in [retest/](retest/). Generated output from future test runs goes to the ignored `artifacts/a11y/` directory.

## Scope of the result

The local first-party failures from the audit are repaired. The known TuGo logotype contrast warning is narrowly excluded under the logo exception; all other axe violations fail the regression suite. Automated `incomplete` results remain available for review.

This does not assert complete WCAG 2.2 AA conformance. Real screen-reader/browser combinations, touch-device zoom and orientation, image-description adequacy, and the complete external Cal.com booking flow still need manual verification. The third-party iframe's title/viewport scanner signals were not repaired by changing its externally controlled content. No production form delivery or appointment booking was performed.
