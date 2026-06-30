"use client";

import Link from "next/link";

import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { galleryContent } from "@/components/sections/gallery/content";

const teaserPhotos = galleryContent.photos.slice(0, 3);
const featuredPlaylist = galleryContent.playlists[0];

export function Gallery() {
  const { label, title } = galleryContent;

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
            span="display-tight"
            className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[0.92] tracking-tighter text-text-primary"
          >
            {title}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(3rem,8vh,5rem)]">
          {teaserPhotos.map((photo) => (
            <div
              key={photo.id}
              className="col-span-4 aspect-square border border-border-subtle bg-surface transition-transform duration-180 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:col-span-4 lg:col-span-3 lg:col-start-3"
              aria-hidden
            />
          ))}
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(2.5rem,6vh,4rem)]">
          <div className="col-span-12 lg:col-span-6 lg:col-start-3">
            <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs">
              Currently listening
            </p>
            <p className="mt-[clamp(0.75rem,2vh,1.25rem)] font-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-tight tracking-tighter text-text-primary">
              {featuredPlaylist.title}
            </p>
            <p className="mt-1 font-metadata text-[10px] uppercase tracking-[0.2em] text-text-secondary md:text-[11px]">
              {featuredPlaylist.mood} · {featuredPlaylist.year}
            </p>
          </div>

          <div className="col-span-12 mt-[clamp(1.5rem,3vh,2rem)] lg:col-span-4 lg:col-start-3 lg:mt-[clamp(2.5rem,6vh,4rem)]">
            <Link
              href="/now"
              className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
            >
              View all →
            </Link>
          </div>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
