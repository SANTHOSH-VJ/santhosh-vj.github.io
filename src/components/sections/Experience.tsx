import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Hands-on roles where I've shipped real impact."
        />
        <div className="relative space-y-6 pl-6 sm:pl-8">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-3" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="absolute -left-[26px] top-7 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background sm:-left-[30px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {e.role} <span className="text-muted-foreground">· {e.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-primary">▹</span>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
