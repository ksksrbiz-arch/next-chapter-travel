import Image from "next/image";
import type { TeamMember } from "@/lib/types";

const tint: Record<string, string> = {
  wendy: "from-clay/85 to-gold/75",
  jessica: "from-sea/85 to-ink/75",
};

/** Allow an optional portrait without widening the shared TeamMember type. */
type TeamCardMember = TeamMember & { photo?: string };

export function TeamCard({ member }: { member: TeamCardMember }) {
  return (
    <article className="group overflow-hidden rounded-xl2 border border-ink/10 bg-cream shadow-card transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift">
      {/* Portrait slot — licensed photo when available, gradient fallback otherwise */}
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${tint[member.expert]} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]`}
          />
        )}
      </div>
      <div className="p-7">
        <p className="chapter-no text-clay">{member.role}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{member.name}</h3>
        <p className="mt-3 text-ink/75">{member.bio}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {member.specialties.map((s) => (
            <li
              key={s}
              className="rounded-full border border-ink/12 bg-paper-deep px-3 py-1 text-xs font-medium text-ink/70 transition-colors duration-300 hover:border-clay/30 hover:text-ink"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
