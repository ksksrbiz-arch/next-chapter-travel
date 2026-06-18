import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data";

export function StatBand() {
  return (
    <section className="border-y border-ink/10 bg-paper-deep">
      <div className="container-x grid grid-cols-2 gap-y-10 py-12 sm:py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="text-center">
            <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-stone">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
