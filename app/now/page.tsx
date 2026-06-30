import type { Metadata } from "next";
import Link from "next/link";

import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { GalleryFull } from "@/components/sections/gallery/gallery-full";
import { CurrentlyFull } from "@/components/sections/currently/currently-full";

export const metadata: Metadata = {
  title: "Now — Moontakim",
  description: "Photography, playlists, and what Moontakim is reading, watching, and building.",
};

export default function NowPage() {
  return (
    <main className="min-h-full flex-1 bg-canvas pt-[clamp(5rem,12vh,7rem)]">
      <EditorialSection aria-label="Now" spacing="chapter">
        <EditorialContainer>
          <EditorialGrid>
            <EditorialCol
              as="p"
              span="metadata-label"
              className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
            >
              Now
            </EditorialCol>

            <EditorialCol
              as="h1"
              span="display"
              className="mt-[clamp(2.5rem,6vh,4rem)] font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-tighter text-text-primary md:col-span-8 md:col-start-3 lg:col-start-4"
            >
              Personal layer
            </EditorialCol>
          </EditorialGrid>
        </EditorialContainer>
      </EditorialSection>

      <GalleryFull />
      <CurrentlyFull />

      <EditorialContainer className="pb-[clamp(4rem,10vh,6rem)]">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
        >
          ← Home
        </Link>
      </EditorialContainer>
    </main>
  );
}
