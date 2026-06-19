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
              An honest travel journal, in the works
            </h2>
            <p className="lede mt-5 max-w-2xl">
              We&apos;re building this out as a place for the real, useful stuff
              — the kind of advice we give over the phone. The first entries are
              previewed below; full articles are on the way.
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
