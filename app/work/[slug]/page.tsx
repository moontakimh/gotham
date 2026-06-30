import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  EditorialCol,
  EditorialContainer,
  EditorialGrid,
  EditorialSection,
} from "@/components/layout";
import { RequestAccessForm } from "@/components/work/request-access-form";
import { getWorkProject } from "@/content/work/projects";

const caseStudySections = [
  "Overview",
  "Context",
  "Problem",
  "Research",
  "Constraints",
  "Process",
  "Iterations",
  "Outcome",
  "Reflection",
] as const;

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    return { title: "Work — Moontakim" };
  }

  return {
    title: `${project.title} — Moontakim`,
    description: project.description,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    notFound();
  }

  if (project.status === "locked") {
    return (
      <main className="min-h-full flex-1 bg-canvas pt-[clamp(5rem,12vh,7rem)]">
        <EditorialSection aria-label={project.title} spacing="chapter">
          <EditorialContainer>
            <EditorialGrid>
              <EditorialCol
                as="p"
                span="metadata-label"
                className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
              >
                {project.number}
              </EditorialCol>

              <EditorialCol
                as="h1"
                span="display"
                className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-tighter text-text-primary"
              >
                {project.title}
              </EditorialCol>

              <EditorialCol
                as="p"
                span="metadata"
                className="mt-[clamp(1.5rem,4vh,2.5rem)] font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]"
              >
                {project.company} · {project.year} · {project.role}
              </EditorialCol>

              <EditorialCol
                as="p"
                span="body"
                className="mt-[clamp(1.5rem,4vh,2.5rem)] font-body text-lg leading-[1.65] text-text-primary md:text-xl"
              >
                {project.description}
              </EditorialCol>

              <EditorialCol as="div" span="body">
                <p className="mt-[clamp(2rem,5vh,3rem)] font-body text-base leading-[1.65] text-text-secondary md:text-lg">
                  This case study is available on request. No public password — access
                  is granted manually.
                </p>
                <RequestAccessForm projectTitle={project.title} />
              </EditorialCol>
            </EditorialGrid>

            <div className="mt-[clamp(4rem,10vh,6rem)]">
              <Link
                href="/#selected-work"
                className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
              >
                ← Selected work
              </Link>
            </div>
          </EditorialContainer>
        </EditorialSection>
      </main>
    );
  }

  return (
    <main className="min-h-full flex-1 bg-canvas pt-[clamp(5rem,12vh,7rem)]">
      <EditorialSection aria-label={project.title} spacing="chapter">
        <EditorialContainer>
          <EditorialGrid>
            <EditorialCol
              as="p"
              span="metadata-label"
              className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
            >
              {project.number}
            </EditorialCol>

            <EditorialCol
              as="h1"
              span="display"
              className="mt-[clamp(2rem,5vh,3rem)] font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-tighter text-text-primary"
            >
              {project.title}
            </EditorialCol>

            <EditorialCol
              as="p"
              span="metadata"
              className="mt-[clamp(1.5rem,4vh,2.5rem)] font-metadata text-[10px] uppercase tracking-[0.28em] text-text-secondary md:text-[11px]"
            >
              {project.role} · {project.year} · {project.scope}
            </EditorialCol>

            <EditorialCol
              as="p"
              span="body"
              className="mt-[clamp(1.5rem,4vh,2.5rem)] font-body text-lg leading-[1.65] text-text-primary md:text-xl"
            >
              {project.description}
            </EditorialCol>
          </EditorialGrid>
        </EditorialContainer>
      </EditorialSection>

      {caseStudySections.map((section) => (
        <EditorialSection key={section} aria-label={section} spacing="chapter">
          <EditorialContainer>
            <EditorialGrid>
              <EditorialCol
                as="p"
                span="metadata-label"
                className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
              >
                {section}
              </EditorialCol>

              <EditorialCol as="div" span="body" className="mt-[clamp(1.5rem,4vh,2.5rem)]">
                <div
                  className="aspect-[16/10] w-full border border-border-subtle bg-surface"
                  aria-hidden
                />
                <p className="mt-[clamp(1rem,2.5vh,1.5rem)] font-body text-base leading-[1.65] text-text-secondary md:text-lg">
                  {section} content — Amie-style editorial case study ships with final
                  copy and imagery.
                </p>
              </EditorialCol>
            </EditorialGrid>
          </EditorialContainer>
        </EditorialSection>
      ))}

      <EditorialContainer className="pb-[clamp(4rem,10vh,6rem)]">
        <Link
          href="/#selected-work"
          className="inline-flex min-h-11 items-center font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
        >
          ← Selected work
        </Link>
      </EditorialContainer>
    </main>
  );
}
