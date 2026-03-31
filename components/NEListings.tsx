"use client";

import { useEffect } from "react";

export default function NEListings() {
  useEffect(() => {
    const RN_SCRIPT = "https://s.realtyninja.com/static/js/prod/embed.min.js";
    document.querySelector(`script[src^="${RN_SCRIPT}"]`)?.remove();
    const script = document.createElement("script");
    script.src = `${RN_SCRIPT}?t=${Date.now()}`;
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="rn-embed"
      data-name="shinkawaguchi"
      data-path="ne-property-search"
      style={{ minHeight: "95vh" }}
    />
  );
}
