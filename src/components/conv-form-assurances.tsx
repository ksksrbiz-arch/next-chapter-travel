import { Clock, ShieldCheck, Lock, HandHeart } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/**
 * Trust framing that sits beside the inquiry form on /plan-your-trip. Honest,
 * no invented numbers — just the assurances a thoughtful traveler wants before
 * sharing details: fast reply, no fee, privacy, no obligation. The privacy line
 * links to /privacy.
 */
const assurances = [
  {
    icon: Clock,
    title: "One business day",
    copy: "That's how fast you'll hear back from a real agent — never an auto-reply.",
  },
  {
    icon: ShieldCheck,
    title: "Never a planning fee",
    copy: "We're paid by the suppliers we book, not by you. Full-service planning, no added cost.",
  },
  {
    icon: HandHeart,
    title: "No obligation",
    copy: "An inquiry is just a conversation. There's no commitment until a plan feels right to you.",
  },
  {
    icon: Lock,
    title: "Your details stay private",
    copy: "We use what you share only to plan your trip. See our privacy policy for the specifics.",
    href: "/privacy",
  },
] as const;

export function ConvFormAssurances() {
  return (
    <RevealGroup className="space-y-6">
      {assurances.map((a) => (
        <Reveal key={a.title} variant="fade" className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-deep text-gold">
            <a.icon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h3 className="font-semibold text-ink">{a.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">
              {a.copy}
              {a.href ? (
                <>
                  {" "}
                  <a
                    href={a.href}
                    className="font-semibold text-gold underline-offset-2 hover:text-ink hover:underline"
                  >
                    Read our privacy policy
                  </a>
                  .
                </>
              ) : null}
            </p>
          </div>
        </Reveal>
      ))}
    </RevealGroup>
  );
}
