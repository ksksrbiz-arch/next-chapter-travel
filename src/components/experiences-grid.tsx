"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExperienceCard } from "@/components/experience-card";
import { Button } from "@/components/ui/button";
import type { Experience, ExperienceCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

const filters: { value: "all" | ExperienceCategory; label: string }[] = [
  { value: "all", label: "All experiences" },
  { value: "theme-parks", label: "Theme parks" },
  { value: "cruises", label: "Cruises" },
  { value: "all-inclusive", label: "All-inclusive" },
  { value: "family", label: "Family" },
  { value: "international", label: "International" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ExperiencesGrid({
  experiences,
  initialCategory = "all",
}: {
  experiences: Experience[];
  initialCategory?: "all" | ExperienceCategory;
}) {
  const [active, setActive] = React.useState<"all" | ExperienceCategory>(initialCategory);
  const reduce = useReducedMotion();
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const visible =
    active === "all" ? experiences : experiences.filter((e) => e.category === active);

  // Roving tablist focus: arrow keys move between tabs and activate them.
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (index + 1) % filters.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (index - 1 + filters.length) % filters.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = filters.length - 1;
    else return;
    e.preventDefault();
    setActive(filters[next].value);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter experiences">
        {filters.map((f, i) => {
          const selected = active === f.value;
          return (
            <button
              key={f.value}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(f.value)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                selected
                  ? "border-ink text-paper"
                  : "border-ink/20 text-ink/70 hover:border-ink/50 hover:text-ink",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="experiences-tab-active"
                  className="absolute inset-0 -z-10 rounded-full bg-ink"
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 520, damping: 38, mass: 0.7 }
                  }
                />
              )}
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((exp, i) => (
            <motion.div
              key={exp.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              transition={{
                duration: reduce ? 0 : 0.4,
                ease: EASE,
                delay: reduce ? 0 : Math.min(i, 6) * 0.04,
              }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="max-w-md text-ink/70">
            We haven&apos;t added anything here yet — but a quiet category just means
            it&apos;s waiting to be planned around you. Tell us the trip you&apos;re dreaming
            of and we&apos;ll build it from scratch.
          </p>
          <Button href="/plan-your-trip" variant="solid" size="md" className="mt-6">
            Plan this trip with us
          </Button>
        </div>
      )}
    </div>
  );
}
