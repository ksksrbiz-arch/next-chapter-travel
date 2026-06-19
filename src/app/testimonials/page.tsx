import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { ProofQuoteCard } from "@/components/proof-quote-card";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real words from travelers we've planned for — Disney and Universal trips, cruises, all-inclusive escapes, and multi-generation family vacations.",
};

/** Honest framing drawn from the brand — no invented numbers or awards. */
const proofPoints = [
  {
    stat: "Repeat",
    label: "Most travelers come back for the next trip — and the one after that.",
  },
  {
    stat: "Referred",
    label: "Most new clients are sent by someone we planned for first.",
  },
  {
    stat: "Hands-off",
    label: "The plan is built so you can stop managing and actually relax.",
  },
];

export default function TestimonialsPage() {
  // Split the wall: lead with a featured pull-quote, then the masonry.
  const [featured, ...rest] = testimonials;

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="The best reviews are repeat travelers."
        intro="Most of our travelers found us through someone we planned for first. Here's a sample of why they keep coming back — and sending friends."
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">In their words</p>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3" stagger={0.08}>
            {proofPoints.map((p) => (
              <Reveal key={p.stat} variant="up">
                <div className="surface h-full p-6">
                  <p className="font-display text-xl font-extrabold tracking-[-0.01em] text-clay">
                    {p.stat}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {p.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>

          {featured && (
            <Reveal className="mt-12">
              <ProofQuoteCard testimonial={featured} featured />
            </Reveal>
          )}

          <RevealGroup
            className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid"
            stagger={0.06}
          >
            {rest.map((t) => (
              <Reveal key={t.id} variant="up">
                <ProofQuoteCard testimonial={t} />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
