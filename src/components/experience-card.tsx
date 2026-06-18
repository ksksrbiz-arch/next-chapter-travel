import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/lib/types";
import { categoryPhoto, photos, unsplash } from "@/lib/images";

const expertLabel: Record<Experience["expert"], string> = {
  wendy: "Curated by Wendy",
  jessica: "Curated by Jessica",
  both: "Curated by Wendy & Jessica",
};

export function ExperienceCard({ exp }: { exp: Experience }) {
  const photo = categoryPhoto[exp.category] ?? photos.themePark;
  return (
    <Link
      href={`/experiences#${exp.slug}`}
      id={exp.slug}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-cream shadow-card transition-shadow hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={unsplash(photo.id, 800)}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-ink">
          {exp.location}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-ink">{exp.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{exp.blurb}</p>
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
