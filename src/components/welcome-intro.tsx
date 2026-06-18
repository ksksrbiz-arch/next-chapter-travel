import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { photos, unsplash } from "@/lib/images";

/** Home "Welcome" section — the brand's warm, plain-spoken introduction. */
export function WelcomeIntro() {
  return (
    <section className="section bg-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="eyebrow items-start">Welcome</p>
          <h2 className="display-2 mt-3 max-w-[18ch] text-ink">
            Where every journey begins a new chapter
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              At Next Chapter Travel, we believe travel should be effortless,
              exciting, and completely tailored to you.
            </p>
            <p>
              Whether you&rsquo;re dreaming of turquoise waters, magical theme parks,
              romantic getaways, or bucket-list adventures across the globe, we handle
              every detail so you can focus on what matters most: the experience.
            </p>
            <p>
              From the first idea to the moment you return home, we&rsquo;re here to
              guide you every step of the way.
            </p>
            <p className="font-script text-3xl text-clay">
              ✨ Your next adventure starts here.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/plan-your-trip" size="lg" variant="solid">
              Start planning
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            {/* Layered photo collage for depth */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-ink/10 shadow-lift">
              <Image
                src={unsplash(photos.overwater.id, 1200)}
                alt={photos.overwater.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden aspect-square w-44 overflow-hidden rounded-xl2 border-4 border-cream shadow-lift sm:block">
              <Image
                src={unsplash(photos.santorini.id, 600)}
                alt={photos.santorini.alt}
                fill
                sizes="11rem"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
