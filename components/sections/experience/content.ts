export type ExperienceEntry = {
  year: string;
  company: string;
  role: string;
  description: string;
};

export const experienceContent = {
  label: "EXPERIENCE",
  entries: [
    {
      year: "2026",
      company: "Pathao Pay",
      role: "Product Manager",
      description:
        "Leading product direction for everyday payments across Bangladesh.",
    },
    {
      year: "2025",
      company: "City Bank PLC",
      role: "Assistant Manager, Digital Financial Services",
      description:
        "Shaped digital banking services from discovery through launch.",
    },
    {
      year: "2023",
      company: "Pathao",
      role: "Product Designer",
      description:
        "Designed core flows for ride, delivery, and platform services.",
    },
  ] satisfies ExperienceEntry[],
};
