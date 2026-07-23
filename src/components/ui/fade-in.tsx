"use client";

import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down" | "none";
}

export function FadeIn({ children, delay = 0, direction = "none", className, ...props }: FadeInProps) {
  const directions = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    none: { x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const whileInView = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
