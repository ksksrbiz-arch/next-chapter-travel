import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10">
      <div className="horizon-soft absolute inset-0 -z-10" />
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-1 mt-5 max-w-[18ch]">{title}</h1>
          {intro && <p className="lede mt-6 max-w-2xl">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
