import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Accordion } from "@/components/ui/accordion";
import { Schema } from "@/components/schema";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about working with Next Chapter Travel — pricing and planning fees, flights, payments, cancellations, travel insurance, documents, and privacy.",
  alternates: { canonical: "/faq" },
};

const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Working with us",
    items: [
      {
        q: "How do I get started?",
        a: "Tell us about the trip you have in mind on our Plan Your Trip page, or email or call us. We'll follow up within one business day to talk through ideas, timing, and what's realistic — no obligation.",
      },
      {
        q: "Who will I actually work with?",
        a: "A dedicated agent who specializes in the kind of trip you're planning. Depending on availability we either plan it ourselves or bring in the right specialist on our team — either way you get one point of contact who knows your trip from first idea to welcome-home.",
      },
      {
        q: "What kinds of trips do you plan?",
        a: "Theme parks (Disney, Universal), luxury cruises, and all-inclusive resorts are our deepest specialties — and we also plan honeymoons, destination weddings, group and multi-generational trips, Europe, and bucket-list travel. If you can dream it, we can usually plan it.",
      },
      {
        q: "Do I have to live nearby?",
        a: "No. We're based in Lexington, North Carolina but plan trips for travelers across the United States. Everything is handled by phone, email, and text.",
      },
      {
        q: "Can you take over a trip I've already started booking?",
        a: "Often, yes — it depends on where you booked and how far along you are. Send us the details and we'll tell you honestly what we can take over.",
      },
    ],
  },
  {
    title: "Pricing & planning fees",
    items: [
      {
        q: "Do you charge a planning fee?",
        a: "Never. We're paid by the suppliers we book — and most of them actually prohibit us from charging planning fees — so you get a full-service travel agent at no added cost to you.",
      },
      {
        q: "Will I pay more than booking it myself?",
        a: "Generally no. Our pricing matches what you'd find booking direct, and we often catch perks, room categories, or promotions you wouldn't see on your own — and the planning itself is always free.",
      },
      {
        q: "How and when do I pay?",
        a: "You pay the supplier's published price on the supplier's deposit and payment schedule. We'll walk you through the amounts and due dates; payments are made to or for the supplier, and we don't store your full card details.",
      },
    ],
  },
  {
    title: "Flights & logistics",
    items: [
      {
        q: "Do you book flights?",
        a: "We don't — and most of our clients prefer it that way. Booking your own air keeps you in control of your miles, your seat choices, and any schedule changes, with no middleman if a flight shifts. We handle everything else end to end: the resort or ship, rooms, dining, transfers, and the day-to-day plan. We're glad to tell you exactly which airports and times your itinerary calls for.",
      },
      {
        q: "When should I book my flights?",
        a: "We recommend waiting until your cruise or land arrangements are confirmed, and leaving sensible time around embarkation, park days, and check-in. We'll tell you the timing your trip needs.",
      },
      {
        q: "Do you arrange transfers and the on-the-ground details?",
        a: "Yes. Transfers, room categories, dining, park strategy, excursions, and the little upgrades are exactly the kind of details we handle so you don't have to.",
      },
    ],
  },
  {
    title: "Changes, cancellations & insurance",
    items: [
      {
        q: "What if I need to change or cancel?",
        a: "Changes and cancellations follow the supplier's terms for your specific booking. Many travel products have non-refundable deposits or penalties that grow closer to travel. We'll help you understand the policy and handle the request — and since we charge no fees, there's nothing to refund on our side.",
      },
      {
        q: "Do I need travel insurance?",
        a: "We strongly recommend it for most trips — especially cruises, international travel, and anything booked far in advance. It can help with cancellations, interruptions, and medical emergencies. We'll explain what a policy actually covers so you can decide; we never push a product you don't need.",
      },
      {
        q: "What happens if something goes wrong during my trip?",
        a: "You contact your agent directly — not a call center. Having one person who already knows your trip, and can work with the supplier on your behalf, is the whole point.",
      },
    ],
  },
  {
    title: "Documents & privacy",
    items: [
      {
        q: "Whose job is it to handle passports and visas?",
        a: "Each traveler is responsible for valid documents and entry requirements. Names on a booking must exactly match each traveler's government ID or passport, and many destinations require a passport valid at least six months beyond your travel dates. We'll point you to official resources, but we can't provide legal or immigration advice.",
      },
      {
        q: "How do you handle my personal information?",
        a: "We collect only what we need to plan and book your trip, we share it with suppliers only as required to make your bookings, and we never sell it. See our Privacy Policy for the full details.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    ),
  };

  return (
    <>
      <Schema data={faqSchema} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered honestly."
        intro="The things travelers ask us most — about how we work, what it costs, flights, payments, and more. Don't see yours? Just reach out."
      />

      <section className="section">
        <div className="container-x max-w-3xl space-y-14">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div>
                <h2 className="font-display text-xl font-bold text-ink">{group.title}</h2>
                <div className="mt-2">
                  <Accordion items={group.items} />
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <p className="text-ink/75">
              Still have a question?{" "}
              <Link href="/plan-your-trip" className="font-semibold text-clay hover:underline">
                Send us a note
              </Link>{" "}
              or read our{" "}
              <Link href="/terms" className="font-semibold text-clay hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-clay hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
