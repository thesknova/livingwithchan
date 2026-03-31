"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FloatingSidebar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-px transition-transform duration-500 ease-in-out hidden md:flex ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Call */}
      <a
        href="tel:4036810107"
        className="group flex items-center gap-2 bg-primary text-white pl-3 pr-4 py-3 rounded-l-xl shadow-lg hover:bg-accent transition-colors duration-200"
        aria-label="Call Chan"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="flex-shrink-0"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap writing-mode-vertical">
          403-681-0107
        </span>
      </a>

      {/* Message */}
      <Link
        href="/contact"
        className="group flex items-center gap-2 bg-accent text-white pl-3 pr-4 py-3 rounded-l-xl shadow-lg hover:bg-primary transition-colors duration-200"
        aria-label="Contact Chan"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="flex-shrink-0"
        >
          <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6V10h12v2zm0-4H6V6h12v2z" />
        </svg>
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          Message Chan
        </span>
      </Link>
    </div>
  );
}
