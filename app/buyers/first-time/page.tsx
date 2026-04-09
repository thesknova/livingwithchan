import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "First-Time Home Buyers Calgary | Chan Kawaguchi",
  description:
    "Buying your first home in Calgary? Chan Kawaguchi guides first-time buyers through every step, from mortgage pre-approval to possession day.",
};

const steps = [
  {
    icon: "🏦",
    title: "Get Pre-Approved First",
    body: "Before you fall in love with a home, know your budget. Chan connects you with trusted Calgary mortgage brokers who can get you pre-approved quickly, often within 24 hours.",
  },
  {
    icon: "🗺️",
    title: "Find the Right Neighbourhood",
    body: "Calgary has dozens of great communities for first-time buyers. Chan helps you weigh proximity to work, schools, transit, and amenities against your budget to find the sweet spot.",
  },
  {
    icon: "🔍",
    title: "Understand What You're Buying",
    body: "First-time buyers often don't know what to look for in a home inspection. Chan walks you through every showing with an honest, experienced eye, flagging issues before they become your problem.",
  },
  {
    icon: "📝",
    title: "Navigate the Paperwork",
    body: "Alberta's purchase contract, conditions, and title process can feel overwhelming. Chan explains every document in plain language so you always know exactly what you're signing.",
  },
];

const communities = [
  { name: "Evanston (NW)", note: "Affordable new builds, young families" },
  { name: "Nolan Hill (NW)", note: "Townhouses & starter detached homes" },
  { name: "Redstone (NE)", note: "Great value, modern homes" },
  { name: "Skyview Ranch (NE)", note: "Affordable, growing community" },
  { name: "Cranston (SE)", note: "Family-friendly, great amenities" },
  { name: "Mahogany (SE)", note: "Lake community at accessible price points" },
  { name: "Cougar Ridge (SW)", note: "Townhouses with mountain views" },
  { name: "Inglewood", note: "Inner-city condos for urban buyers" },
];

export default function FirstTimeBuyersPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            First-Time Buyers
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Buying Your First Home in Calgary
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Buying a home for the first time is one of the biggest decisions
            of your life. Chan makes sure you feel informed, confident, and
            never pressured, from your first question to possession day.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            You Don&apos;t Have to Figure This Out Alone
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most first-time buyers come in with questions they&apos;re
            embarrassed to ask. There&apos;s no such thing with Chan. Whether
            you&apos;re wondering how a mortgage works, what a condition means,
            or why a house has been on the market for 60 days. Chan gives you
            straight answers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Calgary&apos;s market offers strong options for first-time buyers,
            particularly in the NE and SE quadrants where well-built detached
            homes can still be found under $600K. Townhouses and condos in NW
            and SW communities offer even more accessible entry points,
            especially for buyers who prioritize lifestyle and commute over
            square footage.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chan&apos;s business runs on referrals. That means his focus is on
            finding you the right home at the right price, not on closing a
            deal as fast as possible. First-time buyers get the same level of
            care and attention as any other client.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            How Chan Guides First-Time Buyers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-2">
            Popular Calgary Communities for First-Time Buyers
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            A snapshot of communities where first-time buyers consistently find
            good value in Calgary.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communities.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-neutral-light border border-neutral-mid"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Start the Conversation
              </h2>
              <p className="text-gray-500 text-sm">REMAX Complete Realty Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              No pressure, no obligation. Just an honest conversation about
              what you&apos;re looking for and whether now is the right time
              to buy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:4036810107" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  403-681-0107
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:hello@livingwithchan.com" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  hello@livingwithchan.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-mid p-8">
            <h2 className="text-xl font-bold text-primary mb-1">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell Chan a bit about what you&apos;re looking for and he&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
