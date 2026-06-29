import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { contactContent } from "@/components/sections/contact/content";

export function Contact() {
  const { label, headline, body, primary, secondary } = contactContent;

  return (
    <EditorialSection id="contact" aria-label="Contact" spacing="chapter">
      <EditorialContainer>
        <EditorialGrid>
          <EditorialCol
            as="p"
            span="metadata-label"
            className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
          >
            {label}
          </EditorialCol>

          <EditorialCol
            as="h2"
            span="display"
            className="mt-[clamp(2.5rem,6vh,4rem)] font-display text-[clamp(2.75rem,8vw,5rem)] font-bold leading-[0.9] tracking-tighter text-text-primary md:col-span-10 md:col-start-3 lg:col-start-4"
          >
            {headline}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(3rem,8vh,5rem)]">
          <EditorialCol
            as="p"
            span="body-wide"
            className="font-body text-base leading-[1.7] text-text-primary max-md:ml-[clamp(1.5rem,6vw,3rem)] md:col-start-3 lg:col-start-4 md:text-lg"
          >
            {body}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(4rem,10vh,6rem)]">
          <div className="col-span-12 max-md:ml-[clamp(1.5rem,6vw,3rem)] md:col-span-5 md:col-start-3 lg:col-start-4">
            <a
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-primary px-6 py-3.5 font-body text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:inline-flex md:w-auto"
            >
              {primary.label}
            </a>

            <nav
              aria-label="Contact links"
              className="mt-[clamp(2rem,5vh,3rem)]"
            >
              <ul className="flex flex-col gap-[clamp(0.875rem,2vh,1.25rem)]">
                {secondary.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-body text-base text-text-primary underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-lg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </EditorialGrid>
      </EditorialContainer>
    </EditorialSection>
  );
}
