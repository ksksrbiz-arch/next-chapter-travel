-- =============================================================================
-- Next Chapter Travel — Postgres schema (Neon)
-- Run in: Neon SQL Editor (or psql against DATABASE_URL).
-- Standard Postgres 15+. Safe to re-run.
--
-- Security model: the app accesses this database server-side only — content
-- reads happen in Server Components, lead writes in the server action — using
-- DATABASE_URL. There is no public/anon database role, so no row-level
-- security is needed; the tables are simply unreachable from the browser.
-- =============================================================================

-- Helper: keep updated_at fresh ----------------------------------------------
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- =============================================================================
-- leads — the conversion table. Written by the lead server action.
-- =============================================================================
create table if not exists leads (
  id           uuid primary key default gen_random_uuid(),
  full_name    text not null,
  email        text not null,
  phone        text,
  interest     text not null default 'not-sure'
                 check (interest in ('theme-parks','cruises','both','not-sure')),
  travel_dates text,
  party_size   text,
  budget       text,
  message      text,
  status       text not null default 'new'
                 check (status in ('new','contacted','quoted','booked','closed','lost')),
  -- Which co-owner this lead is routed to (theme-parks->wendy, cruises->jessica)
  assigned_to  text check (assigned_to in ('wendy','jessica','both')),
  source       text default 'website',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists leads_status_idx    on leads (status, created_at desc);
create index if not exists leads_created_at_idx on leads (created_at desc);

drop trigger if exists leads_set_updated_at on leads;
create trigger leads_set_updated_at before update on leads
  for each row execute function set_updated_at();

-- =============================================================================
-- team_members — both co-owners, balanced attribution
-- =============================================================================
create table if not exists team_members (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        text not null,
  role        text not null,
  expert      text not null check (expert in ('wendy','jessica','both')),
  bio         text not null,
  specialties text[] not null default '{}',
  photo_url   text,
  sort_order  int not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- =============================================================================
-- experiences — the filterable hub. Agency-branded, expert-attributed.
-- =============================================================================
create table if not exists experiences (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  location    text not null,
  blurb       text not null,
  category    text not null,   -- theme-parks | cruises | all-inclusive | family | international
  expert      text not null check (expert in ('wendy','jessica','both')),
  price_from  text,
  duration    text,
  image_url   text,
  featured    boolean not null default false,
  sort_order  int not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists experiences_category_idx on experiences (category) where published;
create index if not exists experiences_featured_idx on experiences (featured) where published;

drop trigger if exists experiences_set_updated_at on experiences;
create trigger experiences_set_updated_at before update on experiences
  for each row execute function set_updated_at();

-- =============================================================================
-- testimonials
-- =============================================================================
create table if not exists testimonials (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  location   text,
  quote      text not null,
  trip_type  text not null,
  expert     text not null check (expert in ('wendy','jessica','both')),
  rating     int not null default 5 check (rating between 1 and 5),
  featured   boolean not null default false,
  published  boolean not null default true,
  created_at timestamptz not null default now()
);

-- =============================================================================
-- blog_posts (Stories)
-- =============================================================================
create table if not exists blog_posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  excerpt      text,
  body         text,            -- markdown or rich text
  category     text,
  expert       text not null default 'both' check (expert in ('wendy','jessica','both')),
  cover_url    text,
  read_minutes int,
  published    boolean not null default false,
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists blog_published_idx on blog_posts (published, published_at desc);

drop trigger if exists blog_set_updated_at on blog_posts;
create trigger blog_set_updated_at before update on blog_posts
  for each row execute function set_updated_at();

-- =============================================================================
-- Example queries (reference for the app + admin)
-- =============================================================================
-- Featured experiences for the home teaser:
--   select * from experiences where published and featured order by sort_order limit 3;
--
-- Experiences filtered by category:
--   select * from experiences where published and category = 'cruises' order by sort_order;
--
-- New leads for a dashboard, newest first:
--   select id, full_name, email, interest, status, created_at
--   from leads order by created_at desc;
--
-- Leads routed to Wendy that still need contact:
--   select * from leads where assigned_to in ('wendy','both') and status = 'new';
--
-- Published stories for the blog index:
--   select slug, title, excerpt, category, read_minutes, published_at
--   from blog_posts where published order by published_at desc;
