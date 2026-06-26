/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';

// Dynamic multi-dimensional configuration matrix factoring in base rates, regional multipliers, and tariff rates
const PRICING_MATRIX = {
  starter: {
    name: 'Starter Agent',
    baseRateUSD: 29,
    tariffs: {
      USD: 0.0,   // No surcharge
      EUR: 0.05,  // 5% regional tariff / VAT adjustment
      INR: 0.18   // 18% GST tariff
    },
    multipliers: {
      USD: 1.0,
      EUR: 0.92,
      INR: 83.0
    },
    features: [
      '3 Active Autonomous Agents',
      'Basic Decision Trees',
      'Sub-second Latency SLA',
      'Standard HSM Key Security',
      'Discord / Slack Integration Support'
    ]
  },
  pro: {
    name: 'Professional Agent',
    baseRateUSD: 79,
    tariffs: {
      USD: 0.0,
      EUR: 0.05,
      INR: 0.18
    },
    multipliers: {
      USD: 1.0,
      EUR: 0.92,
      INR: 83.0
    },
    features: [
      '15 Active Autonomous Agents',
      'Infinite Visual Workflow Canvas',
      'Advanced Self-Healing Routines',
      'Sub-15ms Latency Core SLA',
      'Premium Secure HSM Vaulting',
      'Database & High-Throughput Broker Sync'
    ]
  },
  enterprise: {
    name: 'Enterprise Grid',
    baseRateUSD: 199,
    tariffs: {
      USD: 0.0,
      EUR: 0.05,
      INR: 0.18
    },
    multipliers: {
      USD: 1.0,
      EUR: 0.92,
      INR: 83.0
    },
    features: [
      'Unlimited Autonomous Agents',
      'Unlimited Multi-Agent Canvas Layers',
      'Sovereign Weight Fine-Tuning Support',
      'Guaranteed Sub-10ms Latency SLA',
      'Sovereign HSM Custody Shielding',
      '24/7 Redundant SLA Operations Group'
    ]
  }
};

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  INR: '₹'
};

export default function PricingSection() {
  // Elements references for performance isolated DOM modifications (no React re-renders)
  const currencySelectRef = useRef<HTMLSelectElement | null>(null);
  
  // DOM text nodes to receive direct isolated updates
  const priceStarterRef = useRef<HTMLSpanElement | null>(null);
  const suffixStarterRef = useRef<HTMLSpanElement | null>(null);
  const totalStarterRef = useRef<HTMLDivElement | null>(null);

  const priceProRef = useRef<HTMLSpanElement | null>(null);
  const suffixProRef = useRef<HTMLSpanElement | null>(null);
  const totalProRef = useRef<HTMLDivElement | null>(null);

  const priceEnterpriseRef = useRef<HTMLSpanElement | null>(null);
  const suffixEnterpriseRef = useRef<HTMLSpanElement | null>(null);
  const totalEnterpriseRef = useRef<HTMLDivElement | null>(null);

  // References for billing cycle buttons
  const toggleMonthlyBtnRef = useRef<HTMLButtonElement | null>(null);
  const toggleAnnualBtnRef = useRef<HTMLButtonElement | null>(null);
  
  // Track active billing cycle purely as a ref to prevent any React state reflows
  const activeBillingCycleRef = useRef<'monthly' | 'annual'>('monthly');

  // Calculates rates dynamically based on the pricing matrix, billing cycle, and tariff surcharge
  const calculateAndRenderPrices = () => {
    const currency = currencySelectRef.current ? currencySelectRef.current.value : 'USD';
    const billingCycle = activeBillingCycleRef.current;
    const symbol = CURRENCY_SYMBOLS[currency] || '$';

    const tiers = ['starter', 'pro', 'enterprise'] as const;
    const refs = {
      starter: { price: priceStarterRef, suffix: suffixStarterRef, total: totalStarterRef },
      pro: { price: priceProRef, suffix: suffixProRef, total: totalProRef },
      enterprise: { price: priceEnterpriseRef, suffix: suffixEnterpriseRef, total: totalEnterpriseRef }
    };

    tiers.forEach(tier => {
      const data = PRICING_MATRIX[tier];
      const baseUSD = data.baseRateUSD;
      const regionalMultiplier = data.multipliers[currency as 'USD' | 'EUR' | 'INR'];
      const tariffSurcharge = data.tariffs[currency as 'USD' | 'EUR' | 'INR'];

      // Factor in regional surcharge tariff
      const surchargedUSD = baseUSD * (1 + tariffSurcharge);
      
      // Localized price amount
      const localizedRate = surchargedUSD * regionalMultiplier;

      const targetRefs = refs[tier];
      
      if (billingCycle === 'monthly') {
        // Render monthly rate
        const formattedPrice = localizedRate.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        
        if (targetRefs.price.current) targetRefs.price.current.textContent = `${symbol}${formattedPrice}`;
        if (targetRefs.suffix.current) targetRefs.suffix.current.textContent = '/mo';
        if (targetRefs.total.current) targetRefs.total.current.textContent = 'Billed month-to-month';
      } else {
        // Factor in flat 20% annual discount multiplier (0.80)
        const discountedMonthlyEquivalent = localizedRate * 0.80;
        const fullYearPrice = discountedMonthlyEquivalent * 12;

        const formattedMonthly = discountedMonthlyEquivalent.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        const formattedYearly = fullYearPrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

        if (targetRefs.price.current) targetRefs.price.current.textContent = `${symbol}${formattedMonthly}`;
        if (targetRefs.suffix.current) targetRefs.suffix.current.textContent = '/mo';
        if (targetRefs.total.current) targetRefs.total.current.textContent = `Billed annually — ${symbol}${formattedYearly}/yr (Saved 20%)`;
      }
    });
  };

  const setBillingCycle = (cycle: 'monthly' | 'annual') => {
    activeBillingCycleRef.current = cycle;
    
    // Update button visual states directly via DOM classes (bypassing React re-renders)
    if (toggleMonthlyBtnRef.current && toggleAnnualBtnRef.current) {
      if (cycle === 'monthly') {
        toggleMonthlyBtnRef.current.className = 'relative rounded-md px-4 py-1.5 text-xs font-semibold bg-brand-forsythia text-brand-oceanic shadow transition-all duration-200';
        toggleAnnualBtnRef.current.className = 'relative rounded-md px-4 py-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-all duration-200';
      } else {
        toggleMonthlyBtnRef.current.className = 'relative rounded-md px-4 py-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-all duration-200';
        toggleAnnualBtnRef.current.className = 'relative rounded-md px-4 py-1.5 text-xs font-semibold bg-brand-forsythia text-brand-oceanic shadow transition-all duration-200';
      }
    }

    calculateAndRenderPrices();
  };

  // Perform initial calculation on mount to render exact values
  useEffect(() => {
    calculateAndRenderPrices();
  }, []);

  return (
    <section className="bg-brand-oceanic py-24 border-b border-white/5" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.2em] text-brand-forsythia uppercase">
            MATRIX-DRIVEN PRICING
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-sans">
            Scale-to-Zero Capabilities
          </h2>
          <p className="text-gray-400 text-lg">
            Choose a tier calibrated to your processing scale. Dynamically switch currency formats and billing structures with zero platform re-renders.
          </p>
        </div>

        {/* CONTROLS BAR: Currency Switcher & Billing Toggle (Isolated Interactions) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* Currency Dropdown Select */}
          <div className="flex items-center gap-3">
            <label htmlFor="currency-select" className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              BASE CURRENCY:
            </label>
            <select
              id="currency-select"
              ref={currencySelectRef}
              onChange={calculateAndRenderPrices}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono font-semibold text-white focus:border-brand-forsythia focus:outline-none transition-all duration-200 cursor-pointer"
            >
              <option value="USD" className="bg-brand-oceanic text-white font-mono">USD ($)</option>
              <option value="EUR" className="bg-brand-oceanic text-white font-mono">EUR (€)</option>
              <option value="INR" className="bg-brand-oceanic text-white font-mono">INR (₹)</option>
            </select>
          </div>

          {/* Billing Cycle Switch (Monthly vs Annual Buttons) */}
          <div className="flex items-center gap-2 p-1 rounded-lg border border-white/5 bg-white/[0.02]">
            <button
              type="button"
              ref={toggleMonthlyBtnRef}
              onClick={() => setBillingCycle('monthly')}
              className="relative rounded-md px-4 py-1.5 text-xs font-semibold bg-brand-forsythia text-brand-oceanic shadow transition-all duration-200"
              id="btn-billing-monthly"
            >
              Monthly
            </button>
            <button
              type="button"
              ref={toggleAnnualBtnRef}
              onClick={() => setBillingCycle('annual')}
              className="relative rounded-md px-4 py-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-all duration-200"
              id="btn-billing-annual"
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* PRICING MATRIX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="pricing-matrix-cards">
          
          {/* STARTER CARD */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-300 font-sans">{PRICING_MATRIX.starter.name}</h3>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">LIGHTWEIGHT</span>
              </div>
              
              {/* Isolated Pricing DOM Nodes */}
              <div className="flex items-baseline mb-2">
                <span id="price-starter" ref={priceStarterRef} className="text-4xl font-extrabold text-white font-mono transition-all duration-150">
                  $29
                </span>
                <span id="suffix-starter" ref={suffixStarterRef} className="text-sm font-mono text-gray-400 ml-1">
                  /mo
                </span>
              </div>
              <div id="total-starter" ref={totalStarterRef} className="text-[11px] font-mono text-brand-mint mb-6">
                Billed month-to-month
              </div>

              <div className="border-t border-white/5 pt-6 space-y-4">
                {PRICING_MATRIX.starter.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-400">
                    <Check className="h-4 w-4 text-brand-mint shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-8 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Initialize Cluster
            </button>
          </div>

          {/* PRO CARD (Popular) */}
          <div className="rounded-2xl border border-brand-forsythia/30 bg-white/[0.03] p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_-5px_rgba(255,200,1,0.1)]">
            {/* Top glowing bar */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-forsythia to-brand-saffron" />
            
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white font-sans">{PRICING_MATRIX.pro.name}</h3>
                <span className="text-[10px] font-mono text-brand-forsythia uppercase tracking-widest bg-brand-forsythia/10 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5" />
                  RECOMMENDED
                </span>
              </div>
              
              {/* Isolated Pricing DOM Nodes */}
              <div className="flex items-baseline mb-2">
                <span id="price-pro" ref={priceProRef} className="text-4xl font-extrabold text-white font-mono transition-all duration-150">
                  $79
                </span>
                <span id="suffix-pro" ref={suffixProRef} className="text-sm font-mono text-gray-400 ml-1">
                  /mo
                </span>
              </div>
              <div id="total-pro" ref={totalProRef} className="text-[11px] font-mono text-brand-forsythia mb-6">
                Billed month-to-month
              </div>

              <div className="border-t border-brand-forsythia/10 pt-6 space-y-4">
                {PRICING_MATRIX.pro.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                    <Check className="h-4 w-4 text-brand-forsythia shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-8 rounded-xl bg-brand-forsythia py-3 text-sm font-semibold text-brand-oceanic hover:bg-white transition-all duration-300"
            >
              Launch Custom Daemon
            </button>
          </div>

          {/* ENTERPRISE CARD */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-300 font-sans">{PRICING_MATRIX.enterprise.name}</h3>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">SOVEREIGN</span>
              </div>
              
              {/* Isolated Pricing DOM Nodes */}
              <div className="flex items-baseline mb-2">
                <span id="price-enterprise" ref={priceEnterpriseRef} className="text-4xl font-extrabold text-white font-mono transition-all duration-150">
                  $199
                </span>
                <span id="suffix-enterprise" ref={suffixEnterpriseRef} className="text-sm font-mono text-gray-400 ml-1">
                  /mo
                </span>
              </div>
              <div id="total-enterprise" ref={totalEnterpriseRef} className="text-[11px] font-mono text-brand-mint mb-6">
                Billed month-to-month
              </div>

              <div className="border-t border-white/5 pt-6 space-y-4">
                {PRICING_MATRIX.enterprise.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-400">
                    <Check className="h-4 w-4 text-brand-mint shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-8 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Contact Solutions Group
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
