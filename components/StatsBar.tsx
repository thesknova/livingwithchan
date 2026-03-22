const stats = [
  { value: "150+", label: "Homes Sold" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-4xl font-bold text-accent">{stat.value}</span>
            <span className="text-sm font-medium text-blue-200 uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
