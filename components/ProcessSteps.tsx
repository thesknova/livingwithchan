const steps = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "We start with a conversation — your goals, your timeline, and what matters most to you. No pressure, just clarity.",
  },
  {
    number: "02",
    title: "Make a Plan",
    description:
      "Chan builds a customized strategy tailored to your situation, whether you're buying, selling, or both.",
  },
  {
    number: "03",
    title: "Let's Do This",
    description:
      "From showings to staging, listings to offers — Chan handles the details so you can focus on what's next.",
  },
  {
    number: "04",
    title: "Make a Deal",
    description:
      "Patient, persistent, and creative negotiation to get you the best possible outcome — every single time.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-neutral-light py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            How It Works
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            Your Journey With Chan
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
            A simple, stress-free process from first conversation to closing day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-neutral-mid z-0 -translate-x-6" />
              )}

              <div className="relative z-10 bg-white rounded-2xl p-6 border border-neutral-mid shadow-sm h-full flex flex-col">
                <span className="text-4xl font-bold text-neutral-mid leading-none mb-4">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
