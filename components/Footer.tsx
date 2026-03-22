import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-xl font-bold tracking-tight mb-1">
            Living With Chan
          </p>
          <p className="text-sm text-accent mb-4">
            REMAX Real Estate Agent · Calgary, AB
          </p>
          <p className="text-sm text-stone-400 leading-relaxed mb-5">
            Helping Calgary families buy, sell, and invest in real estate with
            local expertise and honest guidance.
          </p>
          <Image
            src="/remax-logo.jpg"
            alt="REMAX Complete Realty"
            width={160}
            height={60}
            className="rounded-lg opacity-90"
          />
        </div>

        {/* Quick links */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "Listings", href: "/listings" },
              { label: "About Chan", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-4">
            Get In Touch
          </p>
          <ul className="space-y-3 text-sm text-stone-400">
            <li>
              <a
                href="tel:4036810107"
                className="hover:text-white transition-colors"
              >
                📞 403-681-0107
              </a>
            </li>
            <li>
              <a
                href="mailto:ckawaguchi88@gmail.com"
                className="hover:text-white transition-colors break-all"
              >
                ✉️ ckawaguchi88@gmail.com
              </a>
            </li>
            <li>🏢 REMAX, Calgary, AB</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Chan Kawaguchi. All rights reserved.</p>
          <p>Licensed REMAX Real Estate Agent · Calgary, Alberta</p>
        </div>
      </div>
    </footer>
  );
}
