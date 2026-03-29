"use client";

import { useEffect } from "react";

export default function SWListings() {
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
      data-path="sw-property-search"
      style={{ minHeight: "95vh" }}
    />
  );
}
