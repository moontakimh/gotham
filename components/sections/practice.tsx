import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { practiceContent } from "@/components/sections/practice/content";

export function Practice() {
  const { label, body } = practiceContent;

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
            span="body-offset"
            className="mt-[clamp(4rem,10vh,6rem)] font-body text-base leading-[1.7] text-text-primary max-md:ml-[clamp(1.5rem,6vw,3rem)] md:mt-[clamp(5.5rem,13vh,8rem)] md:text-lg"
          >
            {body}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
