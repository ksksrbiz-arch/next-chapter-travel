"use client";

import * as React from "react";
import { ExperienceCard } from "@/components/experience-card";
import type { Experience, ExperienceCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

const filters: { value: "all" | ExperienceCategory; label: string }[] = [
  { value: "all", label: "All experiences" },
  { value: "theme-parks", label: "Theme parks" },
  { value: "cruises", label: "Cruises" },
  { value: "all-inclusive", label: "All-inclusive" },
  { value: "family", label: "Family" },
];

export function ExperiencesGrid({
  experiences,
  initialCategory = "all",
}: {
  experiences: Experience[];
  initialCategory?: "all" | ExperienceCategory;
}) {
  const [active, setActive] = React.useState<"all" | ExperienceCategory>(initialCategory);

  const visible =
    active === "all" ? experiences : experiences.filter((e) => e.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter experiences">
        {filters.map((f) => (
          <button
            key={f.value}
            role="tab"
            aria-selected={active === f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f.value
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 text-ink/70 hover:border-ink/50 hover:text-ink",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((exp) => (
          <ExperienceCard key={exp.slug} exp={exp} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-ink/60">
          No experiences in this category yet — but we plan them all. Tell us what you
          have in mind and we'll build it.
        </p>
      )}
    </div>
  );
}
