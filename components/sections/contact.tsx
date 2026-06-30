import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { contactContent } from "@/components/sections/contact/content";

export function Contact() {
  const { label, headline, body, channels, secondary } = contactContent;

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
            span="display-break"
            className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.9] tracking-tighter text-text-primary"
          >
            {headline}
          </EditorialCol>
        </EditorialGrid>

        <EditorialGrid className="mt-[clamp(3rem,8vh,5rem)] md:items-start">
          <EditorialCol
            as="p"
            span="body"
            className="font-body text-base leading-[1.7] text-text-secondary md:text-lg"
          >
            {body}
          </EditorialCol>

          <div className="col-span-12 mt-[clamp(2.5rem,6vh,4rem)] md:col-span-5 md:col-start-7 md:mt-0 lg:col-span-4 lg:col-start-8">
            <ul className="space-y-[clamp(1.5rem,4vh,2.5rem)]">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-[11px]">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-2 inline-flex min-h-11 items-center font-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-tight tracking-tighter text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>

            <nav aria-label="Contact links" className="mt-[clamp(2.5rem,6vh,4rem)]">
              <ul className="flex flex-col gap-[clamp(0.75rem,1.5vh,1rem)]">
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
                      className="inline-flex min-h-11 items-center font-body text-sm text-text-secondary underline-offset-4 hover:text-text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
                    >
                      {link.label} →
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
