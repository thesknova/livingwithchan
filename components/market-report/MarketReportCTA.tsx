"use client";

import { useState } from "react";
import { submitLead, LEAD_ERROR_MESSAGE } from "@/lib/crm";
import { trackLead } from "@/lib/analytics";

interface Props {
  /**
   * The report being read, e.g. "September 2026". Included in the CRM note so
   * Chan can see which month's page produced the lead.
   */
  reportLabel?: string;
}

/**
 * Email capture for the monthly market report.
 *
 * The page previously ended in a "Talk to Chan" link to /contact. That asks a
 * reader who came for price data to commit to a conversation with an agent —
 * the highest-friction step on the site — so almost nobody took it. This asks
 * for an email instead, which is the natural next step for someone already
 * reading monthly statistics, and turns a one-off search visit into a
 * subscriber Chan can reach every month without paying for the click again.
 */
export default function MarketReportCTA({ reportLabel }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const ok = await submitLead({
      source: "market_report",
      name: name.trim(),
      email: email.trim(),
      propertyInterest: "Monthly market report subscriber",
      message: reportLabel
        ? `Subscribed from the ${reportLabel} market report.`
        : "Subscribed from the market reports page.",
    });

    if (ok) {
      trackLead("market_report");
      setSubmitted(true);
    } else {
      setError(LEAD_ERROR_MESSAGE);
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-primary-dark rounded-2xl p-8 sm:p-10 text-white">
        <h2 className="font-display text-2xl mb-2">You&rsquo;re on the list.</h2>
        <p className="text-stone-400 text-sm max-w-lg">
          Chan will send you next month&rsquo;s Calgary numbers as soon as CREB
          publishes them. In the meantime, reply to that email any time with a
          question about your neighbourhood.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-primary-dark rounded-2xl p-8 sm:p-10 text-white">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="font-display text-2xl mb-2">
            Get next month&rsquo;s report first
          </h2>
          <p className="text-stone-400 text-sm">
            Calgary benchmark prices, inventory and months of supply for all
            eight districts — in your inbox the morning CREB releases them. One
            email a month, no spam, unsubscribe any time.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="mr-name" className="sr-only">
              First name
            </label>
            <input
              id="mr-name"
              name="name"
              type="text"
              required
              autoComplete="given-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              className="flex-1 min-w-0 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <label htmlFor="mr-email" className="sr-only">
              Email address
            </label>
            <input
              id="mr-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-[1.4] min-w-0 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            {loading ? "Sending…" : "Send me the report"}
          </button>

          {error && (
            <p role="alert" className="text-sm text-red-300">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
