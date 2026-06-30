"use client";

import { useEffect, useState } from "react";

import { selectedWorkContent } from "@/components/sections/selected-work/content";
import { SelectedWorkDesktop } from "@/components/sections/selected-work/selected-work-desktop";
import { SelectedWorkMobile } from "@/components/sections/selected-work/selected-work-mobile";
import { WorkIntroHeader } from "@/components/sections/selected-work/work-intro";

type LayoutMode = "stack" | "pin";

function useLayoutMode(): LayoutMode {
  const [mode, setMode] = useState<LayoutMode>("stack");

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setMode(desktopQuery.matches && !motionQuery.matches ? "pin" : "stack");
    };

    update();
    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return mode;
}

export function SelectedWork() {
  const { label, intro, projects } = selectedWorkContent;
  const mode = useLayoutMode();

  return (
    <>
      <WorkIntroHeader label={label} intro={intro} />
      {mode === "pin" ? (
        <SelectedWorkDesktop projects={projects} label={label} />
      ) : (
        <SelectedWorkMobile projects={projects} />
      )}
    </>
  );
}
