import type { GalleryPlaylist } from "@/components/sections/gallery/content";

type PlaylistListProps = {
  playlists: GalleryPlaylist[];
};

export function PlaylistList({ playlists }: PlaylistListProps) {
  return (
    <ul className="grid list-none grid-cols-1 gap-[clamp(2.5rem,6vh,4rem)] md:grid-cols-2 md:gap-x-[clamp(2rem,5vw,4rem)] md:gap-y-[clamp(3rem,7vh,4.5rem)]">
      {playlists.map((playlist) => (
        <li key={playlist.title}>
          <article>
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight tracking-tighter text-text-primary">
              {playlist.title}
            </h3>
            <p className="mt-[clamp(0.625rem,1.5vh,1rem)] font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-[11px]">
              {playlist.mood}
            </p>
            <p className="mt-[clamp(0.375rem,1vh,0.625rem)] font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]">
              {playlist.year}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
