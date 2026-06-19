import type { ReactNode } from "react";
import { photos, type Photo } from "@/lib/images";

/**
 * Real, published journal articles for /stories and /stories/[slug].
 *
 * Local content dataset (deliberately NOT in lib/data.ts) so the journal owns
 * its own copy. Every article is written by the Next Chapter Travel team as
 * genuine, practical travel advice — no invented statistics, awards, or named
 * clients. Swap `body` for a CMS query later; keep this shape.
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  /** ISO date for <time>; `dateLabel` is the human-readable form. */
  date: string;
  dateLabel: string;
  author: string;
  photo: Photo;
  body: ReactNode;
};

/** Shared building blocks so every article body reads consistently. */
function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-2xl font-semibold leading-tight text-ink">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-ink/80">{children}</p>;
}

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 border-l-2 border-clay/40 pl-5 text-ink/70 italic">
      {children}
    </p>
  );
}

export const articles: Article[] = [
  {
    slug: "first-time-cruiser-honest-guide",
    title: "A first-time cruiser's honest guide",
    excerpt:
      "What surprises first-timers, what's actually worth booking ahead, and the small choices — cabin, dining, embarkation day — that shape the whole week.",
    category: "Cruises",
    readTime: "7 min",
    date: "2026-02-18",
    dateLabel: "February 18, 2026",
    author: "The Next Chapter Travel team",
    photo: photos.cruise,
    body: (
      <>
        <P>
          A first cruise can feel like a lot to figure out: which ship, which
          itinerary, which cabin, and a long list of add-ons that all want a
          deposit. The good news is that most of it sorts itself out once you
          decide a few things in the right order. Here is the honest version of
          what we tell first-timers, minus the brochure gloss.
        </P>

        <H2>Pick the itinerary before the ship</H2>
        <P>
          It is tempting to start with the biggest, newest ship you have seen
          online. Start with where you want to wake up instead. A Caribbean
          loop with a sea day or two plays very differently from an Alaska
          sailing where the scenery is the main event, or a Mediterranean route
          that turns into a different city every morning. The itinerary decides
          how much time you spend on board versus ashore, and that shapes
          whether you want a resort-style megaship or something smaller and
          calmer.
        </P>
        <Note>
          One quiet rule of thumb: the more sea days an itinerary has, the more
          the ship itself matters, because that is where you will actually be.
        </Note>

        <H2>The cabin choice that matters most</H2>
        <P>
          People agonize over balcony versus no balcony. That is a real
          decision, but location on the ship matters just as much for how your
          week feels. Midship, on a lower-to-middle deck, is the steadiest ride
          and the shortest walk to most things. Avoid booking directly above or
          below venues like the theater, the buffet, or the nightclub unless
          you sleep through anything.
        </P>
        <P>
          On a port-heavy itinerary where you are off the ship most days, an
          interior cabin can be a genuinely smart way to save — you are mainly
          using it to sleep. On a sailing with sea days and big scenery, a
          balcony earns its keep. Match the cabin to how you will actually spend
          the days, not to a default.
        </P>

        <H2>What's included, and what quietly isn't</H2>
        <P>
          Your fare typically covers your cabin, most dining, the main
          entertainment, and getting from port to port. The extras add up
          quietly: specialty restaurants, drinks beyond the basics, gratuities,
          shore excursions, spa, and onboard internet. None of these are traps —
          they are just choices. Decide before you sail which ones you actually
          care about so the final bill does not surprise you.
        </P>

        <H2>Book these ahead, skip the rest</H2>
        <P>
          A handful of things genuinely sell out or get more expensive at the
          last minute: popular shore excursions, specialty dining on a short
          sailing, and any spa appointment for a sea day. Almost everything else
          can wait until you are on board and have a feel for the rhythm of the
          week. You do not need to pre-plan every hour.
        </P>

        <H2>Embarkation day sets the tone</H2>
        <P>
          Pack a small carry-on with swimwear, sunscreen, any medication, and a
          change of clothes. Your checked bags can take a few hours to reach
          your cabin, and you do not want to spend the first afternoon waiting
          on them. Arrive in the embarkation city the night before whenever you
          can — a delayed flight on sailing day is one of the few travel
          problems a cruise will not wait for.
        </P>

        <H2>The honest bottom line</H2>
        <P>
          A cruise rewards people who decide what kind of week they want, then
          let the ship handle the logistics. Get the itinerary and cabin right,
          be deliberate about a few extras, and the rest tends to take care of
          itself. If you are weighing two sailings and cannot tell them apart,
          that is exactly the kind of thing we are happy to talk through.
        </P>
      </>
    ),
  },
  {
    slug: "theme-parks-with-little-kids",
    title: "Theme parks with little kids: a sanity-saving plan",
    excerpt:
      "Touring with toddlers and young kids is a different sport. Here's how to pace the day, beat the heat and the lines, and actually enjoy it.",
    category: "Theme parks",
    readTime: "6 min",
    date: "2026-03-09",
    dateLabel: "March 9, 2026",
    author: "The Next Chapter Travel team",
    photo: photos.themePark,
    body: (
      <>
        <P>
          A theme park with little kids is not a smaller version of a theme park
          with adults — it is a different activity that happens to share a
          parking lot. The families who come home glowing are rarely the ones
          who rode the most. They are the ones who paced the day around their
          kids instead of around the map. Here is the plan we walk parents
          through.
        </P>

        <H2>Build the day around rest, not rides</H2>
        <P>
          Young kids run out of battery faster than you expect, and an overtired
          toddler can end a great morning in about ninety seconds. Plan to be at
          the park early, ride and explore hard for a few hours, then leave or
          retreat to the hotel for a real midday break. Come back refreshed in
          the late afternoon when the light softens and a chunk of the day-trip
          crowd has gone home. Two strong half-days beat one exhausting full
          one almost every time.
        </P>

        <H2>Mornings are the cheat code</H2>
        <P>
          The first ninety minutes after opening are the calmest, coolest, and
          least crowded part of the day. Use them for the headline attractions
          your kids care about most, while everyone has patience to spare. Lines
          and heat both build through late morning, so front-load the things
          that would be miserable to wait for later.
        </P>
        <Note>
          A simple trick: pick the one ride your child is most excited about and
          go straight there first. The rest of the day feels like a win once the
          big one is done.
        </Note>

        <H2>Heat, snacks, and the small stuff</H2>
        <P>
          More park days are wrecked by heat and hunger than by long lines.
          Carry water, refill it often, and feed kids before they tell you they
          are hungry. Build in shade and air-conditioning on purpose — a slow
          indoor show or a sit-down lunch is not lost time, it is what keeps the
          afternoon from falling apart. Sunscreen, a hat, and a change of
          clothes for the inevitable spill earn their space in the bag.
        </P>

        <H2>Know the parent-friendly systems</H2>
        <P>
          Most major parks have a rider-swap arrangement so two adults can take
          turns on a bigger ride without both waiting the full line, plus height
          requirements and stroller rules worth checking before you go. Knowing
          these ahead of time saves a lot of in-the-moment disappointment. The
          specifics differ by park and change over time, so confirm the current
          version rather than relying on a friend's memory from a few years
          back.
        </P>

        <H2>Let go of the full checklist</H2>
        <P>
          You will not do everything, and trying to is the fastest route to a
          rough day. Pick a few must-dos, hold the rest loosely, and leave room
          for the unplanned moments — the character your kid did not expect to
          meet, the fountain they refuse to leave. Those are usually the parts
          they talk about for months.
        </P>

        <H2>The honest bottom line</H2>
        <P>
          With little kids, the goal is a happy day, not a complete one. Pace it
          gently, plan the mornings, respect the heat, and protect the rest
          breaks. If you want help matching a park and a trip length to your
          kids' ages, that is squarely the kind of planning we love to do.
        </P>
      </>
    ),
  },
  {
    slug: "choose-an-all-inclusive-youll-love",
    title: "How to choose an all-inclusive you'll actually love",
    excerpt:
      "\"All-inclusive\" covers a huge range. Here's how to read past the label and match a resort to the trip you actually want.",
    category: "Resorts",
    readTime: "6 min",
    date: "2026-04-02",
    dateLabel: "April 2, 2026",
    author: "The Next Chapter Travel team",
    photo: photos.overwater,
    body: (
      <>
        <P>
          "All-inclusive" is a pricing model, not a personality. Two resorts can
          both wear the label and deliver completely different vacations — one a
          lively, kids-everywhere splash zone, the other a hushed,
          adults-only retreat. Choosing well is mostly about reading past the
          word and matching the resort to the trip you actually want.
        </P>

        <H2>Decide who the trip is for</H2>
        <P>
          The single biggest filter is the crowd. Family-friendly resorts lean
          into kids' clubs, splash parks, and big buffets. Adults-only
          properties trade those for quiet pools, calmer evenings, and a more
          grown-up pace. Couples-focused resorts go further still. None is
          better — they are aimed at different trips. Be honest about which one
          you are taking before you compare anything else.
        </P>

        <H2>Read what "included" really means</H2>
        <P>
          This is where resorts differ the most. At some, included means
          essentially everything: all the restaurants, premium drinks, room
          service, even a few excursions. At others, the base rate covers the
          buffet and house pours, while the nicer à la carte restaurants,
          top-shelf brands, or spa access cost extra. Neither is wrong, but they
          are very different values. Ask specifically what is and is not covered
          so the resort you picture matches the one you booked.
        </P>
        <Note>
          A fast test: look at how many restaurants are included versus
          reservation-only or surcharged. It tells you a lot about how the week
          will actually feel at dinner.
        </Note>

        <H2>Match the location to your energy</H2>
        <P>
          A sprawling resort with a dozen restaurants and constant activity is
          fantastic if you want options and never have to leave. A smaller,
          quieter property in a more remote spot is perfect if your idea of a
          vacation is doing pleasantly little. Think about whether you want to
          venture out into the surrounding area or settle in and stay put — that
          changes which location and size suit you.
        </P>

        <H2>Food and drink set the mood</H2>
        <P>
          On an all-inclusive, you will eat most meals on property, so the
          dining matters more than almost anything else. A good buffet plus a
          few strong specialty restaurants beats a long list of mediocre ones.
          If food is central to how you enjoy a trip, weigh it heavily and read
          recent, specific accounts rather than the marketing.
        </P>

        <H2>Watch for the quiet extras</H2>
        <P>
          Even at a genuinely all-in resort, a few things often sit outside the
          rate: spa treatments, certain excursions, premium experiences, and
          sometimes the airport transfer. None are dealbreakers — just budget
          for the ones you will actually use so the trip stays relaxing instead
          of nickel-and-dimed.
        </P>

        <H2>The honest bottom line</H2>
        <P>
          A great all-inclusive is the one that fits your people, your pace, and
          your definition of "included." Sort those three out and the shortlist
          gets short fast. If you would rather not wade through a hundred
          near-identical listings, that comparison is exactly what we do — tell
          us the trip you want and we will point you at the resorts that match.
        </P>
      </>
    ),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
