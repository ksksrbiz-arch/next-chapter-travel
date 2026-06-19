import { ClipboardList, Users, Plane } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/**
 * "What happens next" timeline for /plan-your-trip. A reassuring, specific
 * three-step walkthrough of how an inquiry becomes a booked trip — consistent
 * with the team-based, never-a-fee, clients-keep-their-own-air model. Content is
 * local on purpose; no invented stats or named agents.
 */
const steps = [
  {
    no: "01",
    icon: ClipboardList,
    title: "You share a few details",
    copy: "Tell us where you're dreaming of, who's coming, and roughly when. A short form is all it takes — no obligation, and never a planning fee.",
  },
  {
    no: "02",
    icon: Users,
    title: "We match you with the right agent",
    copy: "Your inquiry goes to an agent who specializes in your kind of trip. They build a tailored plan around your dates, your budget, and the details that matter to you.",
  },
  {
    no: "03",
    icon: Plane,
    title: "You review, we book and handle it",
    copy: "Once the plan feels right, we book the stays, experiences, and ground details — you keep your own flights — and organize everything before you leave.",
  },
] as const;

export function ConvNextSteps() {
  return (
    <section className="section bg-paper-deep">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">What happens next</p>
          <h2 className="display-2 mt-4 max-w-[20ch]">
            From a few details to a trip that&apos;s handled.
          </h2>
          <p className="lede mt-6 max-w-2xl">
            No call center, no generic package, no surprise fees. Here&apos;s
            exactly how your inquiry becomes a plan you&apos;ll love.
          </p>
        </Reveal>

        <RevealGroup className="relative mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <Reveal key={s.no} className="h-full">
              <div className="surface flex h-full flex-col p-8 sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <s.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="font-display text-3xl font-semibold text-clay">
                    {s.no}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
