import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="mt-5 h-14 w-[min(100%,32rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,26rem)]" />
      </div>
    </section>
  );
}

export default function HowItWorksLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      {/* Chapter timeline */}
      <section className="section">
        <div className="container-x space-y-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-6">
              <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-56" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[min(100%,40rem)]" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-10 w-72" />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
