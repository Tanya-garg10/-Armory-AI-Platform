/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, ShieldAlert, HeartPulse, Building2 } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    company: 'Cigna Smart Health Systems',
    logo: 'Cigna',
    quote: 'Instead of building our own custom multi-agent cognitive logs from scratch, we connected Armory into our private secure cloud workspace. We launched a fully functional medical billing triaging pipeline in less than three weeks.',
    rating: 5,
    author: 'Dr. Evelyn Martinez',
    role: 'VP of AI Operations'
  },
  {
    id: 2,
    company: 'Aetna Health Data Ecosystem',
    logo: 'Aetna',
    quote: 'Armory’s hardware-encrypted HSM HSM vaults allowed us to process highly sensitive clinical data points while maintaining strict HIPAA sovereign data custody compliance. A spectacular architectural layout.',
    rating: 5,
    author: 'Marcus Chen',
    role: 'Principal Security Architect'
  },
  {
    id: 3,
    company: 'Anthem Neural Care Network',
    logo: 'Anthem',
    quote: 'We deployed a high-capacity fine-tuned LLM cluster behind Armory. The sub-millisecond data pipelines handle our intensive diagnostic processing volumes flawlessly without backpressure delay.',
    rating: 5,
    author: 'Sarah Jenkins',
    role: 'Director of Healthcare Systems'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-brand-oceanic py-24 border-b border-white/5" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.2em] text-brand-forsythia uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-sans">
            Trusted by the pioneers
          </h2>
          <p className="text-gray-400 text-lg">
            See how leading healthcare and enterprise groups utilize Armory’s sovereign agent structures to accelerate complex automation cycles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 flex flex-col justify-between relative group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-brand-forsythia">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-nocturnal border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-brand-mint uppercase">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-white leading-tight">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{testimonial.role} — <span className="text-brand-mint">{testimonial.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
