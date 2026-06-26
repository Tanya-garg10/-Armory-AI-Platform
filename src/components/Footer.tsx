/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormEvent } from 'react';
import { Cpu, ArrowRight, Github, Twitter, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! We will send you our quarterly developer updates.');
  };

  return (
    <footer className="bg-brand-oceanic border-t border-white/5 relative overflow-hidden" id="footer">
      
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-nocturnal/10 blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-flex items-center gap-2 font-mono text-2xl font-bold tracking-tight text-white group" id="footer-logo">
              <Cpu className="h-6 w-6 text-brand-forsythia transition-transform duration-300 group-hover:rotate-12" />
              <span>armory</span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm font-sans leading-relaxed">
              Automate enterprise logistics and process intelligence through self-healing, hardware-shielded multi-agent structures.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-brand-forsythia transition-colors duration-200"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-forsythia transition-colors duration-200"><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-forsythia transition-colors duration-200"><MessageSquare className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">PRODUCT</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-white transition-colors duration-200">AI Strategy</a></li>
                <li><a href="#workflow" className="hover:text-white transition-colors duration-200">Custom Agents</a></li>
                <li><a href="#telemetry" className="hover:text-white transition-colors duration-200">Process Automation</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing Matrix</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">DEVELOPERS</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">System Logs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Platform Status</a></li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">STAY UPDATED</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Join our technical newsletter for release notes.
                </p>
                <div className="flex rounded-lg overflow-hidden border border-white/10 bg-white/5 focus-within:border-brand-forsythia transition-colors duration-200">
                  <input 
                    type="email" 
                    required 
                    placeholder="developer@corp.com" 
                    className="w-full bg-transparent px-3 py-1.5 text-xs text-white focus:outline-none font-mono"
                  />
                  <button 
                    type="submit" 
                    className="bg-brand-forsythia px-3 text-brand-oceanic hover:bg-white transition-all duration-200"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-brand-mint" />
            <span>© {currentYear} ARMORY AI SYSTEMS INC. ALL SOVEREIGN RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">TERMS & CONDITIONS</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">PRIVACY POLICY</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
