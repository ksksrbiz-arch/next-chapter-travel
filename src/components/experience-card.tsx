import Link from "next/link";
import type { Experience } from "@/lib/types";

const expertLabel: Record<Experience["expert"], string> = {
  wendy: "Curated by Wendy",
  jessica: "Curated by Jessica",
  both: "Curated by Wendy & Jessica",
};

const categoryTint: Record<string, string> = {
  "theme-parks": "from-clay/85 to-gold/70",
  cruises: "from-sea/85 to-ink/70",
  "all-inclusive": "from-gold/80 to-clay/70",
  family: "from-sea-soft/80 to-gold/70",
  international: "from-ink-soft/85 to-sea/70",
};

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <Link
      href={`/experiences#${exp.slug}`}
      id={exp.slug}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-paper shadow-card transition-shadow hover:shadow-lift"
    >
      {/* Photo slot */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${categoryTint[exp.category] ?? categoryTint["theme-parks"]}`}>
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink">
          {exp.location}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{exp.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{exp.blurb}</p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs">
          <span className="font-semibold uppercase tracking-eyebrow text-gold">
            {expertLabel[exp.expert]}
          </span>
          {exp.duration && <span className="text-stone">{exp.duration}</span>}
        </div>
      </div>
    </Link>
  );
}
