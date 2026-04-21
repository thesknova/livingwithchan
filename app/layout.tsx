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
  title: {
    default: "Living With Chan | Calgary Real Estate Agent",
    template: "%s | Living With Chan",
  },
  description:
    "Chan Kawaguchi is a trusted REMAX Complete Realty Agent in Calgary, Alberta. Browse listings, learn about Chan, and get in touch today.",
  keywords: [
    "Calgary real estate",
    "REMAX Complete Realty, Calgary",
    "Chan Kawaguchi",
    "buy home Calgary",
    "sell home Calgary",
    "Calgary realtor",
  ],
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSidebar />
      </body>
    </html>
  );
}
