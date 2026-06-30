import {
  EditorialContainer,
  EditorialSection,
} from "@/components/layout";
import type { SelectedWorkProject } from "@/components/sections/selected-work/content";
import { ProjectSpread } from "@/components/sections/selected-work/project-spread";

type SelectedWorkMobileProps = {
  projects: SelectedWorkProject[];
  className?: string;
};

export function SelectedWorkMobile({
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
        {projects.map((project, index) => (
          <ProjectSpread
            key={project.number}
            project={project}
            layout="stacked"
            variant={(index % 5) as 0 | 1 | 2 | 3 | 4}
          />
        ))}
      </EditorialContainer>
    </EditorialSection>
  );
}
