import { motion } from "framer-motion";
import { ExternalLink, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GitHubProfile } from "@/lib/github";

interface Props {
  profile: GitHubProfile;
}

export function GitHubProfile({ profile }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
    >
      <div className="flex items-start gap-4">
        <img
          src={profile.avatar_url}
          alt={profile.name ?? profile.login}
          className="h-20 w-20 shrink-0 rounded-2xl border border-border object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            GitHub Profile
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">
            {profile.name ?? profile.login}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {profile.bio ?? "No bio available."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {profile.location && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            )}
            {profile.company && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1">
                <Building2 className="h-3.5 w-3.5" />
                {profile.company}
              </span>
            )}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
            >
              <a href={profile.html_url} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                View profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
