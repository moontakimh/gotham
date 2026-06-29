/** Reusable measure classes — prefer these over hardcoded max-w values. */
export const editorialMeasure = {
  default: "editorial-measure",
  narrow: "editorial-measure-narrow",
  meta: "editorial-measure-meta",
} as const;

/**
 * Column spans for Gotham's 12-column editorial grid.
 * Sections choose a span; they do not invent spacing.
 */
export const editorialSpans = {
  /** Full bleed within the container */
  full: "col-span-12",
  /** Large display typography — poster-scale headlines */
  display: "col-span-12 md:col-span-11",
  /** Narrow editorial body — left rail */
  body: `col-span-12 ${editorialMeasure.narrow} md:col-span-5 md:col-start-1`,
  /** Narrow editorial body — offset right for asymmetry */
  "body-offset": `col-span-12 ${editorialMeasure.narrow} md:col-span-5 md:col-start-6 lg:col-span-4 lg:col-start-7`,
  /** Standard reading-width body — future prose sections */
  "body-wide": `col-span-12 ${editorialMeasure.default} md:col-span-6 md:col-start-1`,
  /**
   * Site-wide metadata label column — PRACTICE, SCROLL, CURRENTLY, etc.
   * Always cols 1–2 on md+.
   */
  "metadata-label": "col-span-12 md:col-span-2 md:col-start-1",
  /** Wider metadata annotation (e.g. hero job title) */
  metadata: `col-span-12 ${editorialMeasure.meta} md:col-span-6 md:col-start-1`,
  /** Future imagery — centered wide band */
  image: "col-span-12 md:col-span-8 md:col-start-3",
} as const;

export type EditorialSpan = keyof typeof editorialSpans;

export const editorialSectionSpacing = {
  hero: "",
  chapter:
    "pt-[clamp(10rem,28vh,16rem)] pb-[clamp(7rem,16vh,11rem)]",
} as const;

export type EditorialSectionSpacing = keyof typeof editorialSectionSpacing;
