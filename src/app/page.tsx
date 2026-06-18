import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { StatBand } from "@/components/stat-band";
import { TwoPaths } from "@/components/two-paths";
import { ChapterTimeline } from "@/components/chapter-timeline";
import { ExperienceCard } from "@/components/experience-card";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { experiences, testimonials } from "@/lib/data";

export default function HomePage() {
  // Balanced teaser: one parks, one cruise, one both.
  const featured = [
    experiences.find((e) => e.expert === "wendy"),
    experiences.find((e) => e.expert === "jessica"),
    experiences.find((e) => e.expert === "both"),
  ].filter(Boolean) as typeof experiences;

  return (
    <>
      <Hero />
      <StatBand />
      <TwoPaths />

      {/* Featured experiences teaser */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">A taste of what's possible</p>
                <h2 className="display-2 mt-4 max-w-[16ch]">Featured experiences</h2>
              </div>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-ink"
              >
                See all experiences <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((exp, i) => (
              <Reveal key={exp.slug} delay={i * 0.08}>
                <ExperienceCard exp={exp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ChapterTimeline />

      {/* Testimonials */}
      <section className="section bg-ink text-paper">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-gold-soft before:bg-gold-soft/70">In their words</p>
            <h2 className="display-2 mt-4 text-paper">
              The trips people don't stop talking about.
            </h2>
            <p className="mt-5 text-paper/70">
              Most of our travelers come from someone who traveled with us first.
              Here's why.
            </p>
            <Link
              href="/testimonials"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-paper"
            >
              Read more stories <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl2 bg-paper p-8 text-ink sm:p-10">
              <TestimonialCarousel items={testimonials} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
