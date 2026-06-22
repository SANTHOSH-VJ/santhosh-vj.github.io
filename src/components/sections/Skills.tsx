import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Braces,
  Cloud,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Github,
  Layers3,
  Send,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { SKILLS } from "@/constants/portfolio";
import { SectionHeading } from "./SectionHeading";

const CATEGORY_META: Record<string, { icon: LucideIcon; summary: string }> = {
  Programming: {
    icon: Braces,
    summary: "Core languages and problem-solving foundations.",
  },
  Cloud: {
    icon: Cloud,
    summary: "Cloud platforms, infra tooling, and delivery-ready environments.",
  },
  "DevOps & Tools": {
    icon: Workflow,
    summary: "Version control, delivery workflows, and productivity tooling.",
  },
  "AI-Assisted Dev": {
    icon: Sparkles,
    summary: "AI tools that speed up drafting, debugging, and iteration.",
  },
};

const SKILL_META: Record<string, { icon: LucideIcon; accent: string; note: string }> = {
  Java: {
    icon: Coffee,
    accent: "from-amber-500/25 to-orange-500/10 text-amber-400",
    note: "Reliable for backend logic, interviews, and DSA practice.",
  },
  Python: {
    icon: Atom,
    accent: "from-sky-500/25 to-cyan-500/10 text-sky-400",
    note: "Used for scripting, automation, and fast prototyping.",
  },
  SQL: {
    icon: Database,
    accent: "from-emerald-500/25 to-teal-500/10 text-emerald-400",
    note: "Comfortable with queries, joins, and structured data work.",
  },
  AWS: {
    icon: Cloud,
    accent: "from-orange-500/25 to-amber-500/10 text-orange-400",
    note: "Hands-on exposure to AWS Cloud architecture and services.",
  },
  OCI: {
    icon: Cpu,
    accent: "from-rose-500/25 to-red-500/10 text-rose-400",
    note: "Basic familiarity with Oracle Cloud and its core services.",
  },
  Linux: {
    icon: TerminalSquare,
    accent: "from-zinc-500/25 to-slate-500/10 text-zinc-300",
    note: "Daily terminal comfort for servers, scripts, and debugging.",
  },
  Docker: {
    icon: Layers3,
    accent: "from-cyan-500/25 to-blue-500/10 text-cyan-400",
    note: "Containerization for repeatable local and cloud deployments.",
  },
  Git: {
    icon: GitBranch,
    accent: "from-red-500/25 to-orange-500/10 text-red-400",
    note: "Branching, collaboration, and clean commit hygiene.",
  },
  GitHub: {
    icon: Github,
    accent: "from-slate-500/25 to-zinc-500/10 text-slate-200",
    note: "Source control, collaboration, and portfolio delivery.",
  },
  Postman: {
    icon: Send,
    accent: "from-orange-500/25 to-rose-500/10 text-orange-300",
    note: "API exploration, request testing, and documentation flow.",
  },
  "GitHub Copilot": {
    icon: Sparkles,
    accent: "from-violet-500/25 to-fuchsia-500/10 text-violet-300",
    note: "AI-assisted completion while keeping the code intentional.",
  },
  Claude: {
    icon: Bot,
    accent: "from-stone-500/25 to-neutral-500/10 text-stone-200",
    note: "Used for reasoning, drafting, and reviewing implementation choices.",
  },
  Kiro: {
    icon: Workflow,
    accent: "from-indigo-500/25 to-blue-500/10 text-indigo-300",
    note: "Workflow support for planning, refinement, and iteration.",
  },
};

const FEATURED_STACK = ["Java", "AWS", "GitHub", "Docker", "SQL", "Git"];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.04))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A polished stack built to ship"
          description="A logo-led view of the languages, cloud platforms, and tools I use to build production-ready work."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {SKILLS.map((cat, idx) => {
              const categoryMeta = CATEGORY_META[cat.category];
              const CategoryIcon = categoryMeta.icon;

              return (
                <motion.article
                  key={cat.category}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="rounded-3xl border border-border bg-card/90 p-6 shadow-[var(--shadow-elevated)] backdrop-blur"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/70 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                          {cat.category}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-foreground">
                          {categoryMeta.summary}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {cat.items.length} skills
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {cat.items.map((skill) => {
                      const skillMeta = SKILL_META[skill.name] ?? {
                        icon: Braces,
                        accent: "from-primary/20 to-accent/10 text-primary",
                        note: "Core skill used in day-to-day engineering work.",
                      };
                      const SkillIcon = skillMeta.icon;

                      return (
                        <div
                          key={skill.name}
                          className="rounded-2xl border border-border/80 bg-background/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${skillMeta.accent}`}
                            >
                              <SkillIcon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="truncate text-sm font-semibold text-foreground">
                                {skill.name}
                              </h4>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                {skillMeta.note}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                Signature stack
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                The tools I reach for first
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                These are the skills that show up most often in real projects, interview prep, and
                day-to-day delivery.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                {FEATURED_STACK.map((skillName) => {
                  const skillMeta = SKILL_META[skillName];
                  const SkillIcon = skillMeta.icon;

                  return (
                    <div
                      key={skillName}
                      className="rounded-2xl border border-border bg-background/70 p-3"
                    >
                      <div
                        className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${skillMeta.accent}`}
                      >
                        <SkillIcon className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-foreground">{skillName}</p>
                    </div>
                  );
                })}
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                Delivery style
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li>• Cloud-first thinking with practical deployment choices.</li>
                <li>• Clean version control habits and readable collaboration flow.</li>
                <li>• AI tools used for speed, not as a substitute for judgment.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
