import { Skeleton } from "@/components/ui/skeleton";

export function GitHubSectionSkeleton() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
          <div className="flex items-start gap-4">
            <Skeleton className="h-20 w-20 rounded-2xl" />
            <div className="min-w-0 flex-1 space-y-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-7 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
              <Skeleton className="h-9 w-32 rounded-md" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-4">
              <Skeleton className="mb-2 h-4 w-4" />
              <Skeleton className="h-7 w-16" />
              <Skeleton className="mt-2 h-3 w-20" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-6 w-52" />
            </div>
            <Skeleton className="h-4 w-52" />
          </div>
          <div className="mt-5 grid grid-flow-col grid-rows-7 gap-1.5 overflow-hidden">
            {Array.from({ length: 42 }).map((_, index) => (
              <Skeleton key={index} className="h-3.5 w-3.5 rounded-sm" />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
          <Skeleton className="h-3 w-36" />
          <Skeleton className="mt-2 h-6 w-56" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-border bg-background/70 p-5">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-4/5" />
                <Skeleton className="mt-4 h-9 w-24 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
