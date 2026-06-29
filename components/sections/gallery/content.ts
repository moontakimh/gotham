export type GalleryPhoto = {
  id: string;
  layout: string;
};

export type GalleryPlaylist = {
  title: string;
  mood: string;
  year: string;
};

export const galleryContent = {
  label: "PERSONAL",
  title: "Outside of product design.",
  photos: [
    { id: "01", layout: "md:col-span-5" },
    { id: "02", layout: "md:col-span-3" },
    { id: "03", layout: "md:col-span-4" },
    { id: "04", layout: "md:col-span-4 md:col-start-1" },
    { id: "05", layout: "md:col-span-4 md:col-start-5" },
    { id: "06", layout: "md:col-span-4 md:col-start-9" },
    { id: "07", layout: "md:col-span-3 md:col-start-1" },
    { id: "08", layout: "md:col-span-5 md:col-start-4" },
    { id: "09", layout: "md:col-span-4 md:col-start-9" },
  ] satisfies GalleryPhoto[],
  playlists: [
    {
      title: "Golden Hour Routes",
      mood: "Wandering",
      year: "2025",
    },
    {
      title: "Monsoon Interiors",
      mood: "Quiet",
      year: "2024",
    },
    {
      title: "Terminal Hours",
      mood: "Nocturnal",
      year: "2024",
    },
    {
      title: "Old Dhaka Walks",
      mood: "Observant",
      year: "2023",
    },
    {
      title: "Sunday Morning Static",
      mood: "Soft",
      year: "2023",
    },
    {
      title: "After Meetings",
      mood: "Unwinding",
      year: "2022",
    },
  ] satisfies GalleryPlaylist[],
} as const;

export type GalleryMode = "photography" | "playlists";
