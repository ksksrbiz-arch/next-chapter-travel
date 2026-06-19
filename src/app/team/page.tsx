import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { AboutFounderFeature } from "@/components/about-founder-feature";
import { TeamAgents } from "@/components/team-agents";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meet the team",
  description:
    "Meet Next Chapter Travel — co-owners Wendy and Jessica and a growing team of specialist travel agents who plan every kind of trip.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The team behind your next trip."
        intro="Wendy and Jessica founded Next Chapter Travel and built a team of specialist agents around them. Every trip is matched to an agent who plans your kind of travel — so you're always in expert hands."
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The co-owners</p>
            <h2 className="display-2 mt-4 max-w-[20ch] text-ink">
              Wendy &amp; Jessica.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.1}>
                <AboutFounderFeature member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamAgents />

      <CtaBanner />
    </>
  );
}
