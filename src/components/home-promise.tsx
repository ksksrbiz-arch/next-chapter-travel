import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { photos, unsplash } from "@/lib/images";

/**
 * "Our Promise" — the signature brand-voice section in the journal/chapters
 * motif. Honest, benefit-driven copy; the three promises restate commitments
 * the agency already makes, framed as chapters.
 */
const promises = [
  {
    no: "01",
    title: "We listen first",
    copy: "Before a single thing is booked, we learn how you travel — the pace, the people, the moments that matter to you.",
  },
  {
    no: "02",
    title: "We sweat the details",
    copy: "The reservations, the timing, the upgrades worth chasing. We carry the planning so your only job is to look forward to it.",
  },
  {
    no: "03",
    title: "We’re here the whole way",
    copy: "From the first idea to the moment you come home, you have a real person to call. No tickets, no hold music — just us.",
  },
];

export function HomePromise() {
  return (
    <section className="section bg-paper-deep">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Left — framed photo with chapter overlay */}
        <Reveal variant="left" className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl2 shadow-lift ring-1 ring-ink/10">
            <Image
              src={unsplash(photos.flatlay.id, 1200)}
              alt={photos.flatlay.alt}
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="font-script text-3xl text-cream">A story worth telling</p>
            </div>
          </div>
        </Reveal>

        {/* Right — the promise */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Our promise</p>
            <h2 className="display-2 mt-4 max-w-[18ch] text-ink">
              Every trip is a chapter. We help you write it well.
            </h2>
            <p className="lede mt-5 max-w-xl">
              The name says it. Travel isn&rsquo;t a transaction here — it&rsquo;s the
              next chapter of your story, and we treat it that way from the very
              first conversation.
            </p>
          </Reveal>

          <RevealGroup stagger={0.1} className="mt-9 space-y-7">
            {promises.map((p) => (
              <Reveal key={p.no} className="flex gap-5">
                <span className="chapter-no shrink-0 pt-1">{p.no}</span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-ink/75">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <Button href="/about" variant="outline" className="mt-9">
              Meet Wendy &amp; Jessica
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
