"use server";

import { getSql, dbConfigured } from "@/lib/db";

export interface LeadState {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const get = (k: string) => (formData.get(k) as string | null)?.trim() ?? "";

  const lead = {
    full_name: get("full_name"),
    email: get("email"),
    phone: get("phone"),
    interest: get("interest") || "not-sure",
    travel_dates: get("travel_dates"),
    party_size: get("party_size"),
    budget: get("budget"),
    message: get("message"),
  };

  const errors: Record<string, string> = {};
  if (lead.full_name.length < 2) errors.full_name = "Please tell us your name.";
  if (!EMAIL_RE.test(lead.email)) errors.email = "Enter a valid email address.";
  if (Object.keys(errors).length) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  // Honeypot — bots fill hidden fields; humans don't.
  if (get("company")) return { ok: true, message: "Thanks! We'll be in touch soon." };

  if (!dbConfigured()) {
    // Lets the form work end-to-end in local dev before the database is wired.
    console.warn("[lead] DATABASE_URL not set — lead not persisted:", lead);
    return {
      ok: true,
      message: "Thanks! We'll be in touch soon. (Dev mode: set DATABASE_URL to save leads.)",
    };
  }

  try {
    const sql = getSql();
    await sql`
      insert into leads
        (full_name, email, phone, interest, travel_dates, party_size, budget, message)
      values
        (${lead.full_name}, ${lead.email}, ${lead.phone || null}, ${lead.interest},
         ${lead.travel_dates || null}, ${lead.party_size || null}, ${lead.budget || null},
         ${lead.message || null})
    `;

    // TODO: notify the team (Resend / MailerLite) using LEAD_NOTIFICATION_EMAIL.
    // Keep it out of the request path so a slow email provider never blocks
    // the traveler's confirmation.

    return { ok: true, message: "Thanks! One of us will be in touch within one business day." };
  } catch (err) {
    console.error("[lead] insert failed:", err);
    return {
      ok: false,
      message: "Something went wrong saving your request. Please email hello@nextchaptertravel.com.",
    };
  }
}
