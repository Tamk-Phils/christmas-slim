# Balsam Hill — Luxury Artificial Christmas Trees & Holiday Décor

A production-grade, highly responsive multi-page e-commerce web application matching [Balsam Hill](https://www.balsamhill.com/), built with **React 19, TypeScript, Vite, Supabase, and Vercel**.

---

## 🌟 Key Features

### 1. 100% Authentic Imagery (Zero AI Images)
- Over **70+ high-resolution authentic photographs** downloaded directly from Balsam Hill's official Acquia Widen CDN (`source.widen.net`).
- Official logo, realistic branch macro closeups, 11 tree species, 60 handcrafted wreaths and greenery pieces, staged interior salon looks, and editorial hero banners.

### 2. Full Multi-Page E-Commerce Architecture
- **Flagship Homepage (`/`):** 19 authentic sections matching Balsam Hill's ContentStack CMS structure.
- **Product Listing Pages (`/category/:category`, `/trees`, `/wreaths`, `/decor`, `/sale`):**
  - Left filter sidebar on desktop with Tree Heights, Realism Level, Lighting, and Flip Tree® filters.
  - Off-canvas slide-in mobile filter drawer with real-time product counts and quick reset.
  - Height selector pills on each product card with instant price updates.
  - Quick View drawer and Wishlist toggles.
- **Product Detail Pages (`/product/:id`):**
  - High-res photo gallery with swipeable thumbnail carousel.
  - Height variant and lighting style selector with real-time stock and price recalculation.
  - What's in the Box checklist (stand, storage bag, white shaping gloves, extra bulbs).
  - Detailed engineering specifications table.
  - 3-Year Limited Warranty terms.
  - Customer review ratings with interactive "Write a Review" modal.
  - Sticky bottom mobile Add to Bag bar for effortless shopping on smartphones.
- **Sam Henderson's Holiday Journal (`/inspiration`):**
  - 10 full editorial masterclass articles on branch shaping & fluffing, lighting comparisons, metallic layering, wreath hanging, room height formulas, and holiday trend palettes.
  - Interactive full-article modal reader.
- **Branch Sample Kit (`/branch-sample-kit`):**
  - $29 presentation kit with 20 live branch cuttings.
  - Interactive foliage swatch explorer.
  - Explanation of the $29 rebate coupon code.
- **Interactive Tree Finder Quiz (`/tree-finder`):**
  - 4-step consultant quiz calculating ceiling clearance, shape profile, lighting preference, and foliage realism.
- **Flip Tree® Technology Showcase (`/flip-tree`):**
  - 3-step setup simulator demonstrating rotating trunk base, wheels, and Easy Plug® trunk lights.
- **Shopping Bag & Cart Page (`/cart`):**
  - Line items, quantity controls, coupon validator (`HURRY50`, `BALSAM50`, `CHEER25`), and free ground shipping tracker.
- **Express Checkout (`/checkout`):**
  - 2-step checkout with address validation, payment selection, and Supabase order placement.
- **Customer Care & Warranty Hub (`/customer-support`, `/warranty`, `/catalog-request`):**
  - Toll-free customer support (1-888-55-BALSAM), warranty registration, and 2026 Print Catalog request.
- **Search Results (`/search?q=...`):**
  - Live query matcher spanning products and editorial posts.

### 3. Signature Balsam Hill Animations & Interactions
- **True Needle® vs. Traditional Split Slider:** Interactive drag/touch comparison of molded polyethylene needles vs. flat PVC.
- **Flip Tree® Setup Simulator:** Interactive SVG diagram showing wheel base and trunk flip.
- **Ambient Glow Modes:** Daylight, Candlelight (2700K amber glow), Twinkly® smart app-controlled LEDs, and Night.
- **Snowfall Particle Canvas:** High-performance canvas particle engine with header toggle.
- **Live Search Autocomplete:** Instant drop-down matching with keyboard navigation.

### 4. Top-Tier Responsiveness
- **Mobile Navigation Drawer:** Slide-in off-canvas menu with collapsible category accordions, search, glow switcher, and click-to-call.
- **Mobile PLP Filter Sheet:** Bottom sheet filter drawer so filters never push products down.
- **Touch-Friendly Controls:** All interactive sliders and buttons tested for touch events.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Routing:** React Router v7 (`react-router-dom`) with client-side SPA routing
- **Styling:** Vanilla CSS with HSL design system tokens, CSS Grid, and Flexbox
- **Icons:** Lucide React
- **Backend / Database:** Supabase (`@supabase/supabase-js`) with offline fallback seed database
- **Deployment:** Vercel (configured with `vercel.json` rewrite rules)

---

## 🚀 Getting Started

### Local Development
```bash
# Clone the repository
git clone https://github.com/Tamk-Phils/christmas-slim.git
cd christmas-slim

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Building for Production
```bash
npm run build
```

The production output is built into the `dist/` directory.

---

## ☁️ Vercel Deployment

This project includes [`vercel.json`](./vercel.json) pre-configured with SPA route rewrites:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploying via Vercel CLI or Dashboard:
1. Import the repository on [Vercel](https://vercel.com/new).
2. Framework Preset: **Vite** (auto-detected).
3. (Optional) Set Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Click **Deploy**. All routes (`/category/trees`, `/product/:id`, `/inspiration`, `/cart`, etc.) will route seamlessly.

---

## 📄 License
Private client project. True Needle® and Flip Tree® are registered trademarks of Balsam Hill.
