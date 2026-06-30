/** Reusable measure classes — prefer these over hardcoded max-w values. */
export const editorialMeasure = {
  default: "editorial-measure",
  narrow: "editorial-measure-narrow",
  meta: "editorial-measure-meta",
} as const;

/**
 * Column spans for Gotham's editorial grid.
 * Col 1–2 = metadata margin zone · Col 3–10 = primary · Col 11–12 = breathing room.
 */
export const editorialSpans = {
  full: "col-span-12",
  display: "col-span-12 lg:col-span-10 lg:col-start-2",
  "display-break": "col-span-12 lg:col-span-11 lg:col-start-1",
  "display-tight": "col-span-12 md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-4",
  body: `col-span-12 ${editorialMeasure.narrow} md:col-span-5 md:col-start-1 lg:col-span-4 lg:col-start-3`,
  "body-offset": `col-span-12 ${editorialMeasure.narrow} md:col-span-5 md:col-start-5 lg:col-span-4 lg:col-start-7`,
  "body-wide": `col-span-12 ${editorialMeasure.default} md:col-span-6 md:col-start-1 lg:col-span-6 lg:col-start-3`,
  "metadata-label": "col-span-12 md:col-span-2 md:col-start-1",
  metadata: `col-span-12 ${editorialMeasure.meta} md:col-span-4 md:col-start-1 lg:col-span-3 lg:col-start-10 lg:text-right`,
  image: "col-span-12 md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3",
  "image-wide": "col-span-12 lg:col-span-10 lg:col-start-2",
  "image-break": "col-span-12 lg:col-span-9 lg:col-start-4",
  rail: "col-span-12 md:col-span-2 md:col-start-1",
  "breath-right": "col-span-12 md:col-span-2 md:col-start-11 max-md:hidden",
} as const;

export type EditorialSpan = keyof typeof editorialSpans;

export const editorialSectionSpacing = {
  hero: "",
  chapter:
    "pt-[clamp(10rem,28vh,16rem)] pb-[clamp(7rem,16vh,11rem)]",
} as const;

export type EditorialSectionSpacing = keyof typeof editorialSectionSpacing;

export type WorkSpreadVariant = 0 | 1 | 2 | 3 | 4;

/** Per-panel asymmetry for horizontal work index — Vivek / Readymag rhythm */
export const workSpreadVariants: Record<
  WorkSpreadVariant,
  {
    title: string;
    body: string;
    meta: string;
    image: string;
    panel: string;
    width: string;
  }
> = {
  0: {
    title:
      "col-span-12 md:col-span-9 md:col-start-3 font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[0.9] tracking-tighter",
    meta: "col-span-12 md:col-span-2 md:col-start-1 md:row-start-1",
    body: "col-span-12 md:col-span-4 md:col-start-3",
    image:
      "ml-auto w-full md:w-[78%] lg:w-[72%] border border-border-subtle bg-surface aspect-[16/10]",
    panel: "md:pr-[6vw]",
    width: "w-[92vw] shrink-0",
  },
  1: {
    title:
      "col-span-12 md:col-span-8 md:col-start-2 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[0.92] tracking-tighter",
    meta: "col-span-12 md:col-span-2 md:col-start-10 md:text-right",
    body: "col-span-12 md:col-span-5 md:col-start-6",
    image:
      "w-full md:w-[52%] border border-border-subtle bg-surface aspect-[3/4]",
    panel: "md:pl-[4vw]",
    width: "w-[88vw] shrink-0",
  },
  2: {
    title:
      "col-span-12 md:col-span-10 md:col-start-1 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.88] tracking-tighter",
    meta: "col-span-12 md:col-span-2 md:col-start-1",
    body: "col-span-12 md:col-span-4 md:col-start-7",
    image:
      "mr-auto w-full md:w-[65%] border border-border-subtle bg-surface aspect-[4/3]",
    panel: "",
    width: "w-screen shrink-0",
  },
  3: {
    title:
      "col-span-12 md:col-span-7 md:col-start-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[0.93] tracking-tighter",
    meta: "col-span-12 md:col-span-2 md:col-start-1 md:row-start-2",
    body: "col-span-12 md:col-span-5 md:col-start-2",
    image:
      "ml-[clamp(0px,8vw,6rem)] w-full md:w-[85%] border border-border-subtle bg-surface aspect-[21/9]",
    panel: "md:pr-[3vw]",
    width: "w-[94vw] shrink-0",
  },
  4: {
    title:
      "col-span-12 md:col-span-9 md:col-start-2 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.9] tracking-tighter",
    meta: "col-span-12 md:col-span-2 md:col-start-11 md:text-right",
    body: "col-span-12 md:col-span-4 md:col-start-8",
    image:
      "w-full border border-border-subtle bg-surface aspect-[5/4] md:max-h-[52vh]",
    panel: "md:pl-[5vw]",
    width: "w-[90vw] shrink-0",
  },
};
