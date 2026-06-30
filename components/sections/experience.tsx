import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { experienceContent } from "@/components/sections/experience/content";
import { ExperienceList } from "@/components/sections/experience/experience-list";

export function Experience() {
  const { label, entries } = experienceContent;

  return (
    <EditorialSection id="experience" aria-label="Experience" spacing="chapter">
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
            Where I&apos;ve worked
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(3rem,8vh,5rem)]">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <ExperienceList entries={entries} />
          </div>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
