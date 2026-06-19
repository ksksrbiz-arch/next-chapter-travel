import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { unsplash } from "@/lib/images";

/**
 * Immersive "destinations we love" editorial grid. Reinforces the full breadth
 * of what we plan — parks, cruises, all-inclusive, Europe, honeymoons — so the
 * "we plan everything" promise feels true at a glance. Each Unsplash id below
 * was validated to resolve (HTTP 200) before use; swap for the agency's own
 * licensed photography before launch while keeping the { id, alt } shape.
 */
const destinations: {
  id: string;
  alt: string;
  label: string;
  caption: string;
  span: string;
}[] = [
  {
    id: "1501785888041-af3ef285b470",
    alt: "Mountain lake reflecting forested peaks at golden hour",
    label: "Europe & beyond",
    caption: "City escapes, alpine villages, and the trip you'll never forget.",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: "1548574505-5e239809ee19",
    alt: "Cruise ship gliding past a coastline at golden hour",
    label: "Cruises",
    caption: "The right ship and cabin, matched to how you vacation.",
    span: "",
  },
  {
    id: "1567617849031-8655483b300b",
    alt: "Theme-park roller coaster soaring against a clear blue sky",
    label: "Theme parks",
    caption: "Disney and Universal, planned down to the day.",
    span: "",
  },
  {
    id: "1601999705946-fbf42c3c6c66",
    alt: "Overwater villas above a calm turquoise lagoon",
    label: "All-inclusive",
    caption: "Sun, sand, and nothing left to think about.",
    span: "",
  },
  {
    id: "1617376431454-8195cf1fd668",
    alt: "Couple sharing a sunset on a romantic getaway",
    label: "Honeymoons & romance",
    caption: "The celebration trip you've been dreaming about.",
    span: "",
  },
];

export function HomeDestinations() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Destinations we love</p>
            <h2 className="display-2 mt-4 max-w-[18ch] text-ink">
              From theme-park gates to far-flung shores.
            </h2>
            <p className="lede mt-5">
              Wherever your next chapter takes you, we&rsquo;ve been there in the
              planning a hundred times over. A few of the places our travelers
              love most.
            </p>
          </div>
        </Reveal>

        <RevealGroup
          stagger={0.07}
          className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-5 sm:auto-rows-[200px] sm:grid-cols-3 lg:auto-rows-[220px]"
        >
          {destinations.map((d) => (
            <Reveal
              key={d.label}
              className={`group relative overflow-hidden rounded-xl2 shadow-card ring-1 ring-ink/10 ${d.span}`}
            >
              <Image
                src={unsplash(d.id, 1200)}
                alt={d.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-cream/85">
                  {d.label}
                </span>
                <p className="mt-1 max-w-[32ch] text-sm leading-snug text-cream/90 sm:text-base">
                  {d.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-ink/75">
              Don&rsquo;t see your dream destination? It&rsquo;s on our map too.
            </p>
            <Button href="/plan-your-trip" variant="primary">
              Plan your trip
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
