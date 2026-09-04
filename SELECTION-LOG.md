# Selection log — Swedburg Electric

**Style family (page):** editorial, with a single dark-moody band held back for the
final CTA and footer.
**Ambition level:** restrained-and-quiet. Very generous margins, a narrow measure,
serif display over serif body, brass used as a *line* language and as a solid fill in
exactly one place (the primary action). No drop shadows on any card, anywhere.

**Font substitutions** (per `_kit/BRIEF.md`):

| Brief names | Used |
|---|---|
| Baskerville Display PT (display) | **Libre Baskerville** 400 / 400 italic / 700 |
| Freight Text Pro (body) | **Source Serif 4** 300-700, 400 italic |

No third utility face. Micro-labels are Source Serif 4 at 600, uppercase, 0.18em
tracking — a serif small-cap rather than the reflexive sans, which keeps the
serif-on-serif discipline the direction asked for.

**Palette ratios.** Paper (#F6F7F7, a white pulled 4% toward the brand teal) carries
~80% of the page. Deep teal #0B1F1F carries the trust banner, the final CTA and the
footer. Brass #B08D57 appears only as hairlines, rules, stars, the drop cap, and as a
solid fill on the one repeated primary action — nothing else is brass-filled.

---

## Page inventory

| # | Section | Type file used | Imagery |
|---|---|---|---|
| 1 | Header / nav | navigation | none |
| 2 | Hero + photo-diagnosis widget | hero + interactive | `lighting-hero` |
| 3 | Google Reviews | social-proof | none (typographic) |
| 4 | Trust Badges Banner | credibility | none (texture) |
| 5 | Why Us | value-proposition | `panel-new` (grid-breaking) |
| 6 | Services | services | `panel-tech`, `rewiring-hero`, `office-ti` (grid-breaking) |
| 7 | Coverage | location | `panorama-hills-hero` |
| 8 | Our Story | about-story / long-form-content | `basement-quote` |
| 9 | FAQ | faq | none (deliberate: dense Q&A) |
| 10 | Final CTA | calls-to-action | `street-dusk` |
| 11 | Footer | footer | none |
| — | Mobile sticky call bar | calls-to-action | none |

---

## 1. Header / Navigation

- **Layout:** Centered Logo Split Nav *(assigned)*. Beat Standard Horizontal Nav Bar,
  whose Avoid-when — "the brand wants a more distinctive first impression" — is exactly
  this brief. Seven links split 4/3 around a centred two-line wordmark.
- **Visual style:** Minimal Underline Link Treatment *(assigned)* plus a hairline divider
  beneath. Style family: minimal-clean / editorial.
- **Animation:** Underline Grow on Hover (sweep from left, 240ms ease-out-quart);
  dropdown panels use a short clip reveal on open; the header condenses on scroll (the
  subheader contact band collapses, 320ms).
- **Element sequence:** header is present on load, no entrance. Resting states: link
  underline sweep, call-button letterpress press-in, dropdown clip open.
  Reduced motion: underline toggles instantly, panel opens with no clip.
- **Mobile:** no hamburger. Wordmark plus a compact call pill; on scroll the wordmark
  reduces to an "SE" monogram and the pill expands to the full number.

## 2. Hero

- **Layout:** Hero with Embedded Quote/Booking Form *(assigned)*. Content shape matches
  exactly — short headline on one side, the form on the other.
- **Visual style:** Editorial Typographic Overlap *(assigned)*. The photograph occupies
  the right of the hero with its left edge dissolved by a mask gradient, so the H1's
  longest line overlaps the ghosted photo rather than butting against a hard edge.
  A single brass hairline crosses the full hero at the top of the content row — the
  eyebrow sits directly under it and the widget's top border sits *on* it, which is what
  makes the required eyebrow/widget alignment visible rather than merely true.
- **Animation:** Ken Burns Slow Zoom *(assigned)* on the photo (28s, scale 1 to 1.07, own
  keyframes, disabled under reduced motion) plus Staggered Load-In for the text stack.
  Load, not scroll — nothing above the fold waits for a trigger it will never get.
- **Element sequence (motion budget: 6 groups, load-triggered):**
  rule + eyebrow (0ms) -> H1 (90ms) -> subheadline (180ms) -> 4 value-badges as one group
  (270ms) -> CTA pair as one group (360ms) -> widget (450ms, depth settle).
  All `kit-load-rise`, 560ms, ease-out-quart. Reduced motion: everything at rest state.
- **Image richness:** Full-Bleed Background Photo with Foreground Card, softened by a
  mask dissolve so it reads as a layered composition rather than a photo with a box on it.

## 2b. Photo-diagnosis widget — the signature element

- **Layout:** Card-Based Widget Container *(assigned)*, built as an editorial certificate
  plate: 1px brass hairline frame with a second inset hairline 6px inside it, four
  L-shaped brass corner brackets, no shadow, no dashed drop zone.
- **Visual style:** Minimal Underline-Style Input Fields (forms) — every field is a
  bottom hairline only, with the label in small caps above. The photo control is a
  *plate*, not a drop zone: a hairline rectangle with a camera glyph and a caps label.
- **Animation:** Widget Entrance Scale-In on Scroll, converted to load because it sits
  above the fold; Field Focus Highlight (bottom rule thickens to brass, 200ms); Success
  State Confirmation Animation (the whole plate swaps to a confirmation composition with
  a stroke-drawn check inside a brass hairline circle).
  **Site-specific:** *photo-plate bloom* — the attached preview enters with a bottom-up
  clip plus a 1.06 to 1 scale and 5px to 0 blur over 820ms, composed from Clip Reveal and
  Depth Settle.
- **Element sequence:** the widget enters as one grouped unit; internal controls are live
  immediately (the entrance is a load fade, not a gate).

## 3. Google Reviews Section

- **Layout:** Single Featured Pull-Quote *(assigned)* with a supporting four-up row.
  Beat Testimonial Card Grid — a grid flattens a review set that has one clearly
  strongest quote, and card grids are the default this repository exists to avoid.
- **Visual style:** Oversized Quote Mark Typography *(assigned)*, editorial. The
  aggregate rating is a Large Numeral Statistic Display borrowed from credibility —
  4.9 set at display scale against a deliberately tiny label.
- **Animation:** Star Rating Fill Animation on Scroll (a 90ms clip sweep across five
  stars), Counting Numerals on the 4.9 (1500ms, ease-out-expo, one decimal), Pull-Quote
  Fade and Scale-In as its own beat, and Staggered Rise on the supporting row.
- **Element sequence (budget: 5):** h2 clip reveal -> aggregate block (numeral and stars
  together) -> featured quote (standalone beat, 120ms after) -> supporting row, four
  columns staggered 110ms -> placeholder note last, plain fade.
  Threshold 0.18 / rootMargin `0px 0px -12% 0px`. Reduced motion: no count-up, no sweep.

## 4. Trust Badges Banner

- **Layout:** Certification Badge Wall — exactly four, equal size and padding, per its
  Premium execution note.
- **Visual style:** Textured Certificate-Style Panel *(assigned)* with brass rules —
  deep-teal band, double brass rule top and bottom, engraved diagonal texture at ~3%,
  vertical hairlines between badges, L-bracket corner marks.
- **Animation:** Badge Fade and Scale-In on Scroll, staggered badge by badge.
  **Site-specific:** *centre-out rule draw* — the two certificate rules draw from the
  centre outward (scaleX from `transform-origin: center`), 620ms, sequenced before the
  badges. A variant of Sequential Line Draw.
- **Element sequence (budget: 3):** rules draw (0ms) -> h2 (140ms) -> four badges
  staggered 110ms. Reduced motion: rules and badges render in place.
- **Icons:** Shield / CalendarDays / MapPin / ThumbsUp — four distinct, meaning-matched,
  all at 26px and stroke 1.4, optically centred on a shared baseline.

## 5. Why Us

- **Layout:** Single Statement + Supporting Points *(assigned)*. The four points genuinely
  support one statement (the same finish standard carries through every job), so the
  implied hierarchy is real rather than imposed.
- **Visual style:** Underline Accent Rule Treatment *(assigned)*, minimal-clean — a brass
  rule above each point instead of a card. Plus **Grid-Breaking Oversized Image (use 1 of
  2)**: `panel-new` bleeds off the left viewport edge and runs taller than the statement
  block beside it.
- **Animation:** Underline Draw Animation (the rule draws in as the closing beat of each
  point), Sequential Reveal on Scroll, and Depth Settle on the photograph.
- **Element sequence (budget: 4):** photo (depth settle, 0ms) -> eyebrow + h2 as one unit
  (clip reveal, 120ms) -> four points staggered 110ms, each as icon + h3 + body together
  with its rule drawing 180ms into its own reveal.

## 6. Services

- **Layout:** Editorial Magazine-Style Service Spread *(assigned)*, carrying the
  **zig-zag alternating rhythm** at spread scale (image left, right, left) rather than as
  six full-width bands. *Deviation, justified:* strict Zig-Zag Alternating Service List
  wants 40-100 words per service and the brief gives 12-18, so six alternating bands
  would have read as padded whitespace; the 12-column spread keeps the alternation and
  the editorial voice while matching the actual copy shape. No numbering — services are
  not a sequence.
- **Visual style:** Editorial Magazine-Style Service Spread, editorial. Plus
  **Grid-Breaking Oversized Image (use 2 of 2)**: `office-ti` runs wider than its column
  and bleeds off the left edge in the final row.
- **Animation:** Staggered Grid Fade-In on Scroll, Image Zoom on Hover (1.04, 700ms), and
  Depth Settle on each photograph.
- **Element sequence (budget: 6):** eyebrow + h2 (clip reveal) -> row A photo (settle) ->
  row A text pair staggered 110ms -> row B text pair -> row B photo -> row C photo ->
  row C text pair -> section CTA. Rows observe independently at threshold 0.18.

## 7. Coverage

- **Layout:** Service Area List / Coverage Zone Grid — the content is twelve town names,
  not one address, so Map Embed with Address Card is ruled out by its own Avoid-when.
  Set as an editorial **index**: four columns of ruled rows, like the back of a book.
- **Visual style:** Editorial Photo-Led Location Block *(assigned)* — a wide
  `panorama-hills-hero` band carries the section and the index sits beneath it; the
  address is the secondary element, not the hero of the block.
- **Animation:** Address Card Slide-In on Scroll and Coverage Zone Highlight on Hover.
  **Site-specific:** *index row sweep* — on hover a brass hairline sweeps left to right
  under the town name while the name itself shifts 6px right (Underline Sweep applied to
  a full-width rule). Reduced motion: rule appears without sweep, no shift.
- **Element sequence (budget: 4):** photo band (settle) -> eyebrow + h2 (clip) ->
  paragraph -> index rows staggered 90ms -> address block last.

## 8. Our Story

- **Layout:** Single-Column Long-Form Story *(assigned)*, narrow measure (~62ch).
- **Visual style:** Editorial Pull-Quote Typography *(assigned)* with a brass drop cap,
  set on a paper tone pulled 3% toward brass so the section reads as a distinct leaf.
  A single Framed Photo Insert (`basement-quote`) breaks into the left margin — the one
  image, deliberately.
- **Animation:** Pull-Quote Fade and Scale-In on Scroll plus Progressive Reveal Scrub on
  the body paragraphs (scroll-linked opacity and blur, desktop only, flattened below
  900px).
- **Element sequence (budget: 5):** eyebrow + h2 (clip) -> photo insert (settle) ->
  paragraph 1 with drop cap -> pull-quote as its own beat -> paragraphs 2-3 scrubbed.

## 9. FAQ

- **Layout:** Two-Column Category Split *(assigned)*. *Deviation, justified:* five
  questions do not sort into real categories, so inventing them would have been the
  arbitrary split the entry's own Avoid-when warns about. The two-column structure is
  kept as heading-column / question-column, which preserves the assigned shape.
- **Visual style:** Minimal Line-Divided Accordion *(assigned)*, minimal-clean.
- **Animation:** Accordion Expand and Collapse with Height Transition (grid-rows 0fr to
  1fr, 420ms ease-out-quart), Icon Morph (a plus whose vertical stroke rotates and fades
  to a minus, 200ms), and Staggered Fade-In on Scroll for the rows.
- **Element sequence (budget: 3):** left column (eyebrow, h2, support line, call link) as
  one unit -> question rows staggered top to bottom, 90ms. Per-row expand is click only.
  `aria-expanded` / `aria-controls` on every trigger; single-open via `useAccordion`.

## 10. Final CTA

- **Layout:** Full-Width CTA Banner *(assigned)*. No form — the entry's Avoid-when is
  "the CTA needs to be combined with additional supporting content", and the brief's
  action here is a call and a text.
- **Visual style:** Dark Cinematic CTA Background *(assigned)* — `street-dusk` under a
  deep-teal scrim, with a Layered Depth Composition (photo / scrim / brass-ruled plate).
- **Animation:** Banner Background Slow Pan (36s, 3% translate) plus Cursor-Reactive Glow,
  used exactly once on the page per that entry's restraint note.
  **Site-specific:** *letterpress press-in* on the brass primary button — instead of
  Magnetic Lift's rise, the button settles 1px and its inset hairline tightens; a
  heritage reading of the same entry. Reduced motion: hairline emphasis only.
- **Element sequence (budget: 4):** h2 (clip) -> supporting line -> button pair as one
  unit -> phone line and reassurance together.

## 11. Footer

- **Layout:** Split Footer with Final CTA Panel *(assigned)*. *Deviation, justified:* the
  entry's Avoid-when flags a footer CTA stacked on an already-repeated ask, so the top
  panel is a **contact** panel — call, text, email, address — the practical close rather
  than a fourth ask. The structure is unchanged; the register is.
- **Visual style:** Dark Contrast Footer Band *(assigned)*, brass hairlines, four columns
  exactly as the brief specifies.
- **Animation:** Link Column Staggered Fade-In on Scroll (columns left to right, heading
  and links as one unit per column), Underline Sweep on every footer link, and a social
  icon hover (hairline circle fills to brass, no bounce — the page's register is too
  quiet for a bounce).
- **Element sequence (budget: 3):** contact panel as one unit -> four columns staggered
  110ms -> legal line last.

## Sticky mobile call bar

Sticky Bar Slide-In on Scroll Threshold — appears past 560px so it never competes for
above-the-fold height, which is what makes the mobile fold constraint achievable.
`tel:` only, as specified.

---

## Motion techniques written for this site (not in the kit)

1. **Ken Burns slow zoom** (`swe-kb`) — 28s, scale 1 to 1.07 with a 1.5% drift, alternate.
2. **Centre-out rule draw** (`[data-rule="center"]`) — scaleX from centre, 620ms quart.
3. **Photo-plate bloom** (`.pd-shot`) — clip-inset bottom, 1.06 to 1 scale, 5px to 0 blur,
   820ms, fired on file attach.
4. **Index row sweep** (`.cov-row`) — brass hairline sweeps left to right on hover with a
   6px name shift.
5. **Letterpress press-in** (`.btn--brass`) — a 1px settle plus inset hairline tightening
   instead of a lift.
6. **Star fill sweep** (`.stars[data-in]`) — five stars revealed by clip-path, 90ms apart.

All six have an explicit `prefers-reduced-motion` fallback in `src/styles/site-motion.css`.

---

## Screenshot critique round 1 — what the pictures showed

- **Widget field alignment bug.** `.pd-field + .pd-field` also matched the two fields
  *inside* `.pd-row`, so Phone sat 16px lower than Name. Scoped the stacking margin to
  `.pd-form > …`. This was the single most damaging detail on the page — a misaligned
  pair on the signature element.
- **The hero photograph read as a grey smudge.** Two stacked scrims plus a 44% mask
  origin left almost no unobstructed image. Swapped `lighting-hero` for
  `landscape-lighting`, lightened the scrim to one gradient, narrowed the widget from
  430 to 408 and opened the column gap so a real band of photograph sits between the
  type and the widget.
- **`min-height: calc(100vh - …)` broke the full-page capture** (it came back 1896px
  wide). Capped it at `min(calc(100vh - var(--header-h)), 830px)`, which is also better
  behaviour on a tall monitor.
- **Mobile fold failed** — the widget was cut off at "What's Going On". Fixed by
  compacting the hero stack (13px subheadline, 12px badge labels, tighter gaps) and
  dropping the widget's explanatory paragraph on phones only.
- **Services read sparse**, with the text pairs floating in the middle of an empty
  column. Set the spread to `align-items: stretch` with `align-content: space-between`
  on each pair, and widened the entry rules from 42px to full column width — the rules
  now land exactly on the photograph's top and bottom edges.
- **Coverage repeated the page's heading-left / empty-right rhythm a fourth time.**
  Split its head into two columns.
- **Story:** the floated insert squeezed the text column to ~30 characters. Narrowed
  the figure to 252px and pulled it 130px into the margin.
- **The scroll scrub dimmed body copy to 34% opacity**, which read as unfinished in a
  still and was borderline for contrast. Rewrote it to drive a marginal brass rule
  instead, so the reading never pays for the effect.
- **Final CTA was too dark to see the photograph.** Collapsed two scrims into one.

## Pass 1 — Elevation sweep

| Section | Outcome |
|---|---|
| Navigation | Left as-is; a quiet editorial nav is at its correct ambition. Dropdown panel widened 460→524px so no service name wraps. |
| Hero | **Upgraded.** Added **Weighted Word Reveal** on the H1 (8 words, inside the entry's 8–10 word limit, once per page as the entry requires). It is the page's single strongest typographic moment and the editorial family's signature technique. |
| Google Reviews | Left typographic by decision — the aggregate numeral gives it scale and `Photo and Card Testimonial Block` is ruled out (no customer photos). **Small elevation:** the top 56px of the featured quote's divider is brass, marking it as the featured column rather than one more rule. |
| Trust Badges | Left as-is. `Slow Ambient Drift` on the texture was considered and rejected on its own Avoid-when plus the page's motion budget. |
| Why Us | Left as-is. `Bordered Frame Draw` rejected — the widget and the story insert already carry frames, and the entry's Avoid-when names exactly that redundancy. |
| Services | **Upgraded** in the critique round above (stretch + space-between + full-width rules); that was the elevation this section needed. |
| Coverage | Left as-is; the index sweep and the full-bleed band already carry it. |
| Our Story | Left as-is. `Photo Slow Zoom on Load` rejected — it would have made a third continuous ambient loop on the page. |
| FAQ | **Upgraded.** Added a restrained **Active Question Highlight**: the open row's rule turns brass and its question takes the brass ink, so the answer being read stays anchored. |
| Final CTA | Left as-is — already the densest moment on the page. |
| Footer | Left as-is. |
| Widget | **Upgraded.** The 900ms submit delay now has something to be: a rule draws across the button while sending. |

## Pass 2 — Coherence sweep

- **Button grammar corrected.** The FAQ's call button was the page's only outline
  primary; every other instance of the one repeated ask is brass. Changed to brass so
  the grammar is unambiguous: brass = the primary action, hairline outline = secondary.
- **The scrub rule was invisible in a still**, which made a logged technique effectively
  dead. Given a 0.25 floor so it always reads as a marginal rule that completes as you
  scroll past, rather than content waiting to appear.
- **Motion load audited across the page.** Two continuous ambients (hero Ken Burns,
  CTA slow pan), one cursor-linked effect (CTA only, per that entry's 1–2 per page
  note), one count-up (reviews), one word reveal (hero). Nothing was added in Pass 1
  that pushed a third section into the same style family.
- **Background rhythm checked end to end:** paper → paper → deep → paper → paper-deep →
  paper → paper-warm → paper → deep → mid. No two dark bands adjacent, and the two
  plain-paper neighbours are always separated by a tonal section.
- **Rule vocabulary checked:** column-width rules (hero badges, why-us points,
  services), short 42–64px accent rules (reviews aggregate, coverage card, CTA), row
  rules (coverage index, FAQ), and full-width doubles (trust banner only). One system,
  four registers.
- Nothing from Pass 1 was walked back.

## Fold verification

Measured on the built `dist/` with `getBoundingClientRect().bottom`, not by eye
(`_tools/fold.mjs`). Every one of the six required elements clears the fold at both
required breakpoints, with webfonts loaded and with webfonts blocked:

| | 1440×900 | 1440×900 fallback fonts | 390×844 | 390×844 fallback fonts |
|---|---|---|---|---|
| H1 | 416 | 361 | 189 | 160 |
| Subheadline | 557 | 501 | 259 | 230 |
| Value badges | 691 | 616 | 361 | 317 |
| Primary call CTA | 772 | 697 | 414 | 370 |
| Secondary CTA to Services | 772 | 697 | 414 | 370 |
| Photo-diagnosis widget | 813 | 813 | 810 | 765 |

Desktop headroom on the CTA row is 128px; the widget, the tallest element in the hero,
clears by 87px. A `(max-width: 900px) and (max-height: 820px)` block takes the hero type
and the widget's internal rhythm down one further notch so a 360×780 phone — or a 390×844
phone with browser chrome eating 60px — still lands all six. No field is dropped at any
size; only the widget's explanatory paragraph and, on the shortest phones, its eyebrow
row give way.
