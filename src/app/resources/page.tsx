import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { GuideCards } from "@/components/content-guide-cards";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free planning guides and honest answers to common questions about theme-park trips, cruises, and all-inclusive resorts.",
};

const faqs = [
  { q: "Do you charge a planning fee?", a: "For the vast majority of trips, no. We're paid by the suppliers we book. If a trip ever needs a fee, you'll know before any work starts." },
  { q: "Which trips do you specialize in?", a: "Theme parks (Disney, Universal) and luxury cruises plus all-inclusive resorts. Wendy leads parks; Jessica leads cruises and resorts. We also plan trips that blend both." },
  { q: "How far in advance should I book?", a: "It depends on the trip — popular Disney dates and premium cabins book up months out, while some last-minute deals are excellent. Reach out and we'll tell you the right window for yours." },
  { q: "Can you work with travelers outside Oregon?", a: "Yes. We're Oregon-based but plan trips for travelers anywhere in the U.S. Everything is handled by phone, email, and text." },
  { q: "What if something goes wrong during my trip?", a: "You contact your specialist directly — not a call center. Having one person who already knows your trip is the whole point." },
  { q: "Will I pay more than booking it myself?", a: "Generally no. Our pricing matches what you'd find booking direct, and we often catch perks, room categories, or promotions you wouldn't see on your own. You get the planning for free in most cases." },
  { q: "Do I need travel insurance?", a: "We almost always recommend it, especially for cruises, international trips, and anything booked far in advance. We'll explain what a policy actually covers so you can decide — we never push a product you don't need." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides, answers, and a head start."
        intro="Whether you plan with us or not, here's some of what we know — free. Browse the guides, then bring us the hard part."
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Free guides</p>
            <h2 className="display-2 mt-4 max-w-[20ch]">
              The advice we&apos;d give a good friend
            </h2>
            <p className="lede mt-5 max-w-2xl">
              No fluff and no upsell — just the things we find ourselves
              explaining most often. Each one is a starting point; bring us your
              specifics and we&apos;ll tailor the rest.
            </p>
          </Reveal>
          <GuideCards />
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2 mt-4 max-w-[14ch]">Questions, answered</h2>
            <p className="mt-5 max-w-sm text-ink/70">
              Straight answers about how we work, what it costs, and when to
              book. Don&apos;t see yours? Just ask.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
