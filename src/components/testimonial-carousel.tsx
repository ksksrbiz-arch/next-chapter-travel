"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

const expertLabel: Record<Testimonial["expert"], string> = {
  wendy: "Theme parks · Wendy",
  jessica: "Cruises & resorts · Jessica",
  both: "Family trip · Wendy & Jessica",
};

const AUTOPLAY_MS = 7000;

/** Refined star row — gold fill with a hairline empty remainder out of 5. */
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

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [paused, setPaused] = React.useState(false);

  const go = React.useCallback(
    (next: number) => {
      setDir(next > index || (index === items.length - 1 && next === 0) ? 1 : -1);
      setIndex((next + items.length) % items.length);
    },
    [index, items.length],
  );

  const prev = React.useCallback(() => go(index - 1), [go, index]);
  const next = React.useCallback(() => go(index + 1), [go, index]);

  // Light autoplay — disabled under reduced motion, on hover/focus, or with one item.
  React.useEffect(() => {
    if (reduce || paused || items.length < 2) return;
    const id = window.setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused, items.length, index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const active = items[index];

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Quote
        aria-hidden="true"
        className="mb-2 h-9 w-9 -scale-x-100 text-gold/25 sm:h-11 sm:w-11"
      />
      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[240px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={active.id}
            custom={dir}
            initial={{ opacity: 0, x: reduce ? 0 : dir * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : dir * -32 }}
            transition={{ duration: reduce ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const threshold = 60;
              if (info.offset.x <= -threshold) next();
              else if (info.offset.x >= threshold) prev();
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="mb-4">
              <Stars rating={active.rating} />
            </div>
            <blockquote className="font-display text-2xl font-medium leading-snug tracking-[-0.01em] text-ink text-balance sm:text-[1.95rem] sm:leading-[1.18]">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="font-semibold text-ink">{active.name}</span>
              {active.location && <span className="text-stone">· {active.location}</span>}
              <span className="ml-auto inline-flex items-center rounded-full border border-gold/25 bg-paper-deep/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-gold">
                {expertLabel[active.expert]}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper-deep"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper-deep"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <div className="ml-2 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper-deep",
                i === index ? "w-7 bg-gold" : "w-1.5 bg-ink/20 hover:bg-ink/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
