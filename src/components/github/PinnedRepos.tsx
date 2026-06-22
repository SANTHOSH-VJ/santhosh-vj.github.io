import { motion } from "framer-motion";
import { RepoCard } from "./RepoCard";
import type { GitHubRepo } from "@/lib/github";

interface Props {
  repos: GitHubRepo[];
}

export function PinnedRepos({ repos }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Featured repositories
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">Latest updated projects</h3>
        </div>
        <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {repos.length} repos
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {repos.map((repo, index) => (
          <RepoCard key={repo.id} repo={repo} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
