"use client";

import { useEffect, useState } from "react";

import { selectedWorkContent } from "@/components/sections/selected-work/content";
import { SelectedWorkDesktop } from "@/components/sections/selected-work/selected-work-desktop";
import { SelectedWorkMobile } from "@/components/sections/selected-work/selected-work-mobile";

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
  const { label, projects } = selectedWorkContent;
  const mode = useLayoutMode();

  if (mode === "pin") {
    return <SelectedWorkDesktop projects={projects} />;
  }

  return <SelectedWorkMobile label={label} projects={projects} />;
}
