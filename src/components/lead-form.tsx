"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label } from "@/components/ui/field";

const initial: LeadState = { ok: false, message: "" };

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initial);

  if (state.ok) {
    return (
      <div className="surface flex flex-col items-center px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-sea" />
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
          <Input id="full_name" name="full_name" placeholder="First and last" required />
          {state.errors?.full_name && (
            <p className="mt-1 text-sm text-clay">{state.errors.full_name}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
          {state.errors?.email && <p className="mt-1 text-sm text-clay">{state.errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
        </div>
        <div>
          <Label htmlFor="interest">I'm interested in</Label>
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
        <Label htmlFor="message">Anything else?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="The occasion, must-dos, dealbreakers — whatever helps us plan."
        />
      </div>

      {state.message && !state.ok && (
        <p className="text-sm text-clay">{state.message}</p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={pending} className="sm:w-auto">
          {pending ? "Sending…" : "Send my request"}
        </Button>
        <p className="text-xs text-stone">
          No planning fee on most trips. We reply within one business day.
        </p>
      </div>
    </form>
  );
}
