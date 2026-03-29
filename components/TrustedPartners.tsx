const partners = [
  {
    icon: "🏠",
    title: "Home Stagers",
    description: "Professional staging to maximize your home's selling price.",
  },
  {
    icon: "🏦",
    title: "Mortgage Brokers",
    description: "Trusted lenders who find the right rate for your situation.",
  },
  {
    icon: "⚖️",
    title: "Real Estate Lawyers",
    description: "Experienced closing lawyers who keep your transaction smooth.",
  },
  {
    icon: "🔍",
    title: "Home Inspectors",
    description: "Thorough inspectors who surface issues before they become problems.",
  },
  {
    icon: "🚚",
    title: "Movers",
    description: "Reliable moving companies Chan's clients trust, time and again.",
  },
  {
    icon: "🔨",
    title: "Contractors",
    description: "Vetted tradespeople for renovations, repairs, and pre-sale work.",
  },
];

export default function TrustedPartners() {
  return (
    <section className="bg-neutral-light py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            My Network
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            A Team Behind Every Transaction
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            When you work with Chan, you get access to a curated network of
            Calgary professionals who make the entire process seamless — from
            first showing to moving day and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partners.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl p-5 border border-neutral-mid shadow-sm flex gap-4 items-start"
            >
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div>
                <h3 className="text-sm font-semibold text-primary mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
