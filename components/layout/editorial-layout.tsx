import type { ComponentPropsWithoutRef, ElementType } from "react";

import {
  editorialSectionSpacing,
  editorialSpans,
  type EditorialSectionSpacing,
  type EditorialSpan,
} from "@/lib/layout";
import { cn } from "@/lib/utils";

type EditorialSectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: EditorialSectionSpacing;
};

/** Outermost section shell — background and vertical rhythm only. */
export function EditorialSection({
  spacing,
  className,
  ...props
}: EditorialSectionProps) {
  return (
    <section
      className={cn(
        "bg-canvas",
        spacing && editorialSectionSpacing[spacing],
        className,
      )}
      {...props}
    />
  );
}

type EditorialContainerProps = ComponentPropsWithoutRef<"div">;

/** Max-width canvas with responsive editorial gutters. */
export function EditorialContainer({
  className,
  ...props
}: EditorialContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--editorial-max-width)] px-[var(--editorial-gutter-x)]",
        className,
      )}
      {...props}
    />
  );
}

type EditorialGridProps = ComponentPropsWithoutRef<"div">;

/** 12-column editorial grid — primary layout primitive. */
export function EditorialGrid({ className, ...props }: EditorialGridProps) {
  return (
    <div
      className={cn("grid w-full grid-cols-12", className)}
      {...props}
    />
  );
}

type EditorialColProps<T extends ElementType = "div"> = {
  as?: T;
  span: EditorialSpan;
} & ComponentPropsWithoutRef<T>;

/** Places content on a predefined editorial column. */
export function EditorialCol<T extends ElementType = "div">({
  as,
  span,
  className,
  ...props
}: EditorialColProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(editorialSpans[span], className)}
      {...props}
    />
  );
}

type EditorialOverlayProps = ComponentPropsWithoutRef<"div">;

/**
 * Absolutely positioned layer aligned to the editorial container.
 * Use for metadata labels (Scroll) that sit outside the main flow.
 */
export function EditorialOverlay({
  className,
  ...props
}: EditorialOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 mx-auto w-full max-w-[var(--editorial-max-width)] px-[var(--editorial-gutter-x)]",
        className,
      )}
      {...props}
    />
  );
}
