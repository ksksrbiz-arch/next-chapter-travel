"use client";

import * as React from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Splits a stat value into a leading prefix (e.g. "$"), the first numeric run,
 * and a trailing suffix (e.g. "+", "s"). Commas inside the number are dropped
 * for counting and re-inserted on render via toLocaleString.
 * Returns null when the value has no number to count.
 */
function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const target = Number(match[2].replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return { prefix: match[1], target, suffix: match[3] };
}

function CountUp({ value }: { value: string }) {
  const parsed = React.useMemo(() => parseValue(value), [value]);
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const shouldAnimate = parsed !== null && !reduce;
  const initialText = parsed && shouldAnimate ? `${parsed.prefix}0${parsed.suffix}` : value;
  const [text, setText] = React.useState(initialText);
  const [done, setDone] = React.useState(!shouldAnimate);

  React.useEffect(() => {
    if (!shouldAnimate || !inView || !parsed) return;
    const controls = animate(0, parsed.target, {
      duration: 1.4,
      ease: EASE,
      onUpdate(latest) {
        const rounded = Math.round(latest);
        setText(`${parsed.prefix}${rounded.toLocaleString("en-US")}${parsed.suffix}`);
      },
      onComplete() {
        setText(value);
        setDone(true);
      },
    });
    return () => controls.stop();
  }, [shouldAnimate, inView, parsed, value]);

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      animate={shouldAnimate && done ? { scale: [1, 1.12, 1] } : undefined}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {text}
    </motion.span>
  );
}

export function StatBand() {
  return (
    <section className="border-y border-ink/10 bg-paper-deep">
      <div className="container-x grid grid-cols-2 gap-y-12 py-14 sm:py-16 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className="px-4 text-center sm:[&:not(:nth-child(2n+1))]:border-l sm:[&:not(:nth-child(2n+1))]:border-ink/15 lg:[&:not(:first-child)]:border-l"
          >
            <div className="font-display text-4xl font-semibold leading-none text-ink tabular-nums sm:text-5xl">
              <CountUp value={s.value} />
            </div>
            <motion.div
              aria-hidden
              className="mx-auto mt-4 h-0.5 w-8 origin-center rounded-full bg-clay/45"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 + 0.35 }}
            />
            <div className="mt-3 text-sm font-medium uppercase tracking-wide text-stone">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
