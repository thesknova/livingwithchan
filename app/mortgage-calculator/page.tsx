"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Canadian mortgage: semi-annual compounding (Bank Act requirement)
// Effective periodic rate = (1 + annualRate / 2) ^ (1 / periodsPerYear) - 1
function effectiveRate(annualRate: number, periodsPerYear: number): number {
  return Math.pow(1 + annualRate / 2, 1 / periodsPerYear) - 1;
}

function calcPayment(principal: number, periodicRate: number, numPayments: number): number {
  if (periodicRate === 0) return principal / numPayments;
  return (principal * periodicRate) / (1 - Math.pow(1 + periodicRate, -numPayments));
}

// CMHC insurance premiums (2024 rates)
function cmhcPremium(loanToValue: number): number {
  if (loanToValue > 0.95) return 0; // Not eligible (min 5% down)
  if (loanToValue > 0.9) return 0.04;
  if (loanToValue > 0.85) return 0.031;
  if (loanToValue > 0.8) return 0.028;
  return 0; // 20%+ down — no insurance
}

function fmt(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

function fmtFull(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const AMORTIZATIONS = [5, 10, 15, 20, 25, 30];
const TERMS = [1, 2, 3, 4, 5];

type Frequency = "monthly" | "biweekly" | "accelerated";

const FREQUENCY_LABELS: Record<Frequency, string> = {
  monthly: "Monthly",
  biweekly: "Bi-Weekly",
  accelerated: "Accelerated Bi-Weekly",
};

export default function MortgageCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState("650000");
  const [downPaymentPct, setDownPaymentPct] = useState("20");
  const [annualRate, setAnnualRate] = useState("5.00");
  const [amortization, setAmortization] = useState(25);
  const [term, setTerm] = useState(5);
  const [frequency, setFrequency] = useState<Frequency>("monthly");

  const results = useMemo(() => {
    const price = parseFloat(purchasePrice.replace(/,/g, "")) || 0;
    const dpPct = parseFloat(downPaymentPct) / 100;
    const rate = parseFloat(annualRate) / 100;

    if (price <= 0 || dpPct < 0.05 || rate <= 0) return null;

    const downPayment = price * dpPct;
    const loanBeforeInsurance = price - downPayment;
    const ltv = loanBeforeInsurance / price;
    const insurancePremiumRate = cmhcPremium(ltv);
    const insuranceAmount = loanBeforeInsurance * insurancePremiumRate;
    const principal = loanBeforeInsurance + insuranceAmount;

    // Periodic calculations
    let periodsPerYear: number;
    let paymentsPerYear: number;

    if (frequency === "monthly") {
      periodsPerYear = 12;
      paymentsPerYear = 12;
    } else if (frequency === "biweekly") {
      periodsPerYear = 26;
      paymentsPerYear = 26;
    } else {
      // Accelerated bi-weekly: monthly payment / 2, paid 26x per year
      periodsPerYear = 26;
      paymentsPerYear = 26;
    }

    const totalPayments = amortization * paymentsPerYear;
    const termPayments = term * paymentsPerYear;

    let periodicPayment: number;
    if (frequency === "accelerated") {
      // Compute monthly payment first, then halve it
      const monthlyRate = effectiveRate(rate, 12);
      const monthlyPayment = calcPayment(principal, monthlyRate, amortization * 12);
      periodicPayment = monthlyPayment / 2;
    } else {
      const i = effectiveRate(rate, periodsPerYear);
      periodicPayment = calcPayment(principal, i, totalPayments);
    }

    // Balance remaining after term
    const i = effectiveRate(rate, periodsPerYear);
    let balance = principal;
    let interestPaidInTerm = 0;
    let principalPaidInTerm = 0;
    for (let p = 0; p < termPayments; p++) {
      const interestPortion = balance * i;
      const principalPortion = periodicPayment - interestPortion;
      interestPaidInTerm += interestPortion;
      principalPaidInTerm += principalPortion;
      balance -= principalPortion;
    }

    const totalInterestFullAmort = periodicPayment * totalPayments - principal;

    // Stress test qualifying rate
    const stressTestRate = Math.max(rate + 0.02, 0.0525);
    const stressI = effectiveRate(stressTestRate, periodsPerYear === 26 ? 12 : periodsPerYear);
    const stressMonthlyPayment = calcPayment(principal, stressI, amortization * 12);

    return {
      price,
      downPayment,
      loanBeforeInsurance,
      insurancePremiumRate,
      insuranceAmount,
      principal,
      periodicPayment,
      totalInterestFullAmort,
      interestPaidInTerm,
      principalPaidInTerm,
      balanceAfterTerm: Math.max(balance, 0),
      stressTestRate,
      stressMonthlyPayment,
      isInsured: insurancePremiumRate > 0,
    };
  }, [purchasePrice, downPaymentPct, annualRate, amortization, term, frequency]);

  const downPaymentDollar = results
    ? fmt(results.downPayment)
    : "";

  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3 text-xs text-stone-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span>Mortgage Calculator</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Canadian Mortgage Calculator
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-2">
            Estimate Your Mortgage Payments
          </h1>
          <p className="text-stone-400 max-w-xl text-sm leading-relaxed">
            Uses semi-annual compounding as required by the Bank Act. Includes CMHC insurance and the federal stress test.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Inputs */}
        <div className="bg-white rounded-2xl border border-neutral-mid p-8">
          <h2 className="text-base font-bold text-primary mb-6">Mortgage Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Purchase price */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                Purchase Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  className="w-full pl-7 pr-4 py-2.5 border border-neutral-mid rounded-lg text-sm focus:outline-none focus:border-accent"
                  min="0"
                  step="10000"
                />
              </div>
            </div>

            {/* Down payment */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                Down Payment
                {downPaymentDollar && (
                  <span className="ml-2 font-normal normal-case text-gray-400">= {downPaymentDollar}</span>
                )}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(e.target.value)}
                  className="w-full pl-4 pr-8 py-2.5 border border-neutral-mid rounded-lg text-sm focus:outline-none focus:border-accent"
                  min="5"
                  max="100"
                  step="0.5"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Minimum 5% for insured; 20%+ avoids CMHC</p>
            </div>

            {/* Interest rate */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                Annual Interest Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(e.target.value)}
                  className="w-full pl-4 pr-8 py-2.5 border border-neutral-mid rounded-lg text-sm focus:outline-none focus:border-accent"
                  min="0.1"
                  max="30"
                  step="0.05"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
              </div>
            </div>

            {/* Payment frequency */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                Payment Frequency
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as Frequency)}
                className="w-full px-4 py-2.5 border border-neutral-mid rounded-lg text-sm focus:outline-none focus:border-accent bg-white"
              >
                {(Object.keys(FREQUENCY_LABELS) as Frequency[]).map((f) => (
                  <option key={f} value={f}>{FREQUENCY_LABELS[f]}</option>
                ))}
              </select>
            </div>

            {/* Amortization */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                Amortization Period
              </label>
              <div className="flex gap-2 flex-wrap">
                {AMORTIZATIONS.map((y) => (
                  <button
                    key={y}
                    onClick={() => setAmortization(y)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      amortization === y
                        ? "bg-primary text-white border-primary"
                        : "border-neutral-mid text-gray-600 hover:border-accent"
                    }`}
                  >
                    {y} yr
                  </button>
                ))}
              </div>
              {amortization > 25 && parseFloat(downPaymentPct) < 20 && (
                <p className="text-xs text-amber-600 mt-1.5">30-year amortization requires 20%+ down (uninsured)</p>
              )}
            </div>

            {/* Term */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                Mortgage Term
              </label>
              <div className="flex gap-2 flex-wrap">
                {TERMS.map((y) => (
                  <button
                    key={y}
                    onClick={() => setTerm(y)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      term === y
                        ? "bg-primary text-white border-primary"
                        : "border-neutral-mid text-gray-600 hover:border-accent"
                    }`}
                  >
                    {y} yr
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results ? (
          <>
            {/* Payment hero */}
            <div className="bg-primary rounded-2xl p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                {FREQUENCY_LABELS[frequency]} Payment
              </p>
              <p className="text-5xl font-bold mb-1">{fmtFull(results.periodicPayment)}</p>
              <p className="text-stone-400 text-sm">
                {amortization}-year amortization · {term}-year term · {parseFloat(annualRate).toFixed(2)}% interest rate
              </p>
            </div>

            {/* Breakdown grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Mortgage Amount", value: fmt(results.principal), note: results.isInsured ? "Incl. CMHC" : "No insurance" },
                { label: "Total Interest (full amort.)", value: fmt(results.totalInterestFullAmort), note: "If held to maturity" },
                { label: "Interest Paid in Term", value: fmt(results.interestPaidInTerm), note: `${term}-yr term` },
                { label: "Balance After Term", value: fmt(results.balanceAfterTerm), note: "Remaining principal" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-neutral-mid p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">{s.label}</p>
                  <p className="text-xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.note}</p>
                </div>
              ))}
            </div>

            {/* CMHC callout */}
            {results.isInsured && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600 font-bold text-sm">!</div>
                <div>
                  <p className="text-sm font-semibold text-amber-800">CMHC Mortgage Insurance Required</p>
                  <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
                    A {parseFloat(downPaymentPct).toFixed(1)}% down payment requires CMHC default insurance.
                    The premium is <strong>{(results.insurancePremiumRate * 100).toFixed(1)}%</strong> of the loan amount — {fmt(results.insuranceAmount)} — added to your mortgage.
                    To avoid CMHC insurance, put down 20% or more ({fmt(results.price * 0.2)}).
                  </p>
                </div>
              </div>
            )}

            {/* Stress test */}
            <div className="bg-white rounded-xl border border-neutral-mid p-6">
              <h3 className="text-sm font-bold text-primary mb-1">Federal Stress Test</h3>
              <p className="text-xs text-gray-500 mb-4">
                To qualify, lenders must verify you can afford payments at the higher of your contract rate + 2% or 5.25%.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-0.5">Qualifying Rate</p>
                  <p className="text-2xl font-bold text-primary">{(results.stressTestRate * 100).toFixed(2)}%</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-0.5">Qualifying Monthly Payment</p>
                  <p className="text-2xl font-bold text-primary">{fmtFull(results.stressMonthlyPayment)}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl border border-neutral-mid p-8 text-center text-gray-400 text-sm">
            Enter valid details above to see your estimate. Minimum 5% down payment required.
          </div>
        )}

        {/* Disclaimer + CTA */}
        <div className="bg-primary rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">Ready to Start Your Search?</h2>
            <p className="text-stone-400 text-sm max-w-md">
              Chan can connect you with a mortgage broker and walk you through what your budget means in today&apos;s Calgary market.
            </p>
          </div>
          <Link
            href="/buyer-intake"
            className="flex-shrink-0 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Start Your Home Search
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center leading-relaxed">
          For estimation purposes only. Uses semi-annual compounding as required by the Bank Act (Canada).
          Actual rates, payments, and qualification depend on your lender and financial profile.
          Consult a licensed mortgage professional before making any decisions.
        </p>
      </div>
    </div>
  );
}
