import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, GitBranch, Mail, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FLOATING_TECH, PROFILE, TYPING_ROLES } from "@/constants/portfolio";
import { useGitHubDashboard } from "@/hooks/use-github";

export function Hero() {
  const { data } = useGitHubDashboard();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Available for full-time SDE opportunities — let's connect!
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl"
        >
          <span className="font-mono text-foreground">{`> `}</span>
          <TypeAnimation
            sequence={TYPING_ROLES.flatMap((r) => [r, 1800])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-foreground font-medium"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground"
        >
          {PROFILE.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground glow-ring hover:opacity-90"
          >
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={PROFILE.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        {data && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-6 flex w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary">
              <Users className="h-3.5 w-3.5" />
              {data.profile.followers} followers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-accent">
              <GitBranch className="h-3.5 w-3.5" />
              {data.profile.public_repos} public repos
            </span>
          </motion.div>
        )}

        {/* floating tech badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {FLOATING_TECH.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
              className="animate-float rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
