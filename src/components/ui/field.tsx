"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const base =
  "w-full rounded-xl border bg-cream px-4 py-3 text-ink placeholder:text-stone/70 transition-colors focus:outline-none focus:ring-2";

// Border + ring colors shift with validity: neutral by default, clay focus ring,
// clay border when invalid, sea (sage-teal) when explicitly valid.
function stateClasses(invalid?: boolean, valid?: boolean) {
  if (invalid)
    return "border-clay focus:border-clay focus:ring-clay/30";
  if (valid)
    return "border-sea/60 focus:border-sea focus:ring-sea/25";
  return "border-ink/20 focus:border-clay focus:ring-clay/30";
}

interface FieldExtras {
  /** Shows clay border + sets aria-invalid. */
  invalid?: boolean;
  /** Shows a subtle sage-teal "valid" border. */
  valid?: boolean;
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & FieldExtras
>(({ className, invalid, valid, ...props }, ref) => (
  <input
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(base, stateClasses(invalid, valid), className)}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & FieldExtras
>(({ className, invalid, valid, ...props }, ref) => (
  <textarea
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(base, stateClasses(invalid, valid), "min-h-[120px] resize-y", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & FieldExtras
>(({ className, invalid, valid, children, ...props }, ref) => (
  <select
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(
      base,
      stateClasses(invalid, valid),
      "appearance-none bg-[length:1rem] pr-10",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-ink/80", className)}
      {...props}
    />
  );
}

/**
 * A small sage-teal check that draws/scales in when a field becomes valid.
 * Intended to sit absolutely inside a relatively-positioned field wrapper.
 * Respects prefers-reduced-motion (renders statically).
 */
export function ValidCheck({ show, className }: { show: boolean; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {show && (
        <motion.span
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25, ease: EASE }}
          className={cn(
            "pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-sea/15 text-sea",
            className,
          )}
          aria-hidden="true"
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </motion.span>
      )}
    </AnimatePresence>
  );
}

/**
 * Animated character counter. Warms toward clay as the value nears `max`.
 */
export function CharCounter({
  value,
  max,
  className,
  id,
}: {
  value: string;
  max: number;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const count = value.length;
  const remaining = max - count;
  const near = remaining <= Math.max(10, Math.round(max * 0.1));
  const over = count > max;

  return (
    <span
      id={id}
      aria-live="polite"
      className={cn(
        "tabular-nums text-xs transition-colors",
        over ? "text-clay" : near ? "text-gold" : "text-stone",
        className,
      )}
    >
      <motion.span
        key={count}
        initial={reduce ? false : { y: -2, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.15, ease: EASE }}
        className="inline-block"
      >
        {count}
      </motion.span>
      <span>/{max}</span>
    </span>
  );
}
