"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      // Opt-out of smooth scrolling
      return;
    }

    // 2. Initialize Lenis after first paint to avoid blocking FCP
    const timer = setTimeout(() => {
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      (window as any).lenis = lenis;

      // 3. Set up rAF loop
      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
      
      (lenisRef.current as any)._rafId = rafId;
    }, 100);

    // 4. Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (lenisRef.current) {
        if ((lenisRef.current as any)._rafId) cancelAnimationFrame((lenisRef.current as any)._rafId);
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
