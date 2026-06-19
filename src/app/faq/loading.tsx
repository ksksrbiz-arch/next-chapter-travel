import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="mt-5 h-14 w-[min(100%,30rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
      </div>
    </section>
  );
}

export default function FaqLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      <section className="section">
        <div className="container-x max-w-3xl space-y-12">
          {Array.from({ length: 4 }).map((_, g) => (
            <div key={g}>
              <Skeleton className="h-6 w-44" />
              <div className="mt-4 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-14 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
