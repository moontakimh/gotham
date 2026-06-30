import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { craftContent } from "@/components/sections/craft/content";

export function Craft() {
  const { label, title, steps } = craftContent;

  return (
    <EditorialSection id="craft" aria-label="Craft" spacing="chapter">
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

        <ol className="mt-[clamp(3rem,8vh,5rem)] space-y-0">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="border-t border-border-subtle py-[clamp(1.5rem,4vh,2.5rem)]"
            >
              <EditorialGrid className="md:items-start">
                <p className="col-span-12 font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:col-span-2 md:col-start-1 md:text-[11px]">
                  {step.number}
                </p>
                <div className="col-span-12 mt-[clamp(0.75rem,2vh,1rem)] md:col-span-4 md:col-start-3 md:mt-0">
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tighter text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="col-span-12 mt-[clamp(0.75rem,2vh,1rem)] font-body text-base leading-[1.65] text-text-secondary md:col-span-5 md:col-start-7 md:mt-0 md:text-lg">
                  {step.description}
                </p>
              </EditorialGrid>
              {index === steps.length - 1 ? (
                <div className="mt-[clamp(1.5rem,4vh,2.5rem)] border-t border-border-subtle" />
              ) : null}
            </li>
          ))}
        </ol>
      </EditorialContainer>
    </EditorialSection>
  );
}
