"use client";

import { useActionState, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label, CharCounter, ValidCheck } from "@/components/ui/field";

const initial: LeadState = { ok: false, message: "" };

const EASE = [0.16, 1, 0.3, 1] as const;
const MESSAGE_MAX = 600;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldStatus = "idle" | "valid" | "invalid";

function validateName(value: string): { status: FieldStatus; message?: string } {
  const v = value.trim();
  if (!v) return { status: "idle" };
  if (v.length < 2) return { status: "invalid", message: "Just a touch more — what should we call you?" };
  return { status: "valid" };
}

function validateEmail(value: string): { status: FieldStatus; message?: string } {
  const v = value.trim();
  if (!v) return { status: "idle" };
  if (!EMAIL_RE.test(v))
    return { status: "invalid", message: "Hmm, that email looks off — mind double-checking?" };
  return { status: "valid" };
}

function SuccessCheck() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { scale: 1 } : { scale: 0 }}
      animate={reduce ? { scale: 1 } : { scale: [0, 1.15, 1] }}
      transition={{ duration: 0.5, ease: EASE, times: [0, 0.7, 1] }}
      className="flex h-16 w-16 items-center justify-center rounded-full bg-sea/15"
    >
      <motion.span
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 0.25, duration: 0.2 }}
      >
        <Check className="h-8 w-8 text-sea" strokeWidth={3} />
      </motion.span>
    </motion.div>
  );
}

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initial);

  // Record the conversion goal once, when the inquiry succeeds.
  useEffect(() => {
    if (state.ok) track("Lead: Submitted");
  }, [state.ok]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameCheck = validateName(name);
  const emailCheck = validateEmail(email);

  // Surface client errors only once a field has been touched; server errors
  // (state.errors) act as a fallback for submissions.
  const nameError =
    (nameTouched && nameCheck.status === "invalid" && nameCheck.message) ||
    state.errors?.full_name ||
    null;
  const emailError =
    (emailTouched && emailCheck.status === "invalid" && emailCheck.message) ||
    state.errors?.email ||
    null;

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="surface flex flex-col items-center px-8 py-16 text-center"
      >
        <SuccessCheck />
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Your request is in.
        </h3>
        <p className="mt-3 max-w-sm text-ink/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="surface space-y-5 p-7 sm:p-9">
      {/* Honeypot — visually hidden, off the tab order */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="full_name">Your name</Label>
          <div className="relative">
            <Input
              id="full_name"
              name="full_name"
              placeholder="First and last"
              required
              aria-required="true"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameTouched(true)}
              invalid={!!nameError}
              valid={nameTouched && nameCheck.status === "valid"}
              aria-describedby={nameError ? "full_name-error" : undefined}
              className={nameTouched && nameCheck.status === "valid" ? "pr-11" : undefined}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <ValidCheck show={nameTouched && nameCheck.status === "valid"} />
            </span>
          </div>
          {nameError && (
            <p id="full_name-error" role="alert" className="mt-1 text-sm text-clay">
              {nameError}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
              aria-required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              invalid={!!emailError}
              valid={emailTouched && emailCheck.status === "valid"}
              aria-describedby={emailError ? "email-error" : undefined}
              className={emailTouched && emailCheck.status === "valid" ? "pr-11" : undefined}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <ValidCheck show={emailTouched && emailCheck.status === "valid"} />
            </span>
          </div>
          {emailError && (
            <p id="email-error" role="alert" className="mt-1 text-sm text-clay">
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
        </div>
        <div>
          <Label htmlFor="interest">I&apos;m interested in</Label>
          <Select id="interest" name="interest" defaultValue="both">
            <option value="theme-parks">Theme parks &amp; adventures</option>
            <option value="cruises">Cruises &amp; all-inclusive resorts</option>
            <option value="both">Both — or not sure yet</option>
            <option value="not-sure">Just exploring</option>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <Label htmlFor="travel_dates">Rough dates</Label>
          <Input id="travel_dates" name="travel_dates" placeholder="e.g. Spring 2026" />
        </div>
        <div>
          <Label htmlFor="party_size">Party size</Label>
          <Input id="party_size" name="party_size" placeholder="e.g. 2 adults, 2 kids" />
        </div>
        <div>
          <Label htmlFor="budget">Budget (optional)</Label>
          <Input id="budget" name="budget" placeholder="Ballpark is fine" />
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <Label htmlFor="message">Anything else?</Label>
          <CharCounter value={message} max={MESSAGE_MAX} id="message-counter" />
        </div>
        <Textarea
          id="message"
          name="message"
          placeholder="The occasion, must-dos, dealbreakers — whatever helps us plan."
          value={message}
          maxLength={MESSAGE_MAX}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby="message-counter"
        />
      </div>

      {state.message && !state.ok && (
        <p role="alert" className="text-sm text-clay">{state.message}</p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" loading={pending} className="sm:w-auto">
          {pending ? "Sending…" : "Send my request"}
        </Button>
        <p className="text-xs text-stone">
          We never charge a planning fee. We reply within one business day.
        </p>
      </div>
    </form>
  );
}
