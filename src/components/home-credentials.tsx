import { ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/**
 * Credentials / trust strip built from the agency's real accreditations.
 * No invented awards or years-in-business — only the certifications the
 * agency already holds.
 */
const credentials = [
  {
    name: "Authorized Disney Vacation Planner",
    detail: "Official Disney Destinations planning partner",
  },
  {
    name: "CLIA 2026 Travel Agency Member",
    detail: "Cruise Lines International Association",
  },
  {
    name: "Universal Certified",
    detail: "Universal Orlando Resort specialist",
  },
  {
    name: "Princess Academy Graduate",
    detail: "Princess Cruises commodore-level training",
  },
];

export function HomeCredentials() {
  return (
    <section className="horizon-soft border-y border-cream/10 py-14 text-cream sm:py-16">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-gold-soft ring-1 ring-cream/20">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-cream/75">
              Accredited &amp; certified
            </p>
            <h2 className="font-display text-2xl font-extrabold text-cream sm:text-3xl">
              Credentials that earn your confidence.
            </h2>
          </div>
        </Reveal>

        <RevealGroup
          stagger={0.07}
          className="mt-10 grid gap-px overflow-hidden rounded-xl2 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {credentials.map((c) => (
            <Reveal
              key={c.name}
              className="flex h-full flex-col items-center justify-center gap-2 bg-ink/40 px-6 py-7 text-center backdrop-blur-sm"
            >
              <p className="font-display text-base font-extrabold leading-snug text-cream">
                {c.name}
              </p>
              <p className="text-sm text-cream/70">{c.detail}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
