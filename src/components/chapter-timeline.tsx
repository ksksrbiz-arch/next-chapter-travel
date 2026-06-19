"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

/**
 * The signature device. A journey is a real sequence, so numbered chapters
 * encode something true rather than decorate. Reused on / and /how-it-works.
 */
export const chapters = [
  {
    no: "01",
    name: "The Dream",
    title: "Tell us the trip you keep meaning to take",
    copy: "Share where you're dreaming of, who's coming, and roughly when. A quick form or a call — whichever's easier.",
  },
  {
    no: "02",
    name: "The Plan",
    title: "We build it around you",
    copy: "We pair you with an agent who specializes in your kind of trip, then handle dates, rooms, dining, and the details that make or break a trip.",
  },
  {
    no: "03",
    name: "The Trip",
    title: "You go — we've got the rest",
    copy: "Everything's booked and documented before you leave. Questions on the road? You text one person, not a call center.",
  },
  {
    no: "04",
    name: "The Memory",
    title: "Come back and do it again",
    copy: "We keep what worked on file, so next year's trip starts from a head start instead of a blank page.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ChapterTimeline({ showHeading = true }: { showHeading?: boolean }) {
  const reduce = useReducedMotion();
  const listRef = React.useRef<HTMLOListElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-80px" });
  const animateIn = inView || reduce;

  return (
    <section className="section">
      <div className="container-x">
        {showHeading && (
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display-2 mt-4 max-w-[20ch]">
              Every trip is a story in four chapters.
            </h2>
            <p className="lede mt-6 max-w-2xl">
              One dedicated agent, start to finish — so the planning feels
              effortless and the trip feels like it was made for you.
            </p>
          </Reveal>
        )}

        <div className="relative mt-14">
          {/* Connecting progress accent — draws across the steps on reveal. */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-px origin-left bg-gold/60 lg:block"
            style={{ width: "100%" }}
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={{ scaleX: animateIn ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : 1, ease: EASE, delay: reduce ? 0 : 0.2 }}
          />

          <ol
            ref={listRef}
            className="grid gap-px overflow-hidden rounded-xl2 border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {chapters.map((c, i) => (
              <motion.li
                key={c.no}
                className="group flex h-full flex-col bg-paper p-7 transition-transform duration-300 ease-out hover:-translate-y-1"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
                animate={
                  animateIn ? { opacity: 1, y: 0 } : { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }
                }
                transition={{
                  duration: reduce ? 0 : 0.6,
                  ease: EASE,
                  delay: reduce ? 0 : i * 0.12,
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-semibold text-clay transition-colors group-hover:text-clay/80">
                    {c.no}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                    {c.name}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{c.copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
