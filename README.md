# Next Chapter Travel — agency flagship site

The single brand website for **Next Chapter Travel, LLC**. One clean, agency-branded
flagship that replaces the separate personal `.netlify.app` site, with both co-owners
(**Wendy** — theme parks · **Jessica** — cruises) presented as equals.

Built with Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion, and Postgres
on **Neon**, deployed on **Vercel**.

---

## 1. Quick start

```bash
npm install
cp .env.example .env.local      # add DATABASE_URL (optional for first run)
npm run dev                     # http://localhost:3000
```

The site runs **fully without a database** on first clone — every page reads from
`src/lib/data.ts` as a fallback, and the lead form works in a "dev mode" that logs
instead of saving. Wire Neon when you're ready (step 3).

---

## 2. What's in here

```
src/
  app/
    page.tsx              Home — hero, stats, two paths, featured, process, testimonials, CTA
    about/               Company story + balanced co-owner section
    team/                Both co-owner profiles
    experiences/         Filterable hub (?category= deep-links from the home "two paths")
    plan-your-trip/      Conversion page — the lead form lives here
    how-it-works/        The four-chapter process + FAQ
    testimonials/        Masonry gallery
    stories/             Blog index (scaffolded; wire to blog_posts)
    resources/           Guides + FAQ accordion
    actions/lead.ts      Server action: validates + inserts a lead into Neon
  components/            Hero, StatBand, TwoPaths, ChapterTimeline, cards, carousel, LeadForm…
    ui/                  Button, fields, Accordion, Reveal (motion wrapper)
  lib/
    data.ts              Static fallback content (mirror of the seed)
    types.ts             Shared types incl. LeadInput
    db.ts                Neon client + dbConfigured() guard
db/
  schema.sql             Tables, checks, indexes, example queries (standard Postgres)
  seed.sql               Seed mirroring data.ts
```

---

## 3. Connecting the database (Neon, via Vercel)

This is the path you asked for — Vercel-native, one click.

1. In your Vercel project: **Storage** (or **Marketplace → Neon**) → **Install**.
   Choose **Create new Neon account** to provision one, or **Link existing Neon account**
   to reuse the one already in your stack.
2. Vercel injects `DATABASE_URL` (plus pooled/unpooled variants) into the project
   automatically — Production, Preview, and Development. No manual env setup.
3. Open the Neon SQL editor (**Open in Neon** from the Vercel Storage tab) and run
   `db/schema.sql`, then `db/seed.sql`.
4. For local dev: `vercel env pull .env.development.local` (or paste `DATABASE_URL` from
   the Neon dashboard into `.env.local`).

That's it — the lead form now saves real leads. To switch a content page from the static
fallback to live data, read in the Server Component:

```ts
import { getSql, dbConfigured } from "@/lib/db";
import { experiences as fallback } from "@/lib/data";

const rows = dbConfigured()
  ? await getSql()`select * from experiences where published order by sort_order`
  : fallback;
```

**Security:** the app only ever touches the database server-side (content reads in Server
Components, lead writes in the server action). There's no public/anon DB role, so the
tables aren't reachable from the browser — which is why no row-level security is needed.
Keep `DATABASE_URL` in env vars only.

> **Not enough Neon free projects either?** You don't actually need a database to launch.
> The only dynamic piece is lead capture — point the `TODO` in `actions/lead.ts` at Resend
> or MailerLite to email each lead, and skip Neon entirely until you want a leads history.

---

## 4. Admin dashboard — recommended approach

Cheapest-first. **Start with A.**

**A. Neon's table editor + SQL editor (ship day one, $0).** Both co-owners manage every
table from the Neon console (a Drizzle Studio–powered table editor plus a SQL editor) —
add experiences, publish testimonials, and work the `leads` queue (the `status` and
`assigned_to` columns are built for this). Zero code. Good for months.

**B. Branded `/admin` inside this app (when the console feels clunky).** Add auth and gate
an `/admin` route group with simple tables over the same data, living at
`nextchaptertravel.com/admin`. Two good options: **Neon Auth** (built into the Vercel
integration — sets `NEON_AUTH_*` env vars and branches with your DB) or **Auth.js**.

**C. Lead notifications now, dashboard later.** Fastest win: the marked `TODO` in
`actions/lead.ts` fires on each new lead — wire it to Resend or MailerLite so leads hit an
inbox immediately. Then the "dashboard" is just email until B is worth building.

Routing leads to the right co-owner: `interest` maps to `assigned_to`
(`theme-parks → wendy`, `cruises → jessica`, else `both`). Set it in the action or a trigger.

---

## 5. Deploying (Vercel)

1. Push to GitHub and **Import** the repo in Vercel (it auto-detects Next.js — no config).
2. Install the **Neon** integration from the Vercel Marketplace (step 3 above). That
   injects `DATABASE_URL` for you.
3. Add `LEAD_NOTIFICATION_EMAIL` under **Settings → Environment Variables**.
4. Deploy. Every push gets a Preview deployment; if you enable Neon preview branching, each
   PR gets its own isolated database branch automatically.

> Prefer Netlify? The app is host-agnostic — it'll build the same way. You'd just attach
> Neon manually (add `DATABASE_URL` to Netlify env vars) instead of using Vercel's
> one-click integration.

---

## 6. Before launch — the real to-do

The build is complete and runs; these are the content/asset swaps only the client can make:

- **Photography.** Every gradient block marked "photo slot" is a deliberate placeholder.
  Upload licensed destination images to **Vercel Blob** (`next.config.mjs` already allows
  that host) and swap the gradient divs for `<Image>`. Or commit optimized images to the
  repo. Don't ship the `images.unsplash.com` allowance to production without licenses.
- **Real testimonials & experiences.** Replace seed content with the agency's own.
- **Contact details.** `hello@nextchaptertravel.com` appears in a few places — update to
  the real inbox, and confirm the domain.
- **Owner bios & headshots.** Wendy and Jessica's real bios/photos in `team_members`.
- **Legal.** Add privacy policy / terms pages and link them in the footer if required.

---

## 7. Design system (for future edits)

- **Type:** Fraunces (display, `font-display`) + Inter (body, `font-sans`), via `next/font`.
- **Palette** (`tailwind.config.ts`): `ink` deep dusk teal · `paper` warm sand ·
  `gold` golden-hour accent / CTAs · `clay` sunset secondary · `sea` jade · `stone` warm gray.
- **Signature:** the *chapter* device — numbered markers that track a real journey
  (Dream 01 → Plan 02 → Go 03 → Remember 04), tying the brand name to the structure and the
  process page. Plus the balanced **two-paths** motif (parks ‖ cruises) that keeps both
  co-owners equally visible by design.
- **Motion:** `Reveal` (scroll fade-up) and the hero entrance both respect
  `prefers-reduced-motion`. Keep new motion behind that check.

Accessibility floor already in place: skip link, visible focus rings, keyboard-operable
carousel/accordion, reduced-motion honored, semantic landmarks.
