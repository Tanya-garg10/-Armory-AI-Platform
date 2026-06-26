/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, HeartPulse, Building2, Landmark, Shield } from 'lucide-react';

const PARTNERS = [
  { name: 'Cigna', icon: HeartPulse, label: 'cigna' },
  { name: 'Aetna', icon: Shield, label: 'aetna' },
  { name: 'Anthem', icon: Building2, label: 'Anthem' },
  { name: 'CVS Pharmacy', icon: Landmark, label: 'CVS pharmacy' },
  { name: 'UnitedHealthcare', icon: ShieldAlert, label: 'UnitedHealthcare' }
];

export default function Partners() {
  return (
    <section className="bg-brand-oceanic border-y border-white/5 py-10 relative overflow-hidden" id="partners">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase">
          TRUSTED BY LEADERS IN ENTERPRISE SYSTEMS INTEGRATIONS
        </p>
      </div>

      {/* Infinite scrolling wrapper */}
      <div className="flex w-full overflow-hidden select-none relative [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        {/* We double the items list to make it infinitely scrollable smoothly */}
        <div className="flex gap-16 md:gap-24 items-center shrink-0 min-w-full animate-marquee py-2">
          {PARTNERS.map((partner, idx) => (
            <div key={`partner-a-${idx}`} className="flex items-center gap-3 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer group">
              <partner.icon className="h-6 w-6 text-brand-mint group-hover:text-brand-forsythia transition-colors duration-300" />
              <span className="font-sans text-lg font-bold tracking-tight text-white group-hover:text-brand-forsythia transition-colors duration-300">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-16 md:gap-24 items-center shrink-0 min-w-full aria-hidden animate-marquee py-2">
          {PARTNERS.map((partner, idx) => (
            <div key={`partner-b-${idx}`} className="flex items-center gap-3 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer group">
              <partner.icon className="h-6 w-6 text-brand-mint group-hover:text-brand-forsythia transition-colors duration-300" />
              <span className="font-sans text-lg font-bold tracking-tight text-white group-hover:text-brand-forsythia transition-colors duration-300">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles inline for infinite scroll since Tailwind doesn't configure marquee out-of-the-box */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
