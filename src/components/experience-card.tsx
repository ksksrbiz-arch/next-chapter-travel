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
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-cream shadow-card transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.015]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={unsplash(photo.id, 800)}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-cream/40 bg-cream/70 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-md">
          {exp.location}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-ink">{exp.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{exp.blurb}</p>
        {(exp.duration || exp.priceFrom) && (
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink/70">
            {exp.duration && (
              <div className="flex items-baseline gap-1.5">
                <dt className="font-semibold uppercase tracking-eyebrow text-ink/45">Length</dt>
                <dd className="text-ink/80">{exp.duration}</dd>
              </div>
            )}
            {exp.priceFrom && (
              <div className="flex items-baseline gap-1.5">
                <dt className="font-semibold uppercase tracking-eyebrow text-ink/45">Pricing</dt>
                <dd className="text-ink/80">{exp.priceFrom}</dd>
              </div>
            )}
          </dl>
        )}
        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs">
          <span className="font-semibold uppercase tracking-eyebrow text-gold">
            {expertLabel[exp.expert]}
          </span>
          <span
            aria-hidden
            className="font-medium text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Build mine &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
