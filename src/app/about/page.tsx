import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { TeamCard } from "@/components/team-card";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/lib/data";
import { photos, unsplash } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Next Chapter Travel is a boutique agency co-owned by two specialists — Wendy for theme parks, Jessica for cruises. One agency, every detail handled.",
};

const values = [
  { title: "Specialists, not generalists", copy: "Two people who go deep on what they book — not a call center reading the same scripts for every trip." },
  { title: "The details are the trip", copy: "Park strategy, the right cabin, dining you couldn't get yourself. The small things are where a trip is won or lost." },
  { title: "One point of contact", copy: "You text one person who knows your trip — before, during, and after. No queues, no transfers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A small agency, built around two specialties."
        intro="Next Chapter Travel began with a simple idea: the best trips come from someone who plans that kind of trip all the time. So we built an agency around two of them."
        photo={photos.romance}
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Most agencies try to be everything to everyone. We went the other way.
                Wendy lives and breathes theme parks — Disney, Universal, the family trips
                that take real strategy to get right. Jessica does the same for cruises and
                all-inclusive resorts, matching travelers to the ship and itinerary that
                actually fits how they vacation.
              </p>
              <p>
                Together they run one agency under one name, so you get a specialist's depth
                with a boutique's care. Whether your next chapter is a first cruise, a milestone
                celebration, or the family Disney trip you've been promising for years — it's
                planned by someone who plans exactly that, all the time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-ink/10 shadow-lift">
              <Image
                src={unsplash(photos.family.id, 1000)}
                alt={photos.family.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">What we believe</p>
            <h2 className="display-2 mt-4 max-w-[20ch]">How we plan, and why it works.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-ink/10 bg-ink/10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full bg-paper p-8">
                  <span className="font-display text-3xl font-semibold text-clay">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Co-owners — balanced */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Your co-owners</p>
            <h2 className="display-2 mt-4 max-w-[22ch]">
              Two owners. Two specialties. One agency you'll actually know.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.1}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
