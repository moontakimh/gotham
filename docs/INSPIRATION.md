# Inspiration deep dive

Target audience: **Senior, Staff, IC/Leadership** design roles in **Europe & Oceania**.  
Sites must signal systems thinking, editorial craft, and outcome clarity — not Dribbble decoration.

---

## 1. Vivek Parihar — primary editorial reference

**URL:** [vivekpariharr.framer.website](https://vivekpariharr.framer.website/about)

### What makes it work

| Pattern | Detail | Gotham application |
| --- | --- | --- |
| **Type as hero** | Headlines break grid; words repeat/overlap for rhythm | Practice section: multi-line display, not one paragraph |
| **Work as exploration** | Horizontal index feels like browsing, not a grid | Active panel highlight, progress counter, varied panel widths |
| **Process in 3 beats** | Discover → Build → Shape — scannable | Craft before Practice, 3 steps max |
| **FAQ / accordion** | Dense info, progressive disclosure | Experience as accordion, not staggered asymmetry |
| **Contact clarity** | Phone + email visible; "get in touch" not corporate | Contact: direct channels, editorial links not broken CTA button |

### Avoid copying

- Framer motion overload · marquee clichés · student-portfolio tone

---

## 2. Danial.si — structure & color

**URL:** [danial.si](https://danial.si/)

| Pattern | Gotham application |
| --- | --- |
| Near-monochrome canvas | `--bg` / `--text` only until Figma accent |
| Color = structure, not decoration | Accent only on active states + one callout line |
| Predictable reading column | Body spans stay narrow; display breaks grid |
| Zero chrome | No cards with shadows; borders only where needed |

---

## 3. Open Foundry — footer & confidence

**URL:** [open-foundry.com](https://open-foundry.com/)

| Pattern | Gotham application |
| --- | --- |
| Columnar footer | Index / Studio / Connect — done |
| Fine metadata type | Commit Mono at 10–11px, wide tracking |
| Negative space as hierarchy | Footer padding ≥ 5rem vertical |
| No social icon grid | Text links only |

---

## 4. Amie Stories — case study pages

**URL:** [amie.so/stories/design](https://amie.so/stories/design)

| Pattern | Gotham application |
| --- | --- |
| Full-bleed images | `/work/[slug]` image blocks edge-to-edge |
| Photo essay pacing | Short captions, long scroll, minimal UI |
| No slide-deck sections | Narrative flow, not "Problem → Solution" cards |

---

## 5. Branevsky — display type as identity

**URL:** [branevsky.com](https://branevsky.com/)

| Pattern | Gotham application |
| --- | --- |
| Condensed/large display | Hero + Practice use `clamp()` display scale |
| Type carries brand | Uncut Sans semibold, tight tracking |
| Restrained imagery | Placeholders until real case imagery |

---

## 6. Manish Tamang — depth & /now

**URL:** [manishtamang.com/colophon](https://manishtamang.com/colophon)

| Pattern | Gotham application |
| --- | --- |
| /colophon as craft signal | Document build + type choices |
| /now personal layer | Full desk on `/now`, teaser on home |
| Rewards slow readers | Metadata labels, secondary links |

---

## 7. Readymag ref — asymmetric grid

**URL:** [readymag.website/u4161969150/6387273/](https://readymag.website/u4161969150/6387273/)

| Pattern | Gotham application |
| --- | --- |
| Intentional grid breaks | `body-offset`, `display-break` spans |
| Varied image aspect ratios | Work spread variants 0–4 |
| Rhythm through inconsistency | Not every section symmetric |

---

## 8. Macfolio & Muhid — peer benchmarks

| Site | Use |
| --- | --- |
| [macfolio.com](https://macfolio.com/) | Minimal stylisation without gimmicks |
| [muhid.de](https://muhid.de/) | Senior Pathao peer — IA + tone check |

---

## Section-by-section roadmap

| Section | Current issue | Direction |
| --- | --- | --- |
| **Craft** | Long 6-step list | 3 steps, before Practice, one sentence each |
| **Practice** | Single weak paragraph | Display-type domains + tight positioning line |
| **Selected Work** | Static panels | Active state, progress, width variation, intro lede |
| **Experience** | Forced asymmetry | Accordion + "Current" highlight on Pathao Pay |
| **Currently** | Broken grid (orphan divs) | Proper 2-col desk grid inside EditorialGrid |
| **Contact** | Broken button + weak headline | Split layout, "Get in touch", text-first CTAs |
| **Gallery** | OK as teaser | Refine after Figma refs |

---

## Figma handoff (incoming)

When you share Figma refs, sync in this order:

1. Color tokens (`--accent-signal`, `--accent-uv`)
2. Type scale (Display XL → Meta)
3. Component specs (accordion, work panel, contact)
4. Spacing rhythm per breakpoint

Code stays **structure-first** until tokens lock.

---

## Hiring conversion checklist (EU/Oceania)

- [ ] Outcomes in case study copy (metrics, scale)
- [ ] 3–5 curated projects only
- [ ] Clear contact path above fold in footer + contact section
- [ ] /handbook or /colophon shows systems thinking
- [ ] Seamless scroll (reduced-motion fallback)
- [ ] No placeholder links in production deploy
