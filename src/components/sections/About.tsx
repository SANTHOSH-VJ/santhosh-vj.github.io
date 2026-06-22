import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const CARDS = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "B.E in Computer Science with a specialization in Cloud Computing at R.M.D. Engineering College. Strong fundamentals in DSA, Problem Solving, and AWS Cloud.",
  },
  {
    icon: Briefcase,
    title: "Current Internship",
    body: "Software Intern at Ziffity — building tooling and pipelines that accelerate internal engineering workflows.",
  },
  {
    icon: Rocket,
    title: "Currently Learning",
    body: "Event-driven serverless on AWS, system design at scale, and production-grade observability.",
  },
  {
    icon: Target,
    title: "Career Goal",
    body: "Join a top-tier engineering org as a Software Engineer focused on cloud infrastructure and developer experience.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineer who ships, learns, repeats."
          description="A snapshot of where I am, what I'm building, and where I'm headed."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
