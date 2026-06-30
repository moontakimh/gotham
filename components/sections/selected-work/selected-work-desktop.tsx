"use client";

import { useEffect, useRef, useState } from "react";

import type { SelectedWorkProject } from "@/components/sections/selected-work/content";
import { ProjectSpread } from "@/components/sections/selected-work/project-spread";

const SCROLL_PER_SPREAD_VH = 125;

type SelectedWorkDesktopProps = {
  projects: SelectedWorkProject[];
  label: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SelectedWorkDesktop({ projects, label }: SelectedWorkDesktopProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      const panels = Array.from(track.children) as HTMLElement[];

      let scrollDistance = 0;
      for (let i = 0; i < panels.length - 1; i++) {
        scrollDistance += panels[i]?.offsetWidth ?? 0;
      }

      track.style.transform = `translate3d(${-progress * scrollDistance}px, 0, 0)`;

      const anchor = window.innerWidth * 0.15;
      let nextActive = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      panels.forEach((panel, index) => {
        const distance = Math.abs(panel.getBoundingClientRect().left - anchor);
        if (distance < minDistance) {
          minDistance = distance;
          nextActive = index;
        }
      });

      setActiveIndex(nextActive);
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

  const activeProject = projects[activeIndex];

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
        <div
          className="pointer-events-none absolute inset-x-0 top-[var(--editorial-gutter-x)] z-10 mx-auto flex max-w-[var(--editorial-max-width)] items-end justify-between px-[var(--editorial-gutter-x)]"
          aria-live="polite"
        >
          <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-[11px]">
            {label}
          </p>
          <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-[11px]">
            {activeProject?.number ?? "01"} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div ref={trackRef} className="flex h-full will-change-transform">
          {projects.map((project, index) => (
            <ProjectSpread
              key={project.number}
              project={project}
              layout="panel"
              variant={(index % 5) as 0 | 1 | 2 | 3 | 4}
              isActive={activeIndex === index}
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-[var(--editorial-gutter-x)] mx-auto max-w-[var(--editorial-max-width)] px-[var(--editorial-gutter-x)]"
          aria-hidden
        >
          <div className="h-px w-full bg-border-subtle">
            <div
              className="h-px bg-text-primary transition-[width] duration-320 motion-reduce:transition-none"
              style={{
                width: `${((activeIndex + 1) / projects.length) * 100}%`,
              }}
            />
          </div>
          <p className="mt-3 font-metadata text-[10px] uppercase tracking-[0.22em] text-text-secondary md:text-[11px]">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
