# Next-Gen AI Platform Speed Run - Hackathon Submission

This repository contains the solution for the **Next-Gen AI Platform Speed Run**. It is a premium, high-converting, responsive landing page for an advanced AI-driven data automation platform, built under strict hackathon constraints for architectural integrity, performance, and motion choreography.

## Live Demo
Check out the live deployment or clone the repository to run it locally.

## Features & Constraints Achieved

### Feature 1: Matrix-Driven Pricing & Performance-Isolated Currency Switcher
- **Multi-Dimensional Matrix**: The pricing engine dynamically computes values based on base rates, a 20% annual discount multiplier, and regional tariffs (USD, EUR, INR). No hardcoded prices.
- **Zero Global Re-renders**: To comply with strict constraints, state updates for the currency and billing cycle are fully isolated. The application uses `useRef` to directly manipulate DOM text nodes, ensuring no component mount-flashing or layout reflows occur.

### Feature 2: Bento-to-Accordion Wrapper with State Persistence
- **Responsive Fluidity**: Presents features in a beautiful Bento-Grid on desktop viewports and gracefully refactors into a touch-optimized Accordion list on mobile.
- **Context Lock Constraint**: An advanced `ResizeObserver` listener tracks the actively hovered desktop node. If the window is abruptly resized below the mobile breakpoint, the accordion automatically transfers and opens the corresponding index panel smoothly.
- **Zero-Dependency Motion**: No external component libraries (like Shadcn, Framer Motion) are used for the accordion. All motion sequences utilize hardware-accelerated, native CSS Transitions (e.g., `grid-template-rows: 0fr -> 1fr`).

### SEO & Performance
- **Hygiene**: Features strict semantic HTML hierarchy (`<main>`, `<section>`, `<nav>`), Open Graph (OG) tags, and proper meta descriptions.
- **Performance Caps**: The custom `Armory Daemon Boot Loader` elegantly mimics an initialization sequence within the strict 500ms constraint, ensuring Time to Interactive (TTI) is not penalized.
- **Typography & Aesthetics**: Designed using the required `Inter` and `Outfit` font families and strict hex color palettes for an immersive Dark-Mode AI aesthetic. Required SVGs integrated flawlessly.

## How to Run Locally

### Prerequisites
- Node.js (v18+)

### Setup
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Built With
- React
- Vite
- Tailwind CSS
- Native CSS Variables & Transitions
