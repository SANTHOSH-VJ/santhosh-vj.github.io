import { motion } from "framer-motion";
import { GitBranch, GitCommit, Github, Star, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/constants/portfolio";

const STATS = [
  { icon: Users, label: "Followers", value: "120+" },
  { icon: Star, label: "Stars", value: "85" },
  { icon: GitBranch, label: "Repositories", value: "32" },
  { icon: GitCommit, label: "Commits", value: "1.2k+" },
];

const REPOS = [
  { name: "serverless-cloud-storage", desc: "Cognito + S3 + Lambda storage platform", lang: "TypeScript", stars: 24 },
  { name: "url-shortener-saas", desc: "Flask + MySQL shortener with analytics", lang: "Python", stars: 18 },
  { name: "aws-playground", desc: "Experiments with AWS services and IaC", lang: "Python", stars: 12 },
  { name: "dsa-java", desc: "1100+ solved problems, organized by topic", lang: "Java", stars: 9 },
];

// Deterministic pseudo-random so SSR/CSR match
function levelFor(i: number) {
  const x = Math.sin(i * 9.13) * 10000;
  const f = x - Math.floor(x);
  return Math.floor(f * 5);
}

function Heatmap() {
  const cells = Array.from({ length: 7 * 26 });
  const palette = ["bg-muted/40", "bg-primary/20", "bg-primary/40", "bg-primary/70", "bg-accent"];
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto">
      {cells.map((_, i) => (
        <div key={i} className={`h-2.5 w-2.5 rounded-sm ${palette[levelFor(i)]}`} />
      ))}
    </div>
  );
}

export function GithubSection() {
  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source & activity"
          description="A live look at what I'm building in public."
        />

        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <s.icon className="mb-2 h-4 w-4 text-accent" />
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display font-semibold">Contribution activity</h3>
            <Button size="sm" variant="outline" asChild>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />View on GitHub
              </a>
            </Button>
          </div>
          <Heatmap />
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {REPOS.map((r, i) => (
            <motion.a
              key={r.name}
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-sm font-semibold text-primary group-hover:underline">
                  {r.name}
                </h4>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3" />{r.stars}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {r.lang}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
