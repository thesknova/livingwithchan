"use client";

import Image from "next/image";
import { useState } from "react";
import { SIDE_LABEL, type SoldPost } from "@/lib/sold";

/**
 * One sold home: the Instagram cover, with Chan's account of the sale sliding
 * in from the side. The photo is the proof; the story is why it matters, so
 * it's what the motion reveals.
 *
 * Opens on hover (pointer devices only; Tailwind v4 scopes hover to
 * `(hover: hover)`), on keyboard focus, and on tap, which toggles, since a
 * phone has no hover to take away again.
 */
export default function SoldCard({ post, priority }: { post: SoldPost; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  const kicker = [post.community, SIDE_LABEL[post.side], post.price].filter(Boolean).join("  ·  ");

  return (
    <article
      data-open={open}
      className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-primary shadow-sm"
    >
      <Image
        src={post.coverUrl}
        alt={`Sold: ${post.headline}${post.community ? `, ${post.community}` : ""}`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-[transform,filter] duration-700 ease-out
          group-hover:-translate-x-[14%] group-hover:scale-105 group-hover:brightness-75
          group-focus-within:-translate-x-[14%] group-focus-within:scale-105 group-focus-within:brightness-75
          group-data-[open=true]:-translate-x-[14%] group-data-[open=true]:scale-105 group-data-[open=true]:brightness-75
          motion-reduce:transition-none"
      />

      {/* Hint, until the story is showing. Top left, clear of the SOLD sash. */}
      <span
        aria-hidden
        className="absolute left-4 top-4 z-10 rounded-full bg-primary-dark/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-opacity duration-300
          group-hover:opacity-0 group-focus-within:opacity-0 group-data-[open=true]:opacity-0"
      >
        Read the story
      </span>

      {/* The story panel, sliding in from the right. */}
      <div
        className="absolute inset-y-0 right-0 z-10 flex w-[88%] translate-x-full flex-col justify-center border-l-[3px] border-accent bg-primary px-6 py-8 text-white shadow-[-24px_0_48px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-x-0 group-focus-within:translate-x-0 group-data-[open=true]:translate-x-0
          motion-reduce:transition-none sm:px-8"
      >
        <div
          className="translate-x-6 opacity-0 transition-[opacity,transform] delay-150 duration-500
            group-hover:translate-x-0 group-hover:opacity-100
            group-focus-within:translate-x-0 group-focus-within:opacity-100
            group-data-[open=true]:translate-x-0 group-data-[open=true]:opacity-100
            motion-reduce:transition-none"
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{kicker}</p>
          <h2 className="font-display text-2xl leading-tight mt-3">{post.headline}</h2>
          {post.story && (
            <blockquote className="mt-5">
              <span aria-hidden className="block font-display text-5xl leading-none text-accent h-6">
                &ldquo;
              </span>
              <p className="font-display text-[15px] leading-relaxed text-stone-200">{post.story}</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
                Chan Kawaguchi
              </footer>
            </blockquote>
          )}
        </div>
      </div>

      {/* The whole card is the control: tap to open or close, focus to open. */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${open ? "Hide" : "Read"} the story of ${post.headline}`}
        className="absolute inset-0 z-20 cursor-pointer rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </article>
  );
}
