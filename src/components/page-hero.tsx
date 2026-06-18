import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { unsplash, type Photo } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  intro,
  photo,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Optional photographic banner. When omitted, a soft warm gradient is used. */
  photo?: Photo;
}) {
  const onPhoto = Boolean(photo);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10">
      {photo ? (
        <>
          <Image
            src={unsplash(photo.id, 2000)}
            alt={photo.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/35" />
        </>
      ) : (
        <div className="horizon-soft absolute inset-0 -z-10" />
      )}
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Reveal>
          <p className={`eyebrow items-start ${onPhoto ? "!text-cream/90" : ""}`}>{eyebrow}</p>
          <h1 className={`display-1 mt-3 max-w-[18ch] ${onPhoto ? "text-cream" : ""}`}>{title}</h1>
          {intro && (
            <p className={`lede mt-6 max-w-2xl ${onPhoto ? "!text-cream/90" : ""}`}>{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
