import { Check, Compass, Info, Sparkles } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import type { Experience } from "@/lib/types";

/**
 * Editorial body for an Experience detail page. Pure content layout — the
 * narrative copy is composed per-experience by the page from local content
 * (see exp-detail-content.ts). No invented stats or testimonials; everything
 * here honors the brand facts (custom-quoted, no planning fee, you keep your
 * own flights).
 */
export function ExpDetailBody({
  exp,
  overview,
  included,
  forYou,
}: {
  exp: Experience;
  overview: string[];
  included: string[];
  forYou: string[];
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Overview — expands honestly on the blurb. */}
          <div>
            <Reveal>
              <p className="eyebrow text-clay">The overview</p>
              <h2 className="display-2 mt-4 text-ink">{exp.title}</h2>
            </Reveal>
            <RevealGroup className="mt-6 space-y-5">
              {overview.map((para) => (
                <Reveal key={para} variant="fade">
                  <p className="text-base leading-relaxed text-ink/75">{para}</p>
                </Reveal>
              ))}
            </RevealGroup>

            {/* Who it's for */}
            <Reveal className="mt-12">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold"
                >
                  <Compass className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Who it&apos;s for
                </h3>
              </div>
            </Reveal>
            <RevealGroup className="mt-5 space-y-3">
              {forYou.map((line) => (
                <Reveal key={line} variant="fade" className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/80">{line}</span>
                </Reveal>
              ))}
            </RevealGroup>
          </div>

          {/* Sidebar: What we handle + Good to know */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="surface rounded-xl2 p-8">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-clay/15 text-clay"
                  >
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    What we handle
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay/15 text-clay"
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>

                {(exp.duration || exp.priceFrom) && (
                  <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 text-sm">
                    {exp.duration && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-eyebrow text-ink/45">
                          Typical length
                        </dt>
                        <dd className="mt-1 font-medium text-ink/80">{exp.duration}</dd>
                      </div>
                    )}
                    {exp.priceFrom && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-eyebrow text-ink/45">
                          Pricing
                        </dt>
                        <dd className="mt-1 font-medium text-ink/80">{exp.priceFrom}</dd>
                      </div>
                    )}
                  </dl>
                )}
              </div>
            </Reveal>

            <Reveal className="mt-6">
              <div className="rounded-xl2 border border-ink/10 bg-paper p-7">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-ink"
                  >
                    <Info className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Good to know
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/75">
                  <li>
                    Every trip is <strong className="font-semibold text-ink">custom-quoted</strong> —
                    the price reflects your dates, party, and the choices you make, not a
                    fixed package.
                  </li>
                  <li>
                    We <strong className="font-semibold text-ink">never charge a planning fee</strong>.
                    Our guidance is part of the trip, start to finish.
                  </li>
                  <li>
                    You keep control of your own flights — book your air, miles, and seats
                    your way, and we&apos;ll build everything else around them.
                  </li>
                  <li>
                    Your inquiry is matched to an agent who specializes in this kind of
                    trip, so the plan comes from real, hands-on expertise.
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
