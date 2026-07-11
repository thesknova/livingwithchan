"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import { gsap, EASE } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "pop";
  delay?: number;
  stagger?: boolean;
  threshold?: number;
};

/**
 * GSAP-powered scroll reveal. The hidden initial state lives in CSS
 * (.reveal / .reveal-stagger in globals.css) so content never flashes
 * before hydration; GSAP animates it in when the element scrolls into view.
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  stagger = false,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const targets = stagger ? Array.from(el.children) : el;
      if (stagger) {
        // Children carry the hidden state; the wrapper itself shows immediately.
        gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
        gsap.set(targets, { opacity: 0, y: 30 });
      }
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: EASE,
        delay: delay / 1000,
        stagger: stagger ? 0.09 : 0,
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: `top ${Math.round((1 - threshold) * 100)}%`,
          once: true,
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(stagger ? [el, ...Array.from(el.children)] : el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      });
    });

    return () => mm.revert();
  }, [delay, threshold, stagger]);

  const dirClass =
    direction === "left"  ? "reveal-left"  :
    direction === "right" ? "reveal-right" :
    direction === "pop"   ? "reveal-pop"   : "";

  const baseClass = stagger ? "reveal-stagger" : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
