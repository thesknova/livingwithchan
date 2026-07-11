"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Global listener for tel:/mailto: clicks so every phone number and email
 * link on the site fires a GA4 event without per-component wiring.
 */
export default function ConversionTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const anchor = target?.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      trackEvent(href.startsWith("tel:") ? "click_to_call" : "click_to_email", {
        page_path: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
