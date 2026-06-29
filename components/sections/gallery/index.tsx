"use client";

import { useState } from "react";

import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { galleryContent } from "@/components/sections/gallery/content";
import { Lightbox } from "@/components/sections/gallery/lightbox";
import { ModeToggle } from "@/components/sections/gallery/mode-toggle";
import { PhotoGrid } from "@/components/sections/gallery/photo-grid";
import { PlaylistList } from "@/components/sections/gallery/playlist-list";

export function Gallery() {
  const { label, title, photos, playlists } = galleryContent;
  const [mode, setMode] = useState<"photography" | "playlists">("photography");
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);

  return (
    <EditorialSection id="gallery" aria-label="Personal" spacing="chapter">
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
            className="mt-[clamp(2.5rem,6vh,4rem)] font-display text-[clamp(2.25rem,6.5vw,4rem)] font-bold leading-[0.92] tracking-tighter text-text-primary md:col-span-8 md:col-start-3 lg:col-start-4"
          >
            {title}
          </EditorialCol>
        </EditorialGrid>

        <div className="mt-[clamp(2.5rem,6vh,4rem)] max-md:ml-[clamp(1.5rem,6vw,3rem)] md:col-span-12 md:col-start-3 lg:col-start-4">
          <ModeToggle mode={mode} onModeChange={setMode} />
        </div>

        <div
          key={mode}
          className="mt-[clamp(3rem,8vh,5rem)] animate-in fade-in duration-300 max-md:ml-[clamp(1.5rem,6vw,3rem)]"
        >
          {mode === "photography" ? (
            <PhotoGrid photos={photos} onPhotoSelect={setActivePhotoId} />
          ) : (
            <PlaylistList playlists={playlists} />
          )}
        </div>
      </EditorialContainer>

      <Lightbox photoId={activePhotoId} onClose={() => setActivePhotoId(null)} />
    </EditorialSection>
  );
}
