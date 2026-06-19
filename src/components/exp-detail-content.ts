/**
 * Per-experience editorial content for the detail pages. Kept local on purpose
 * (the canonical experience records live in lib/data.ts, which is frozen). Each
 * entry expands honestly on that record's blurb — no invented stats, awards, or
 * testimonials, and every page also surfaces the shared "Good to know" facts
 * (custom-quoted, no planning fee, you keep your own flights).
 */

export interface ExpDetailContent {
  /** Editorial paragraphs that expand on the blurb. */
  overview: string[];
  /** "What we handle" — concrete, honest inclusions. */
  included: string[];
  /** "Who it's for" — the kind of traveler this suits. */
  forYou: string[];
}

const fallback: ExpDetailContent = {
  overview: [
    "This is a starting point, not a fixed package. It shows the kind of trip we love to build — the real itinerary comes together once we know who's traveling, what the trip is for, and the pace that suits your crew.",
    "Tell us your version and we'll match you with an agent who specializes in exactly this kind of travel, then design it around your people from the ground up.",
  ],
  included: [
    "An itinerary built from scratch around your party and your pace",
    "Insider room categories, dining, and perks you can't easily book alone",
    "One point of contact who knows every detail of your trip",
    "A complete, organized travel document set before you leave",
  ],
  forYou: [
    "Travelers who'd rather enjoy the trip than manage the logistics",
    "Anyone who wants a real plan tailored to them, not an off-the-shelf package",
    "Families and couples who value one knowledgeable point of contact",
  ],
};

export const expDetailContent: Record<string, ExpDetailContent> = {
  "disney-world-deluxe": {
    overview: [
      "Walt Disney World rewards a plan and punishes guesswork. We design your week so the right parks land on the right days, your resort fits how your family actually travels, and the must-do rides and shows happen without the all-day waits.",
      "Dining is where so many trips stumble — we secure the reservations that are nearly impossible to land on your own, and pace them so nobody's hungry, overheated, or melting down at 2pm.",
      "The result is a trip that feels like magic instead of a project: you show up, follow a plan made for your crew, and let us quietly handle the rest.",
    ],
    included: [
      "Park-by-park day plan tuned to your family's energy and ages",
      "Resort recommendation matched to your budget and travel style",
      "Hard-to-get dining reservations, booked and paced",
      "Ride and show strategy so you skip the lines, not the highlights",
      "A complete travel document set before you leave",
    ],
    forYou: [
      "Families who want the magic without managing the logistics",
      "Multi-generation trips with a wide range of ages and energy levels",
      "First-timers who don't know where to start — and returning fans who want it smoother",
    ],
  },
  "universal-epic": {
    overview: [
      "Universal Orlando is in the middle of a transformation, with Epic Universe adding a whole new world to plan around. Two destination parks means the order you do things — and the hotel you base from — genuinely changes how the trip feels.",
      "We map your days so your group lands on the headliners early, uses the right park-access perks, and never burns an afternoon backtracking. The plan flexes for thrill-seekers and for the people who'd rather pace themselves.",
      "You get a clear, custom itinerary that turns a packed, fast-moving destination into a trip your whole crew can actually keep up with.",
    ],
    included: [
      "A two-park (plus Epic Universe) day plan built around your group",
      "Hotel recommendation matched to your priorities and budget",
      "Guidance on park-access perks worth having — and when they pay off",
      "Headliner strategy so you ride the big ones without the long waits",
      "Organized travel documents before departure",
    ],
    forYou: [
      "Thrill-seekers who want the headliners without the guesswork",
      "Crews mixing high-energy riders with people who want a gentler pace",
      "Anyone planning around the new Epic Universe for the first time",
    ],
  },
  "caribbean-luxury-cruise": {
    overview: [
      "A great cruise comes down to the right ship and the right cabin for how you actually like to vacation — and that's exactly the part that's hardest to judge from a website. We match you to a line and ship that fit your style, then secure a cabin in the right location, not just the right price.",
      "From there we layer in the perks, dining, and any pre- or post-cruise nights that make the trip feel seamless. You arrive knowing the ship suits you, because it was chosen for you.",
      "It's the difference between booking a cabin and being matched to a vacation.",
    ],
    included: [
      "Cruise line and ship matched to how you like to travel",
      "Cabin category and placement chosen on purpose, not at random",
      "Available perks, onboard credit, and dining secured where offered",
      "Pre- and post-cruise nights arranged when they make sense",
      "A full travel document set before you sail",
    ],
    forYou: [
      "First-time cruisers overwhelmed by the options",
      "Seasoned cruisers who want the right ship without the research",
      "Couples and groups celebrating something worth getting right",
    ],
  },
  "mediterranean-voyage": {
    overview: [
      "The Mediterranean is bucket-list for a reason — but iconic ports back to back can turn into an exhausting checklist if the itinerary isn't paced well. We help you choose a voyage and ship that hit the places you care about, then plan the days so the trip feels like a vacation, not a sprint.",
      "We curate excursions that are actually worth your limited hours in port, and steer you away from the ones that aren't. Where it helps, we add nights on either end so you see a city properly instead of from the rail.",
      "You come home having seen the icons and enjoyed them, with the logistics handled the whole way.",
    ],
    included: [
      "Itinerary and ship matched to the ports you most want to see",
      "Cabin selection chosen for your comfort and the route",
      "Curated, worth-it excursion guidance port by port",
      "Pre- or post-cruise city stays arranged when they add value",
      "Organized travel documents before you depart",
    ],
    forYou: [
      "Travelers chasing the Mediterranean's iconic ports",
      "Anyone who wants the highlights without an exhausting pace",
      "Couples and friends marking a milestone trip",
    ],
  },
  "all-inclusive-escape": {
    overview: [
      "All-inclusive resorts range from serene adults-only retreats to all-out family playgrounds — and the brochures rarely tell you which is which. We match you to a resort, room category, and add-ons that fit the trip you actually want, whether that's total quiet or constant fun.",
      "The room category matters more than people expect: the right one can mean a swim-up suite, a quieter section, or the perks that make the week feel elevated. We make sure you land in the right one for the right reason.",
      "You arrive to a resort chosen for your speed, with nothing left to think about but the next swim.",
    ],
    included: [
      "Resort matched to your vibe — adults-only calm or family fun",
      "Room category and section chosen for your priorities",
      "Worthwhile add-ons and perks arranged where available",
      "Transfers and timing handled around your arrival",
      "A complete travel document set before you go",
    ],
    forYou: [
      "Couples wanting a quiet, hassle-free reset",
      "Families who want fun built in and logistics taken out",
      "Anyone whose ideal vacation is deciding nothing for a week",
    ],
  },
  "multi-gen-family": {
    overview: [
      "The whole-family trip is the hardest to plan and the most worth getting right. Different ages, energy levels, and ideas of a good time all have to share one vacation — and that's exactly what we build for, whether it's parks, a cruise, or a bit of both.",
      "We design it so every generation gets a trip that feels made for them: downtime for the grandparents, headliners for the teens, magic for the little ones, and shared moments that pull it all together.",
      "One plan, one point of contact, and a trip the whole family talks about long after — without anyone burning out making it happen.",
    ],
    included: [
      "A plan that balances every generation's pace and priorities",
      "The right mix of together-time and do-your-own-thing",
      "Rooms, dining, and logistics sized for a larger party",
      "One point of contact coordinating the whole group",
      "Organized travel documents for everyone before departure",
    ],
    forYou: [
      "Families spanning multiple generations and energy levels",
      "Reunions and milestone celebrations traveling together",
      "Anyone tired of being the family's unpaid trip planner",
    ],
  },
};

/** Returns editorial content for a slug, falling back to a safe generic copy. */
export function getExpDetailContent(slug: string): ExpDetailContent {
  return expDetailContent[slug] ?? fallback;
}
