"use client";

import { useEffect } from "react";

export default function FeaturedListings() {
  useEffect(() => {
    // Clear any RealtyNinja state persisted from a previous expanded listing view.
    // The embed stores its UI state in sessionStorage/localStorage under "rn" keys,
    // and may also reflect state in the URL hash — wiping these before the script
    // loads ensures it always starts at the default grid view.
    try {
      Object.keys(sessionStorage)
        .filter((k) => k.toLowerCase().startsWith("rn"))
        .forEach((k) => sessionStorage.removeItem(k));
      Object.keys(localStorage)
        .filter((k) => k.toLowerCase().startsWith("rn"))
        .forEach((k) => localStorage.removeItem(k));
    } catch (_) {
      // Storage may be unavailable in some privacy modes — safe to ignore.
    }
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const RN_SCRIPT = "https://s.realtyninja.com/static/js/prod/embed.min.js";
    // Remove any stale script tag (matches on base URL prefix).
    document.querySelector(`script[src^="${RN_SCRIPT}"]`)?.remove();
    const script = document.createElement("script");
    // Cache-bust so the browser re-executes the module instead of serving
    // from the module map (which would skip DOM scanning).
    script.src = `${RN_SCRIPT}?t=${Date.now()}`;
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-neutral-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Browse Properties
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            Featured Listings
          </h2>
        </div>

        <div
          className="rn-embed"
          data-name="shinkawaguchi"
          data-path="featured-properties"
          style={{ minHeight: "95vh" }}
        />
      </div>
    </section>
  );
}
