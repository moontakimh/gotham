"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed top-[var(--editorial-gutter-x)] right-[var(--editorial-gutter-x)] z-50 size-9"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-[var(--editorial-gutter-x)] right-[var(--editorial-gutter-x)] z-50 flex size-9 items-center justify-center text-text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {isDark ? <Sun className="size-4" strokeWidth={1.5} /> : <Moon className="size-4" strokeWidth={1.5} />}
    </button>
  );
}
