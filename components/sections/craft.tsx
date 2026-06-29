import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { craftContent } from "@/components/sections/craft/content";

export function Craft() {
  const { label, title, sequence, body } = craftContent;

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
            span="display"
            className="mt-[clamp(2.5rem,6vh,4rem)] font-display text-[clamp(2.5rem,7vw,4.25rem)] font-bold leading-[0.92] tracking-tighter text-text-primary md:col-start-3 lg:col-start-4"
          >
            {title}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(5rem,12vh,9rem)] md:items-end md:gap-y-0">
          <ol className="col-span-12 list-none md:col-span-5 md:col-start-1 lg:col-span-5">
            {sequence.map((step, index) => (
              <li key={step}>
                {index > 0 ? (
                  <p
                    aria-hidden
                    className="py-[clamp(0.875rem,2.5vh,1.5rem)] font-metadata text-[10px] text-text-secondary md:text-[11px]"
                  >
                    ↓
                  </p>
                ) : null}
                <p className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-none tracking-tighter text-text-primary">
                  {step}
                </p>
              </li>
            ))}
          </ol>

          <EditorialCol
            as="p"
            span="body-offset"
            className="mt-[clamp(3rem,8vh,5rem)] font-body text-base leading-[1.7] text-text-primary max-md:ml-[clamp(1.5rem,6vw,3rem)] md:mt-0 md:pb-[clamp(0.25rem,1vh,0.5rem)] md:text-lg"
          >
            {body}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
