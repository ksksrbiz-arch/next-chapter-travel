import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { ExperienceCard } from "@/components/experience-card";
import type { Experience } from "@/lib/types";

/**
 * "You might also like" row. Renders other experiences as ExperienceCards
 * (each linking to its own detail page). The page passes the already-filtered
 * list of related items.
 */
export function ExpDetailRelated({ items }: { items: Experience[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section bg-paper-deep">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Keep exploring</p>
          <h2 className="display-2 mt-4 text-ink">You might also like</h2>
          <p className="lede mt-5 text-ink/75">
            A few more starting points. Each one is custom-built around you once we
            know your story.
          </p>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((exp) => (
            <Reveal key={exp.slug} className="h-full">
              <ExperienceCard exp={exp} />
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
