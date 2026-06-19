import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-36" />
        <Skeleton className="mt-5 h-14 w-[min(100%,30rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,26rem)]" />
      </div>
    </section>
  );
}

export default function ResourcesLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      {/* Guides */}
      <section className="section">
        <div className="container-x">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-10 w-56" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </section>
      {/* FAQ accordion */}
      <section className="section bg-paper-deep">
        <div className="container-x max-w-3xl space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      </section>
    </div>
  );
}
