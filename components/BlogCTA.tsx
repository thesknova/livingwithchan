"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

interface BlogCTAProps {
  /** Small uppercase label above the headline */
  eyebrow?: string;
  /** Question or offer that matches what the reader came for */
  heading: string;
  /** One or two sentences of supporting detail */
  body: string;
  /** Where the primary button sends the reader */
  href: string;
  /** Primary button label */
  action: string;
  /**
   * Stable identifier for this placement, e.g. "zoning-mid".
   * Sent to GA4 so each CTA can be compared post by post.
   */
  id: string;
  /** Show the call link alongside the primary button. Defaults to true. */
  showPhone?: boolean;
}

/**
 * Mid-article call to action for blog posts.
 *
 * Deliberately lighter than the dark <ContentCTA> block used at the bottom of
 * the search pages: this one interrupts a long read, so it has to read like a
 * helpful aside rather than an ad, or people scroll straight past it.
 */
export default function BlogCTA({
  eyebrow = "Ask Chan",
  heading,
  body,
  href,
  action,
  id,
  showPhone = true,
}: BlogCTAProps) {
  function report(destination: string) {
    trackEvent("blog_cta_click", {
      cta_id: id,
      destination,
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  }

  return (
    <aside className="my-12 rounded-2xl border border-neutral-mid border-l-4 border-l-accent bg-white p-6 sm:p-8 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h3 className="mt-2 mb-3 text-xl sm:text-2xl font-bold text-primary leading-snug">
        {heading}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">{body}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Link
          href={href}
          onClick={() => report(href)}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          {action}
        </Link>
        {showPhone && (
          <a
            href="tel:4036810107"
            onClick={() => report("tel:4036810107")}
            className="inline-flex items-center justify-center rounded-full border border-neutral-mid px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-neutral-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Or call 403-681-0107
          </a>
        )}
      </div>
    </aside>
  );
}
