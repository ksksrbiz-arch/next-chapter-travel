import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";
import type { Testimonial } from "@/lib/types";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real words from travelers we've planned for — Disney and Universal trips, cruises, all-inclusive escapes, and multi-generation family vacations.",
};

const expertLabel: Record<Testimonial["expert"], string> = {
  wendy: "Theme parks",
  jessica: "Cruises & resorts",
  both: "Family trip",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="The best reviews are repeat travelers."
        intro="Most of our travelers found us through someone we planned for first. Here's a sample of why they keep coming back — and sending friends."
      />

      <section className="section">
        <div className="container-x columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.06}>
              <figure className="surface p-7">
                <div className="mb-4 flex gap-0.5" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-lg leading-snug text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  {t.location && <span className="text-stone">· {t.location}</span>}
                  <span className="ml-auto rounded-full bg-paper-deep px-3 py-1 text-xs font-medium text-gold">
                    {expertLabel[t.expert]}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
