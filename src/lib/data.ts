import type { Experience, Testimonial, TeamMember } from "./types";

/**
 * Static fallback content. Pages can read from Neon first (see
 * lib/db.ts) and fall back to this so the site renders fully on first
 * clone, before the database is seeded. Mirror these shapes in db/seed.sql.
 */

export const team: TeamMember[] = [
  {
    slug: "wendy",
    name: "Wendy",
    role: "Co-Owner & COO",
    expert: "wendy",
    photo: "/team/wendy.webp",
    specialties: ["Walt Disney World", "Universal", "Theme-park strategy", "Multi-gen family trips"],
    bio: "Wendy plans the kind of theme-park trips families talk about for years — the right park days, the right hotel, dining you'd never get on your own, and a pace that works for a five-year-old and a grandparent on the same trip. She handles the logistics so you get the magic.",
  },
  {
    slug: "jessica",
    name: "Jessica",
    role: "Co-Owner & CFO",
    expert: "jessica",
    photo: "/team/jessica.webp",
    specialties: ["Luxury cruises", "All-inclusive resorts", "Cabin & itinerary matching", "Celebration travel"],
    bio: "Jessica matches travelers to the ship, line, and itinerary that actually fit how they want to vacation — then secures the cabin, perks, and dining that make it feel effortless. From a first cruise to a milestone all-inclusive, she handles the details start to finish.",
  },
];

export const experiences: Experience[] = [
  {
    slug: "disney-world-deluxe",
    title: "Walt Disney World, your way",
    location: "Orlando, Florida",
    blurb: "A fully-planned Disney trip — park days, resort, dining, and the strategy that skips the lines and the meltdowns.",
    category: "theme-parks",
    expert: "wendy",
    priceFrom: "Custom-quoted",
    duration: "5–8 nights",
  },
  {
    slug: "universal-epic",
    title: "Universal & Epic Universe",
    location: "Orlando, Florida",
    blurb: "Two parks, one new one, and a plan that gets your crew on the headliners without the guesswork.",
    category: "theme-parks",
    expert: "wendy",
    duration: "4–6 nights",
  },
  {
    slug: "caribbean-luxury-cruise",
    title: "Caribbean luxury cruise",
    location: "Eastern & Western Caribbean",
    blurb: "The right ship and cabin for how you actually vacation — matched, booked, and perked.",
    category: "cruises",
    expert: "jessica",
    priceFrom: "Custom-quoted",
    duration: "7 nights",
  },
  {
    slug: "mediterranean-voyage",
    title: "Mediterranean voyage",
    location: "Italy · Greece · Spain",
    blurb: "Iconic ports, curated excursions, and an itinerary paced so the trip feels like a vacation, not a checklist.",
    category: "cruises",
    expert: "jessica",
    duration: "10–12 nights",
  },
  {
    slug: "all-inclusive-escape",
    title: "All-inclusive escape",
    location: "Mexico & the Caribbean",
    blurb: "Adults-only calm or family-friendly fun — the resort, room category, and add-ons matched to you.",
    category: "all-inclusive",
    expert: "jessica",
    duration: "4–7 nights",
  },
  {
    slug: "multi-gen-family",
    title: "The whole-family trip",
    location: "Your pick",
    blurb: "Parks, a cruise, or both — planned so every generation gets a trip that feels made for them.",
    category: "family",
    expert: "both",
    duration: "Flexible",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "The Harmon Family",
    location: "Salem, OR",
    quote:
      "We've done Disney on our own before and it was chaos. Wendy's plan meant we actually rested, the kids hit every ride they wanted, and I didn't open a single park app the whole week.",
    tripType: "Walt Disney World",
    expert: "wendy",
    rating: 5,
  },
  {
    id: "t2",
    name: "Renee & Paul",
    location: "Portland, OR",
    quote:
      "First cruise, totally overwhelmed by the options. Jessica picked the ship and cabin like she'd read our minds. Every detail was handled before we even boarded.",
    tripType: "Caribbean cruise",
    expert: "jessica",
    rating: 5,
  },
  {
    id: "t3",
    name: "The Okafor Family",
    quote:
      "Three generations, one trip, zero arguments — which I didn't think was possible. They planned around all of us. Already booking next year.",
    tripType: "Multi-gen family trip",
    expert: "both",
    rating: 5,
  },
  {
    id: "t4",
    name: "Dana M.",
    location: "Beaverton, OR",
    quote:
      "The all-inclusive they matched us to was exactly our speed — quiet, beautiful, nothing to think about. That's the whole point and they nailed it.",
    tripType: "All-inclusive resort",
    expert: "jessica",
    rating: 5,
  },
];

export const stats = [
  { value: "12+", label: "Years planning travel" },
  { value: "2", label: "Specialists, one agency" },
  { value: "1,000s", label: "Trips made effortless" },
  { value: "$0", label: "Planning fee, most trips" },
];
