"use client";

import { useEffect } from "react";

export default function NWListings() {
  useEffect(() => {
    const RN_SCRIPT = "https://s.realtyninja.com/static/js/prod/embed.min.js";
    if (document.querySelector(`script[src="${RN_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = RN_SCRIPT;
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="rn-embed"
      data-name="shinkawaguchi"
      data-path="nw-property-search"
      style={{ minHeight: "95vh" }}
    />
  );
}
