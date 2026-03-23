"use client";

import { useEffect } from "react";

export default function NWListings() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.realtyninja.com/static/js/prod/embed.min.js";
    script.type = "module";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
