"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

const expertLabel: Record<Testimonial["expert"], string> = {
  wendy: "Theme parks · Wendy",
  jessica: "Cruises & resorts · Jessica",
  both: "Family trip · Wendy & Jessica",
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);

  const go = (next: number) => {
    setDir(next > index || (index === items.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + items.length) % items.length);
  };

  const active = items[index];

  return (
    <div className="relative">
      <div className="relative min-h-[260px] overflow-hidden sm:min-h-[220px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={active.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -32 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div className="mb-4 flex gap-0.5" aria-label={`${active.rating} out of 5`}>
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="font-semibold text-ink">{active.name}</span>
              {active.location && <span className="text-stone">· {active.location}</span>}
              <span className="rounded-full bg-paper-deep px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold">
                {expertLabel[active.expert]}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={() => go(index - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => go(index + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
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
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-7 bg-gold" : "w-1.5 bg-ink/20 hover:bg-ink/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
