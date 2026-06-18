import Image from "next/image";
import type { TeamMember } from "@/lib/types";

const tint: Record<string, string> = {
  wendy: "from-clay/85 to-gold/75",
  jessica: "from-sea/85 to-ink/75",
};

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded-xl2 border border-ink/10 bg-cream shadow-card">
      {member.photo ? (
        <div className="relative aspect-[4/5] bg-paper-deep sm:aspect-[5/4]">
          <Image
            src={member.photo}
            alt={`${member.name} — ${member.role}, Next Chapter Travel`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className={`aspect-[5/4] bg-gradient-to-br ${tint[member.expert]}`} />
      )}
      <div className="p-7">
        <p className="chapter-no text-clay">{member.role}</p>
        <h3 className="mt-1 font-display text-2xl font-bold text-ink">{member.name}</h3>
        <p className="mt-3 text-ink/75">{member.bio}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {member.specialties.map((s) => (
            <li
              key={s}
              className="rounded-full border border-ink/12 bg-paper-deep px-3 py-1 text-xs font-medium text-ink/70"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
