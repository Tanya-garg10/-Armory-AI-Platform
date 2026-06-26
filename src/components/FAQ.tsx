/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'What is the Armory AI Platform?',
    answer: 'Armory is an advanced full-stack AI orchestration platform designed specifically to deploy autonomous enterprise-grade agents. We provide secure, localized cognitive pipelines, high-throughput database synchronization brokers, and interactive workflow canvas visualization interfaces.',
    category: 'General'
  },
  {
    id: 2,
    question: 'How does the performance-isolated currency switcher work?',
    answer: 'Our pricing interface uses standard native DOM references to isolate all currency format translations and billing cycle updates directly to the targeted price text nodes. This completely bypasses global React virtual-DOM re-renders, protecting your viewport from layout thrashing or browser reflow delays.',
    category: 'Pricing'
  },
  {
    id: 3,
    question: 'What are the sovereign security mechanisms?',
    answer: 'All confidential enterprise model weights, user credentials, and pipeline payloads are shielded by dedicated, hardware-encrypted HSM vaults. We support robust, customer-managed sovereign custody options where you retain complete regulatory access key authority.',
    category: 'Security'
  },
  {
    id: 4,
    question: 'Does Armory support on-premise deployments?',
    answer: 'Yes! While our default serverless architecture operates with a guaranteed sub-15ms processing latency SLA, you can also compile and host our lightweight daemon binaries directly inside your private sovereign VPC clusters or physical HSM appliances.',
    category: 'Deployment'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-brand-oceanic py-24 border-b border-white/5" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.2em] text-brand-forsythia uppercase">
            COMMON INQUIRIES
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Clear responses concerning security compliance, isolated interface performance, and custom integration structures.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4" id="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-forsythia/20 bg-white/[0.02]' 
                    : 'border-white/5 bg-white/[0.01]'
                }`}
              >
                {/* Header button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? 'text-brand-forsythia' : 'text-gray-500'} transition-colors duration-200`} />
                    <span className="font-sans font-bold text-white text-base sm:text-lg leading-tight">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-forsythia' : ''}`} />
                </button>

                {/* Body (Smooth Grid row height transition) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                  id={`faq-panel-${item.id}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 border-t border-white/5 text-gray-400 text-sm leading-relaxed font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
