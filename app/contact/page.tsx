import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chan Kawaguchi, REMAX Real Estate Agent in Calgary, AB. Call 403-681-0107 or send a message.",
};

const contactDetails = [
  {
    icon: "📞",
    label: "Phone",
    value: "403-681-0107",
    href: "tel:4036810107",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@livingwithchan.com",
    href: "mailto:hello@livingwithchan.com",
  },
  {
    icon: "🏢",
    label: "Office",
    value: "#180 234-5149 Country Hills Blvd NW, Calgary, AB T3A 5K8",
    href: null,
  },
  {
    icon: "🕐",
    label: "Hours",
    value: "Mon–Sat 8am–8pm · Sun 10am–5pm",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Reach Out
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-2">Contact Chan</h1>
          <p className="text-stone-400 text-lg">
            Let&apos;s talk real estate. No pressure, no obligation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-primary mb-1">
              Chan Kawaguchi
            </h2>
            <p className="text-gray-500 text-sm">
              REMAX Real Estate Agent · Calgary, AB
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you&apos;re ready to buy, thinking about selling, or just
            want to explore your options. Chan is here to help. Reach out any
            time and expect a response within a few hours.
          </p>

          <ul className="space-y-4">
            {contactDetails.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-700">
                      {item.value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* REMAX badge */}
          <div className="bg-white rounded-xl border border-neutral-mid p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              RE/MAX
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">
                Licensed with REMAX
              </p>
              <p className="text-xs text-gray-400">Calgary, Alberta</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-mid p-8">
          <h2 className="text-xl font-bold text-primary mb-1">
            Send a Message
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form and Chan will get back to you shortly.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
