/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Cpu, ArrowRight, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-brand-oceanic/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white group" id="navbar-logo">
          <Cpu className="h-5 w-5 text-brand-forsythia transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-white">armory</span>
          <span className="text-xs text-brand-forsythia bg-brand-forsythia/10 px-1.5 py-0.5 rounded font-mono font-medium">v1.2</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">AI Strategy</a>
          <a href="#workflow" className="text-gray-400 hover:text-white transition-colors duration-200">Custom Agents</a>
          <a href="#telemetry" className="text-gray-400 hover:text-white transition-colors duration-200">Process Automation</a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing Matrix</a>
          <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a>
        </nav>

        {/* Desktop CTA & Search */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <a 
            href="#pricing" 
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-oceanic transition-all duration-300 hover:bg-brand-forsythia hover:scale-[1.02] active:scale-[0.98]"
            id="navbar-cta"
          >
            Launch Console
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none transition-colors duration-200"
            aria-expanded={isOpen}
            id="navbar-mobile-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Pure CSS Grid Transition for Height) */}
      <div 
        className={`grid transition-all duration-300 ease-in-out md:hidden bg-brand-oceanic border-b border-white/5 ${
          isOpen ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden px-4 space-y-3">
          <a 
            href="#features" 
            onClick={() => setIsOpen(false)} 
            className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            AI Strategy
          </a>
          <a 
            href="#workflow" 
            onClick={() => setIsOpen(false)} 
            className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            Custom Agents
          </a>
          <a 
            href="#telemetry" 
            onClick={() => setIsOpen(false)} 
            className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            Process Automation
          </a>
          <a 
            href="#pricing" 
            onClick={() => setIsOpen(false)} 
            className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            Pricing Matrix
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)} 
            className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            FAQ
          </a>
          <div className="pt-2 border-t border-white/5">
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-forsythia px-4 py-2.5 text-base font-semibold text-brand-oceanic hover:bg-white transition-all duration-200"
            >
              Launch Console
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
