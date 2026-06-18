import type { Metadata } from "next";
import { Compass, Ship, Tent, Wallet } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free planning guides and answers to common questions about theme-park trips, cruises, and all-inclusive resorts.",
};

const guides = [
  { icon: Tent, title: "Theme-park starter guide", copy: "When to go, how many days, and the rookie mistakes that cost you a day." },
  { icon: Ship, title: "First-cruise checklist", copy: "Picking a line, a cabin, and an itinerary that fits how you actually travel." },
  { icon: Wallet, title: "Budgeting your trip", copy: "What's worth paying for, what isn't, and where the real value hides." },
  { icon: Compass, title: "Family travel playbook", copy: "Keeping every age happy on one trip — from toddlers to grandparents." },
];

const faqs = [
  { q: "Do you charge a planning fee?", a: "For the vast majority of trips, no. We're paid by the suppliers we book. If a trip ever needs a fee, you'll know before any work starts." },
  { q: "Which trips do you specialize in?", a: "Theme parks (Disney, Universal) and luxury cruises plus all-inclusive resorts. Wendy leads parks; Jessica leads cruises and resorts. We also plan trips that blend both." },
  { q: "How far in advance should I book?", a: "It depends on the trip — popular Disney dates and premium cabins book up months out, while some last-minute deals are excellent. Reach out and we'll tell you the right window for yours." },
  { q: "Can you work with travelers outside Oregon?", a: "Yes. We're Oregon-based but plan trips for travelers anywhere in the U.S. Everything is handled by phone, email, and text." },
  { q: "What if something goes wrong during my trip?", a: "You contact your specialist directly — not a call center. Having one person who already knows your trip is the whole point." },
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
            <h2 className="display-2 mt-4 max-w-[16ch]">Start here</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {guides.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 0.08}>
                <div className="surface flex gap-5 p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper-deep text-gold">
                    <g.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{g.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{g.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2 mt-4 max-w-[14ch]">Questions, answered</h2>
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
