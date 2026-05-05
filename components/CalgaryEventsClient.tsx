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

const BADGE: Record<EventCategory, string> = {
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

function formatDateRange(date: string, endDate?: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  const opts: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };

  if (!endDate || endDate === date) {
    return start.toLocaleDateString("en-CA", { ...opts, weekday: "short" });
  }

  const [ey, em, ed] = endDate.split("-").map(Number);
  const end = new Date(ey, em - 1, ed);

  if (m === em) {
    // Same month: "May 8 – 17"
    return `${start.toLocaleDateString("en-CA", { month: "long", day: "numeric" })} – ${ed}`;
  }
  // Cross-month: "May 9 – June 7"
  return `${start.toLocaleDateString("en-CA", opts)} – ${end.toLocaleDateString("en-CA", opts)}`;
}

function formatHeadingDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function monthKey(date: string) { return date.slice(0, 7); }
function monthLabel(date: string) {
  const [y, m] = date.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-CA", { month: "long", year: "numeric" });
}

interface Props { events: CalgaryEvent[] }

export default function CalgaryEventsClient({ events }: Props) {
  const [category, setCategory] = useState<EventCategory>("All");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const months = useMemo(() => {
    const seen = new Set<string>();
    return events.reduce<{ key: string; label: string }[]>((acc, e) => {
      const k = monthKey(e.date);
      if (!seen.has(k)) { seen.add(k); acc.push({ key: k, label: monthLabel(e.date) }); }
      return acc;
    }, []);
  }, [events]);

  const activeCategories = useMemo(() => {
    const present = new Set(events.map((e) => e.category));
    return CATEGORIES.filter((c) => c.value === "All" || present.has(c.value));
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

  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Resources
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
            Things to Do in Calgary
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed">
            Concerts, sports, festivals, food events and more — curated from around the city for the next 60 days.
          </p>
          {events.length > 0 && (
            <p className="text-stone-600 text-xs mt-3">
              {events.length} events · Updated weekly
            </p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {events.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Filters */}
            <div className="mb-8 space-y-3">
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

            {/* Events */}
            {grouped.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-sm text-gray-400">No events match the selected filters.</p>
                <button
                  onClick={() => { setCategory("All"); setSelectedMonth("all"); }}
                  className="mt-3 text-sm text-accent hover:underline font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map(([date, dayEvents]) => (
                  <div key={date}>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                        {formatHeadingDate(date)}
                      </h2>
                      <div className="flex-1 border-b border-neutral-mid" />
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {dayEvents.length} {dayEvents.length === 1 ? "event" : "events"}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {dayEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-xs text-gray-400 text-center mt-12">
              Events curated from{" "}
              <a
                href="https://www.avenuecalgary.com/things-to-do/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Avenue Calgary
              </a>
              . Updated weekly. Dates subject to change — confirm with the event organiser.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: CalgaryEvent }) {
  const dateRange = formatDateRange(event.date, event.endDate);

  return (
    <a
      href={event.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 bg-white rounded-xl border border-neutral-mid p-5 hover:border-accent hover:shadow-sm transition-all group"
    >
      {/* Image */}
      {event.imageUrl && (
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-neutral-mid flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.imageUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 mb-2 flex-wrap">
          <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors leading-snug flex-1 min-w-0">
            {event.name}
          </p>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${BADGE[event.category]}`}>
            {event.category}
          </span>
        </div>
        <p className="text-xs font-semibold text-accent mb-1.5">{dateRange}</p>
        {event.description && (
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {event.description}
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center flex-shrink-0 pl-2">
        <span className="text-sm text-accent font-bold group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="py-16 flex justify-center">
      <div className="bg-white rounded-2xl border border-neutral-mid p-10 max-w-md w-full text-center">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-base font-bold text-primary mb-2">No events found</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Events are pulled from Avenue Calgary&apos;s monthly guide. Check back soon or visit{" "}
          <a href="https://www.avenuecalgary.com/things-to-do/" target="_blank" rel="noopener noreferrer"
            className="text-accent hover:underline">
            avenuecalgary.com
          </a>{" "}
          directly.
        </p>
      </div>
    </div>
  );
}
