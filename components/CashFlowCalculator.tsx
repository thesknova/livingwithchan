"use client";

import { useState, useMemo } from "react";

function currency(n: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

function pct(n: number) {
  return n.toFixed(2) + "%";
}

export default function CashFlowCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [downPct, setDownPct] = useState(20);
  const [interestRate, setInterestRate] = useState(5.5);
  const [amortization, setAmortization] = useState(25);
  const [monthlyRent, setMonthlyRent] = useState(2400);
  const [propTax, setPropTax] = useState(300);
  const [insurance, setInsurance] = useState(120);
  const [maintenance, setMaintenance] = useState(250);
  const [propertyMgmt, setPropertyMgmt] = useState(8);
  const [vacancy, setVacancy] = useState(5);

  const results = useMemo(() => {
    const downPayment = (downPct / 100) * purchasePrice;
    const loanAmount = purchasePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = amortization * 12;

    // Mortgage payment (standard amortization formula)
    const mortgage =
      monthlyRate === 0
        ? loanAmount / numPayments
        : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);

    const vacancyLoss = (vacancy / 100) * monthlyRent;
    const effectiveRent = monthlyRent - vacancyLoss;
    const mgmtFee = (propertyMgmt / 100) * monthlyRent;

    const totalExpenses = mortgage + propTax + insurance + maintenance + mgmtFee;
    const cashFlow = effectiveRent - totalExpenses;

    // Annual figures
    const annualNOI =
      effectiveRent * 12 - (propTax + insurance + maintenance + mgmtFee) * 12;
    const capRate = (annualNOI / purchasePrice) * 100;
    const annualCashFlow = cashFlow * 12;
    const cashOnCash = (annualCashFlow / downPayment) * 100;

    return {
      downPayment,
      mortgage,
      effectiveRent,
      totalExpenses,
      cashFlow,
      capRate,
      cashOnCash,
      annualCashFlow,
    };
  }, [
    purchasePrice, downPct, interestRate, amortization,
    monthlyRent, propTax, insurance, maintenance, propertyMgmt, vacancy,
  ]);

  const cashFlowPositive = results.cashFlow >= 0;

  return (
    <div className="bg-white rounded-2xl border border-neutral-mid shadow-sm overflow-hidden">
      <div className="bg-primary px-8 py-5">
        <h2 className="text-xl font-bold text-white">Cash Flow Calculator</h2>
        <p className="text-stone-400 text-sm mt-1">
          Estimate your monthly return before talking to Chan — numbers update live.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-mid">

        {/* Inputs */}
        <div className="p-8 space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Property & Financing</p>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-primary">Purchase Price</label>
              <span className="text-sm font-bold text-primary">{currency(purchasePrice)}</span>
            </div>
            <input type="range" min={200000} max={2000000} step={10000}
              value={purchasePrice} onChange={e => setPurchasePrice(+e.target.value)}
              className="w-full accent-accent" />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5"><span>$200K</span><span>$2M</span></div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-primary">Down Payment</label>
              <span className="text-sm font-bold text-primary">{downPct}% — {currency(results.downPayment)}</span>
            </div>
            <input type="range" min={5} max={50} step={1}
              value={downPct} onChange={e => setDownPct(+e.target.value)}
              className="w-full accent-accent" />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5"><span>5%</span><span>50%</span></div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-primary">Interest Rate</label>
              <span className="text-sm font-bold text-primary">{interestRate.toFixed(1)}%</span>
            </div>
            <input type="range" min={2} max={10} step={0.1}
              value={interestRate} onChange={e => setInterestRate(+e.target.value)}
              className="w-full accent-accent" />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5"><span>2%</span><span>10%</span></div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-primary">Amortization</label>
              <span className="text-sm font-bold text-primary">{amortization} years</span>
            </div>
            <input type="range" min={10} max={30} step={5}
              value={amortization} onChange={e => setAmortization(+e.target.value)}
              className="w-full accent-accent" />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5"><span>10 yr</span><span>30 yr</span></div>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2 pt-2">Income & Expenses</p>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-primary">Monthly Rent</label>
              <span className="text-sm font-bold text-primary">{currency(monthlyRent)}</span>
            </div>
            <input type="range" min={800} max={6000} step={50}
              value={monthlyRent} onChange={e => setMonthlyRent(+e.target.value)}
              className="w-full accent-accent" />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5"><span>$800</span><span>$6,000</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-medium text-primary">Property Tax/mo</label>
                <span className="text-xs font-bold text-primary">{currency(propTax)}</span>
              </div>
              <input type="range" min={100} max={800} step={25}
                value={propTax} onChange={e => setPropTax(+e.target.value)}
                className="w-full accent-accent" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-medium text-primary">Insurance/mo</label>
                <span className="text-xs font-bold text-primary">{currency(insurance)}</span>
              </div>
              <input type="range" min={50} max={400} step={10}
                value={insurance} onChange={e => setInsurance(+e.target.value)}
                className="w-full accent-accent" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-medium text-primary">Maintenance/mo</label>
                <span className="text-xs font-bold text-primary">{currency(maintenance)}</span>
              </div>
              <input type="range" min={0} max={800} step={25}
                value={maintenance} onChange={e => setMaintenance(+e.target.value)}
                className="w-full accent-accent" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-medium text-primary">Vacancy Rate</label>
                <span className="text-xs font-bold text-primary">{vacancy}%</span>
              </div>
              <input type="range" min={0} max={15} step={1}
                value={vacancy} onChange={e => setVacancy(+e.target.value)}
                className="w-full accent-accent" />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-primary">Property Management</label>
              <span className="text-sm font-bold text-primary">{propertyMgmt}% of rent</span>
            </div>
            <input type="range" min={0} max={15} step={1}
              value={propertyMgmt} onChange={e => setPropertyMgmt(+e.target.value)}
              className="w-full accent-accent" />
            <p className="text-xs text-gray-400 mt-0.5">Set to 0% if self-managing</p>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 flex flex-col">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Your Results</p>

          {/* Big cash flow number */}
          <div className={`rounded-2xl p-6 mb-6 text-center ${cashFlowPositive ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            <p className="text-sm font-medium text-gray-500 mb-1">Monthly Cash Flow</p>
            <p className={`text-5xl font-black ${cashFlowPositive ? "text-green-600" : "text-red-500"}`}>
              {currency(results.cashFlow)}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {cashFlowPositive ? "Positive cash flow — this property pays you." : "Negative cash flow — review your numbers."}
            </p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: "Cap Rate", value: pct(results.capRate), tip: "Net income ÷ purchase price" },
              { label: "Cash-on-Cash", value: pct(results.cashOnCash), tip: "Annual cash flow ÷ down payment" },
              { label: "Annual Cash Flow", value: currency(results.annualCashFlow), tip: "Monthly × 12" },
              { label: "Monthly Mortgage", value: currency(results.mortgage), tip: "Principal + interest" },
            ].map((m) => (
              <div key={m.label} className="bg-neutral-light rounded-xl p-4 border border-neutral-mid">
                <p className="text-xs text-gray-400 mb-1">{m.label}</p>
                <p className="text-lg font-bold text-primary">{m.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{m.tip}</p>
              </div>
            ))}
          </div>

          {/* Expense breakdown */}
          <div className="bg-neutral-light rounded-xl p-5 border border-neutral-mid mb-6 flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Monthly Breakdown</p>
            <div className="space-y-2">
              {[
                { label: "Effective Rent Income", value: results.effectiveRent, positive: true },
                { label: "Mortgage Payment", value: -results.mortgage },
                { label: "Property Tax", value: -propTax },
                { label: "Insurance", value: -insurance },
                { label: "Maintenance", value: -maintenance },
                { label: "Property Management", value: -(propertyMgmt / 100) * monthlyRent },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-gray-600">{row.label}</span>
                  <span className={`font-semibold ${row.positive ? "text-green-600" : "text-gray-700"}`}>
                    {row.positive ? "+" : ""}{currency(row.value)}
                  </span>
                </div>
              ))}
              <div className="border-t border-neutral-mid pt-2 flex justify-between text-sm font-bold">
                <span className="text-primary">Net Cash Flow</span>
                <span className={cashFlowPositive ? "text-green-600" : "text-red-500"}>
                  {currency(results.cashFlow)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            * Estimates only. Does not include CMHC insurance, closing costs, or income tax. Consult Chan and a mortgage broker for accurate figures.
          </p>
        </div>
      </div>
    </div>
  );
}
