const stats = [
  { value: "150+", label: "homes sold in Calgary" },
  { value: "10+", label: "years of local expertise" },
  { value: "98%", label: "client satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-0 text-sm text-stone-300">
          {stats.map((stat, i) => (
            <li key={stat.label} className="flex sm:items-center">
              {i > 0 && (
                <span className="hidden sm:block w-px h-4 bg-white/20 mx-7 flex-shrink-0" aria-hidden="true" />
              )}
              <span>
                <strong className="text-white font-semibold">{stat.value}</strong>{" "}
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
