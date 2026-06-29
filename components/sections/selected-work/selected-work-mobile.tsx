import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import type { SelectedWorkProject } from "@/components/sections/selected-work/content";
import { ProjectSpread } from "@/components/sections/selected-work/project-spread";

type SelectedWorkMobileProps = {
  label: string;
  projects: SelectedWorkProject[];
  className?: string;
};

export function SelectedWorkMobile({
  label,
  projects,
  className,
}: SelectedWorkMobileProps) {
  return (
    <EditorialSection
      id="selected-work"
      aria-label="Selected Work"
      className={className}
    >
      <EditorialContainer>
        <EditorialGrid>
          <EditorialCol
            as="p"
            span="metadata-label"
            className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
          >
            {label}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>

      {projects.map((project) => (
        <ProjectSpread key={project.number} project={project} layout="stacked" />
      ))}
    </EditorialSection>
  );
}
