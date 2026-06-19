import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ChapterTimeline } from "@/components/chapter-timeline";
import { ConvChapterDetail } from "@/components/conv-chapter-detail";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From the first idea to the trip itself, here's exactly how planning with Next Chapter Travel works — in four clear chapters.",
};

const faqs = [
  { q: "What does it cost to plan with you?", a: "For most trips, nothing. We're compensated by the suppliers we book — so you get a specialist's planning at no added cost. If a trip ever requires a planning fee, we'll tell you up front before any work begins." },
  { q: "Who will I actually work with?", a: "The specialist for your trip. Theme-park trips go to Wendy; cruises and all-inclusive resorts go to Jessica. For trips that mix both, you'll have one lead and the other consulting where it helps." },
  { q: "Can you book a trip I've already started?", a: "Often, yes — depending on where you booked and how far along you are. Send us the details and we'll tell you honestly what we can take over." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Four chapters, from idea to itinerary."
        intro="Planning a trip shouldn't feel like a second job. Here's the whole process — what we handle, and the little we need from you."
      />

      <ChapterTimeline showHeading={false} />

      <ConvChapterDetail />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Good to know</p>
            <h2 className="display-2 mt-4 max-w-[16ch]">A few common questions</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.08}>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{f.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
