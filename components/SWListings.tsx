"use client";

import { useEffect } from "react";

export default function SWListings() {
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
      data-path="sw-property-search"
      style={{ minHeight: "95vh" }}
    />
  );
}
