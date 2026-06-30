import Link from "next/link";

import { Logo } from "@/components/identity/logo";
import {
  EditorialContainer,
  EditorialGrid,
} from "@/components/layout";
import { footerContent } from "@/components/sections/footer/content";

export function Footer() {
  const { name, role, location, copyright, columns, credit } = footerContent;

  return (
    <footer id="footer" aria-label="Footer" className="bg-canvas">
      <div className="border-t border-border-subtle" />

      <EditorialContainer className="pb-[clamp(5rem,12vh,8rem)] pt-[clamp(5rem,12vh,8rem)]">
        <EditorialGrid className="gap-y-[clamp(3rem,8vh,5rem)]">
          <div className="col-span-12 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-3 text-text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="Moontakim — home"
            >
              <Logo className="size-8" />
            </Link>
            <p className="mt-[clamp(1.5rem,4vh,2.5rem)] font-display text-[clamp(1.375rem,3vw,2rem)] font-semibold leading-tight tracking-tighter text-text-primary">
              {name}
            </p>
            <p className="mt-2 font-body text-sm leading-snug text-text-secondary md:text-base">
              {role}
            </p>
            <p className="mt-1 font-metadata text-[10px] uppercase tracking-[0.22em] text-text-secondary md:text-[11px]">
              {location}
            </p>
          </div>

          {columns.map((column) => (
            <nav
              key={column.label}
              aria-label={column.label}
              className="col-span-12 sm:col-span-6 lg:col-span-2 lg:col-start-auto"
            >
              <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-[11px]">
                {column.label}
              </p>
              <ul className="mt-[clamp(1rem,2.5vh,1.5rem)] space-y-[clamp(0.75rem,1.5vh,1rem)]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <p className="col-span-12 font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary lg:col-span-2 lg:text-right md:text-[11px]">
            {copyright}
          </p>
        </EditorialGrid>

        <p className="mt-[clamp(4rem,10vh,6rem)] max-w-2xl font-metadata text-[10px] leading-relaxed tracking-[0.18em] text-text-secondary md:text-[11px]">
          {credit}
        </p>

        <div
          aria-hidden
          data-game-placeholder
          className="mt-[clamp(2.5rem,6vh,4rem)] size-12 shrink-0"
        />
      </EditorialContainer>
    </footer>
  );
}
