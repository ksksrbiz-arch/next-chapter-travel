import { TeamCard } from "@/components/team-card";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/lib/types";

/** Short, benefit-led specialty line per owner for the Team page. Honest and
 *  scoped to the known facts (Wendy = parks, Jessica = cruises). Local consts. */
const specialtyLine: Record<string, string> = {
  wendy:
    "Your theme-park specialist. Disney and Universal trips planned park-day by park-day, so your family gets the magic without the guesswork.",
  jessica:
    "Your cruise and resort specialist. The right ship, cabin, and itinerary — matched to how you vacation and booked with the perks that come with it.",
};

/** Pairs a refined TeamCard with a specialty highlight and an inviting CTA to
 *  plan a trip with that owner. Used on the Team page. */
export function AboutFounderFeature({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-6">
      <TeamCard member={member} />
      <div className="rounded-xl2 border border-ink/10 bg-paper p-7 shadow-card">
        <p className="leading-relaxed text-ink/80">
          {specialtyLine[member.slug] ?? member.bio}
        </p>
        <Button
          href="/plan-your-trip"
          variant="solid"
          className="mt-6"
        >
          Plan a trip with {member.name}
        </Button>
      </div>
    </div>
  );
}
