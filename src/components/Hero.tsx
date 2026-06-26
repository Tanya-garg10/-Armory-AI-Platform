/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Terminal, Shield, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-oceanic py-24 sm:py-32" id="hero">
      {/* Background Radial Glow Layer */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-20%] h-[600px] w-[600px] rounded-full bg-brand-nocturnal blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-saffron/20 blur-[130px]" />
        {/* Fine Matrix Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono font-medium text-brand-mint" id="hero-badge">
              <Terminal className="h-3.5 w-3.5 text-brand-forsythia animate-pulse" />
              <span>STABLE RELEASE V1.2 — ZERO COMPONENT REFLOWS</span>
            </div>

            {/* Title */}
            <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-6.5xl leading-[1.1]" id="hero-title">
              Power your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-forsythia via-brand-saffron to-brand-mint">
                future with AI
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg sm:text-xl text-gray-300 leading-relaxed font-sans" id="hero-desc">
              Deploy custom enterprise agents and automate complex, multi-modal workflows. Scale your operational intelligence with Armory's isolated runtime today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#workflow"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-forsythia to-brand-saffron px-6 py-3.5 text-base font-semibold text-brand-oceanic shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                id="hero-cta-primary"
              >
                Build a Workflow
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                id="hero-cta-secondary"
              >
                Explore Agent Architecture
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/5 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-brand-mint" />
                <span>Enterprise Shield™ Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>99.99% Core Runtime SLA</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Pure CSS Interactive Terminal Grid */}
          <div className="lg:col-span-5 relative group" id="hero-visual">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-nocturnal/30 to-brand-saffron/10 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
            <div className="relative rounded-2xl border border-white/10 bg-brand-oceanic/90 p-5 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-gray-500">armory-runtime.sh</div>
                <div className="h-4 w-4 rounded bg-white/5" />
              </div>

              {/* Terminal Live logs */}
              <div className="space-y-3 font-mono text-xs text-gray-300 select-none">
                <div className="flex items-start gap-2">
                  <span className="text-brand-forsythia">$</span>
                  <span className="text-gray-400">armory daemon --init --verbose</span>
                </div>
                <div className="text-brand-mint font-medium animate-pulse">● [OK] Cryptographic channel secured. [TLS_1.3]</div>
                <div className="text-gray-400">⚡ [SYS] Spinning up Isolated Agent Sandbox (Process #028)...</div>
                <div className="text-gray-400">⚙️ [LOG] Connecting cognitive weights (70B MoE model)...</div>
                <div className="text-brand-saffron font-medium">✓ [READY] Listening on interface 0.0.0.0:3000</div>
                <div className="pt-2 border-t border-white/5 mt-4">
                  <div className="flex justify-between items-center text-[10px] text-gray-500">
                    <span>BANDWIDTH: 1.2 GB/S</span>
                    <span>LATENCY: 12MS</span>
                  </div>
                </div>
              </div>

              {/* Graphical overlay floating */}
              <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-brand-forsythia/10 blur-xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
