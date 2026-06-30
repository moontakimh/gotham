import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialOverlay,
  EditorialSection,
} from "@/components/layout";
import { Logo } from "@/components/identity/logo";
import { openingContent } from "@/components/sections/opening/content";

export function Opening() {
  const { name, title, bio } = openingContent;
  const [firstName, lastName] = name.split(" ");

  return (
    <EditorialSection
      id="opening"
      aria-label="Opening"
      className="relative min-h-dvh overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8vw] top-[18vh] hidden text-text-primary/5 lg:block"
      >
        <Logo className="size-[clamp(16rem,32vw,28rem)]" />
      </div>

      <EditorialContainer className="relative grid min-h-dvh grid-rows-[auto_1fr_auto] pt-[clamp(22vh,30vh,34vh)]">
        <EditorialGrid>
          <EditorialCol
            as="p"
            span="metadata"
            className="font-metadata text-[10px] leading-relaxed uppercase tracking-[0.28em] text-accent-signal md:text-[11px]"
          >
            {title}
          </EditorialCol>

          <EditorialCol
            as="h1"
            span="display-break"
            className="mt-[clamp(2.75rem,7vh,4rem)] font-display text-[clamp(4.5rem,19.5vw,13.25rem)] font-semibold leading-[0.86] tracking-tighter text-text-primary"
          >
            {firstName}
            <br />
            {lastName}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="row-start-3">
          <EditorialCol
            as="p"
            span="body-offset"
            className="mb-[clamp(3.5rem,9vh,5rem)] font-body text-lg leading-[1.55] text-text-primary md:text-xl"
          >
            {bio}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>

      <EditorialOverlay className="bottom-8 md:bottom-10">
        <EditorialGrid>
          <EditorialCol
            as="p"
            span="metadata-label"
            className="font-metadata text-[10px] uppercase tracking-[0.28em] text-accent-signal md:text-[11px]"
          >
            Scroll
          </EditorialCol>
        </EditorialGrid>
      </EditorialOverlay>
    </EditorialSection>
  );
}
