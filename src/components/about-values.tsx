import { Reveal, RevealGroup } from "@/components/ui/reveal";

/** Why a specialist beats a booking site. Kept local per unit rules. */
const values: { title: string; copy: string }[] = [
  {
    title: "Specialists, not generalists",
    copy: "Two people who go deep on what they book — not a call center reading the same script for every trip.",
  },
  {
    title: "The details are the trip",
    copy: "Park strategy, the right cabin, dining you couldn't get yourself. The small things are where a trip is won or lost.",
  },
  {
    title: "One point of contact",
    copy: "You text one person who knows your trip — before, during, and after. No queues, no transfers, no hand-offs.",
  },
];

export function AboutValues() {
  return (
    <section className="section bg-paper-deep">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">What we believe</p>
          <h2 className="display-2 mt-4 max-w-[20ch]">
            How we plan, and why it works.
          </h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-ink/10 bg-ink/10 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title}>
              <div className="h-full bg-paper p-8 transition-colors duration-500 hover:bg-cream">
                <span className="chapter-no font-display text-3xl font-semibold text-clay">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
