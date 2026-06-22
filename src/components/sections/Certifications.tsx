import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/constants/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certifications" title="Verified credentials" />
        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background/60 text-primary">
                  {c.badgeUrl && c.badgeUrl !== "#" ? (
                    <img
                      src={c.badgeUrl}
                      alt={`${c.name} badge`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Award className="h-6 w-6" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      <CheckCircle2 className="h-3 w-3" /> Verified
                    </span>
                    <Button size="sm" variant="outline" className="ml-auto" asChild>
                      <a href={c.credentialUrl ?? "#"} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Credential
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
