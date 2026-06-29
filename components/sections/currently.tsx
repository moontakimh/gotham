import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import {
  currentlyContent,
  type CurrentlyBlock,
} from "@/components/sections/currently/content";
import { cn } from "@/lib/utils";

const valueStyles: Record<CurrentlyBlock["size"], string> = {
  large:
    "font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[0.95] tracking-tighter",
  medium:
    "font-display text-[clamp(1.375rem,3.25vw,2rem)] font-bold leading-tight tracking-tighter",
  compact: "font-body text-base leading-[1.65] md:text-lg",
};

function DeskBlock({ category, value, layout, size }: CurrentlyBlock) {
  return (
    <article
      className={cn(
        "col-span-12 max-md:ml-[clamp(1.5rem,6vw,3rem)]",
        layout,
      )}
    >
      <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs">
        {category}
      </p>
      <p
        className={cn(
          "mt-[clamp(0.75rem,2vh,1.25rem)] text-text-primary",
          valueStyles[size],
        )}
      >
        {value}
      </p>
    </article>
  );
}

export function Currently() {
  const { label, title, blocks, callout } = currentlyContent;

  return (
    <EditorialSection id="currently" aria-label="Currently" spacing="chapter">
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
            className="mt-[clamp(2.5rem,6vh,4rem)] font-display text-[clamp(2.25rem,6.5vw,4rem)] font-bold leading-[0.92] tracking-tighter text-text-primary md:col-span-7 md:col-start-3 lg:col-start-4"
          >
            {title}
          </EditorialCol>
        </EditorialGrid>

        <div className="mt-[clamp(5rem,12vh,9rem)] grid grid-cols-12 gap-y-[clamp(3rem,8vh,5rem)] md:gap-x-[clamp(1.5rem,4vw,3rem)]">
          {blocks.map((block) => (
            <DeskBlock key={block.category} {...block} />
          ))}
        </div>

        <EditorialGrid className="mt-[clamp(4rem,10vh,7rem)]">
          <EditorialCol
            as="p"
            span="body-offset"
            className="font-body text-base leading-snug text-forest-ink max-md:ml-[clamp(1.5rem,6vw,3rem)] md:text-lg"
          >
            {callout}
          </EditorialCol>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
