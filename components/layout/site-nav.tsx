import Link from "next/link";

import { Logo } from "@/components/identity/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#selected-work" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[var(--editorial-max-width)] items-center justify-between px-[var(--editorial-gutter-x)] py-4 md:py-5">
        <Link
          href="/"
          className="inline-flex min-h-11 min-w-11 items-center gap-3 text-text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Moontakim — home"
        >
          <Logo className="size-7 md:size-8" />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-x-[clamp(1.25rem,3vw,2rem)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex min-h-11 items-center font-body text-sm text-text-primary",
                    "underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                    "md:text-base",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
