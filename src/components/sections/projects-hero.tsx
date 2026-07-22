"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "motion/react";

export function ProjectsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Create a motion value for progress (0 to 1)
  const progressMV = useMotionValue(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // The Lenis instance exposed globally by the provider
    const lenis = (window as any).lenis;

    const onScroll = () => {
      const heroHeight = section.offsetHeight || window.innerHeight;
      const nextEl = section.nextElementSibling as HTMLElement | null;

      let raw = 0;
      if (nextEl) {
        // Measure how far the next card has scrolled up over the hero directly
        const nextTop = nextEl.getBoundingClientRect().top;
        raw = 1 - nextTop / heroHeight;
      }

      progressMV.set(Math.min(Math.max(raw, 0), 1));
    };

    if (lenis) {
      // Subscribe to Lenis for exact synchronized frame updates
      lenis.on("scroll", onScroll);
    } else {
      // Fallback if prefers-reduced-motion disabled Lenis
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    // Run once initially to set correct state
    onScroll();

    return () => {
      if (lenis) {
        lenis.off("scroll", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, [progressMV]);

  // Derive styles efficiently without triggering React re-renders
  const textTranslateY = useTransform(progressMV, (p) => p * -140);
  const textScale = useTransform(progressMV, (p) => 1 - p * 0.06);
  const textOpacity = useTransform(progressMV, (p) => 1 - Math.min(p / 0.55, 1));

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 h-[80svh] md:h-[100svh] overflow-hidden z-0 flex items-center justify-center"
    >
      {/* Background image stays fixed in place and full brightness */}
      <img
        src="https://www.devoteam.com/wp-content/uploads/2024/09/Amplify-cloud-landscape.jpg"
        alt="Cloud & DevOps Projects"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Content — parallax layer, slower + fades before the card covers it */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 max-w-4xl mx-auto text-center will-change-transform"
        style={{
          y: textTranslateY,
          scale: textScale,
          opacity: textOpacity,
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[#111] text-4xl md:text-6xl tracking-tight leading-tight">
            Real projects built in the cloud.
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#333] font-medium text-sm md:text-base max-w-lg leading-relaxed">
            A collection of cloud, DevOps, and full-stack projects showcasing scalable architectures, automation workflows, and practical engineering solutions.
          </p>
        </div>

      </motion.div>
    </section>
  );
}