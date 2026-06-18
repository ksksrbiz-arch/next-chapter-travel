import { Reveal } from "@/components/ui/reveal";

/**
 * The signature device. A journey is a real sequence, so numbered chapters
 * encode something true rather than decorate. Reused on / and /how-it-works.
 */
export const chapters = [
  {
    no: "01",
    name: "The Dream",
    title: "Tell us the trip you keep meaning to take",
    copy: "Share where you're dreaming of, who's coming, and roughly when. A quick form or a call — whichever's easier.",
  },
  {
    no: "02",
    name: "The Plan",
    title: "We build it around you",
    copy: "Your specialist matches you to the right parks or ship, then handles dates, rooms, dining, and the details that make or break a trip.",
  },
  {
    no: "03",
    name: "The Trip",
    title: "You go — we've got the rest",
    copy: "Everything's booked and documented before you leave. Questions on the road? You text one person, not a call center.",
  },
  {
    no: "04",
    name: "The Memory",
    title: "Come back and do it again",
    copy: "We keep what worked on file, so next year's trip starts from a head start instead of a blank page.",
  },
];

export function ChapterTimeline({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section">
      <div className="container-x">
        {showHeading && (
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display-2 mt-4 max-w-[20ch]">
              Every trip is a story in four chapters.
            </h2>
          </Reveal>
        )}

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.08}>
              <li className="flex h-full flex-col bg-paper p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-semibold text-clay">{c.no}</span>
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                    {c.name}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{c.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
