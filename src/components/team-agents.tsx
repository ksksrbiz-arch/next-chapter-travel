import { Reveal } from "@/components/ui/reveal";

/**
 * "Meet the agents" roster. Next Chapter Travel is led by co-owners Wendy and
 * Jessica, with a growing team of specialist agents who take care of incoming
 * trips. Drop real agents into `agents` below (name, role, photo in /public,
 * short line) as headshots come in — until then we show "joining soon" slots
 * so the section reads honestly. No invented people.
 */
type Agent = { name: string; role: string; photo?: string; blurb?: string };

const agents: Agent[] = [
  // Example shape — add real agents here as photos/bios are provided:
  // { name: "First Last", role: "Cruise specialist", photo: "/team/first.webp",
  //   blurb: "One line about what they love to plan." },
];

// How many placeholder slots to show while the roster is being filled in.
const PLACEHOLDER_SLOTS = 3;

export function TeamAgents() {
  const showPlaceholders = agents.length === 0;

  return (
    <section className="section bg-paper-deep">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Meet the agents</p>
          <h2 className="display-2 mt-4 max-w-[22ch] text-ink">
            A specialist for every kind of trip.
          </h2>
          <p className="lede mt-6 max-w-2xl">
            Wendy and Jessica lead Next Chapter Travel — and they&rsquo;ve built a team of
            talented agents around them. When you reach out, your trip is matched to an
            agent who specializes in exactly what you&rsquo;re planning, so you always have
            an expert in your corner.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showPlaceholders
            ? Array.from({ length: PLACEHOLDER_SLOTS }).map((_, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <article className="flex h-full flex-col items-center rounded-xl2 border border-dashed border-ink/20 bg-cream/60 p-8 text-center">
                    <div
                      aria-hidden
                      className="h-24 w-24 rounded-full bg-gradient-to-br from-clay/30 to-gold/25"
                    />
                    <h3 className="mt-5 font-display text-lg font-bold text-ink/80">
                      Joining soon
                    </h3>
                    <p className="mt-2 text-sm text-ink/60">
                      More of our specialist agents are being added here.
                    </p>
                  </article>
                </Reveal>
              ))
            : agents.map((a, i) => (
                <Reveal key={a.name} delay={i * 0.08}>
                  <article className="flex h-full flex-col items-center rounded-xl2 border border-ink/10 bg-cream p-8 text-center shadow-card">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full bg-paper-deep">
                      {a.photo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={a.photo}
                          alt={`${a.name}, ${a.role}`}
                          className="h-full w-full object-cover object-top"
                        />
                      )}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">{a.name}</h3>
                    <p className="chapter-no mt-1 text-clay">{a.role}</p>
                    {a.blurb && <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.blurb}</p>}
                  </article>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
