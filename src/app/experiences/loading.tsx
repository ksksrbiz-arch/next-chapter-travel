import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="mt-5 h-14 w-[min(100%,30rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,36rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,28rem)]" />
      </div>
    </section>
  );
}

export default function ExperiencesLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      <section className="section">
        <div className="container-x">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-28 rounded-full" />
            ))}
          </div>
          {/* Card grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
