"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  buyerType: string;
  budget: string;
  timeline: string;
  message: string;
}

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  buyerType: "",
  budget: "",
  timeline: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-neutral-mid px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white";

export default function BuyerForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xwvrdoyj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "First Name": form.firstName,
          "Last Name": form.lastName,
          Email: form.email,
          Phone: form.phone || "—",
          "Buyer Type": form.buyerType,
          "Budget Range": form.budget,
          Timeline: form.timeline,
          Message: form.message || "—",
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
        <h3 className="text-xl font-bold text-green-800 mb-2">Got it — thanks!</h3>
        <p className="text-green-700">
          Chan will review your details and be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-green-700 underline underline-offset-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bf-firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="bf-firstName"
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
          <label htmlFor="bf-lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="bf-lastName"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bf-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="bf-email"
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
          <label htmlFor="bf-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="bf-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="403-555-0100"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bf-buyerType" className="block text-sm font-medium text-gray-700 mb-1.5">
            I am a… <span className="text-red-500">*</span>
          </label>
          <select
            id="bf-buyerType"
            name="buyerType"
            required
            value={form.buyerType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select buyer type</option>
            <option value="First-Time Buyer">First-Time Buyer</option>
            <option value="Move-Up Buyer">Move-Up Buyer</option>
            <option value="Investor">Investor</option>
            <option value="Downsizing">Downsizing</option>
            <option value="Luxury Buyer">Luxury Buyer</option>
            <option value="Acreage Buyer">Acreage Buyer</option>
            <option value="New Construction">New Construction</option>
            <option value="New to Calgary">New to Calgary</option>
          </select>
        </div>
        <div>
          <label htmlFor="bf-budget" className="block text-sm font-medium text-gray-700 mb-1.5">
            Budget Range <span className="text-red-500">*</span>
          </label>
          <select
            id="bf-budget"
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a range</option>
            <option value="Under $400K">Under $400K</option>
            <option value="$400K – $600K">$400K – $600K</option>
            <option value="$600K – $800K">$600K – $800K</option>
            <option value="$800K – $1M">$800K – $1M</option>
            <option value="$1M – $1.5M">$1M – $1.5M</option>
            <option value="$1.5M+">$1.5M+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="bf-timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
          Timeline <span className="text-red-500">*</span>
        </label>
        <select
          id="bf-timeline"
          name="timeline"
          required
          value={form.timeline}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>When are you hoping to buy?</option>
          <option value="ASAP">ASAP</option>
          <option value="1–3 months">1–3 months</option>
          <option value="3–6 months">3–6 months</option>
          <option value="6–12 months">6–12 months</option>
          <option value="Just exploring">Just exploring</option>
        </select>
      </div>

      <div>
        <label htmlFor="bf-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Anything else Chan should know? <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="bf-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Neighbourhoods you love, must-haves, questions you have…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
        {loading ? "Sending…" : "Send My Details to Chan"}
      </Button>

      <p className="text-xs text-center text-gray-400">
        No spam, no pressure. Chan typically responds within 24 hours.
      </p>
    </form>
  );
}
