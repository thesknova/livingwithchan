import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSidebar from "@/components/FloatingSidebar";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://livingwithchan.com"),
  title: {
    default: "Calgary Real Estate Agent | Chan Kawaguchi, REMAX",
    template: "%s | Living With Chan",
  },
  description:
    "Chan Kawaguchi is your trusted Calgary REMAX agent — buy, sell, or invest with local expertise and honest guidance. Browse listings or call 403-681-0107 today.",
  keywords: [
    "Calgary real estate agent",
    "Calgary realtor",
    "REMAX Complete Realty Calgary",
    "Chan Kawaguchi",
    "buy home Calgary",
    "sell home Calgary",
    "Calgary homes for sale",
  ],
  openGraph: {
    type: "website",
    siteName: "Living With Chan",
    title: "Calgary Real Estate Agent | Chan Kawaguchi, REMAX",
    description:
      "Chan Kawaguchi is your trusted Calgary REMAX agent — buy, sell, or invest with local expertise and honest guidance. Call 403-681-0107.",
    url: "https://livingwithchan.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Chan Kawaguchi — REMAX Complete Realty Agent, Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Real Estate Agent | Chan Kawaguchi, REMAX",
    description: "Buy, sell, or invest in Calgary real estate with Chan Kawaguchi, REMAX Complete Realty. Call 403-681-0107.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HHE5VMPLVS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HHE5VMPLVS');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["RealEstateAgent", "LocalBusiness"],
              name: "Chan Kawaguchi — Living With Chan",
              image: "https://livingwithchan.com/chan-headshot-color.jpg",
              url: "https://livingwithchan.com",
              telephone: "+14036810107",
              email: "hello@livingwithchan.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "#180 234-5149 Country Hills Blvd NW",
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T3A 5K8",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.1784,
                longitude: -114.1903,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "17:00" },
              ],
              areaServed: { "@type": "City", name: "Calgary" },
              memberOf: { "@type": "Organization", name: "REMAX Complete Realty" },
              sameAs: [
                "https://www.facebook.com/livingwithchan",
                "https://www.instagram.com/living.with.chan",
                "https://www.tiktok.com/@livingwithchan",
                "https://www.linkedin.com/in/chankawaguchi",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSidebar />
      </body>
    </html>
  );
}
