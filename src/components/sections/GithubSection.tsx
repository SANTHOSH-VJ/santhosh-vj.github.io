import { AlertTriangle, Github, RefreshCw } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { useGitHubDashboard } from "@/hooks/use-github";
import { PROFILE } from "@/constants/portfolio";
import { selectFeaturedRepos } from "@/lib/github";
import { GitHubProfile } from "@/components/github/GitHubProfile";
import { GitHubStats } from "@/components/github/GitHubStats";
import { ContributionGraph } from "@/components/github/ContributionGraph";
import { PinnedRepos } from "@/components/github/PinnedRepos";
import { GitHubSectionSkeleton } from "@/components/github/GitHubSectionSkeleton";

export function GithubSection() {
  const { data, isLoading, isError, error, refetch, isFetching } = useGitHubDashboard();

  const featuredRepos = data ? selectFeaturedRepos(data.repos) : [];

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Live GitHub data"
          description="A dynamic view of my profile, recent activity, and featured repositories."
        />

        {isLoading && <GitHubSectionSkeleton />}

        {isError && (
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Unable to load GitHub data</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {error instanceof Error
                      ? error.message
                      : "Something went wrong while fetching GitHub data."}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => refetch()}>
                  <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}`} />
                  Retry
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
                >
                  <a href={PROFILE.github} target="_blank" rel="noreferrer">
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    Open GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}

        {data && !isError && (
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <GitHubProfile profile={data.profile} />
              <GitHubStats profile={data.profile} repos={data.repos} />
            </div>

            <div className="space-y-6">
              <ContributionGraph activity={data.activity} />
              <PinnedRepos repos={featuredRepos} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
