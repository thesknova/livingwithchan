import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Living With Chan",
  description:
    "Privacy policy for livingwithchan.com — how Chan Kawaguchi collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Legal
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-2">Privacy Policy</h1>
          <p className="text-stone-400">Last updated: April 29, 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-gray">
        <p className="text-gray-600 leading-relaxed mb-6">
          Chan Kawaguchi (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating as Living With Chan
          and licensed with REMAX Complete Realty in Calgary, Alberta, is committed to protecting
          your privacy. This policy explains what information we collect, how we use it, and
          your rights regarding that information.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We collect information you provide directly when you:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-6">
          <li>Submit a contact form, buyer intake form, or seller valuation request</li>
          <li>Call or email us directly</li>
          <li>Subscribe to market report updates</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">
          This information may include your name, email address, phone number, property address,
          and details about your real estate needs.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          We also collect non-personally identifiable information automatically through Google Analytics
          (usage data, page views, referral sources) to understand how visitors use the site and
          improve our content.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-6">
          <li>To respond to your real estate inquiries and provide the services you requested</li>
          <li>To send you relevant market updates and listings you have requested</li>
          <li>To improve this website and our communications</li>
          <li>To comply with our legal obligations as a licensed Alberta real estate professional</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">
          We do not sell, rent, or share your personal information with third parties for marketing
          purposes without your explicit consent.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Third-Party Services</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-6">
          <li><strong>Formspree</strong> — processes contact and intake form submissions. See their privacy policy at formspree.io.</li>
          <li><strong>Google Analytics</strong> — provides anonymous site usage statistics. See Google&apos;s privacy policy at policies.google.com.</li>
          <li><strong>Cloudflare</strong> — provides security and performance services. See Cloudflare&apos;s privacy policy at cloudflare.com.</li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Cookies</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This site uses cookies for Google Analytics to analyze traffic patterns. You can disable
          cookies in your browser settings. We do not use cookies for advertising or retargeting.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Your Rights (PIPEDA)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA),
          you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-6">
          <li>Know what personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Withdraw consent for non-essential uses at any time</li>
          <li>Have your personal information deleted (subject to our legal retention obligations)</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:hello@livingwithchan.com" className="text-accent hover:underline">
            hello@livingwithchan.com
          </a>{" "}
          or call <a href="tel:4036810107" className="text-accent hover:underline">403-681-0107</a>.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Data Retention</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We retain your contact information for as long as necessary to provide services and
          comply with our obligations under Alberta&apos;s Real Estate Act and RECA requirements.
          Analytics data is retained for 26 months as per Google Analytics default settings.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Contact</h2>
        <p className="text-gray-600 leading-relaxed">
          Chan Kawaguchi — Living With Chan<br />
          REMAX Complete Realty<br />
          #180 234-5149 Country Hills Blvd NW, Calgary, AB T3A 5K8<br />
          <a href="tel:4036810107" className="text-accent hover:underline">403-681-0107</a> ·{" "}
          <a href="mailto:hello@livingwithchan.com" className="text-accent hover:underline">
            hello@livingwithchan.com
          </a>
        </p>
      </div>
    </div>
  );
}
