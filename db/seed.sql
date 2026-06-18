-- =============================================================================
-- Next Chapter Travel — seed data
-- Run AFTER schema.sql, in the Neon SQL Editor. Mirrors src/lib/data.ts so the
-- static fallback stay in sync. Safe to re-run (upserts by slug/natural key).
-- =============================================================================

-- Team -----------------------------------------------------------------------
insert into team_members (slug, name, role, expert, bio, specialties, sort_order)
values
  ('wendy', 'Wendy', 'Co-Owner & COO', 'wendy',
   'Wendy plans the kind of theme-park trips families talk about for years — the right park days, the right hotel, dining you''d never get on your own, and a pace that works for a five-year-old and a grandparent on the same trip. She handles the logistics so you get the magic.',
   array['Walt Disney World','Universal','Theme-park strategy','Multi-gen family trips'], 1),
  ('jessica', 'Jessica', 'Co-Owner & CFO', 'jessica',
   'Jessica matches travelers to the ship, line, and itinerary that actually fit how they want to vacation — then secures the cabin, perks, and dining that make it feel effortless. From a first cruise to a milestone all-inclusive, she handles the details start to finish.',
   array['Luxury cruises','All-inclusive resorts','Cabin & itinerary matching','Celebration travel'], 2)
on conflict (slug) do update set
  name = excluded.name, role = excluded.role, expert = excluded.expert,
  bio = excluded.bio, specialties = excluded.specialties, sort_order = excluded.sort_order;

-- Experiences ----------------------------------------------------------------
insert into experiences (slug, title, location, blurb, category, expert, price_from, duration, featured, sort_order)
values
  ('disney-world-deluxe', 'Walt Disney World, your way', 'Orlando, Florida',
   'A fully-planned Disney trip — park days, resort, dining, and the strategy that skips the lines and the meltdowns.',
   'theme-parks', 'wendy', 'Custom-quoted', '5–8 nights', true, 1),
  ('universal-epic', 'Universal & Epic Universe', 'Orlando, Florida',
   'Two parks, one new one, and a plan that gets your crew on the headliners without the guesswork.',
   'theme-parks', 'wendy', null, '4–6 nights', false, 2),
  ('caribbean-luxury-cruise', 'Caribbean luxury cruise', 'Eastern & Western Caribbean',
   'The right ship and cabin for how you actually vacation — matched, booked, and perked.',
   'cruises', 'jessica', 'Custom-quoted', '7 nights', true, 3),
  ('mediterranean-voyage', 'Mediterranean voyage', 'Italy · Greece · Spain',
   'Iconic ports, curated excursions, and an itinerary paced so the trip feels like a vacation, not a checklist.',
   'cruises', 'jessica', null, '10–12 nights', false, 4),
  ('all-inclusive-escape', 'All-inclusive escape', 'Mexico & the Caribbean',
   'Adults-only calm or family-friendly fun — the resort, room category, and add-ons matched to you.',
   'all-inclusive', 'jessica', null, '4–7 nights', false, 5),
  ('multi-gen-family', 'The whole-family trip', 'Your pick',
   'Parks, a cruise, or both — planned so every generation gets a trip that feels made for them.',
   'family', 'both', null, 'Flexible', true, 6)
on conflict (slug) do update set
  title = excluded.title, location = excluded.location, blurb = excluded.blurb,
  category = excluded.category, expert = excluded.expert, duration = excluded.duration,
  featured = excluded.featured, sort_order = excluded.sort_order;

-- Testimonials ---------------------------------------------------------------
insert into testimonials (name, location, quote, trip_type, expert, rating, featured)
values
  ('The Harmon Family', 'Salem, OR',
   'We''ve done Disney on our own before and it was chaos. Wendy''s plan meant we actually rested, the kids hit every ride they wanted, and I didn''t open a single park app the whole week.',
   'Walt Disney World', 'wendy', 5, true),
  ('Renee & Paul', 'Portland, OR',
   'First cruise, totally overwhelmed by the options. Jessica picked the ship and cabin like she''d read our minds. Every detail was handled before we even boarded.',
   'Caribbean cruise', 'jessica', 5, true),
  ('The Okafor Family', null,
   'Three generations, one trip, zero arguments — which I didn''t think was possible. They planned around all of us. Already booking next year.',
   'Multi-gen family trip', 'both', 5, true),
  ('Dana M.', 'Beaverton, OR',
   'The all-inclusive they matched us to was exactly our speed — quiet, beautiful, nothing to think about. That''s the whole point and they nailed it.',
   'All-inclusive resort', 'jessica', 5, false);
