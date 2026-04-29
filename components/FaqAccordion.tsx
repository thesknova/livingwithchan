"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-neutral-mid overflow-hidden">
          <button
            type="button"
            id={`faq-btn-${i}`}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-sm font-semibold text-primary">{item.q}</span>
            <svg
              className={`w-4 h-4 flex-shrink-0 text-accent transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            className={`px-6 pb-5 ${open === i ? "" : "hidden"}`}
          >
            <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
