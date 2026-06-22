import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="mt-5 h-14 w-[min(100%,34rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,40rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,30rem)]" />
      </div>
    </section>
  );
}

export default function ExperienceDetailLoading() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading experience">
      <HeroBand />

      <div className="container-x pt-8">
        <div className="flex flex-wrap gap-5">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-40" />
        </div>
      </div>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Overview column */}
            <div>
              <Skeleton className="h-5 w-28" />
              <Skeleton className="mt-4 h-10 w-[min(100%,24rem)]" />
              <div className="mt-6 space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
              <Skeleton className="mt-12 h-8 w-48" />
              <div className="mt-5 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-[min(100%,28rem)]" />
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              <Skeleton className="h-80 w-full rounded-xl2" />
              <Skeleton className="h-56 w-full rounded-xl2" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-x">
          <Skeleton className="h-10 w-[min(100%,28rem)]" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
