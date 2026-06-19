import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { unsplash, photos, type Photo } from "@/lib/images";

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  expert: string;
  read: string;
  category: string;
  photo: Photo;
};

/**
 * SCAFFOLD — placeholder journal entries. Titles and excerpts are honest
 * previews of articles the team plans to write; they are not yet published.
 * Swap this array for a CMS / Neon `blog_posts` query (see lib/db.ts) and
 * point each card at a real /stories/[slug] page when content is ready.
 */
export const posts: JournalPost[] = [
  {
    slug: "first-disney-trip",
    title: "Planning your first Disney trip without losing your mind",
    excerpt:
      "The order you make decisions in matters more than any single choice. Here's the sequence we walk every first-time family through.",
    expert: "Wendy",
    read: "6 min",
    category: "Theme parks",
    photo: photos.themePark,
  },
  {
    slug: "choosing-a-cruise",
    title: "How to choose a cruise when every ship looks the same",
    excerpt:
      "Itinerary, ship, and cabin — in that order. Get the first one right and the rest gets a lot easier to narrow down.",
    expert: "Jessica",
    read: "7 min",
    category: "Cruises",
    photo: photos.cruise,
  },
  {
    slug: "multigen-travel",
    title: "The multi-generation trip: one vacation, every age happy",
    excerpt:
      "Grandparents, teens, and toddlers want different things. The trick is a base everyone shares and freedom around the edges.",
    expert: "Wendy & Jessica",
    read: "5 min",
    category: "Family",
    photo: photos.family,
  },
  {
    slug: "all-inclusive-worth-it",
    title: "Are all-inclusive resorts actually worth it?",
    excerpt:
      "Sometimes yes, sometimes no. It comes down to how you travel and what 'included' covers at the resort you're eyeing.",
    expert: "Jessica",
    read: "4 min",
    category: "Resorts",
    photo: photos.overwater,
  },
];

export function JournalGrid() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            {/* Not yet linked — articles are scaffolded, not published. */}
            <article className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-paper shadow-card transition-shadow hover:shadow-lift">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={unsplash(p.photo.id, 1200)}
                  alt={p.photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold uppercase tracking-eyebrow text-ink shadow-card">
                  Coming soon
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-gold">
                  <span>{p.category}</span>
                  <span className="text-stone">· {p.read} read</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-ink/70">{p.excerpt}</p>
                <p className="mt-auto pt-6 text-sm text-stone">By {p.expert}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-center text-sm text-stone">
        This journal is a scaffold — these entries are previews, not published
        posts. Add a{" "}
        <code className="text-ink/70">/stories/[slug]</code> route and wire these
        cards to the <code className="text-ink/70">blog_posts</code> table (or a
        CMS) to publish.
      </p>
    </>
  );
}
