"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 px-4 py-2 rounded-full text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
    >
      🖨 Print / PDF
    </button>
  );
}
