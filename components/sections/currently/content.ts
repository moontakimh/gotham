export type CurrentlyBlock = {
  category: "Reading" | "Watching" | "Listening" | "Building" | "Thinking";
  value: string;
  layout: string;
  size: "large" | "medium" | "compact";
};

export const currentlyContent = {
  label: "CURRENTLY",
  title: "On my desk.",
  blocks: [
    {
      category: "Reading",
      value: "The Design of Everyday Things",
      layout: "md:col-span-4 md:col-start-1",
      size: "large",
    },
    {
      category: "Watching",
      value: "Past Lives",
      layout: "md:col-span-4 md:col-start-8",
      size: "medium",
    },
    {
      category: "Listening",
      value: "Khruangbin — Con Todo El Mundo",
      layout: "md:col-span-3 md:col-start-2",
      size: "medium",
    },
    {
      category: "Building",
      value: "Gotham — a portfolio built like an editorial object",
      layout: "md:col-span-4 md:col-start-7",
      size: "large",
    },
    {
      category: "Thinking",
      value:
        "Good design is often the art of leaving enough space for someone else to finish the sentence.",
      layout: "md:col-span-5 md:col-start-1",
      size: "compact",
    },
  ] satisfies CurrentlyBlock[],
  callout: "→ Working on my first short film.",
} as const;
