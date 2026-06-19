import { Ship, Sparkles, Sun, FileCheck, type LucideIcon } from "lucide-react";
import { photos, type Photo } from "@/lib/images";

export type Guide = {
  slug: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  /** Short card summary. */
  summary: string;
  /** Three-point teaser used on the Resources cards. */
  points: string[];
  photo: Photo;
  /** Hero intro paragraph on the guide page. */
  intro: string;
  /** Full body content rendered inside the prose column. */
  body: React.ReactNode;
};

/** Shared layout helpers so each guide body stays consistent. */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display text-2xl font-semibold leading-tight text-ink">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-ink/75">{children}</div>
    </section>
  );
}

function Checklist({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
          />
          <span className="text-ink/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Practical, genuine planning guides for the Resources page. These are
 * checklists and step-by-step advice — complementary to the longer Stories
 * articles, not duplicates of them. Each renders at /guides/[slug].
 */
export const guides: Guide[] = [
  {
    slug: "first-time-cruisers-guide",
    icon: Ship,
    kicker: "Cruising",
    title: "The first-time cruiser's guide",
    summary:
      "Your first cruise shouldn't be a leap of faith. Here's how to pick a line and cabin that match how you actually like to travel.",
    points: [
      "Big-ship energy vs. small-ship calm — and who each suits",
      "Why your cabin's deck and location matter more than its size",
      "What's truly included, and the extras worth budgeting for",
    ],
    photo: photos.cruise,
    intro:
      "A cruise can be the easiest vacation you'll ever take — you unpack once and wake up somewhere new. But the right ship for your neighbor might be wrong for you. Use this as a starting point, then bring us your dates and we'll match you to a line and cabin that fit.",
    body: (
      <>
        <Section title="1. Match the ship to your travel style">
          <p>
            The biggest decision isn&apos;t the destination — it&apos;s the size
            and personality of the ship. Be honest about how you like to spend a
            day off.
          </p>
          <Checklist
            items={[
              "Big resort-style ships: water parks, Broadway-caliber shows, a dozen dining rooms, and lots of families. Energetic and great value.",
              "Mid-size and premium lines: calmer pace, stronger service, fewer kids, more included.",
              "Small or luxury ships: intimate, often all-inclusive, and able to reach ports the big ships can't.",
              "River cruising: a floating boutique hotel that docks in the heart of each town — ideal for Europe.",
            ]}
          />
        </Section>
        <Section title="2. Choose your cabin by location, not just size">
          <p>
            A slightly smaller room in the right spot beats a larger one in the
            wrong place. Before you book, check:
          </p>
          <Checklist
            items={[
              "Deck position: midship, lower decks feel the least motion if you're prone to seasickness.",
              "What's directly above and below — a cabin under the pool deck or buffet can be noisy early.",
              "Balcony vs. ocean-view vs. interior: a balcony is worth it on scenic routes (Alaska, fjords); interiors are a smart saver on port-packed itineraries.",
              "Connecting or larger family staterooms book out first — claim them early.",
            ]}
          />
        </Section>
        <Section title="3. Know what's included before you sail">
          <p>
            &quot;Cruise fare&quot; means different things on different lines.
            Read past the headline price so nothing surprises you onboard.
          </p>
          <Checklist
            items={[
              "Usually included: cabin, main dining, buffet, most entertainment, the pool, and the gym.",
              "Usually extra: specialty restaurants, alcohol and soda, Wi-Fi, spa, shore excursions, and gratuities.",
              "Decide up front whether a drink or Wi-Fi package pays off for how you'll actually use it.",
              "Build in a daily cushion for excursions and tips so your onboard account doesn't surprise you.",
            ]}
          />
        </Section>
        <Section title="4. A few first-timer tips">
          <Checklist
            items={[
              "Book popular shore excursions and specialty dining as soon as booking opens.",
              "Pack a carry-on with essentials — checked bags can arrive at your cabin hours after boarding.",
              "Remember air is on you: book flights that land the day before departure so a delay never costs you the ship.",
              "Travel insurance matters more at sea, where a missed connection or medical issue is costly to fix.",
            ]}
          />
        </Section>
      </>
    ),
  },
  {
    slug: "theme-parks-with-little-kids",
    icon: Sparkles,
    kicker: "Theme parks",
    title: "Theme parks with little kids",
    summary:
      "The parks reward a plan. A few smart choices keep toddlers happy, naps intact, and the whole trip feeling like a vacation — not a march.",
    points: [
      "Picking dates around crowds, weather, and ride closures",
      "Rope-drop, mid-day rest, evening return — the rhythm that works",
      "Height limits and rider-swap so no one misses out",
    ],
    photo: photos.themePark,
    intro:
      "Disney and Universal are magical with young kids — and exhausting without a plan. The families who come home glowing aren't the ones who did the most; they're the ones who paced the day around their kids. Here's the rhythm that works.",
    body: (
      <>
        <Section title="1. Pick your dates carefully">
          <p>
            When you go shapes the whole trip more than any single ride does.
          </p>
          <Checklist
            items={[
              "Avoid major holidays and most school breaks if you can — crowds and heat both spike.",
              "Check the parks' refurbishment calendars so a favorite ride isn't closed during your visit.",
              "Shoulder seasons (late winter, early fall) often mean shorter lines and milder weather.",
              "More park days at a gentler pace beat cramming everything into a long weekend.",
            ]}
          />
        </Section>
        <Section title="2. Plan the day in three parts">
          <p>
            The single best move with little kids is to split the day and head
            back to rest. The afternoon meltdown is real — plan around it.
          </p>
          <Checklist
            items={[
              "Rope drop: arrive before opening. The first two hours have the shortest lines of the day.",
              "Mid-day reset: leave by early afternoon for a nap, a swim, or quiet time at the hotel.",
              "Evening return: come back refreshed for cooler temperatures, lights, and fireworks.",
              "Staying on-property or nearby makes the mid-day break realistic instead of aspirational.",
            ]}
          />
        </Section>
        <Section title="3. Solve height limits before you stand in line">
          <p>
            Nothing deflates a toddler faster than being turned away at the
            gate. Get ahead of it.
          </p>
          <Checklist
            items={[
              "Look up height requirements in advance and measure your child at home.",
              "Use rider swap (parent swap): one adult waits with the child while the other rides, then they switch — no double wait.",
              "Build your day around the rides everyone can enjoy together, with thrill rides as bonuses.",
              "Pack closed-toe shoes; many attractions require them regardless of height.",
            ]}
          />
        </Section>
        <Section title="4. Pack and plan for comfort">
          <Checklist
            items={[
              "Bring a stroller (or rent one) — little legs tire fast across miles of pavement.",
              "Sun protection, refillable water, and snacks prevent most afternoon meltdowns.",
              "Make sit-down dining reservations early; quick-service lines are longest at peak meal times.",
              "Learn the mobile-ordering and ride-reservation apps before you arrive, not in line.",
            ]}
          />
        </Section>
      </>
    ),
  },
  {
    slug: "choosing-an-all-inclusive",
    icon: Sun,
    kicker: "Resorts",
    title: "Choosing an all-inclusive",
    summary:
      "All-inclusive ranges from spring-break loud to adults-only serene. Knowing what 'included' really means is how you avoid a mismatch.",
    points: [
      "Adults-only vs. family resorts, and the vibe of each",
      "Reading past the brochure: dining, drinks, and hidden fees",
      "When the upgraded room tier is worth it — and when it isn't",
    ],
    photo: photos.overwater,
    intro:
      "The phrase \"all-inclusive\" covers everything from a lively family megaresort to a hushed adults-only hideaway — at wildly different price points. The trick is reading past the brochure so the place matches the trip you're picturing.",
    body: (
      <>
        <Section title="1. Choose the right kind of resort">
          <p>
            Resorts have a personality. Pick the one that matches the trip you
            actually want.
          </p>
          <Checklist
            items={[
              "Adults-only: quieter pools, romantic dining, ideal for couples and honeymoons.",
              "Family resorts: kids' clubs, water parks, and connecting rooms; livelier by design.",
              "Party-forward resorts: great for groups and young travelers, less so for an early-to-bed crowd.",
              "Boutique and luxury: smaller, more personal, with a higher level of service.",
            ]}
          />
        </Section>
        <Section title="2. Read past the word 'included'">
          <p>
            Two resorts can both say &quot;all-inclusive&quot; and deliver very
            different experiences. Ask what that actually covers.
          </p>
          <Checklist
            items={[
              "Dining: are à-la-carte restaurants included or reservation-only? How many, and how often can you book?",
              "Drinks: premium brands and specialty coffee, or house pours only?",
              "Often extra: spa, premium excursions, motorized water sports, and some specialty dining.",
              "Watch for resort fees, gratuity policies, and airport-transfer costs that sit outside the package.",
            ]}
          />
        </Section>
        <Section title="3. Decide if the upgraded tier is worth it">
          <p>
            Many resorts sell a club or &quot;preferred&quot; level. Sometimes
            it&apos;s a real upgrade; sometimes it&apos;s polish you won&apos;t use.
          </p>
          <Checklist
            items={[
              "Worth it when it unlocks better restaurant access, a quieter pool, or a far better location on the property.",
              "Often skippable if it mainly adds bathrobes and a minibar you won't touch.",
              "Room location matters: swim-up and oceanfront carry a premium — decide if the view earns it.",
              "Tell us how you'll spend your days and we'll say honestly whether the upgrade pays off.",
            ]}
          />
        </Section>
        <Section title="4. Match the location to your plans">
          <Checklist
            items={[
              "Closer to the airport means less transfer time but sometimes more crowds.",
              "Check the beach itself — some shorelines have seaweed seasons or rocky entries.",
              "If you'll never leave the resort, prioritize its grounds; if you'll explore, prioritize location.",
              "Remember you book your own flights, so it's easy to extend a night on either end.",
            ]}
          />
        </Section>
      </>
    ),
  },
  {
    slug: "passport-and-documents-checklist",
    icon: FileCheck,
    kicker: "Before you go",
    title: "Passport & documents checklist",
    summary:
      "The least glamorous part of a trip is also the one that can end it at the gate. A simple checklist keeps you moving.",
    points: [
      "The six-month passport-validity rule most travelers miss",
      "Visas, entry requirements, and proof-of-onward-travel",
      "Copies, names that match your booking, and travel insurance",
    ],
    photo: photos.flatlay,
    intro:
      "Because you book your own flights, you're the one checking in at the airline counter — so the documents are yours to get right. This is the checklist we walk clients through. None of it is hard; all of it matters before you leave home.",
    body: (
      <>
        <Section title="1. Check your passport early — months ahead">
          <p>
            Passport problems are the most common reason a trip falls apart, and
            they&apos;re entirely preventable. Start here the moment you book.
          </p>
          <Checklist
            items={[
              "The six-month rule: many countries require your passport to be valid for at least six months beyond your travel dates. Check the expiration now.",
              "Confirm you have enough blank pages — some destinations require two or more.",
              "Renewals can take weeks; if yours is close to expiring, start the process immediately.",
              "Each traveler needs their own passport, including infants and children.",
            ]}
          />
        </Section>
        <Section title="2. Confirm entry requirements for your destination">
          <p>
            Every country sets its own rules, and they change. Verify them
            against official government sources, not a forum post.
          </p>
          <Checklist
            items={[
              "Visa or travel authorization (e.g. ETA / ESTA-style programs) — some must be approved before you fly.",
              "Proof of onward or return travel, which airlines and border officers sometimes ask to see.",
              "Any required vaccinations or health forms for your destination.",
              "For cruises, check the document rules for every country you'll port in, not just where you sail from.",
            ]}
          />
        </Section>
        <Section title="3. Make sure names match exactly">
          <p>
            A mismatched name is a surprisingly common gate-side problem — and
            since you&apos;re booking your own air, it&apos;s worth a careful look.
          </p>
          <Checklist
            items={[
              "The name on your flight booking must match your passport exactly, including middle names and hyphens.",
              "Recently married or changed your name? Make sure your passport and tickets agree.",
              "Double-check everyone's birth dates and passport numbers as you book.",
              "Fix any discrepancy with the airline well before departure — corrections take time.",
            ]}
          />
        </Section>
        <Section title="4. Pack copies and a backup plan">
          <Checklist
            items={[
              "Carry a printed copy of your passport and store a photo of it securely on your phone.",
              "Keep digital and printed copies of bookings, insurance, and any visas or health forms.",
              "Leave a copy of your itinerary and passport with someone at home.",
              "Note the nearest embassy or consulate at your destination in case a document is lost.",
            ]}
          />
        </Section>
        <Section title="5. Don't skip travel insurance">
          <p>
            We almost always recommend it for international trips. A good policy
            covers trip interruption, medical care abroad, and lost documents —
            we&apos;ll explain what one actually covers so you can decide, and
            we never push a product you don&apos;t need.
          </p>
        </Section>
      </>
    ),
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
