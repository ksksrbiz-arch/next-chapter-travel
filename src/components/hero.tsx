"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos, unsplash } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Gentle parallax: drift + scale the backdrop a few percent as the hero scrolls past.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  // A clipped line that rises into view from behind an overflow-hidden mask.
  const Reveal = ({
    children,
    delay = 0,
    className,
  }: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }) => {
    if (reduce) return <div className={className}>{children}</div>;
    return (
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.9, ease: EASE, delay }}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    );
  };

  const headline = "Your Next Chapter of Travel".split(" ");

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
      {/* Full-bleed destination photography with a warm wash for legibility,
          gently parallaxed (disabled under reduced motion). */}
      <motion.div
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20 will-change-transform"
      >
        <Image
          src={unsplash(photos.heroBeach.id, 2400)}
          alt={photos.heroBeach.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="horizon absolute inset-0 -z-10 opacity-80 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />

      <div className="container-x flex min-h-[calc(100dvh-var(--header-h))] flex-col justify-center py-24 text-cream">
        <Reveal delay={0.05}>
          <p className="eyebrow items-start !text-cream/90">Welcome to</p>
        </Reveal>

        {reduce ? (
          <h1 className="display-1 mt-3 max-w-[18ch] text-cream">
            Your Next Chapter of Travel
          </h1>
        ) : (
          <h1 className="display-1 mt-3 flex max-w-[18ch] flex-wrap gap-x-[0.28em] text-cream">
            {headline.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden py-[0.05em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.16 + i * 0.07 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        )}

        <Reveal delay={0.5}>
          <p className="lede mt-6 max-w-xl !text-cream/90">
            Every trip tells a story — and the best ones are still waiting to be written.
          </p>
        </Reveal>

        <Reveal delay={0.6} className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/plan-your-trip" size="lg" variant="solid">
            Start planning
          </Button>
          <Button
            href="/experiences"
            size="lg"
            variant="outline"
            className="border-cream/50 text-cream hover:bg-cream hover:text-ink"
          >
            Browse experiences
          </Button>
        </Reveal>

        {/* The two-path motif, introduced quietly in the hero */}
        <Reveal
          delay={0.72}
          className="mt-16 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-cream/20 text-sm"
        >
          <div className="bg-cream/10 px-5 py-4 backdrop-blur-sm">
            <p className="chapter-no !text-cream/80">Path 01</p>
            <p className="mt-1 font-display text-lg font-bold text-cream">Theme parks &amp; adventures</p>
          </div>
          <div className="bg-cream/10 px-5 py-4 backdrop-blur-sm">
            <p className="chapter-no !text-cream/80">Path 02</p>
            <p className="mt-1 font-display text-lg font-bold text-cream">Luxury cruises &amp; resorts</p>
          </div>
        </Reveal>
      </div>

      {/* Decorative scroll cue — animated only when motion is allowed. */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1 }}
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center text-cream/70"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" strokeWidth={1.75} />
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}
