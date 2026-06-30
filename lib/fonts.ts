import localFont from "next/font/local";

/**
 * ADR-001: Uncut Sans (local) + Commit Mono (@fontsource/commit-mono).
 */

const uncutSansDisplay = localFont({
  src: "../assets/fonts/UncutSans-Variable.woff2",
  variable: "--font-family-display",
  display: "swap",
  weight: "100 900",
});

const uncutSansBody = localFont({
  src: "../assets/fonts/UncutSans-Variable.woff2",
  variable: "--font-family-body",
  display: "swap",
  weight: "100 900",
});

export const fontDisplay = uncutSansDisplay;
export const fontBody = uncutSansBody;

/** Commit Mono loads via @fontsource in globals.css → --font-family-metadata */
export const fontMetadata = { variable: "" };

export const fontVariables = [fontDisplay.variable, fontBody.variable].join(" ");

export const fontsSource = "licensed" as const;
