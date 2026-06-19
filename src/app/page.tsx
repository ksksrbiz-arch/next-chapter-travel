import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { WelcomeIntro } from "@/components/welcome-intro";
import { StatBand } from "@/components/stat-band";
import { HomeValueProps } from "@/components/home-value-props";
import { TwoPaths } from "@/components/two-paths";
import { HomeDestinations } from "@/components/home-destinations";
import { HomeCredentials } from "@/components/home-credentials";
import { ChapterTimeline } from "@/components/chapter-timeline";
import { ExperienceCard } from "@/components/experience-card";
import { HomePromise } from "@/components/home-promise";
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
      {/* Opening — hero into the warm welcome, anchored by the stat band. */}
      <Hero />
      <WelcomeIntro />
      <StatBand />

      {/* Credibility — why us, then the two specialties + everything else. */}
      <HomeValueProps />
      <TwoPaths />

      {/* Breadth — an immersive showcase of where we plan. */}
      <HomeDestinations />

      {/* Trust — accreditation strip on a dark band for contrast. */}
      <HomeCredentials />

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

      {/* The brand's signature promise, then how it unfolds over time. */}
      <HomePromise />
      <ChapterTimeline />

      {/* Testimonials */}
      <section className="section bg-ink text-cream">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow items-start !text-cream/90">In their words</p>
            <h2 className="display-2 mt-4 text-cream">
              The trips people don't stop talking about.
            </h2>
            <p className="mt-5 text-cream/75">
              Most of our travelers come from someone who traveled with us first.
              Here's why.
            </p>
            <Link
              href="/testimonials"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-cream"
            >
              Read more stories <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl2 bg-cream p-8 text-ink sm:p-10">
              <TestimonialCarousel items={testimonials} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
