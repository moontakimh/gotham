"use client";

import type { GalleryMode } from "@/components/sections/gallery/content";
import { cn } from "@/lib/utils";

type ModeToggleProps = {
  mode: GalleryMode;
  onModeChange: (mode: GalleryMode) => void;
};

const modes: { id: GalleryMode; label: string }[] = [
  { id: "photography", label: "Photography" },
  { id: "playlists", label: "Playlists" },
];

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Personal content"
      className="inline-flex gap-[clamp(1.25rem,3vw,2rem)]"
    >
      {modes.map(({ id, label }, index) => {
        const selected = mode === id;

        return (
          <span key={id} className="inline-flex items-center gap-[clamp(1.25rem,3vw,2rem)]">
            {index > 0 ? (
              <span aria-hidden className="font-metadata text-[10px] text-text-secondary md:text-xs">
                |
              </span>
            ) : null}
            <button
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onModeChange(id)}
              className={cn(
                "font-metadata text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 md:text-xs",
                selected
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
