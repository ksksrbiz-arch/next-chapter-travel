import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ExperiencesGrid } from "@/components/experiences-grid";
import { CtaBanner } from "@/components/cta-banner";
import { experiences } from "@/lib/data";
import type { ExperienceCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Theme-park adventures, luxury cruises, and all-inclusive escapes — browse a sample of what we plan, then tell us yours.",
};

const valid = ["theme-parks", "cruises", "all-inclusive", "family", "international"];

export default async function ExperiencesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initial =
    category && valid.includes(category) ? (category as ExperienceCategory) : "all";

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="A sample of what's possible."
        intro="These are starting points, not a catalog. Every trip we plan is built from scratch around you — use these to spark ideas, then tell us yours."
      />

      <section className="section">
        <div className="container-x">
          <ExperiencesGrid experiences={experiences} initialCategory={initial} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
