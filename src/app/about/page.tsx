import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { TeamCard } from "@/components/team-card";
import { CtaBanner } from "@/components/cta-banner";
import { AboutValues } from "@/components/about-values";
import { AboutCredentials } from "@/components/about-credentials";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/lib/data";
import { photos, unsplash } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Next Chapter Travel is a boutique agency co-owned by two specialists — Wendy for theme parks, Jessica for cruises. One agency, every detail handled.",
};

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
              <p className="lede !text-ink">
                Most agencies try to be everything to everyone. We went the other
                way.
              </p>
              <p>
                Wendy lives and breathes theme parks — Disney, Universal, the
                family trips that take real strategy to get right. Jessica does the
                same for cruises and all-inclusive resorts, matching travelers to
                the ship and itinerary that actually fits how they vacation.
              </p>
              <p>
                Together they run one agency under one name, so you get a
                specialist&apos;s depth with a boutique&apos;s care. Whether your
                next chapter is a first cruise, a milestone celebration, or the
                family Disney trip you&apos;ve been promising for years — it&apos;s
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

      <AboutValues />

      <AboutCredentials />

      {/* Co-owners — balanced */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Your co-owners</p>
            <h2 className="display-2 mt-4 max-w-[22ch]">
              Two owners. Two specialties. One agency you&apos;ll actually know.
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
