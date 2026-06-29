import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { experienceContent } from "@/components/sections/experience/content";
import { cn } from "@/lib/utils";

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
        </EditorialGrid>

        <div className="mt-[clamp(4rem,10vh,6rem)] md:mt-[clamp(5.5rem,13vh,8rem)]">
          {entries.map((entry, index) => {
            const isOffset = index % 2 === 0;

            return (
              <EditorialGrid
                key={`${entry.year}-${entry.company}`}
                className={cn(index > 0 && "mt-[clamp(5rem,12vh,9rem)]")}
              >
                <EditorialCol
                  as="p"
                  span="metadata-label"
                  className="font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]"
                >
                  {entry.year}
                </EditorialCol>

                <EditorialCol
                  span={isOffset ? "body-offset" : "body"}
                  className={cn(
                    "max-md:ml-[clamp(1.5rem,6vw,3rem)]",
                    !isOffset && "md:col-start-3 lg:col-start-4",
                  )}
                >
                  <h3 className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[0.95] tracking-tighter text-text-primary">
                    {entry.company}
                  </h3>

                  <p className="mt-[clamp(0.75rem,2vh,1.25rem)] font-body text-base leading-snug text-text-primary md:text-lg">
                    {entry.role}
                  </p>

                  <p className="mt-[clamp(0.75rem,2vh,1.25rem)] font-body text-sm leading-[1.65] text-text-secondary md:text-base">
                    {entry.description}
                  </p>
                </EditorialCol>
              </EditorialGrid>
            );
          })}
        </div>
      </EditorialContainer>
    </EditorialSection>
  );
}
