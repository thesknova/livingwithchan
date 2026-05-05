"use client";

import { useState, useMemo } from "react";
import type { CalgaryEvent, EventCategory } from "@/lib/events";

const CATEGORIES: { value: EventCategory; label: string }[] = [
  { value: "All", label: "All Events" },
  { value: "Concerts", label: "Concerts" },
  { value: "Sports", label: "Sports" },
  { value: "Arts & Theatre", label: "Arts & Theatre" },
  { value: "Family", label: "Family" },
  { value: "Festivals", label: "Festivals" },
  { value: "Food & Drink", label: "Food & Drink" },
  { value: "Other", label: "Other" },
];

const CATEGORY_BADGE: Record<EventCategory, string> = {
  All: "bg-primary text-white",
  Concerts: "bg-purple-600 text-white",
  Sports: "bg-red-600 text-white",
  "Arts & Theatre": "bg-blue-600 text-white",
  Family: "bg-emerald-600 text-white",
  Festivals: "bg-amber-500 text-white",
  "Food & Drink": "bg-orange-600 text-white",
  Other: "bg-gray-500 text-white",
};

const FILTER_ACTIVE: Record<EventCategory, string> = {
  All: "bg-primary text-white border-primary",
  Concerts: "bg-purple-600 text-white border-purple-600",
  Sports: "bg-red-600 text-white border-red-600",
  "Arts & Theatre": "bg-blue-600 text-white border-blue-600",
  Family: "bg-emerald-600 text-white border-emerald-600",
  Festivals: "bg-amber-500 text-white border-amber-500",
  "Food & Drink": "bg-orange-600 text-white border-orange-600",
  Other: "bg-gray-500 text-white border-gray-500",
};

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatTime(time?: string): string {
  if (!time) return "Time TBA";
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${period}`;
}

function formatPrice(event: CalgaryEvent): string {
  if (event.isFree || event.priceMin === 0) return "Free";
  if (event.priceMin != null) return `From $${Math.round(event.priceMin)} CAD`;
  return "";
}

function monthKey(dateStr: string) {
  return dateStr.slice(0, 7);
}

function monthLabel(dateStr: string) {
  const [y, m] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-CA", {
    month: "long",
    year: "numeric",
  });
}

interface Props {
  events: CalgaryEvent[];
}

export default function CalgaryEventsClient({ events }: Props) {
  const [category, setCategory] = useState<EventCategory>("All");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const months = useMemo(() => {
    const seen = new Set<string>();
    const result: { key: string; label: string }[] = [];
    for (const e of events) {
      const k = monthKey(e.date);
      if (!seen.has(k)) {
        seen.add(k);
        result.push({ key: k, label: monthLabel(e.date) });
      }
    }
    return result;
  }, [events]);

  const activeCategories = useMemo(() => {
    const withEvents = new Set(events.map((e) => e.category));
    return CATEGORIES.filter((c) => c.value === "All" || withEvents.has(c.value));
  }, [events]);

  const grouped = useMemo(() => {
    const filtered = events.filter((e) => {
      if (category !== "All" && e.category !== category) return false;
      if (selectedMonth !== "all" && !e.date.startsWith(selectedMonth)) return false;
      return true;
    });
    const map = new Map<string, CalgaryEvent[]>();
    for (const e of filtered) {
      const list = map.get(e.date) ?? [];
      list.push(e);
      map.set(e.date, list);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [events, category, selectedMonth]);

  const hasEvents = events.length > 0;

  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Resources
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
            Things to Do in Calgary
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed">
            Concerts, sports, festivals, food events and more — happening across
            Calgary over the next 60 days.
          </p>
          {hasEvents && (
            <p className="text-stone-600 text-xs mt-3">
              {events.length} events · Updated weekly
            </p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {!hasEvents ? (
          <EmptyState />
        ) : (
          <>
            {/* Filters */}
            <div className="mb-8 space-y-3">
              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {activeCategories.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setCategory(value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                      category === value
                        ? FILTER_ACTIVE[value]
                        : "bg-white border-neutral-mid text-gray-600 hover:border-accent hover:text-accent"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Month tabs */}
              {months.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedMonth("all")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                      selectedMonth === "all"
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-neutral-mid text-gray-500 hover:border-primary hover:text-primary"
                    }`}
                  >
                    All months
                  </button>
                  {months.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setSelectedMonth(key)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                        selectedMonth === key
                          ? "bg-primary text-white border-primary"
                          : "bg-white border-neutral-mid text-gray-500 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Event list */}
            {grouped.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-sm text-gray-400">
                  No events match the selected filters.
                </p>
                <button
                  onClick={() => {
                    setCategory("All");
                    setSelectedMonth("all");
                  }}
                  className="mt-3 text-sm text-accent hover:underline font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map(([date, dayEvents]) => (
                  <div key={date}>
                    {/* Date heading */}
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                        {formatDate(date)}
                      </h2>
                      <div className="flex-1 border-b border-neutral-mid" />
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {dayEvents.length}{" "}
                        {dayEvents.length === 1 ? "event" : "events"}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {dayEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Data attribution */}
            <p className="text-xs text-gray-400 text-center mt-12">
              Event data sourced from Ticketmaster. Listings are updated weekly.
              Prices and availability may change.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: CalgaryEvent }) {
  const price = formatPrice(event);

  return (
    <a
      href={event.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 bg-white rounded-xl border border-neutral-mid p-4 hover:border-accent hover:shadow-sm transition-all group"
    >
      {/* Thumbnail */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-neutral-mid flex-shrink-0">
        {event.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.imageUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 mb-1.5 flex-wrap">
          <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors leading-snug flex-1 min-w-0">
            {event.name}
          </p>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap ${CATEGORY_BADGE[event.category]}`}
          >
            {event.category}
          </span>
        </div>
        <p className="text-xs text-gray-500 truncate">{event.venue}</p>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <span className="text-xs text-gray-400">{formatTime(event.time)}</span>
          {price && (
            <span
              className={`text-xs font-semibold ${
                price === "Free" ? "text-emerald-600" : "text-gray-600"
              }`}
            >
              {price}
            </span>
          )}
        </div>
      </div>

      {/* CTA arrow */}
      <div className="flex items-center flex-shrink-0">
        <span className="text-sm text-accent font-bold group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="py-16 flex items-center justify-center">
      <div className="bg-white rounded-2xl border border-neutral-mid p-10 max-w-md w-full text-center">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h2 className="text-base font-bold text-primary mb-2">
          Events coming soon
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Live event data is powered by the Ticketmaster API. Add a{" "}
          <code className="bg-neutral-light px-1.5 py-0.5 rounded text-xs font-mono">
            TICKETMASTER_API_KEY
          </code>{" "}
          environment variable in Vercel to enable this page.
        </p>
      </div>
    </div>
  );
}
