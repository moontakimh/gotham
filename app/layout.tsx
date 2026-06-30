import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SiteNav } from "@/components/layout/site-nav";
import { fontVariables } from "@/lib/fonts";
import { openingContent } from "@/components/sections/opening/content";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Moontakim — Senior Systems & Service Designer",
    template: "%s · Moontakim",
  },
  description: openingContent.bio,
  openGraph: {
    title: "Moontakim — Senior Systems & Service Designer",
    description: openingContent.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased font-sans", fontVariables)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="gotham-theme"
        >
          <SiteNav />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
