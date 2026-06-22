import { motion } from "framer-motion";
import { GitBranch, Star, Users, UserRound } from "lucide-react";
import type { GitHubProfile, GitHubRepo } from "@/lib/github";

interface Props {
  profile: GitHubProfile;
  repos: GitHubRepo[];
}

export function GitHubStats({ profile, repos }: Props) {
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const stats = [
    { label: "Followers", value: profile.followers, icon: Users },
    { label: "Following", value: profile.following, icon: UserRound },
    { label: "Public repos", value: profile.public_repos, icon: GitBranch },
    { label: "Repo stars", value: totalStars, icon: Star },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)]"
        >
          <stat.icon className="mb-2 h-4 w-4 text-accent" />
          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
