import type { ExperienceEntry } from "@/components/sections/experience/content";

type ExperienceListProps = {
  entries: ExperienceEntry[];
};

function CurrentRole({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="border border-border-subtle px-[clamp(1.25rem,3vw,2rem)] py-[clamp(1.5rem,4vh,2rem)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-accent-signal md:text-[11px]">
          Currently
        </p>
        <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-[11px]">
          {entry.year}
        </p>
      </div>
      <h3 className="mt-[clamp(0.75rem,2vh,1.25rem)] font-display text-[clamp(1.375rem,3vw,2rem)] font-semibold leading-tight tracking-tighter text-text-primary">
        {entry.company}
      </h3>
      <p className="mt-1 font-body text-sm leading-snug text-text-secondary md:text-base">
        {entry.role}
      </p>
      <p className="mt-[clamp(0.75rem,2vh,1.25rem)] max-w-prose font-body text-sm leading-[1.65] text-text-primary md:text-base">
        {entry.description}
      </p>
    </article>
  );
}

function PastRole({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="grid gap-[clamp(0.75rem,2vh,1rem)] border-t border-border-subtle py-[clamp(1.25rem,3vh,1.75rem)] md:grid-cols-12 md:items-start">
      <p className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:col-span-2 md:text-[11px]">
        {entry.year}
      </p>
      <div className="md:col-span-4">
        <h3 className="font-display text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold leading-tight tracking-tighter text-text-primary">
          {entry.company}
        </h3>
        <p className="mt-1 font-body text-sm leading-snug text-text-secondary">
          {entry.role}
        </p>
      </div>
      <p className="font-body text-sm leading-[1.65] text-text-secondary md:col-span-6 md:text-base">
        {entry.description}
      </p>
    </article>
  );
}

export function ExperienceList({ entries }: ExperienceListProps) {
  const current = entries.filter((entry) => entry.current);
  const past = entries.filter((entry) => !entry.current);

  return (
    <div>
      {current.map((entry) => (
        <CurrentRole key={`${entry.year}-${entry.company}`} entry={entry} />
      ))}

      {past.length > 0 ? (
        <div className={current.length > 0 ? "mt-[clamp(2.5rem,6vh,4rem)]" : undefined}>
          {past.map((entry) => (
            <PastRole key={`${entry.year}-${entry.company}`} entry={entry} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
