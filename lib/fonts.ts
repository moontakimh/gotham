import { Geist_Mono, Inter, Syne } from "next/font/google";

export const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const fontMetadata = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-metadata",
});

export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontMetadata.variable,
].join(" ");
