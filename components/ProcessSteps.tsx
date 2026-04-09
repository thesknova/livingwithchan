const steps = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "We start with a conversation about your goals, your timeline, and what matters most to you. No pressure, just clarity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6V10h12v2zm0-4H6V6h12v2z"/>
      </svg>
    ),
    detail: "Free consultation · No obligation",
  },
  {
    number: "02",
    title: "Make a Plan",
    description:
      "Chan builds a customized strategy tailored to your situation, whether you're buying, selling, or both.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    detail: "Custom strategy · Clear timeline",
  },
  {
    number: "03",
    title: "Let's Do This",
    description:
      "From showings to staging, listings to offers, Chan handles every detail so you can focus on what's next.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" opacity="0.25"/>
        <path d="M3 9.5L12 4l9 5.5M9 21V12h6v9"/>
      </svg>
    ),
    detail: "Showings · Staging · Offers",
  },
  {
    number: "04",
    title: "Make a Deal",
    description:
      "Patient, persistent, and creative negotiation to get you the best possible outcome, every single time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    detail: "Negotiation · Keys in hand",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-primary py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            How It Works
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Your Journey With Chan
          </h2>
          <p className="text-stone-400 mt-3 max-w-md mx-auto text-sm">
            A simple, stress-free process from first conversation to closing day.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative z-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/60 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Ghost number — decorative background */}
              <span className="absolute top-4 right-5 text-8xl font-black text-white/[0.04] leading-none select-none pointer-events-none">
                {step.number}
              </span>

              {/* Icon circle */}
              <div className="relative w-14 h-14 rounded-xl bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center text-accent mb-6 transition-colors duration-300 flex-shrink-0">
                {step.icon}
                {/* Step dot on the connector line */}
                <span className="hidden lg:block absolute -top-[2.15rem] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-primary" />
              </div>

              {/* Step label */}
              <span className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-1">
                Step {step.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-400 leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Detail tag */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-xs text-stone-500 group-hover:text-accent/80 transition-colors duration-300">
                  {step.detail}
                </span>
              </div>

              {/* Arrow to next step — desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-16 z-20 items-center justify-center w-8 h-8 rounded-full bg-primary border border-accent/30 text-accent/60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm shadow-lg shadow-accent/20"
          >
            Start the Conversation
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
