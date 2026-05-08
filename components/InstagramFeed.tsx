"use client";

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
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`grid gap-6 justify-items-center ${
        posts.length > 1
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "max-w-[540px] mx-auto"
      }`}
    >
      {posts.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "0 auto",
            maxWidth: 540,
            minWidth: 280,
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        />
      ))}
    </div>
  );
}
