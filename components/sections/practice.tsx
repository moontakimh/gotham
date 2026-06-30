import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { practiceContent } from "@/components/sections/practice/content";

export function Practice() {
  const { label, lead, domains, body, note } = practiceContent;

  return (
    <EditorialSection id="practice" aria-label="Practice" spacing="chapter">
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
            as="p"
            span="body-wide"
            className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tighter text-text-primary"
          >
            {lead}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(1.5rem,4vh,2.5rem)]">
          <EditorialCol
            as="p"
            span="body"
            className="font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]"
          >
            {domains.join(" · ")}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(2.5rem,6vh,4rem)]">
          <EditorialCol
            as="p"
            span="body-offset"
            className="font-body text-base leading-[1.7] text-text-primary md:text-lg"
          >
            {body}
          </EditorialCol>

          <EditorialCol
            as="p"
            span="metadata"
            className="mt-[clamp(2rem,5vh,3rem)] font-metadata text-[10px] leading-relaxed uppercase tracking-[0.22em] text-text-secondary md:mt-[clamp(3rem,8vh,5rem)] md:text-[11px]"
          >
            {note}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
