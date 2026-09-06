// Every public form on the site posts here.
//
// Before this existed, only the contact form reached the CRM; the buyer,
// seller, assessment and buyer-guide forms went to Formspree, which meant the
// most valuable leads on the site (sellers) landed in an inbox with no
// pipeline, no status and no follow-up — and were capped by Formspree's
// free-tier submission limit.

export type LeadSource =
  | "contact_form"
  | "buyer_intake"
  | "seller_intake"
  | "buyer_segment"
  | "assessment"
  | "market_report"
  // Sent by the chat route directly rather than through submitLead, since that
  // capture happens server-side at the end of a conversation.
  | "ai_chat";

export interface LeadPayload {
  source: LeadSource;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  /** Free text shown in the CRM's notes column. */
  message?: string;
  /** Short summary of what they're after, shown as its own CRM column. */
  propertyInterest?: string;
}

// Email backstop. The CRM is the system of record, but it is one Supabase
// project away from silently swallowing every lead on the site — which is
// exactly what happened between roughly May and September 2026, when the
// project behind it disappeared and the contact form returned 500 on every
// submission. A lead is the most expensive thing this site produces; it should
// never depend on a single service being up.
const FORMSPREE_FALLBACK =
  process.env.NEXT_PUBLIC_LEAD_FALLBACK_URL || "https://formspree.io/f/xwvrdoyj";

async function postToCrm(payload: LeadPayload): Promise<boolean> {
  const base = process.env.NEXT_PUBLIC_CRM_INGEST_URL;
  if (!base) {
    // Missing env var in a deployed build would otherwise POST to
    // "undefined/api/leads/ingest" — a same-origin 404 that looks like a
    // server error rather than a misconfiguration.
    console.error("NEXT_PUBLIC_CRM_INGEST_URL is not set.");
    return false;
  }

  try {
    const res = await fetch(`${base}/api/leads/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_CRM_INGEST_KEY ?? "",
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function postToFallback(payload: LeadPayload): Promise<boolean> {
  const fullName =
    payload.name ??
    [payload.firstName, payload.lastName].filter(Boolean).join(" ") ??
    "Website visitor";

  try {
    const res = await fetch(FORMSPREE_FALLBACK, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `⚠️ Lead via backup (${payload.source}) — ${fullName}`,
        _replyto: payload.email || undefined,
        Notice:
          "The CRM did not accept this lead, so it was emailed instead. Add it manually and check the CRM.",
        Source: payload.source,
        Name: fullName,
        Email: payload.email || "—",
        Phone: payload.phone || "—",
        Interest: payload.propertyInterest || "—",
        Details: payload.message || "—",
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Deliver a lead. Resolves true if it reached Chan by *either* route.
 *
 * Tries the CRM first, and falls back to an email notification if that fails
 * for any reason (project down, key rotated, network). The visitor sees
 * success in both cases, because from their side the lead did get through.
 *
 * Never throws: a form's only job on failure is to tell the visitor to phone
 * instead, and an unhandled rejection in a submit handler would leave the
 * button stuck in its loading state.
 */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  if (await postToCrm(payload)) return true;

  console.warn("CRM ingest failed; falling back to email notification.");
  return postToFallback(payload);
}

/**
 * Fold a form's extra fields into the CRM's single notes column.
 *
 * The intake forms collect far more than the leads table has columns for
 * (timeline, budget, square footage, recent updates…). Rather than drop that
 * detail — it is the most useful part of the lead when Chan makes the first
 * call — it is rendered as readable "Label: value" lines. Empty values are
 * skipped so the note stays short enough to scan.
 */
export function detailsToNotes(
  details: Record<string, string | string[] | undefined>
): string {
  return Object.entries(details)
    .map(([label, value]) => [
      label,
      Array.isArray(value) ? value.join(", ") : value,
    ])
    .filter(([, value]) => value && value.trim() !== "")
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

/** Shared failure copy, so every form falls back to the same phone number. */
export const LEAD_ERROR_MESSAGE =
  "Something went wrong. Please try again or call 403-681-0107.";
