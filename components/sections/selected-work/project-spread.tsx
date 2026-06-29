import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
} from "@/components/layout";
import type { SelectedWorkProject } from "@/components/sections/selected-work/content";
import { cn } from "@/lib/utils";

type ProjectSpreadProps = {
  project: SelectedWorkProject;
  layout: "panel" | "stacked";
};

export function ProjectSpread({ project, layout }: ProjectSpreadProps) {
  const { number, title, category, description, slug } = project;
  const isPanel = layout === "panel";

  return (
    <article
      aria-label={title}
      className={cn(
        "bg-canvas",
        isPanel
          ? "flex h-dvh w-screen shrink-0 flex-col"
          : "pb-[clamp(6rem,14vh,10rem)] last:pb-0",
      )}
    >
      <EditorialContainer
        className={cn(
          "flex flex-col",
          isPanel
            ? "h-full pt-[clamp(2rem,5vh,3.5rem)] pb-[clamp(1.5rem,4vh,2.5rem)]"
            : "pt-[clamp(3rem,8vh,5rem)]",
        )}
      >
        <EditorialGrid className={isPanel ? "shrink-0" : undefined}>
          <EditorialCol
            as="p"
            span="metadata-label"
            className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
          >
            {number}
          </EditorialCol>

          <EditorialCol
            as="h2"
            span="display"
            className="mt-[clamp(1.25rem,3vh,2rem)] font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.92] tracking-tighter text-text-primary"
          >
            {title}
          </EditorialCol>

          <EditorialCol
            as="p"
            span="metadata-label"
            className="mt-[clamp(1.5rem,4vh,2.5rem)] font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]"
          >
            {category}
          </EditorialCol>

          <EditorialCol
            as="p"
            span="body"
            className="mt-[clamp(1rem,2.5vh,1.5rem)] font-body text-base leading-[1.65] text-text-primary md:text-lg"
          >
            {description}
          </EditorialCol>

          <EditorialCol
            as="a"
            span="body"
            href={`/work/${slug}`}
            className="mt-[clamp(1.25rem,3vh,2rem)] font-body text-sm text-text-primary underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            View Case Study →
          </EditorialCol>
        </EditorialGrid>

        <div
          className={cn(
            "w-full border border-border-subtle bg-surface",
            isPanel
              ? "mt-[clamp(1.5rem,4vh,2.5rem)] min-h-0 flex-1"
              : "mt-[clamp(2rem,6vh,3.5rem)] aspect-[4/3]",
          )}
          aria-hidden
        />
      </EditorialContainer>
    </article>
  );
}
