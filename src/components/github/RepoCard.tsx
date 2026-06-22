import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star, Clock3 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import type { GitHubRepo } from "@/lib/github";

interface Props {
  repo: GitHubRepo;
  index?: number;
}

export function RepoCard({ repo, index = 0 }: Props) {
  const updatedLabel = formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true });

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="truncate font-display text-lg font-semibold text-foreground group-hover:text-primary">
            {repo.name}
          </h4>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {repo.description ?? "No description provided."}
          </p>
        </div>

        <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground">
          {repo.language ?? "Code"}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Star className="h-3.5 w-3.5" />
          {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" />
          {repo.forks_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-3.5 w-3.5" />
          {updatedLabel}
        </span>
      </div>

      {repo.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <Button asChild size="sm" variant="outline">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Open repo
          </a>
        </Button>
        {repo.homepage && repo.homepage !== "#" && (
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
          >
            <a href={repo.homepage} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live demo
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
