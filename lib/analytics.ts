// Thin wrapper around the GA4 gtag snippet loaded in app/layout.tsx.
// Event names follow GA4 recommended events where one exists
// (generate_lead) and stable custom names elsewhere.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadMethod =
  | "contact_form"
  | "buyer_intake"
  | "seller_intake"
  | "buyer_segment"
  | "assessment"
  | "market_report"
  | "ai_chat";

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export function trackLead(method: LeadMethod) {
  trackEvent("generate_lead", { method });
}
