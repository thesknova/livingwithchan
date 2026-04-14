"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const CALGARY_AREAS = [
  "NW Calgary",
  "NE Calgary",
  "SW Calgary",
  "SE Calgary",
  "Downtown / Beltline",
  "Airdrie",
  "Cochrane",
  "Okotoks",
  "Other / Open to Suggestions",
];

const MUST_HAVES = [
  "Attached Garage",
  "Detached Garage / Parking",
  "Yard / Outdoor Space",
  "Basement Suite (Legal)",
  "Home Office / Den",
  "Main Floor Bedroom",
  "No Condo Fees",
  "Pet-Friendly Building",
  "Air Conditioning",
  "New / Recent Renovations",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budgetMin: string;
  budgetMax: string;
  areas: string[];
  bedrooms: string;
  bathrooms: string;
  mustHaves: string[];
  propertyType: string;
  timeline: string;
  financing: string;
  additionalNotes: string;
}

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  budgetMin: "",
  budgetMax: "",
  areas: [],
  bedrooms: "",
  bathrooms: "",
  mustHaves: [],
  propertyType: "",
  timeline: "",
  financing: "",
  additionalNotes: "",
};

const inputClass =
  "w-full rounded-lg border border-neutral-mid px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white";

const selectClass =
  "w-full rounded-lg border border-neutral-mid px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white";

const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center mt-0.5">
        {number}
      </span>
      <div>
        <h3 className="text-base font-bold text-primary">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function BuyerIntakeForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleCheckbox(field: "areas" | "mustHaves", value: string) {
    setForm((prev) => {
      const current = prev[field];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      _subject: `New Buyer Intake — ${form.firstName} ${form.lastName}`,
      "First Name": form.firstName,
      "Last Name": form.lastName,
      Email: form.email,
      Phone: form.phone || "Not provided",
      "Budget (Min)": form.budgetMin || "Not specified",
      "Budget (Max)": form.budgetMax || "Not specified",
      "Target Areas": form.areas.length ? form.areas.join(", ") : "Not specified",
      Bedrooms: form.bedrooms || "Not specified",
      Bathrooms: form.bathrooms || "Not specified",
      "Property Type": form.propertyType || "Not specified",
      "Must-Have Features": form.mustHaves.length
        ? form.mustHaves.join(", ")
        : "None selected",
      Timeline: form.timeline || "Not specified",
      "Financing Status": form.financing || "Not specified",
      "Additional Notes": form.additionalNotes || "None",
    };

    try {
      const res = await fetch("https://formspree.io/f/mwvwnrga", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
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
        <div className="text-5xl mb-4">🏡</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Your Profile Has Been Submitted!
        </h3>
        <p className="text-green-700 max-w-md mx-auto">
          Thanks! Chan will review your home search preferences and reach out
          within 24 hours with next steps.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-green-700 underline underline-offset-2"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Section 1 — Contact Info */}
      <section>
        <SectionHeading number={1} title="Contact Information" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
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
              name="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="403-555-0100"
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <hr className="border-neutral-mid" />

      {/* Section 2 — Budget */}
      <section>
        <SectionHeading
          number={2}
          title="Budget Range"
          subtitle="Selecting a realistic range helps Chan focus on homes that fit your financing."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="budgetMin" className={labelClass}>
              Minimum Budget
            </label>
            <select
              id="budgetMin"
              name="budgetMin"
              value={form.budgetMin}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select minimum</option>
              <option>Under $300,000</option>
              <option>$300,000</option>
              <option>$350,000</option>
              <option>$400,000</option>
              <option>$450,000</option>
              <option>$500,000</option>
              <option>$600,000</option>
              <option>$700,000</option>
              <option>$800,000</option>
              <option>$900,000</option>
              <option>$1,000,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="budgetMax" className={labelClass}>
              Maximum Budget
            </label>
            <select
              id="budgetMax"
              name="budgetMax"
              value={form.budgetMax}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select maximum</option>
              <option>$300,000</option>
              <option>$350,000</option>
              <option>$400,000</option>
              <option>$450,000</option>
              <option>$500,000</option>
              <option>$600,000</option>
              <option>$700,000</option>
              <option>$800,000</option>
              <option>$900,000</option>
              <option>$1,000,000</option>
              <option>$1,500,000+</option>
              <option>No upper limit</option>
            </select>
          </div>
        </div>
      </section>

      <hr className="border-neutral-mid" />

      {/* Section 3 — Target Areas */}
      <section>
        <SectionHeading
          number={3}
          title="Target Areas & Neighbourhoods"
          subtitle="Select all communities you are open to. Chan can narrow these down further in your consultation."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CALGARY_AREAS.map((area) => (
            <label
              key={area}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={form.areas.includes(area)}
                onChange={() => toggleCheckbox("areas", area)}
                className="w-4 h-4 rounded border-neutral-mid accent-accent cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                {area}
              </span>
            </label>
          ))}
        </div>
      </section>

      <hr className="border-neutral-mid" />

      {/* Section 4 — Home Features */}
      <section>
        <SectionHeading
          number={4}
          title="Home Features & Needs"
          subtitle="Tell Chan what the property must have."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          <div>
            <label htmlFor="propertyType" className={labelClass}>
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Any type</option>
              <option>Detached House</option>
              <option>Semi-Detached / Duplex</option>
              <option>Townhouse</option>
              <option>Condo / Apartment</option>
              <option>Acreage / Rural</option>
            </select>
          </div>
          <div>
            <label htmlFor="bedrooms" className={labelClass}>
              Bedrooms
            </label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={form.bedrooms}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">No preference</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
          <div>
            <label htmlFor="bathrooms" className={labelClass}>
              Bathrooms
            </label>
            <select
              id="bathrooms"
              name="bathrooms"
              value={form.bathrooms}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">No preference</option>
              <option>1+</option>
              <option>1.5+</option>
              <option>2+</option>
              <option>2.5+</option>
              <option>3+</option>
            </select>
          </div>
        </div>

        <p className={`${labelClass} mb-3`}>Must-Have Features</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MUST_HAVES.map((feature) => (
            <label
              key={feature}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={form.mustHaves.includes(feature)}
                onChange={() => toggleCheckbox("mustHaves", feature)}
                className="w-4 h-4 rounded border-neutral-mid accent-accent cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                {feature}
              </span>
            </label>
          ))}
        </div>
      </section>

      <hr className="border-neutral-mid" />

      {/* Section 5 — Timeline */}
      <section>
        <SectionHeading
          number={5}
          title="Purchase Timeline"
          subtitle="Knowing your timeline helps Chan prioritize and plan your home search."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "As soon as possible",
            "Within 3 months",
            "3–6 months",
            "6–12 months",
            "1+ year from now",
            "Just exploring for now",
          ].map((option) => (
            <label
              key={option}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                form.timeline === option
                  ? "border-accent bg-accent/5 text-primary"
                  : "border-neutral-mid hover:border-accent/50"
              }`}
            >
              <input
                type="radio"
                name="timeline"
                value={option}
                checked={form.timeline === option}
                onChange={handleChange}
                className="accent-accent"
              />
              <span className="text-sm font-medium">{option}</span>
            </label>
          ))}
        </div>
      </section>

      <hr className="border-neutral-mid" />

      {/* Section 6 — Financing */}
      <section>
        <SectionHeading
          number={6}
          title="Financing Status"
          subtitle="This helps Chan understand your readiness and connect you with a mortgage specialist if needed."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Yes — fully pre-approved",
            "Pre-approval in progress",
            "Not yet started",
            "Paying cash (no mortgage needed)",
          ].map((option) => (
            <label
              key={option}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                form.financing === option
                  ? "border-accent bg-accent/5 text-primary"
                  : "border-neutral-mid hover:border-accent/50"
              }`}
            >
              <input
                type="radio"
                name="financing"
                value={option}
                checked={form.financing === option}
                onChange={handleChange}
                className="accent-accent"
              />
              <span className="text-sm font-medium">{option}</span>
            </label>
          ))}
        </div>
      </section>

      <hr className="border-neutral-mid" />

      {/* Section 7 — Notes */}
      <section>
        <SectionHeading
          number={7}
          title="Anything Else?"
          subtitle="Share any additional details, deal-breakers, or questions you have for Chan."
        />
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={4}
          value={form.additionalNotes}
          onChange={handleChange}
          placeholder="e.g. Must be close to a specific school, avoiding a busy road, need a double garage for a workshop..."
          className={`${inputClass} resize-none`}
        />
      </section>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full justify-center"
      >
        {loading ? "Submitting…" : "Submit My Buyer Profile"}
      </Button>

      <p className="text-xs text-center text-gray-400 -mt-4">
        Your information is kept confidential and used solely to assist with
        your home search. Required fields are marked{" "}
        <span className="text-red-400">*</span>.
      </p>
    </form>
  );
}
