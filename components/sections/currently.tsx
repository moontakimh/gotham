import Link from "next/link";

import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { currentlyContent } from "@/components/sections/currently/content";

const teaserBlocks = currentlyContent.blocks.slice(0, 4);

export function Currently() {
  const { label, title, callout } = currentlyContent;

  return (
    <EditorialSection id="currently" aria-label="Currently" spacing="chapter">
      <EditorialContainer>
        <EditorialGrid>
          <EditorialCol
            as="p"
            span="metadata-label"
            className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
          >
            {label}
          </EditorialCol>

          <EditorialCol
            as="h2"
            span="display-tight"
            className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[0.92] tracking-tighter text-text-primary"
          >
            {title}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(3rem,8vh,5rem)] gap-y-[clamp(2rem,5vh,3rem)]">
          {teaserBlocks.map((block) => (
            <article
              key={block.category}
              className="col-span-12 border-t border-border-subtle pt-[clamp(1.25rem,3vh,1.75rem)] sm:col-span-6 lg:col-span-6"
            >
              <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs">
                {block.category}
              </p>
              <p className="mt-[clamp(0.5rem,1.5vh,0.875rem)] font-body text-base leading-[1.65] text-text-primary md:text-lg">
                {block.value}
              </p>
            </article>
          ))}
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(2.5rem,6vh,4rem)]">
          <EditorialCol
            as="p"
            span="body"
            className="font-body text-base leading-snug text-accent-signal md:text-lg"
          >
            {callout}
          </EditorialCol>

          <EditorialCol as="div" span="body-offset" className="mt-[clamp(1.5rem,3vh,2rem)] md:mt-0">
            <Link
              href="/now"
              className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
            >
              Full now page →
            </Link>
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
