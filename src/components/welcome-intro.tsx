"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

// Allowed during design only — replace with licensed assets before launch.
const OVERWATER =
  "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1200&q=80";
const SANTORINI =
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80";

export function WelcomeIntro() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Track the collage as it moves through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle, opposing parallax on the two layers — eased with a spring so the
  // motion settles rather than tracking the scrollbar 1:1.
  const tallRaw = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const insetRaw = useTransform(scrollYProgress, [0, 1], [-48, 28]);
  const tallY = useSpring(tallRaw, { stiffness: 120, damping: 30, mass: 0.4 });
  const insetY = useSpring(insetRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="section bg-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left — copy */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="eyebrow items-start">Welcome</p>
          <h2 className="display-2 mt-4 max-w-[18ch]">
            Two specialists, one beautifully planned trip.
          </h2>
          <p className="lede mt-6 max-w-xl">
            We started Next Chapter because the best trips don&apos;t come from a
            booking site — they come from people who know the parks, the ships,
            and the quiet corners in between.
          </p>
          <p className="mt-5 max-w-xl text-ink/75">
            Tell us what you&apos;re dreaming about and we&apos;ll handle the
            rest: the routing, the rooms, the reservations, and all the little
            details that turn a vacation into a story.
          </p>
          <p className="font-script mt-6 text-2xl text-clay">
            ✨ Your next adventure starts here.
          </p>
          <div className="mt-9">
            <Button href="/plan-your-trip" size="lg" variant="solid">
              Plan your trip
            </Button>
          </div>
        </motion.div>

        {/* Right — layered photo collage with scroll-parallax depth */}
        <div
          ref={ref}
          className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mr-0"
        >
          {/* Tall hero image */}
          <motion.div
            style={reduce ? undefined : { y: tallY }}
            className="group absolute inset-x-6 top-0 bottom-10 overflow-hidden rounded-xl2 shadow-lift ring-1 ring-ink/10"
          >
            <Image
              src={OVERWATER}
              alt="Overwater bungalows above a turquoise lagoon at golden hour"
              fill
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-105"
            />
            {/* Warm depth wash to seat the image in the cream section */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </motion.div>

          {/* Offset inset — glass-framed, sits in front for depth */}
          <motion.div
            style={reduce ? undefined : { y: insetY }}
            className="group absolute -bottom-2 -right-1 w-2/5 overflow-hidden rounded-2xl bg-cream/70 p-1.5 shadow-lift ring-1 ring-ink/10 backdrop-blur-md sm:-right-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={SANTORINI}
                alt="Whitewashed cliffside village above the Aegean Sea"
                fill
                sizes="(min-width: 1024px) 13rem, 36vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
