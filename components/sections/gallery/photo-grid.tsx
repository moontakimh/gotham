"use client";

import type { GalleryPhoto } from "@/components/sections/gallery/content";
import { cn } from "@/lib/utils";

type PhotoGridProps = {
  photos: GalleryPhoto[];
  onPhotoSelect: (photoId: string) => void;
};

export function PhotoGrid({ photos, onPhotoSelect }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-[clamp(0.75rem,2vw,1.25rem)] md:grid-cols-12 md:gap-[clamp(1rem,2.5vw,1.5rem)]">
      {photos.map((photo) => (
        <button
          key={photo.id}
          type="button"
          aria-label={`Open photo ${photo.id}`}
          onClick={() => onPhotoSelect(photo.id)}
          className={cn(
            "aspect-square w-full bg-surface transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
            photo.layout,
          )}
        />
      ))}
    </div>
  );
}
