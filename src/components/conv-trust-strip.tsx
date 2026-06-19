import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

/**
 * Compact trust panel for the conversion column on /plan-your-trip. Pulls one
 * real testimonial and surfaces light, honest credibility cues beside the form.
 * No invented stats — the rating and quote come straight from lib/data.
 */
export function ConvTrustStrip() {
  const featured = testimonials[0];

  return (
    <Reveal delay={0.15} variant="fade">
      <figure className="surface p-6 sm:p-7">
        <div
          className="flex gap-1 text-gold"
          aria-label={`Rated ${featured.rating} out of 5 by travelers`}
        >
          {Array.from({ length: featured.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
          ))}
        </div>
        <blockquote className="mt-4 font-display text-lg leading-relaxed text-ink">
          &ldquo;{featured.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-sm text-ink/65">
          <span className="font-semibold text-ink">{featured.name}</span>
          {featured.location ? ` · ${featured.location}` : ""}
          <span className="block text-stone">{featured.tripType}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
