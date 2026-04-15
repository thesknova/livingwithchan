import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSidebar from "@/components/FloatingSidebar";
import { Analytics } from "@vercel/analytics/next";

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSidebar />
        <Analytics />
      </body>
    </html>
  );
}
