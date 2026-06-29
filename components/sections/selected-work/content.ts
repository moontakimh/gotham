export type SelectedWorkProject = {
  number: string;
  title: string;
  category: string;
  description: string;
  slug: string;
};

export const selectedWorkContent = {
  label: "SELECTED WORK",
  projects: [
    {
      number: "01",
      title: "Project 01",
      category: "Product Design",
      description:
        "End-to-end product work shaping how people move money every day.",
      slug: "project-01",
    },
    {
      number: "02",
      title: "Project 02",
      category: "Design Systems",
      description:
        "A shared language for teams shipping interface at scale.",
      slug: "project-02",
    },
    {
      number: "03",
      title: "Project 03",
      category: "Fintech",
      description:
        "Trust-first flows for regulated financial products in emerging markets.",
      slug: "project-03",
    },
  ] satisfies SelectedWorkProject[],
};
