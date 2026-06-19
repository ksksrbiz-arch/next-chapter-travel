"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(0);
  const reactId = React.useId();
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        const triggerId = `${reactId}-trigger-${i}`;
        const panelId = `${reactId}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={triggerId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-clay/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-display text-lg font-medium text-ink">{item.q}</span>
                <motion.span
                  className="shrink-0 text-gold"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 320, damping: 22 }
                  }
                >
                  <Plus className="h-5 w-5" aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : {
                          height: { type: "spring", stiffness: 260, damping: 30 },
                          opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                        }
                  }
                  className={cn("overflow-hidden")}
                >
                  <p className="max-w-prose pb-6 text-ink/70">{item.a}</p>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
