import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TeamCard } from "@/components/team-card";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meet the team",
  description:
    "Meet the co-owners of Next Chapter Travel — Wendy, theme-park specialist, and Jessica, cruise and resort specialist.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The two people who'll plan your trip."
        intro="No account managers, no hand-offs. The owners do the planning — and you'll work directly with the one who specializes in your kind of trip."
      />

      <section className="section">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.1}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
