import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";

type WorkIntroHeaderProps = {
  label: string;
  intro: string;
};

export function WorkIntroHeader({ label, intro }: WorkIntroHeaderProps) {
  return (
    <EditorialSection aria-label="Selected work introduction" spacing="chapter">
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
            span="display-tight"
            className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tighter text-text-primary"
          >
            {intro}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
