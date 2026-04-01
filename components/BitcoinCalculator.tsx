"use client";

import { useState, useEffect, useCallback } from "react";

function formatCAD(n: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatBTC(n: number) {
  if (n < 0.001) return n.toFixed(6) + " BTC";
  if (n < 0.01) return n.toFixed(5) + " BTC";
  if (n < 1) return n.toFixed(4) + " BTC";
  return n.toFixed(4) + " BTC";
}

const CAD_MIN = 100_000;
const CAD_MAX = 3_000_000;
const CAD_STEP = 10_000;
const BTC_MIN = 0.1;
const BTC_MAX = 50;
const BTC_STEP = 0.01;

export default function BitcoinCalculator() {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState(false);

  const [cadAmount, setCadAmount] = useState(750_000);
  const [btcAmount, setBtcAmount] = useState<number | null>(null);

  // Which slider was last moved — used to avoid circular updates
  const [lastEdited, setLastEdited] = useState<"cad" | "btc">("cad");

  // Fetch live BTC/CAD price from CoinGecko (no API key required)
  const fetchPrice = useCallback(async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad",
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("fetch failed");
      const data = await res.json();
      const price: number = data?.bitcoin?.cad;
      if (!price || price <= 0) throw new Error("invalid price");
      setBtcPrice(price);
      setFetchError(false);
      setLastUpdated(new Date().toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit" }));
    } catch {
      setFetchError(true);
      // Fallback: use a reasonable estimate so the calculator still works
      if (!btcPrice) setBtcPrice(150_000);
    }
  }, [btcPrice]);

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 60_000); // refresh every 60s
    return () => clearInterval(interval);
  }, [fetchPrice]);

  // Keep BTC in sync when price loads or CAD changes
  useEffect(() => {
    if (btcPrice && lastEdited === "cad") {
      setBtcAmount(cadAmount / btcPrice);
    }
  }, [btcPrice, cadAmount, lastEdited]);

  useEffect(() => {
    if (btcPrice && lastEdited === "btc" && btcAmount !== null) {
      setCadAmount(btcAmount * btcPrice);
    }
  }, [btcPrice, btcAmount, lastEdited]);

  const handleCadSlider = (val: number) => {
    setLastEdited("cad");
    setCadAmount(val);
    if (btcPrice) setBtcAmount(val / btcPrice);
  };

  const handleBtcSlider = (val: number) => {
    setLastEdited("btc");
    setBtcAmount(val);
    if (btcPrice) setCadAmount(val * btcPrice);
  };

  const displayBTC = btcAmount !== null ? btcAmount : btcPrice ? cadAmount / btcPrice : null;
  const clampedBtc = displayBTC !== null ? Math.min(Math.max(displayBTC, BTC_MIN), BTC_MAX) : BTC_MIN;
  const clampedCad = Math.min(Math.max(cadAmount, CAD_MIN), CAD_MAX);

  return (
    <div className="bg-white rounded-2xl border border-neutral-mid shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a1a2e] px-8 py-5 flex items-start justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            {/* Bitcoin logo SVG */}
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#F7931A"/>
              <path d="M22.4 14.1c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.7-.4-.7 2.6c-.4-.1-.9-.2-1.4-.3l.7-2.7-1.7-.4-.7 2.7-3.3-.8-.4 1.8s1.3.3 1.2.3c.7.2.8.6.8.9l-.9 3.6c.1 0 .2 0 .3.1l-.3-.1-1.2 4.8c-.1.2-.3.6-.9.4.0 0-1.2-.3-1.2-.3l-.8 1.9 3.1.8.6-.3-.7 2.8 1.7.4.7-2.7c.5.1 1 .3 1.4.4l-.7 2.7 1.7.4.7-2.7c2.9.5 5.1.3 6-2.3.7-2-.0-3.2-1.5-3.9 1.1-.2 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2-3.9.9-5 .7l.9-3.5c1.1.3 4.6.8 4.1 2.8zm.5-5.3c-.5 1.8-3.4.9-4.3.7l.8-3.2c.9.2 3.8.7 3.5 2.5z" fill="white"/>
            </svg>
            <h2 className="text-xl font-bold text-white">BTC ↔ CAD Calculator</h2>
          </div>
          <p className="text-gray-400 text-xs">Live Bitcoin price — updates every 60 seconds</p>
        </div>
        <div className="text-right">
          {btcPrice ? (
            <>
              <p className="text-2xl font-black text-[#F7931A]">{formatCAD(btcPrice)}</p>
              <p className="text-xs text-gray-400">
                1 BTC
                {lastUpdated && !fetchError && (
                  <span className="ml-2 text-green-400">· updated {lastUpdated}</span>
                )}
                {fetchError && (
                  <span className="ml-2 text-yellow-400">· estimated</span>
                )}
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-400 animate-pulse">Fetching price…</p>
          )}
        </div>
      </div>

      {!btcPrice ? (
        <div className="p-10 text-center text-gray-400 text-sm">Loading live Bitcoin price…</div>
      ) : (
        <div className="p-8 space-y-8">

          {/* CAD Slider */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="text-sm font-bold text-primary">Property Value (CAD)</label>
              <span className="text-xl font-black text-primary tabular-nums">{formatCAD(clampedCad)}</span>
            </div>
            <input
              type="range"
              min={CAD_MIN}
              max={CAD_MAX}
              step={CAD_STEP}
              value={clampedCad}
              onChange={(e) => handleCadSlider(Number(e.target.value))}
              className="w-full accent-[#F7931A] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$100K</span>
              <span>$3M</span>
            </div>
          </div>

          {/* Divider with equals */}
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-dashed border-neutral-mid" />
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest px-2">=</span>
            <div className="flex-1 border-t border-dashed border-neutral-mid" />
          </div>

          {/* BTC Slider */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="text-sm font-bold text-primary">Bitcoin Amount (BTC)</label>
              <span className="text-xl font-black text-[#F7931A] tabular-nums">
                {displayBTC !== null ? formatBTC(displayBTC) : "—"}
              </span>
            </div>
            <input
              type="range"
              min={BTC_MIN}
              max={BTC_MAX}
              step={BTC_STEP}
              value={clampedBtc}
              onChange={(e) => handleBtcSlider(Number(e.target.value))}
              className="w-full accent-[#F7931A] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0.1 BTC</span>
              <span>50 BTC</span>
            </div>
          </div>

          {/* Context tiles */}
          {displayBTC !== null && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                {
                  label: "CAD equivalent",
                  value: formatCAD(clampedCad),
                  sub: "at current BTC price",
                },
                {
                  label: "Bitcoin required",
                  value: formatBTC(displayBTC),
                  sub: `@ ${formatCAD(btcPrice)}/BTC`,
                },
                {
                  label: "Est. BTC tx fee",
                  value: "< $50 CAD",
                  sub: "vs. bank wire 2–5%",
                },
              ].map((tile) => (
                <div key={tile.label} className="bg-neutral-light rounded-xl border border-neutral-mid p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">{tile.label}</p>
                  <p className="text-base font-bold text-primary leading-tight">{tile.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{tile.sub}</p>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-gray-400 leading-relaxed">
            * Price sourced from CoinGecko. For informational purposes only — not a quote. Actual transaction rates may differ. Always confirm the BTC/CAD rate with your broker at time of closing.
          </p>
        </div>
      )}
    </div>
  );
}
