import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
} from "lucide-react";
import { SKILLS } from "@/constants/portfolio";
import { SectionHeading } from "./SectionHeading";
import Folder from "@/components/ui/Folder";

/* ─── category metadata ─── */
const CATEGORY_META: Record<
  string,
  { icon: LucideIcon; summary: string; color: string }
> = {
  Programming: {
    icon: Braces,
    summary: "Core languages and problem-solving foundations.",
    color: "#F59E0B",
  },
  Cloud: {
    icon: Cloud,
    summary: "Cloud platforms, infra tooling, and delivery-ready environments.",
    color: "#3B82F6",
  },
  "DevOps & Tools": {
    icon: Workflow,
    summary: "Version control, delivery workflows, and productivity tooling.",
    color: "#EF4444",
  },
  "AI-Assisted Dev": {
    icon: Sparkles,
    summary: "AI tools that speed up drafting, debugging, and iteration.",
    color: "#8B5CF6",
  },
};

/* ─── skill metadata ─── */
const SKILL_META: Record<
  string,
  { icon: LucideIcon; accent: string; note: string; gradient: string }
> = {
  Java: {
    icon: Coffee,
    accent: "from-amber-500/25 to-orange-500/10 text-amber-400",
    gradient: "from-amber-500 to-orange-500",
    note: "Reliable for backend logic, interviews, and DSA practice.",
  },
  Python: {
    icon: Atom,
    accent: "from-sky-500/25 to-cyan-500/10 text-sky-400",
    gradient: "from-sky-500 to-cyan-500",
    note: "Used for scripting, automation, and fast prototyping.",
  },
  SQL: {
    icon: Database,
    accent: "from-emerald-500/25 to-teal-500/10 text-emerald-400",
    gradient: "from-emerald-500 to-teal-500",
    note: "Comfortable with queries, joins, and structured data work.",
  },
  AWS: {
    icon: Cloud,
    accent: "from-orange-500/25 to-amber-500/10 text-orange-400",
    gradient: "from-orange-500 to-amber-500",
    note: "Hands-on exposure to AWS Cloud architecture and services.",
  },
  OCI: {
    icon: Cpu,
    accent: "from-rose-500/25 to-red-500/10 text-rose-400",
    gradient: "from-rose-500 to-red-500",
    note: "Basic familiarity with Oracle Cloud and its core services.",
  },
  Linux: {
    icon: TerminalSquare,
    accent: "from-zinc-500/25 to-slate-500/10 text-zinc-300",
    gradient: "from-zinc-400 to-slate-500",
    note: "Daily terminal comfort for servers, scripts, and debugging.",
  },
  Docker: {
    icon: Layers3,
    accent: "from-cyan-500/25 to-blue-500/10 text-cyan-400",
    gradient: "from-cyan-500 to-blue-500",
    note: "Containerization for repeatable local and cloud deployments.",
  },
  Git: {
    icon: GitBranch,
    accent: "from-red-500/25 to-orange-500/10 text-red-400",
    gradient: "from-red-500 to-orange-500",
    note: "Branching, collaboration, and clean commit hygiene.",
  },
  GitHub: {
    icon: Github,
    accent: "from-slate-500/25 to-zinc-500/10 text-slate-200",
    gradient: "from-slate-400 to-zinc-500",
    note: "Source control, collaboration, and portfolio delivery.",
  },
  Postman: {
    icon: Send,
    accent: "from-orange-500/25 to-rose-500/10 text-orange-300",
    gradient: "from-orange-500 to-rose-500",
    note: "API exploration, request testing, and documentation flow.",
  },
  "GitHub Copilot": {
    icon: Sparkles,
    accent: "from-violet-500/25 to-fuchsia-500/10 text-violet-300",
    gradient: "from-violet-500 to-fuchsia-500",
    note: "AI-assisted completion while keeping the code intentional.",
  },
  Claude: {
    icon: Bot,
    accent: "from-stone-500/25 to-neutral-500/10 text-stone-200",
    gradient: "from-stone-400 to-neutral-500",
    note: "Used for reasoning, drafting, and reviewing implementation choices.",
  },
  Kiro: {
    icon: Workflow,
    accent: "from-indigo-500/25 to-blue-500/10 text-indigo-300",
    gradient: "from-indigo-500 to-blue-500",
    note: "Workflow support for planning, refinement, and iteration.",
  },
};

const FEATURED_STACK = ["Java", "AWS", "GitHub", "Docker", "SQL", "Git"];

/* ─── skill card ─── */
function SkillCard({
  name,
  delay,
}: {
  name: string;
  delay: number;
}) {
  const meta = SKILL_META[name] ?? {
    icon: Braces,
    accent: "from-primary/20 to-accent/10 text-primary",
    gradient: "from-primary to-accent",
    note: "Core skill used in day-to-day engineering work.",
  };
  const SkillIcon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.35, delay: delay * 0.07 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.3)]"
    >
      {/* Top glow shimmer on hover */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start gap-4">
        <div
          className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${meta.accent} transition-transform duration-300 group-hover:scale-110`}
        >
          <SkillIcon className="h-5 w-5" />
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-xl ring-2 ring-white/0 transition-all duration-300 group-hover:ring-white/10" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-foreground">
            {name}
          </h4>
          <p className="mt-1 text-xs leading-5 text-muted-foreground/80">
            {meta.note}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── main component ─── */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.04))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A polished stack built to ship"
          description="Hover over a folder to explore the skills inside. Each category represents a core area of expertise."
        />

        {/* ── Folder grid ── */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {SKILLS.map((cat, idx) => {
            const categoryMeta = CATEGORY_META[cat.category];
            const CategoryIcon = categoryMeta.icon;
            const isActive = activeCategory === cat.category;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center"
              >
                {/* Folder card wrapper */}
                <div
                  className={`group relative cursor-pointer rounded-3xl border p-6 pb-4 transition-all duration-300 ${isActive
                    ? "border-primary/50 bg-card/90 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]"
                    : "border-border/60 bg-card/60 hover:border-primary/30 hover:bg-card/80 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]"
                    }`}
                  onClick={() =>
                    setActiveCategory(isActive ? null : cat.category)
                  }
                  onMouseEnter={() => setActiveCategory(cat.category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Active glow */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  )}

                  {/* Folder icon */}
                  <div className="flex justify-center">
                    <Folder
                      isOpen={isActive}
                      color={categoryMeta.color}
                      size={1.4}
                      items={cat.items.slice(0, 3).map((skill, i) => {
                        const sm = SKILL_META[skill.name];
                        const Ic = sm?.icon ?? Braces;
                        return (
                          <div
                            key={i}
                            className="flex h-full w-full items-center justify-center"
                          >
                            <Ic
                              className="h-4 w-4"
                              style={{ color: categoryMeta.color }}
                            />
                          </div>
                        );
                      })}
                    />
                  </div>

                  {/* Category info */}
                  <div className="mt-5 text-center">
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                      <CategoryIcon
                        className="h-4 w-4"
                        style={{ color: categoryMeta.color }}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {cat.category}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {cat.items.length} skills
                    </p>
                  </div>

                  {/* Expand indicator */}
                  <div className="mt-3 flex justify-center">
                    <ChevronRight
                      className={`h-4 w-4 text-muted-foreground/50 transition-transform duration-300 ${isActive ? "rotate-90 text-primary" : ""
                        }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Expanded skill cards ── */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-10">
                {/* Category header */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <div
                    className="h-6 w-1 rounded-full"
                    style={{
                      background: CATEGORY_META[activeCategory]?.color,
                    }}
                  />
                  <h3 className="text-lg font-semibold text-foreground">
                    {activeCategory}
                  </h3>
                  <span className="rounded-full border border-border bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {
                      SKILLS.find((s) => s.category === activeCategory)?.items
                        .length
                    }{" "}
                    skills
                  </span>
                </motion.div>

                {/* Skill cards grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {SKILLS.find((s) => s.category === activeCategory)?.items.map(
                    (skill, i) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        delay={i}
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Signature stack & delivery style sidebar ── */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card/90 p-6 shadow-[var(--shadow-elevated)] backdrop-blur"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Signature stack
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              The tools I reach for first
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              These are the skills that show up most often in real projects,
              interview prep, and day-to-day delivery.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {FEATURED_STACK.map((skillName, i) => {
                const skillMeta = SKILL_META[skillName];
                const SkillIcon = skillMeta.icon;

                return (
                  <motion.div
                    key={skillName}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group rounded-2xl border border-border bg-background/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
                  >
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${skillMeta.accent} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <SkillIcon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {skillName}
                    </p>
                  </motion.div>
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
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Cloud-first thinking with practical deployment choices.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Clean version control habits and readable collaboration flow.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                AI tools used for speed, not as a substitute for judgment.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
