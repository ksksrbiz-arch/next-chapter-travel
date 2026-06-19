import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ExperiencesGrid } from "@/components/experiences-grid";
import { ExpCategoryStories } from "@/components/exp-category-stories";
import { ExpReassurance } from "@/components/exp-reassurance";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { experiences } from "@/lib/data";
import { photos } from "@/lib/images";
import type { ExperienceCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Theme-park adventures, luxury cruises, and all-inclusive escapes — browse a sample of what we plan, then tell us yours. Every trip is custom-built around you.",
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
        eyebrow="The portfolio"
        title="Starting points. Every trip custom-built around you."
        intro="This isn't a catalog you book from — it's a sense of how we work. Browse the trips below for ideas, then tell us yours. What we plan is built from scratch around your people, your pace, and the way you like to travel."
        photo={photos.santorini}
      />

      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">Browse the work</p>
            <h2 className="display-2 mt-4 text-ink">A sample of what&apos;s possible</h2>
            <p className="lede mt-5 text-ink/75">
              Filter by the kind of trip you have in mind. Each one is a launch point — the
              real itinerary comes together once we know your story.
            </p>
          </Reveal>
          <div className="mt-12">
            <ExperiencesGrid experiences={experiences} initialCategory={initial} />
          </div>
        </div>
      </section>

      <ExpCategoryStories />

      <ExpReassurance />

      <CtaBanner />
    </>
  );
}
