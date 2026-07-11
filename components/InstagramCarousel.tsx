"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface Props {
  posts: string[];
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const ROTATE_MS = 6000;

const ArrowIcon = ({ flip }: { flip?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={flip ? "rotate-180" : undefined}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function InstagramCarousel({ posts }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const inViewRef = useRef(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = prefersReducedMotion();
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const n = ((i % posts.length) + posts.length) % posts.length;
      const slide = track.children[n] as HTMLElement | undefined;
      if (!slide) return;
      track.scrollTo({
        left: slide.offsetLeft - track.offsetLeft,
        behavior: reducedRef.current ? "auto" : "smooth",
      });
      setIndex(n);
    },
    [posts.length]
  );

  // Keep the active dot in sync when visitors swipe manually.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const pos = track.scrollLeft;
        let nearest = 0;
        let min = Infinity;
        slides.forEach((s, i) => {
          const d = Math.abs(s.offsetLeft - track.offsetLeft - pos);
          if (d < min) {
            min = d;
            nearest = i;
          }
        });
        setIndex(nearest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Only rotate while the carousel is actually on screen.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    io.observe(track);
    return () => io.disconnect();
  }, []);

  // Auto-rotate: paused on hover/touch/focus, offscreen, hidden tab, or reduced motion.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (reducedRef.current || !inViewRef.current || document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      const slides = Array.from(track.children) as HTMLElement[];
      const pos = track.scrollLeft;
      let nearest = 0;
      let min = Infinity;
      slides.forEach((s, i) => {
        const d = Math.abs(s.offsetLeft - track.offsetLeft - pos);
        if (d < min) {
          min = d;
          nearest = i;
        }
      });
      const next = (nearest + 1) % slides.length;
      const slide = slides[next];
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
      setIndex(next);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Chan's Instagram posts"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory motion-safe:scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
        }}
      >
        {posts.map((url) => (
          <div key={url} className="snap-center shrink-0 w-[min(85vw,340px)]">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: 3,
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "0 auto",
                maxWidth: 540,
                minWidth: 280,
                padding: 0,
                width: "calc(100% - 2px)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous post"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-accent text-accent transition-colors duration-200 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <ArrowIcon flip />
        </button>

        <div className="flex items-center gap-2.5" aria-hidden="true">
          {posts.map((url, i) => (
            <button
              key={url}
              tabIndex={-1}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "w-2 bg-neutral-mid hover:bg-accent/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next post"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-accent text-accent transition-colors duration-200 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <ArrowIcon />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Post {index + 1} of {posts.length}
      </p>
    </div>
  );
}
