import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { categoryPhoto, unsplash } from "@/lib/images";
import type { ExperienceCategory } from "@/lib/types";

type Story = {
  category: ExperienceCategory;
  kicker: string;
  title: string;
  copy: string;
};

/** Editorial framing for each category. Local content only — honest, benefit-led. */
const stories: Story[] = [
  {
    category: "theme-parks",
    kicker: "Theme parks",
    title: "Disney, Universal & Epic Universe, handled",
    copy: "Park days mapped, the right on-property resort, hard-to-get dining, and a daily plan that keeps your crew on the headliners — and off the standby lines.",
  },
  {
    category: "cruises",
    kicker: "Cruises",
    title: "The right ship for how you sail",
    copy: "Line, itinerary, and cabin matched to how you actually want to vacation — then booked with the perks and dining secured before you ever step aboard.",
  },
  {
    category: "all-inclusive",
    kicker: "All-inclusive",
    title: "Adults-only calm or family-friendly fun",
    copy: "The resort, room category, and add-ons chosen for your pace — so the only decision left at check-in is which pool to start with.",
  },
  {
    category: "family",
    kicker: "Family & multi-gen",
    title: "One trip that fits every generation",
    copy: "Parks, a cruise, or both — paced so a five-year-old and a grandparent get a vacation that feels made for them, on the same week.",
  },
  {
    category: "international",
    kicker: "International",
    title: "Iconic places, paced like a vacation",
    copy: "Mediterranean ports, curated excursions, and an itinerary built around what you came to see — without the checklist fatigue.",
  },
];

export function ExpCategoryStories() {
  return (
    <section className="section bg-cream/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">How we think about it</p>
          <h2 className="display-2 mt-4 text-ink">
            Five ways in — every one custom-built around you
          </h2>
          <p className="lede mt-5 text-ink/75">
            The trips above are starting points. What we actually plan begins with how your
            people like to travel, then we build the rest from scratch.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {stories.map((s) => {
            const photo = categoryPhoto[s.category];
            return (
              <Reveal key={s.category}>
                <Link
                  href={`/experiences?category=${s.category}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-paper/30 shadow-card transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-safe:hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={unsplash(photo.id, 800)}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0" />
                    <span className="absolute bottom-4 left-4 font-script text-2xl text-cream drop-shadow">
                      {s.kicker}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{s.copy}</p>
                    <span className="mt-5 text-xs font-semibold uppercase tracking-eyebrow text-gold transition-colors group-hover:text-clay">
                      See {s.kicker.toLowerCase()} &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
