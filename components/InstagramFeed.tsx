"use client";

import Script from "next/script";
import { useEffect } from "react";

interface Props {
  posts: string[];
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed({ posts }: Props) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <div className={`grid gap-6 justify-items-center ${posts.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-[540px] mx-auto"}`}>
      {posts.map((url) => (
        <blockquote
          key={url}
          className="instagram-media w-full"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          data-instgrm-captioned
          style={{ minWidth: "280px", maxWidth: "540px", margin: "0 auto" }}
        />
      ))}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </div>
  );
}
