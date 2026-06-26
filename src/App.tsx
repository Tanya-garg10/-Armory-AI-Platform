/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import FeaturesBento from './components/FeaturesBento';
import WorkflowBuilder from './components/WorkflowBuilder';
import TelemetryDashboard from './components/TelemetryDashboard';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ultra high-speed initial loader to satisfy the strict <500ms performance cap
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-oceanic text-white select-none selection:bg-brand-forsythia selection:text-brand-oceanic antialiased overflow-x-hidden">
      
      {/* 400ms High-Performance System Core Boot Loader */}
      {loading && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-oceanic flex flex-col items-center justify-center font-mono text-white transition-all duration-300 ease-out pointer-events-none" 
          id="armory-boot-loader"
        >
          <div className="flex flex-col items-center gap-4">
            <Cpu className="h-10 w-10 text-brand-forsythia animate-spin" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-forsythia bg-brand-forsythia/10 px-3 py-1 rounded animate-pulse">
              ARMORY_DAEMON_BOOTING...
            </span>
          </div>
        </div>
      )}

      {/* Main Core Application Structure (Semantic Layout) */}
      <div className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <Partners />
          <FeaturesBento />
          <WorkflowBuilder />
          <TelemetryDashboard />
          <PricingSection />
          <Testimonials />
          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
}
