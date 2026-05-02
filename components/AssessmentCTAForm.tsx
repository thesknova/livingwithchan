"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initial: FormState = { name: "", email: "", phone: "", address: "" };

const inputClass =
  "w-full rounded-lg border border-neutral-mid px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white";

export default function AssessmentCTAForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
          Subject: "Free Property Assessment Request",
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "—",
          "Property Address": form.address || "—",
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
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-bold text-green-800 mb-1">Request received!</h3>
        <p className="text-green-700 text-sm">
          Chan will be in touch within 24 hours with a free assessment review.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="acf-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="acf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="acf-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="acf-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="acf-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="acf-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="403-555-0100"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="acf-address" className="block text-sm font-medium text-gray-700 mb-1.5">
            Property Address <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="acf-address"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            placeholder="123 Any Street NW, Calgary"
            className={inputClass}
          />
        </div>
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
        {loading ? "Sending…" : "Request My Free Assessment Review"}
      </Button>
      <p className="text-xs text-center text-gray-400">
        No cost, no obligation. Chan typically responds within 24 hours.
      </p>
    </form>
  );
}
