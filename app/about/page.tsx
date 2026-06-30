import type { Metadata } from "next";
import Link from "next/link";

import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { openingContent } from "@/components/sections/opening/content";

export const metadata: Metadata = {
  title: "About — Moontakim",
  description: openingContent.bio,
};

export default function AboutPage() {
  return (
    <main className="min-h-full flex-1 bg-canvas pt-[clamp(5rem,12vh,7rem)]">
      <EditorialSection aria-label="About" spacing="chapter">
        <EditorialContainer>
          <EditorialGrid>
            <EditorialCol
              as="p"
              span="metadata-label"
              className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
            >
              About
            </EditorialCol>

            <EditorialCol
              as="h1"
              span="display"
              className="mt-[clamp(2.5rem,6vh,4rem)] font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-tighter text-text-primary md:col-span-8 md:col-start-3 lg:col-start-4"
            >
              Philosophy & process
            </EditorialCol>

            <EditorialCol
              as="p"
              span="body"
              className="mt-[clamp(2rem,5vh,3rem)] font-body text-lg leading-[1.65] text-text-primary md:text-xl"
            >
              {openingContent.bio}
            </EditorialCol>

            <EditorialCol
              as="p"
              span="body-offset"
              className="mt-[clamp(2rem,5vh,3rem)] font-body text-base leading-[1.65] text-text-secondary md:text-lg"
            >
              Full about content — positioning, process, and editorial principles —
              ships after Figma DS v1.0 approval.
            </EditorialCol>
          </EditorialGrid>

          <div className="mt-[clamp(4rem,10vh,6rem)]">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
            >
              ← Home
            </Link>
          </div>
        </EditorialContainer>
      </EditorialSection>
    </main>
  );
}
