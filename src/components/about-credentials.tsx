import { BadgeCheck, Anchor, Sparkles, Ship } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/** Affiliations the agency works through. Honest, partner-level credentials —
 *  no fabricated awards or tenure. Kept local to this component per unit rules. */
const credentials: { name: string; detail: string; icon: typeof BadgeCheck }[] = [
  {
    name: "Authorized Disney Vacation Planner",
    detail: "Earmarked specialist for Walt Disney World planning",
    icon: Sparkles,
  },
  {
    name: "Universal Certified",
    detail: "Trained on Universal Orlando & Epic Universe",
    icon: BadgeCheck,
  },
  {
    name: "CLIA Member, 2026",
    detail: "Cruise Lines International Association affiliated",
    icon: Anchor,
  },
  {
    name: "Princess Academy",
    detail: "Princess Cruises product-certified",
    icon: Ship,
  },
];

export function AboutCredentials() {
  return (
    <section className="section bg-paper-deep">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Credentials that open doors</p>
          <h2 className="display-2 mt-4 max-w-[24ch]">
            The certifications behind the perks you can&apos;t book yourself.
          </h2>
          <p className="lede mt-6 max-w-2xl text-ink/75">
            These partner programs are how we secure the room categories, dining,
            and onboard extras that make a trip feel effortless — credentials a
            booking site simply doesn&apos;t carry.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name}>
                <div className="group h-full rounded-xl2 border border-ink/10 bg-cream p-7 shadow-card transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
