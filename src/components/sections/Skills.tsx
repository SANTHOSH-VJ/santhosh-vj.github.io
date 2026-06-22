import { motion } from "framer-motion";
import { SKILLS } from "@/constants/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with"
          description="Languages, clouds, and tools I reach for daily."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{cat.category}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {cat.items.length} skills
                </span>
              </div>
              <div className="space-y-4">
                {cat.items.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
