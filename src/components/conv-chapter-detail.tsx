import { Check } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/**
 * Deliverables-per-chapter panel for /how-it-works. Pairs with ChapterTimeline
 * (which stays API-frozen) to spell out exactly what a client receives at each
 * stage — the kind of concrete reassurance a high-ticket buyer looks for.
 * Content is local on purpose; the numbers mirror the `chapters` export.
 */
const stages = [
  {
    no: "01",
    name: "The Dream",
    lead: "We listen first.",
    copy: "A short form or a relaxed call — no obligation, no scripts. We learn who's traveling, what the trip is for, and what would make it unforgettable.",
    gets: [
      "A real conversation with the specialist who'll plan your trip",
      "Honest guidance on timing, budget, and what's realistic",
      "Zero pressure — and no planning fee on most trips",
    ],
  },
  {
    no: "02",
    name: "The Plan",
    lead: "We design it around you.",
    copy: "Your specialist matches you to the right parks, ship, or resort, then builds the itinerary — dates, rooms, dining, and the details that quietly make or break a trip.",
    gets: [
      "A tailored itinerary with options, not a generic package",
      "Insider room categories, dining, and perks you can't book alone",
      "One point of contact who knows every detail of your trip",
    ],
  },
  {
    no: "03",
    name: "The Trip",
    lead: "You travel — we handle the rest.",
    copy: "Everything is booked and documented before you leave. If anything comes up on the road, you text one person who already knows your trip — never a call center.",
    gets: [
      "A complete, organized travel document set before departure",
      "Direct access to your specialist while you're away",
      "Issues handled quietly behind the scenes, not by you",
    ],
  },
  {
    no: "04",
    name: "The Memory",
    lead: "We keep what worked.",
    copy: "We remember the rooms, the pace, and the small wins that made the trip yours — so the next one starts from a head start instead of a blank page.",
    gets: [
      "Your preferences kept on file for next time",
      "First word on new itineraries that suit your family",
      "A planning partner for every chapter that follows",
    ],
  },
] as const;

export function ConvChapterDetail() {
  return (
    <section className="section bg-paper-deep">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">What you get</p>
          <h2 className="display-2 mt-4 max-w-[22ch]">
            The same care a private planner gives — at every chapter.
          </h2>
          <p className="lede mt-6 max-w-2xl">
            Premium isn&apos;t a price tag. It&apos;s knowing exactly what&apos;s handled,
            who&apos;s handling it, and what arrives at your door. Here&apos;s what each
            stage delivers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-ink/10 bg-ink/10 lg:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal key={s.no} delay={(i % 2) * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-cream p-8 sm:p-10">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-semibold text-clay">
                    {s.no}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                    {s.name}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {s.lead}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.copy}</p>
                <RevealGroup className="mt-6 space-y-3 border-t border-ink/10 pt-6">
                  {s.gets.map((g) => (
                    <Reveal key={g} variant="fade" className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-ink/80">{g}</span>
                    </Reveal>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
