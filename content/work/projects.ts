export type WorkStatus = "open" | "locked";

export type WorkProject = {
  slug: string;
  number: string;
  title: string;
  company: string;
  category: string;
  description: string;
  status: WorkStatus;
  year: string;
  role: string;
  scope: string;
};

export const workProjects = [
  {
    slug: "blink-design-system",
    number: "01",
    title: "Blink Design System",
    company: "City Bank PLC",
    category: "Design Systems",
    description:
      "A design system built in two weeks — language, iconography, and governance for a regulated bank.",
    status: "locked",
    year: "2025",
    role: "Lead Product Designer",
    scope: "Design system, iconography, governance",
  },
  {
    slug: "klikit-menu-order-analytics",
    number: "02",
    title: "Klikit Menu, Order & Analytics",
    company: "Klikit PTE",
    category: "Product Design",
    description:
      "Menu, ordering, and analytics for 2,500+ locations across Southeast Asia.",
    status: "open",
    year: "2024",
    role: "Product Designer",
    scope: "Menu, ordering, analytics",
  },
  {
    slug: "findit-mobile-ai",
    number: "03",
    title: "FindIt Mobile & AI Feature",
    company: "FindIt AG",
    category: "Product Design",
    description:
      "Mobile product with AI-assisted uploads — 100K+ downloads, 20% upload increase.",
    status: "open",
    year: "2024",
    role: "Product Designer",
    scope: "Mobile, AI features",
  },
  {
    slug: "pathao-resto-lite-home-revamp",
    number: "04",
    title: "Pathao Resto Lite & Home Revamp",
    company: "Pathao Ltd",
    category: "Product Design",
    description:
      "AI-driven restaurant lite experience — GPT-4 and Stable Diffusion 3 in production flows.",
    status: "open",
    year: "2025",
    role: "Senior Product Designer",
    scope: "Resto lite, home revamp, AI integration",
  },
  {
    slug: "brand-identity",
    number: "05",
    title: "Brand Identity Work",
    company: "Various",
    category: "Brand Identity",
    description:
      "Earlier identity work across sectors — range, restraint, and systems thinking.",
    status: "open",
    year: "2021–2023",
    role: "Designer",
    scope: "Brand identity, visual systems",
  },
] satisfies WorkProject[];

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug);
}
