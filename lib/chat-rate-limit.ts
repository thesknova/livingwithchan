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
 * Required env to activate (provided automatically by the Vercel Upstash/KV
 * integration; UPSTASH_REDIS_REST_* also accepted if wired manually):
 *   KV_REST_API_URL
 *   KV_REST_API_TOKEN
 * Optional:
 *   CHAT_DAILY_CAP   — max chat requests per day (default 400)
 *   CHAT_IP_LIMIT    — max chat requests per IP per 5 min (default 20)
 */

const DEFAULT_CAP = 400;
const TTL_SECONDS = 60 * 60 * 36; // 36h — comfortably past midnight UTC

const IP_WINDOW_SECONDS = 300; // 5 minutes
const DEFAULT_IP_LIMIT = 20; // ~4 messages/min sustained per IP

function todayKey(): string {
  return `chat:count:${new Date().toISOString().slice(0, 10)}`;
}

function upstash(): { url: string; token: string } | null {
  // Vercel's Upstash/KV integration injects KV_REST_API_*; fall back to the
  // native UPSTASH_REDIS_REST_* names if wired manually.
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

// Atomic INCR + EXPIRE via the Upstash REST pipeline. Returns the post-incr count,
// or null on any failure (caller fails open).
async function incrWithTtl(key: string, ttl: number): Promise<number | null> {
  const store = upstash();
  if (!store) return null;
  try {
    const res = await fetch(`${store.url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${store.token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, ttl],
      ]),
      signal: AbortSignal.timeout(1500),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{ result: number }>;
    return data?.[0]?.result ?? null;
  } catch {
    return null;
  }
}

/**
 * Per-IP rate limit over a rolling 5-minute window (fixed time buckets).
 * Fail-open when Upstash isn't configured or the IP is unknown.
 */
export async function checkIpRateLimit(
  ip: string | null
): Promise<{ allowed: boolean; count?: number; limit: number }> {
  const limit = Number(process.env.CHAT_IP_LIMIT) || DEFAULT_IP_LIMIT;
  if (!ip || !upstash()) return { allowed: true, limit };

  const bucket = Math.floor(Date.now() / 1000 / IP_WINDOW_SECONDS);
  const count = await incrWithTtl(`chat:ip:${ip}:${bucket}`, IP_WINDOW_SECONDS * 2);
  if (count === null) return { allowed: true, limit }; // fail open
  return { allowed: count <= limit, count, limit };
}

/**
 * Records one chat request and returns whether it's within today's cap.
 * Returns `{ allowed: true }` (fail-open) whenever the guard can't run.
 */
export async function checkDailyCap(): Promise<{ allowed: boolean; count?: number; cap: number }> {
  const cap = Number(process.env.CHAT_DAILY_CAP) || DEFAULT_CAP;
  // Not configured yet → allow (widget keeps working; Console limit still caps spend).
  if (!upstash()) return { allowed: true, cap };

  const count = await incrWithTtl(todayKey(), TTL_SECONDS);
  if (count === null) return { allowed: true, cap }; // fail open
  return { allowed: count <= cap, count, cap };
}
