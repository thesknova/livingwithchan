"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const PROPERTY_TYPES = [
  "Detached Home",
  "Semi-Detached / Duplex",
  "Townhouse",
  "Condo / Apartment",
  "Acreage / Rural Property",
  "Other",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "6–12 months",
  "Just exploring for now",
];

const REASONS = [
  "Upsizing",
  "Downsizing",
  "Relocating",
  "Investment / Rental Property",
  "Divorce / Estate",
  "Financial reasons",
  "Prefer not to say",
];

const UPDATES = [
  "Kitchen renovation",
  "Bathroom renovation",
  "New roof",
  "New windows",
  "New furnace / HVAC",
  "Finished basement",
  "New flooring",
  "Fresh paint throughout",
  "Landscaping / curb appeal",
  "No major updates",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  yearBuilt: string;
  timeline: string;
  reason: string;
  updates: string[];
  priceExpectation: string;
  additionalNotes: string;
}

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  sqft: "",
  yearBuilt: "",
  timeline: "",
  reason: "",
  updates: [],
  priceExpectation: "",
  additionalNotes: "",
};

const inputClass =
  "w-full rounded-lg border border-neutral-mid px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent";

const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

function ToggleChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`px-3 py-2.5 min-h-[44px] rounded-full text-sm font-medium border transition-colors ${
        selected
          ? "bg-accent text-white border-accent"
          : "bg-white text-gray-700 border-neutral-mid hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );
}

export default function SellerIntakeForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleUpdate(item: string) {
    setForm((prev) => ({
      ...prev,
      updates: prev.updates.includes(item)
        ? prev.updates.filter((u) => u !== item)
        : [...prev.updates, item],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xwvrdoyj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Seller Inquiry — ${form.address || form.firstName + " " + form.lastName}`,
          "First Name": form.firstName,
          "Last Name": form.lastName,
          Email: form.email,
          Phone: form.phone || "Not provided",
          "Property Address": form.address,
          "Property Type": form.propertyType,
          Bedrooms: form.bedrooms,
          Bathrooms: form.bathrooms,
          "Square Footage": form.sqft || "Not provided",
          "Year Built": form.yearBuilt || "Not provided",
          "Selling Timeline": form.timeline,
          "Reason for Selling": form.reason || "Not provided",
          "Recent Updates": form.updates.length ? form.updates.join(", ") : "None selected",
          "Price Expectation": form.priceExpectation || "Not provided",
          "Additional Notes": form.additionalNotes || "None",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm(initial);
      } else {
        alert("Something went wrong. Please try again or call 403-681-0107.");
      }
    } catch {
      alert("Something went wrong. Please try again or call 403-681-0107.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
        <p className="text-green-700">
          Thanks! Chan will review your property details and be in touch within 24 hours to
          discuss your free home valuation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-green-700 underline underline-offset-2"
        >
          Submit another property
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      {/* Contact */}
      <div>
        <h3 className="text-base font-semibold text-primary mb-5 pb-2 border-b border-neutral-mid">
          Your Contact Information
        </h3>
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                placeholder="Jane"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                placeholder="Smith"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="403-555-0100"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div>
        <h3 className="text-base font-semibold text-primary mb-5 pb-2 border-b border-neutral-mid">
          Property Details
        </h3>
        <div className="space-y-5">
          <div>
            <label htmlFor="address" className={labelClass}>
              Property Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              required
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
              placeholder="123 Main St SW, Calgary, AB"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Property Type <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((t) => (
                <ToggleChip
                  key={t}
                  label={t}
                  selected={form.propertyType === t}
                  onClick={() => set("propertyType", form.propertyType === t ? "" : t)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label htmlFor="bedrooms" className={labelClass}>
                Bedrooms <span className="text-red-500">*</span>
              </label>
              <select
                id="bedrooms"
                required
                value={form.bedrooms}
                onChange={(e) => set("bedrooms", e.target.value)}
                className={inputClass}
              >
                <option value="">—</option>
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="bathrooms" className={labelClass}>
                Bathrooms <span className="text-red-500">*</span>
              </label>
              <select
                id="bathrooms"
                required
                value={form.bathrooms}
                onChange={(e) => set("bathrooms", e.target.value)}
                className={inputClass}
              >
                <option value="">—</option>
                {["1", "1.5", "2", "2.5", "3", "3.5", "4+"].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sqft" className={labelClass}>
                Sq Ft <span className="text-gray-400 font-normal">(approx)</span>
              </label>
              <input
                id="sqft"
                type="number"
                min="200"
                max="20000"
                value={form.sqft}
                onChange={(e) => set("sqft", e.target.value)}
                placeholder="1,400"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="yearBuilt" className={labelClass}>
                Year Built
              </label>
              <input
                id="yearBuilt"
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                value={form.yearBuilt}
                onChange={(e) => set("yearBuilt", e.target.value)}
                placeholder="2005"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Selling Plans */}
      <div>
        <h3 className="text-base font-semibold text-primary mb-5 pb-2 border-b border-neutral-mid">
          Selling Plans
        </h3>
        <div className="space-y-6">
          <div>
            <label className={labelClass}>
              When are you looking to sell? <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {TIMELINES.map((t) => (
                <ToggleChip
                  key={t}
                  label={t}
                  selected={form.timeline === t}
                  onClick={() => set("timeline", form.timeline === t ? "" : t)}
                />
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Reason for selling <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {REASONS.map((r) => (
                <ToggleChip
                  key={r}
                  label={r}
                  selected={form.reason === r}
                  onClick={() => set("reason", form.reason === r ? "" : r)}
                />
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="priceExpectation" className={labelClass}>
              Price expectation <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="priceExpectation"
              type="text"
              value={form.priceExpectation}
              onChange={(e) => set("priceExpectation", e.target.value)}
              placeholder="e.g. $650,000 or not sure yet"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Updates */}
      <div>
        <h3 className="text-base font-semibold text-primary mb-1 pb-2 border-b border-neutral-mid">
          Recent Updates or Renovations
        </h3>
        <p className="text-xs text-gray-500 mb-4">Select all that apply in the last 10 years.</p>
        <div className="flex flex-wrap gap-2">
          {UPDATES.map((u) => (
            <ToggleChip
              key={u}
              label={u}
              selected={form.updates.includes(u)}
              onClick={() => toggleUpdate(u)}
            />
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="additionalNotes" className={labelClass}>
          Anything else Chan should know? <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="additionalNotes"
          rows={4}
          value={form.additionalNotes}
          onChange={(e) => set("additionalNotes", e.target.value)}
          placeholder="Unique features, tenant situation, access requirements, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
        {loading ? "Submitting…" : "Request My Free Valuation"}
      </Button>
    </form>
  );
}
