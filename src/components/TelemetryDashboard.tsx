/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Gauge, TrendingUp, Sparkles } from 'lucide-react';

export default function TelemetryDashboard() {
  const [systemLoad, setSystemLoad] = useState<number>(14);
  const [slaResponse, setSlaResponse] = useState<number>(99.98);
  const [tokenThroughput, setTokenThroughput] = useState<number>(342);
  const [activeNodes, setActiveNodes] = useState<number>(115);

  // Live update mock logs/metrics to simulate production data-flows
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return Math.max(8, Math.min(35, next));
      });
      setSlaResponse(prev => {
        const delta = (Math.random() * 0.02) - 0.01;
        const next = Number((prev + delta).toFixed(3));
        return Math.max(99.95, Math.min(100, next));
      });
      setTokenThroughput(prev => {
        const delta = Math.floor(Math.random() * 11) - 5;
        const next = prev + delta;
        return Math.max(300, Math.min(390, next));
      });
      setActiveNodes(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return Math.max(110, Math.min(125, next));
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-brand-oceanic py-24 border-b border-white/5 relative" id="telemetry">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title / Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.2em] text-brand-mint uppercase">
            PRODUCT STATISTICS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-sans">
            Optimized for performance
          </h2>
          <p className="text-gray-400 text-lg">
            Monitor every neural pulse in real-time. Armory provides deep telemetry into agent accuracy, server latency, and token efficiency.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="telemetry-dashboard-grid">
          
          {/* Card 1: System Load */}
          <div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-gray-500">% SYSTEM LOAD</span>
              <Gauge className="h-4 w-4 text-brand-forsythia" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white font-mono transition-all duration-300">
                  {systemLoad}
                </span>
                <span className="text-sm font-mono text-gray-400">%</span>
              </div>
              <p className="text-xs text-gray-400 font-sans mt-2">Active neural processing capacity</p>
            </div>
            {/* Fine graph outline */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-brand-forsythia h-full rounded-full transition-all duration-500" style={{ width: `${systemLoad * 2.5}%` }} />
              </div>
            </div>
          </div>

          {/* Card 2: Uptime SLA */}
          <div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-gray-500">% SLA RESPONSE</span>
              <ShieldCheck className="h-4 w-4 text-brand-mint" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white font-mono transition-all duration-300">
                  {slaResponse}
                </span>
                <span className="text-sm font-mono text-gray-400">%</span>
              </div>
              <p className="text-xs text-gray-400 font-sans mt-2">Global uptime guarantee matrix</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-brand-mint">
              <span>99.99% CACHED</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-mint animate-ping" />
            </div>
          </div>

          {/* Card 3: Token Usage */}
          <div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-gray-500">TOKEN THROUGHPUT</span>
              <Activity className="h-4 w-4 text-brand-saffron" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white font-mono transition-all duration-300">
                  {tokenThroughput}
                </span>
                <span className="text-xs font-mono text-gray-400">K/SEC</span>
              </div>
              <p className="text-xs text-gray-400 font-sans mt-2">Aggregate transaction volume</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>ACTIVE INBOUND</span>
              <span>{activeNodes} NODES</span>
            </div>
          </div>

          {/* Card 4: Efficiency Vector */}
          <div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-gray-500">% EFFICIENCY GAINS</span>
              <TrendingUp className="h-4 w-4 text-brand-mint" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white font-mono">
                  82
                </span>
                <span className="text-sm font-mono text-gray-400">%</span>
              </div>
              <p className="text-xs text-gray-400 font-sans mt-2">Net growth over 30 days cycle</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span className="text-brand-mint font-semibold">OPTIMIZED WEIGHTS</span>
              <Sparkles className="h-3 w-3 text-brand-forsythia" />
            </div>
          </div>

        </div>

        {/* Big visual telemetric graph simulation inside the container */}
        <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.01] p-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 font-mono text-xs text-gray-500">
            <span>REAL-TIME INFERENCE LATENCY SIGNAL</span>
            <span className="text-brand-forsythia font-bold">AVG: 12.4MS</span>
          </div>
          
          {/* SVG graph */}
          <div className="h-32 w-full relative">
            <svg viewBox="0 0 1000 100" className="w-full h-full text-brand-forsythia stroke-current" preserveAspectRatio="none">
              <path 
                d="M 0,50 Q 100,20 200,60 T 400,30 T 600,75 T 800,45 T 1000,35" 
                fill="none" 
                strokeWidth="2" 
                className="transition-all duration-1000" 
              />
              {/* Pulse overlay line */}
              <path 
                d="M 0,50 Q 100,20 200,60 T 400,30 T 600,75 T 800,45 T 1000,35" 
                fill="none" 
                strokeWidth="6" 
                strokeOpacity="0.15"
                className="blur-sm"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 flex justify-between font-mono text-[9px] text-gray-600">
              <span>-60S</span>
              <span>-45S</span>
              <span>-30S</span>
              <span>-15S</span>
              <span>LIVE FEED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
