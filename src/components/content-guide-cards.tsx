import { Ship, Sparkles, Sun, FileCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export type Guide = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  copy: string;
  points: string[];
};

/**
 * Premium "authority" guide cards for the Resources page. Copy is genuine,
 * honest travel-planning advice — safe to ship, easy to expand into full
 * articles later (wire each to /stories/[slug] when posts exist).
 */
export const guides: Guide[] = [
  {
    icon: Ship,
    kicker: "Cruising",
    title: "The first-time cruiser's guide",
    copy: "Your first cruise shouldn't be a leap of faith. Here's how to pick a line and cabin that match how you actually like to travel.",
    points: [
      "Big-ship energy vs. small-ship calm — and who each suits",
      "Why your cabin's deck and location matter more than its size",
      "What's truly included, and the extras worth budgeting for",
    ],
  },
  {
    icon: Sparkles,
    kicker: "Theme parks",
    title: "Disney with little kids",
    copy: "The parks reward a plan. A few smart choices keep toddlers happy, naps intact, and the whole trip feeling like a vacation — not a march.",
    points: [
      "Picking dates around crowds, weather, and ride closures",
      "Rope-drop, mid-day rest, evening return — the rhythm that works",
      "Height limits and rider-swap so no one misses out",
    ],
  },
  {
    icon: Sun,
    kicker: "Resorts",
    title: "Choosing an all-inclusive",
    copy: "All-inclusive ranges from spring-break loud to adults-only serene. Knowing what 'included' really means is how you avoid a mismatch.",
    points: [
      "Adults-only vs. family resorts, and the vibe of each",
      "Reading past the brochure: dining, drinks, and hidden fees",
      "When the upgraded room tier is worth it — and when it isn't",
    ],
  },
  {
    icon: FileCheck,
    kicker: "Before you go",
    title: "Passport & documents checklist",
    copy: "The least glamorous part of a trip is also the one that can end it at the gate. A simple checklist keeps you moving.",
    points: [
      "The six-month passport-validity rule most travelers miss",
      "Visas, entry requirements, and proof-of-onward-travel",
      "Copies, names that match your booking, and travel insurance",
    ],
  },
];

export function GuideCards() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {guides.map((g, i) => (
        <Reveal key={g.title} delay={(i % 2) * 0.08}>
          <article className="surface flex h-full flex-col p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper-deep text-gold">
                <g.icon className="h-6 w-6" aria-hidden />
              </span>
              <p className="font-script text-xl text-clay">{g.kicker}</p>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">
              {g.title}
            </h3>
            <p className="mt-3 text-ink/70">{g.copy}</p>
            <ul className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-sm text-ink/75">
              {g.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
