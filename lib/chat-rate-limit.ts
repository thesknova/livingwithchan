/**
 * Daily spend guard for the AI chat responder.
 *
 * Counts chat requests per UTC day in Upstash Redis (atomic INCR) and reports
 * when the day's cap is exceeded, so a traffic spike or abuse can't run up a
 * surprise Anthropic bill. This is the app-level backstop *under* the hard
 * monthly limit you set in the Anthropic Console.
 *
 * Fail-open by design: if Upstash isn't configured or the call errors, requests
 * are allowed through — the guard never takes the widget down. The Console
 * spend limit remains the ultimate ceiling.
 *
 * Required env to activate (set once Upstash is connected):
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 * Optional:
 *   CHAT_DAILY_CAP   — max chat requests per day (default 400)
 */

const DEFAULT_CAP = 400;
const TTL_SECONDS = 60 * 60 * 36; // 36h — comfortably past midnight UTC

function todayKey(): string {
  return `chat:count:${new Date().toISOString().slice(0, 10)}`;
}

/**
 * Records one chat request and returns whether it's within today's cap.
 * Returns `{ allowed: true }` (fail-open) whenever the guard can't run.
 */
export async function checkDailyCap(): Promise<{ allowed: boolean; count?: number; cap: number }> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const cap = Number(process.env.CHAT_DAILY_CAP) || DEFAULT_CAP;

  // Not configured yet → allow (widget keeps working; Console limit still caps spend).
  if (!url || !token) return { allowed: true, cap };

  const key = todayKey();
  try {
    // Atomic pipeline: INCR the day's counter, then (re)set its TTL.
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, TTL_SECONDS],
      ]),
      // keep the guard snappy; if Redis is slow we fail open
      signal: AbortSignal.timeout(1500),
    });

    if (!res.ok) return { allowed: true, cap };

    const data = (await res.json()) as Array<{ result: number }>;
    const count = data?.[0]?.result ?? 0;
    return { allowed: count <= cap, count, cap };
  } catch {
    // Network error / timeout → fail open.
    return { allowed: true, cap };
  }
}
