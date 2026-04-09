"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background video — poster shows while video loads */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <span className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Calgary Real Estate
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
          Find Your Dream Home in{" "}
          <span className="text-accent">Calgary</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-xl mb-10 leading-relaxed">
          Chan Kawaguchi, trusted REMAX agent helping Calgary families buy,
          sell, and invest with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/listings" size="lg">
            View Listings
          </Button>
          <Button href="/investors" variant="outline" size="lg" className="border-accent text-white bg-accent/20 hover:bg-accent hover:border-accent">
            Investor Hub
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Get in Touch
          </Button>
        </div>

        {/* Agent badge */}
        <div className="mt-14 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/40">
            <Image
              src="/chan-headshot.png"
              alt="Chan Kawaguchi"
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm leading-tight">
              Chan Kawaguchi
            </p>
            <p className="text-white/70 text-xs">REMAX Real Estate · Calgary, AB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
