import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Living With Chan",
  description:
    "Terms of use for livingwithchan.com — the website of Chan Kawaguchi, REMAX Complete Realty agent in Calgary, Alberta.",
};

export default function TermsPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Legal
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-2">Terms of Use</h1>
          <p className="text-stone-400">Last updated: April 29, 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-gray">
        <p className="text-gray-600 leading-relaxed mb-6">
          By accessing and using livingwithchan.com (&ldquo;the Site&rdquo;), you agree to be bound by
          these Terms of Use. If you do not agree, please do not use the Site.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">About This Site</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This website is operated by Chan Kawaguchi, a licensed real estate professional
          with REMAX Complete Realty in Calgary, Alberta, Canada. The Site provides general
          real estate information, market data, and a means to contact Chan for professional
          real estate services.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Informational Purposes Only</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          All content on this Site — including blog articles, market reports, mortgage
          calculator results, and neighbourhood guides — is provided for general informational
          purposes only. Nothing on this Site constitutes legal, financial, tax, or professional
          real estate advice. Always consult a qualified professional before making real estate
          decisions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Listing information and market data are provided in good faith but may not reflect
          current MLS data. Verify all information independently before relying on it.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Intellectual Property</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          All content on this Site — including text, images, graphics, logos, and blog
          articles — is the property of Chan Kawaguchi or licensed for use on this Site.
          You may not reproduce, distribute, or create derivative works without written
          permission, except for personal, non-commercial use.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">MLS and CREA</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Chan Kawaguchi is a member of the Calgary Real Estate Board (CREB) and the
          Canadian Real Estate Association (CREA). MLS® and REALTOR® are trademarks owned
          by CREA. Use of these trademarks does not imply endorsement of any particular property
          or service beyond Chan&apos;s licensed professional services.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          To the maximum extent permitted by applicable law, Chan Kawaguchi and REMAX Complete
          Realty shall not be liable for any indirect, incidental, or consequential damages
          arising from your use of this Site or reliance on its content.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">External Links</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This Site may contain links to third-party websites. We do not endorse or control
          these sites and are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Governing Law</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          These Terms are governed by the laws of the Province of Alberta and the federal laws
          of Canada applicable therein.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Changes</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We may update these Terms from time to time. Continued use of the Site after any
          changes constitutes acceptance of the revised Terms.
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
