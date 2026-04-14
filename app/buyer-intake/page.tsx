import type { Metadata } from "next";
import BuyerIntakeForm from "@/components/BuyerIntakeForm";

export const metadata: Metadata = {
  title: "Buyer Intake Form",
  description:
    "Tell Chan Kawaguchi about your ideal home. Fill out the buyer intake form and get a personalized home search tailored to your needs and budget.",
};

export default function BuyerIntakePage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Start Your Search
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Tell Chan What You&apos;re Looking For
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Complete this short profile and Chan will get to work finding homes
            that genuinely match your needs — no wasted viewings, no pressure.
          </p>
        </div>
      </div>

      {/* Why fill this out */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              icon: "🎯",
              title: "Tailored Search",
              desc: "Only homes that fit your criteria",
            },
            {
              icon: "⏱",
              title: "Save Time",
              desc: "Fewer viewings, better matches",
            },
            {
              icon: "📋",
              title: "FINTRAC Ready",
              desc: "Meets Canadian regulatory requirements",
            },
            {
              icon: "🤝",
              title: "Clear Goals",
              desc: "Sets the stage for a successful purchase",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-neutral-mid p-4 text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-xs font-bold text-primary mb-0.5">
                {item.title}
              </p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-mid p-8 sm:p-10">
          <BuyerIntakeForm />
        </div>
      </div>
    </div>
  );
}
