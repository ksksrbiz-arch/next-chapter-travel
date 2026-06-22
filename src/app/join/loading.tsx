import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="mt-5 h-14 w-[min(100%,34rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,36rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,28rem)]" />
      </div>
    </section>
  );
}

export default function JoinLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      {/* Why join */}
      <section className="section">
        <div className="container-x">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-10 w-80" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-44 w-full" />
            ))}
          </div>
        </div>
      </section>
      {/* Steps */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-10 w-72" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
