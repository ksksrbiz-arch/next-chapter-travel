"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { unsplash } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * Interactive "destinations we love" gallery. On desktop the panels expand as
 * you hover (an accordion of photography); on mobile they fall back to a clean
 * card grid. Reinforces the full breadth of what we plan. Each Unsplash id was
 * validated to resolve (HTTP 200); swap for licensed photography before launch
 * while keeping the { id, alt } shape.
 */
const destinations: { id: string; alt: string; label: string; caption: string; href: string }[] = [
  {
    id: "1567617849031-8655483b300b",
    alt: "Theme-park roller coaster soaring against a clear blue sky",
    label: "Theme parks",
    caption: "Disney and Universal, planned down to the day.",
    href: "/experiences?category=theme-parks",
  },
  {
    id: "1548574505-5e239809ee19",
    alt: "Cruise ship gliding past a coastline at golden hour",
    label: "Cruises",
    caption: "The right ship and cabin, matched to how you vacation.",
    href: "/experiences?category=cruises",
  },
  {
    id: "1601999705946-fbf42c3c6c66",
    alt: "Overwater villas above a calm turquoise lagoon",
    label: "All-inclusive",
    caption: "Sun, sand, and nothing left to think about.",
    href: "/experiences?category=all-inclusive",
  },
  {
    id: "1617376431454-8195cf1fd668",
    alt: "Couple sharing a sunset on a romantic getaway",
    label: "Honeymoons & romance",
    caption: "The celebration trip you've been dreaming about.",
    href: "/plan-your-trip",
  },
  {
    id: "1501785888041-af3ef285b470",
    alt: "Mountain lake reflecting forested peaks at golden hour",
    label: "Europe & beyond",
    caption: "City escapes, alpine villages, and bucket-list journeys.",
    href: "/experiences",
  },
];

export function HomeDestinations() {
  const [active, setActive] = React.useState(0);

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
              planning a hundred times over. Hover to explore a few of the places our
              travelers love most.
            </p>
          </div>
        </Reveal>

        {/* Desktop — expanding panels */}
        <Reveal delay={0.05}>
          <div className="mt-12 hidden h-[460px] gap-3 md:flex">
            {destinations.map((d, i) => {
              const isActive = active === i;
              return (
                <a
                  key={d.label}
                  href={d.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-label={`${d.label} — ${d.caption}`}
                  className={cn(
                    "group relative overflow-hidden rounded-xl2 shadow-card ring-1 ring-ink/10 outline-none transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                    isActive ? "flex-[3.5]" : "flex-[1]",
                  )}
                >
                  <Image
                    src={unsplash(d.id, 1200)}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
                      isActive && "scale-105",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      isActive
                        ? "bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
                        : "bg-ink/45",
                    )}
                  />

                  {/* Active: full caption + arrow */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div
                      className={cn(
                        "flex items-center gap-2 transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <span className="text-xs font-semibold uppercase tracking-eyebrow text-cream/85">
                        {d.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-cream/85 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p
                      className={cn(
                        "mt-2 max-w-[34ch] font-display text-2xl font-extrabold leading-tight text-cream transition-all duration-500",
                        isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                      )}
                    >
                      {d.caption}
                    </p>
                  </div>

                  {/* Collapsed: rotated label */}
                  <span
                    className={cn(
                      "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rotate-180 text-sm font-semibold uppercase tracking-eyebrow text-cream transition-opacity duration-300 [writing-mode:vertical-rl]",
                      isActive ? "opacity-0" : "opacity-90",
                    )}
                  >
                    {d.label}
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile — simple card grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:hidden">
          {destinations.map((d) => (
            <a
              key={d.label}
              href={d.href}
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl2 shadow-card ring-1 ring-ink/10"
            >
              <Image
                src={unsplash(d.id, 800)}
                alt={d.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-cream/85">
                  {d.label}
                </span>
                <p className="mt-1 text-sm leading-snug text-cream/90">{d.caption}</p>
              </div>
            </a>
          ))}
        </div>

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
