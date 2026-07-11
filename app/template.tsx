"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, EASE, prefersReducedMotion } from "@/lib/motion";

/**
 * Route transition: every navigation re-mounts this template, so each page
 * arrives with a quiet rise-and-fade. clearProps removes the transform once
 * done so sticky/fixed descendants are unaffected.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // New page, new layout — let ScrollTrigger re-measure after paint.
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    if (prefersReducedMotion()) return () => cancelAnimationFrame(raf);

    const tween = gsap.fromTo(
      ref.current,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: EASE,
        clearProps: "opacity,transform",
      }
    );

    return () => {
      cancelAnimationFrame(raf);
      tween.kill();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
