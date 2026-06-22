import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = NAV_LINKS.map((l) => {
        const el = document.getElementById(l.id);
        return { id: l.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "glass h-14 shadow-lg"
            : "h-16 bg-transparent border border-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm text-primary-foreground">
            SV
          </span>
          <span className="hidden sm:block">Santhosh<span className="text-primary">.</span></span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "relative rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                active === l.id && "text-foreground"
              )}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon" asChild>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button size="sm" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
            <a href={PROFILE.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />Resume
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 rounded-2xl glass p-4 lg:hidden"
        >
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground" asChild>
              <a href={PROFILE.resumeUrl} download><Download className="mr-2 h-4 w-4" />Resume</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
