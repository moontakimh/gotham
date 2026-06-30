import {
  EditorialContainer,
  EditorialGrid,
} from "@/components/layout";
import { footerContent } from "@/components/sections/footer/content";

export function Footer() {
  const { name, role, copyright, links, credit } = footerContent;

  return (
    <footer id="footer" aria-label="Footer" className="bg-canvas">
      <div className="border-t border-border-subtle" />

      <EditorialContainer className="pb-[clamp(4rem,10vh,6rem)] pt-[clamp(4rem,10vh,6rem)]">
        <EditorialGrid className="md:items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="font-display text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-tight tracking-tighter text-text-primary">
              {name}
            </p>
            <p className="mt-[clamp(0.5rem,1.5vh,0.875rem)] font-body text-sm leading-snug text-text-secondary md:text-base">
              {role}
            </p>
          </div>

          <p className="col-span-12 mt-[clamp(1.5rem,4vh,2rem)] font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:col-span-6 md:mt-0 md:text-right md:text-[11px]">
            {copyright}
          </p>
        </EditorialGrid>

        <nav
          aria-label="Footer links"
          className="mt-[clamp(3rem,8vh,5rem)]"
        >
          <ul className="flex flex-col gap-[clamp(0.875rem,2vh,1.25rem)] md:flex-row md:flex-wrap md:gap-x-[clamp(2rem,5vw,3.5rem)] md:gap-y-[clamp(0.875rem,2vh,1.25rem)]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-body text-sm text-text-primary underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-[clamp(2rem,5vh,3rem)] font-metadata text-[10px] leading-relaxed tracking-[0.2em] text-text-secondary md:text-[11px]">
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
