import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Five-star row with the gold fill for the earned rating and a hairline
 *  remainder, so the score reads honestly at a glance. */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-gold text-gold" : "fill-none text-ink/20",
          )}
        />
      ))}
    </div>
  );
}

/**
 * Editorial testimonial card for the masonry grid. Featured cards get a
 * larger quote and a warmer surface so the layout reads like a magazine
 * pull-quote spread rather than a uniform review wall.
 */
export function ProofQuoteCard({
  testimonial: t,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={cn(
        "surface relative flex flex-col p-7 transition-shadow hover:shadow-[0_1px_2px_rgba(42,33,26,0.05),0_20px_44px_-16px_rgba(42,33,26,0.32)] sm:p-8",
        featured && "bg-cream-deep",
      )}
    >
      <Quote
        aria-hidden="true"
        className="absolute right-6 top-6 h-8 w-8 -scale-x-100 text-gold/15"
      />
      <Stars rating={t.rating} />
      <blockquote
        className={cn(
          "mt-5 font-display leading-snug tracking-[-0.01em] text-ink text-balance",
          featured ? "text-2xl sm:text-[1.7rem] sm:leading-[1.2]" : "text-lg",
        )}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-5">
        <span className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-clay">
          {t.tripType}
        </span>
        <span className="flex flex-wrap items-baseline gap-x-2 text-sm">
          <span className="font-semibold text-ink">{t.name}</span>
          {t.location && <span className="text-stone">· {t.location}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
