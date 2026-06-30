export type ExperienceEntry = {
  year: string;
  company: string;
  role: string;
  description: string;
  current?: boolean;
};

export const experienceContent = {
  label: "EXPERIENCE",
  entries: [
    {
      year: "2026 — Now",
      company: "Pathao Pay",
      role: "Product Manager",
      description:
        "Leading product direction for everyday payments across Bangladesh — from discovery through delivery with engineering and business.",
      current: true,
    },
    {
      year: "2025",
      company: "City Bank PLC",
      role: "Assistant Manager, Digital Financial Services",
      description:
        "Shaped digital banking services and the Blink design system — from discovery through launch in a regulated environment.",
    },
    {
      year: "2023 — 2024",
      company: "Pathao",
      role: "Product Designer",
      description:
        "Designed core flows for ride, delivery, and platform services at national scale.",
    },
  ] satisfies ExperienceEntry[],
};
