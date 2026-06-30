import {
  workSpreadVariants,
  type WorkSpreadVariant,
} from "@/lib/layout";
import type { SelectedWorkProject } from "@/components/sections/selected-work/content";
import { cn } from "@/lib/utils";

type ProjectSpreadProps = {
  project: SelectedWorkProject;
  layout: "panel" | "stacked";
  variant?: WorkSpreadVariant;
  isActive?: boolean;
};

export function ProjectSpread({
  project,
  layout,
  variant = 0,
  isActive = true,
}: ProjectSpreadProps) {
  const { number, title, category, description, slug, status } = project;
  const isPanel = layout === "panel";
  const spread = workSpreadVariants[variant];

  return (
    <article
      aria-label={title}
      className={cn(
        "bg-canvas transition-[opacity,transform] duration-320 motion-reduce:transition-none",
        isPanel && spread.width,
        isPanel && !isActive && "opacity-[0.45] scale-[0.985]",
        isPanel && isActive && "opacity-100 scale-100",
        isPanel
          ? cn("flex h-dvh flex-col", spread.panel)
          : "w-full pb-[clamp(6rem,14vh,10rem)] last:pb-0",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-full w-full max-w-[var(--editorial-max-width)] flex-col px-[var(--editorial-gutter-x)]",
          isPanel
            ? "pt-[clamp(3.5rem,8vh,5rem)] pb-[clamp(1.5rem,4vh,2.5rem)]"
            : "pt-[clamp(3rem,8vh,5rem)]",
        )}
      >
        <div
          className={cn(
            "grid w-full grid-cols-12 gap-x-[var(--editorial-column-gap)]",
            isPanel ? "shrink-0 md:grid-flow-dense" : undefined,
          )}
        >
          <p
            className={cn(
              spread.meta,
              "font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs",
            )}
          >
            {number}
          </p>

          <h2
            className={cn(
              spread.title,
              "mt-[clamp(1rem,2.5vh,1.75rem)] text-text-primary md:mt-0",
            )}
          >
            {title}
            <span className="mt-[clamp(0.75rem,2vh,1.25rem)] block font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]">
              {category}
            </span>
          </h2>

          <p
            className={cn(
              spread.body,
              "mt-[clamp(1rem,2.5vh,1.5rem)] font-body text-base leading-[1.65] text-text-primary md:text-lg",
            )}
          >
            {description}
          </p>

          <a
            href={`/work/${slug}`}
            className={cn(
              spread.body,
              "mt-[clamp(1.25rem,3vh,2rem)] inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              isActive && "text-accent-signal",
            )}
          >
            {status === "locked" ? "Request access →" : "View case study →"}
          </a>
        </div>

        <div
          className={cn(
            spread.image,
            isPanel
              ? "mt-[clamp(1.5rem,4vh,2.5rem)] min-h-0 flex-1"
              : "mt-[clamp(2rem,6vh,3.5rem)]",
            isActive && isPanel && "border-text-primary/20",
          )}
          aria-hidden
        />
      </div>
    </article>
  );
}
