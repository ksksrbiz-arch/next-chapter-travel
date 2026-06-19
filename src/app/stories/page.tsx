import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { JournalGrid } from "@/components/content-journal-grid";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Trip ideas, planning guides, and destination inspiration from the Next Chapter Travel team.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Ideas for your next chapter."
        intro="Planning guides, honest takes, and destination inspiration — written by agents who plan these trips for a living."
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="font-script text-2xl text-clay">The journal</p>
            <h2 className="display-2 mt-3 max-w-[18ch]">
              An honest travel journal
            </h2>
            <p className="lede mt-5 max-w-2xl">
              The real, useful stuff — the kind of advice we give over the
              phone. Every article is written by the Next Chapter Travel team,
              with no planning fee for the trip it inspires.
            </p>
          </Reveal>
          <div className="mt-12">
            <JournalGrid />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
