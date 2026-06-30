import { workProjects } from "@/content/work/projects";

export type SelectedWorkProject = (typeof workProjects)[number];

export const selectedWorkContent = {
  label: "SELECTED WORK",
  intro:
    "Five projects across fintech, platforms, and design systems — each a story of constraints, decisions, and outcomes.",
  projects: workProjects,
} as const;
