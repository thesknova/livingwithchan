import Button from "@/components/ui/Button";

interface ContentCTAProps {
  /** Area or topic label woven into the headline, e.g. "South West Calgary" */
  area: string;
}

export default function ContentCTA({ area }: ContentCTAProps) {
  return (
    <div className="mt-14 bg-primary rounded-2xl px-8 py-12 sm:px-12 text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
        Work With Chan
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
        Looking for a home in {area}?
      </h2>
      <p className="text-stone-400 max-w-xl mx-auto mb-8">
        Tell Chan what you&apos;re looking for and she&apos;ll put together a
        personalized search — only homes that genuinely fit, no pressure.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button href="/buyer-intake" size="lg">
          Start Your Home Search
        </Button>
        <a
          href="tel:4036810107"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
        >
          Call 403-681-0107
        </a>
      </div>
    </div>
  );
}
