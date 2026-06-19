import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Palmtree, Heart, Gem, Users, Landmark, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { photos, unsplash } from "@/lib/images";

/** The balanced co-owner motif: theme parks and cruises are the two
 *  specialties — shown as equal halves — but never framed as the only
 *  options. The "everything else" panel makes clear we plan any trip. */
const paths = [
  {
    no: "01",
    title: "Theme parks & adventures",
    expert: "Theme-park experts",
    copy: "Disney, Universal, and the family trips that take real strategy to get right.",
    href: "/experiences?category=theme-parks",
    photo: photos.themePark,
  },
  {
    no: "02",
    title: "Luxury cruises & resorts",
    expert: "Cruise & resort experts",
    copy: "The right ship, cabin, and all-inclusive — matched to exactly how you vacation.",
    href: "/experiences?category=cruises",
    photo: photos.cruise,
  },
];

// Just a sample — the point is that the list isn't the limit.
const everythingElse = [
  { icon: Palmtree, label: "All-inclusive resorts" },
  { icon: Heart, label: "Honeymoons & romance" },
  { icon: Gem, label: "Destination weddings" },
  { icon: Users, label: "Group & multi-gen travel" },
  { icon: Landmark, label: "European & city tours" },
  { icon: Compass, label: "Bucket-list adventures" },
];

export function TwoPaths() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">What we plan</p>
          <h2 className="display-2 mt-4 max-w-[20ch]">
            Two specialties — and a whole lot more.
          </h2>
          <p className="lede mt-5 max-w-2xl">
            Theme parks and cruises are where Wendy and Jessica go deepest. But they&rsquo;re
            specialties, not limits — wherever you&rsquo;re dreaming of going, we&rsquo;ll plan it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.1}>
              <TiltCard max={5}>
              <Link
                href={p.href}
                className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-xl2 p-8 text-cream shadow-card transition-shadow duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <Image
                  src={unsplash(p.photo.id, 1200)}
                  alt={p.photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="-z-20 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/15" />
                <span className="chapter-no !text-cream/85">Specialty {p.no}</span>
                <h3 className="mt-2 font-display text-3xl font-extrabold">{p.title}</h3>
                <p className="mt-3 max-w-sm text-cream/90">{p.copy}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-cream/85">
                    {p.expert}
                  </span>
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Everything else — make it unmistakable that we plan any trip. */}
        <Reveal delay={0.1}>
          <div className="mt-6 rounded-xl2 border border-ink/15 bg-cream p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  Dreaming of something else? We plan that too.
                </h3>
                <p className="mt-3 max-w-md text-ink/75">
                  From honeymoons to family reunions to once-in-a-lifetime bucket-list
                  trips — if you can dream it, we can plan it. Tell us what you have in mind.
                </p>
                <Button href="/plan-your-trip" variant="solid" className="mt-6">
                  Tell us what you have in mind
                </Button>
              </div>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {everythingElse.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-clay">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-ink/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
