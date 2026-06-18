import { neon } from "@neondatabase/serverless";

/**
 * Neon (Postgres) access. The whole app talks to the database server-side
 * only — content reads in Server Components, lead writes in the server
 * action — so the connection string is the single secret and there is no
 * public/anon DB role to lock down.
 *
 * On Vercel, DATABASE_URL is injected automatically by the Neon native
 * integration. Locally, copy it from the Neon dashboard into .env.local.
 */

export function dbConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

/** Tagged-template SQL client. Interpolated values are sent as bound
 *  parameters, so `sql\`... values (${x})\`` is injection-safe. */
export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}
