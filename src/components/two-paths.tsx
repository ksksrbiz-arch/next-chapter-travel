import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { photos, unsplash } from "@/lib/images";

/** The balanced co-owner motif: theme parks and cruises, always shown as
 *  equal halves. Honors both co-owners without naming the site after either. */
const paths = [
  {
    no: "01",
    title: "Theme parks & adventures",
    expert: "Curated by Wendy",
    copy: "Disney, Universal, and the family trips that take real strategy to get right.",
    href: "/experiences?category=theme-parks",
    photo: photos.themePark,
  },
  {
    no: "02",
    title: "Luxury cruises & resorts",
    expert: "Curated by Jessica",
    copy: "The right ship, cabin, and all-inclusive — matched to exactly how you vacation.",
    href: "/experiences?category=cruises",
    photo: photos.cruise,
  },
];

export function TwoPaths() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Two specialties, one agency</p>
          <h2 className="display-2 mt-4 max-w-[18ch]">
            Two ways to travel. Both handled like the only thing we do.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.1}>
              <Link
                href={p.href}
                className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-xl2 p-8 text-cream shadow-card transition-shadow hover:shadow-lift"
              >
                <Image
                  src={unsplash(p.photo.id, 1200)}
                  alt={p.photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/15" />
                <span className="chapter-no !text-cream/85">Path {p.no}</span>
                <h3 className="mt-2 font-display text-3xl font-extrabold">{p.title}</h3>
                <p className="mt-3 max-w-sm text-cream/90">{p.copy}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-cream/85">
                    {p.expert}
                  </span>
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
