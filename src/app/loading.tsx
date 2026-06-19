import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      {/* Hero band */}
      <section className="horizon-soft border-b border-ink/10">
        <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-5 h-16 w-[min(100%,28rem)]" />
          <Skeleton className="mt-3 h-16 w-[min(100%,22rem)]" />
          <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
          <Skeleton className="mt-3 h-5 w-[min(100%,30rem)]" />
        </div>
      </section>

      {/* Stat band */}
      <section className="section bg-ink">
        <div className="container-x grid gap-8 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full bg-cream-deep/20" />
          ))}
        </div>
      </section>

      {/* Featured experiences grid */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="mt-4 h-10 w-72" />
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
