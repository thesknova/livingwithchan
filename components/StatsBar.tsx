"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/motion";

const stats = [
  { value: 150, suffix: "+", label: "homes sold in Calgary" },
  { value: 10, suffix: "+", label: "years of local expertise" },
  { value: 98, suffix: "%", label: "client satisfaction" },
];

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((numEl) => {
        const target = Number(numEl.dataset.count);
        const proxy = { v: 0 };
        gsap.to(proxy, {
          v: target,
          duration: 1.8,
          ease: "power3.out",
          onStart: () => {
            numEl.textContent = "0";
          },
          onUpdate: () => {
            numEl.textContent = String(Math.round(proxy.v));
          },
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <ul className="flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-center sm:gap-0">
          {stats.map((stat, i) => (
            <li key={stat.label} className="flex items-baseline sm:items-center">
              {i > 0 && (
                <span
                  className="mx-10 hidden h-8 w-px flex-shrink-0 bg-white/15 sm:block"
                  aria-hidden="true"
                />
              )}
              <span className="flex items-baseline gap-3">
                <span className="font-display text-4xl leading-none text-white sm:text-5xl">
                  <span data-count={stat.value}>{stat.value}</span>
                  <span className="text-accent">{stat.suffix}</span>
                </span>
                <span className="max-w-[9rem] text-sm leading-snug text-stone-400">
                  {stat.label}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
