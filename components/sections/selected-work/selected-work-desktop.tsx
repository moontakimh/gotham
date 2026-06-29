"use client";

import { useEffect, useRef } from "react";

import type { SelectedWorkProject } from "@/components/sections/selected-work/content";
import { ProjectSpread } from "@/components/sections/selected-work/project-spread";

const SCROLL_PER_SPREAD_VH = 125;

type SelectedWorkDesktopProps = {
  projects: SelectedWorkProject[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SelectedWorkDesktop({ projects }: SelectedWorkDesktopProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollSpreads = Math.max(projects.length - 1, 0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = clamp(-section.getBoundingClientRect().top / scrollable, 0, 1);
      const offset = progress * scrollSpreads * window.innerWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [scrollSpreads]);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      aria-label="Selected Work"
      className="relative bg-canvas"
      style={{
        height: `calc(100dvh + ${scrollSpreads * SCROLL_PER_SPREAD_VH}dvh)`,
      }}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div ref={trackRef} className="flex h-full will-change-transform">
          {projects.map((project) => (
            <ProjectSpread
              key={project.number}
              project={project}
              layout="panel"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
