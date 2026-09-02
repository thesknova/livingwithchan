import type { Metadata } from "next";
import MortgageCalculatorClient from "@/components/MortgageCalculatorClient";

// The calculator itself is interactive and lives in a client component so this
// route can stay a server component and carry its own metadata.
export const metadata: Metadata = {
  alternates: { canonical: "/mortgage-calculator" },
  title: "Calgary Mortgage Calculator | Chan Kawaguchi",
  description:
    "Estimate your Calgary mortgage payment with Canadian semi-annual compounding and CMHC insurance premiums built in. Free calculator from REMAX agent Chan Kawaguchi.",
  openGraph: {
    title: "Calgary Mortgage Calculator | Chan Kawaguchi",
    description:
      "Estimate your Calgary mortgage payment with Canadian semi-annual compounding and CMHC premiums built in.",
  },
};

export default function MortgageCalculatorPage() {
  return <MortgageCalculatorClient />;
}
