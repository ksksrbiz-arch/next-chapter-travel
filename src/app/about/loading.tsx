import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-36" />
        <Skeleton className="mt-5 h-14 w-[min(100%,32rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,36rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,28rem)]" />
      </div>
    </section>
  );
}

export default function AboutLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-5 w-full" />
            ))}
          </div>
          <Skeleton className="aspect-[4/5] w-full" />
        </div>
      </section>
      {/* Values */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="mt-4 h-10 w-80" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
