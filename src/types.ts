/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BentoItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  longDescription: string;
}

export interface PricingMatrix {
  [tier: string]: {
    basePriceUSD: number;
    tariffs: {
      USD: number; // e.g. 0% tariff
      EUR: number; // e.g. 5% regional tariff
      INR: number; // e.g. 18% GST tariff
    };
    multipliers: {
      USD: number;
      EUR: number;
      INR: number;
    };
  };
}

export interface Testimonial {
  id: number;
  company: string;
  logo: string;
  quote: string;
  rating: number;
  author: string;
  role: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}
