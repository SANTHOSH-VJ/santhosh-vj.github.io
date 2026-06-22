import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Production-style projects with real architecture decisions."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const open = openIdx === i;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
                  {p.image ? (
                    <>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <span className="inline-flex rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                          {p.tech[0]}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                          {p.tech[0]}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-lg border border-border bg-background/40 p-4">
                      <p className="mb-2 font-mono text-xs uppercase text-accent">Features</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="text-primary">▹</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      asChild
                    >
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="ml-auto"
                    >
                      {open ? "Less" : "Read more"}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-3.5 w-3.5 transition-transform",
                          open && "rotate-180",
                        )}
                      />
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
