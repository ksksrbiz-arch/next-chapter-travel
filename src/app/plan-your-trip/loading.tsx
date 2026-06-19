import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-44" />
        <Skeleton className="mt-5 h-14 w-[min(100%,30rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,26rem)]" />
      </div>
    </section>
  );
}

export default function PlanYourTripLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          {/* Lead form */}
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="mt-2 h-12 w-full" />
              </div>
            ))}
            <Skeleton className="h-12 w-48 rounded-full" />
          </div>
          {/* "What happens next" rail */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-48" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-11 w-11 shrink-0 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
