# Smart Space Pergola — Next.js Landing Page Conversion Prompt

## Project Overview

Convert the following single-page React landing page into a production-ready **Next.js 14+ (App Router)** application with **Tailwind CSS**, **TypeScript**, and **shadcn/ui** components. The design is for "Smart Space Pergola" — a product by Palmiye Global that features a patented L-shaped pillar design giving 15% more usable outdoor space.

**Figma Source:** https://www.figma.com/make/PdvZoH92nFs3j3J0TIeJur/Landing-Page-Design-Request
**Live Preview:** https://gave-left-02317922.figma.site/

---

## Tech Stack Requirements

- **Framework:** Next.js 14+ with App Router (`/app` directory)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+ with custom theme configuration
- **UI Library:** shadcn/ui components where applicable (Button, Card, Badge, Dialog, Select, Checkbox, Separator, Sheet, Tabs)
- **Animations:** Framer Motion for scroll-triggered reveals, hover states, and micro-interactions
- **Fonts:** Google Fonts — `Outfit` (display/headings) + `Plus Jakarta Sans` (body text) via `next/font/google`
- **Icons:** Lucide React
- **Image Handling:** `next/image` with optimized loading
- **SEO:** Full metadata, Open Graph tags, structured data (JSON-LD for Product schema)
- **Performance:** Lighthouse score target 95+

---

## Color Palette (Tailwind Config)

```js
colors: {
  brand: {
    orange: '#E8600A',
    'orange-hover': '#D15500',
    'orange-light': '#FF8C38',
    'orange-bg': '#FFF7F0',
  },
  surface: {
    dark: '#1A1F2E',
    'dark-alt': '#232A3C',
    navy: '#2D3448',
  },
  success: '#16A34A',
  danger: '#DC2626',
}
```

---

## Page Sections (Top to Bottom)

### 1. Top Banner (`components/TopBanner.tsx`)
- Full-width dark background (`#1A1F2E`)
- Orange badge pill: "🎉 Launch Campaign"
- Text: "Get 15% More Space for Less Budget! Claim Your Discount Today"
- Optional: dismissible with X button, stores state in cookie

### 2. Header / Navigation (`components/Header.tsx`)
- Sticky on scroll with blur backdrop (`backdrop-blur-md`)
- Logo: "Smart Space Pergola" (Outfit 800) + subtitle "Powered by Palmiye" (small muted text)
- Nav links: "Shop by Size", "Upgrades", "Our Story", "Support/FAQ"
- Right side: Cart icon, User icon, orange CTA button "Configure & Buy"
- Mobile: hamburger menu with Sheet/Drawer component from shadcn/ui
- Add smooth border-bottom transition on scroll

### 3. Hero Section (`components/Hero.tsx`)
- Dark background with gradient overlay
- Left 45%: Text content area
  - Green pill badge: "⚡ Special Launch Offer"
  - Headline: "Use your budget in a **perfect way**. Buy smaller, live larger." (orange accent on "perfect way")
  - Subtext with underlined "15% more usable" (orange underline)
  - Orange CTA button: "Configure & Buy Now" with box-shadow glow
  - Trust badges row: 🇩🇪 German Design | 🏭 Powered by Palmiye | ⚡ Quick Installation
- Right 55%: Hero image area with diagonal clip-path, pergola product photo
- Framer Motion: fade-up on load with staggered children

### 4. Smart Space Advantage — Comparison (`components/ComparisonSection.tsx`)
- Section badge: "✨ The Smart Space Advantage"
- Heading: "Why Pay for a **Larger Product**?" (orange on "Larger Product")
- Two side-by-side comparison cards (max-width 780px centered):

  **Left Card — Standard Pergola (negative):**
  - Gray background, gray border, red X circle badge top-right
  - Red dashed border inner area showing "Usable Area 85%" with 4 corner pillar indicators
  - 3 bullet points with red X icons

  **Right Card — Smart Space Pergola (positive):**
  - White background, green border with shadow, "+15% Space" green pill badge floating top-right
  - Green solid border inner area showing "Usable Area 100%" (full width)
  - 3 bullet points with green checkmarks

- Below cards: Large orange rounded badge with gradient:
  - "Get More Space With" subtitle
  - "+15%" large number
  - "MORE USABLE AREA" label
  - "Less budget, smarter design, better living." tagline

### 5. Find Your Perfect Size (`components/SizeSection.tsx`)
- Section badge: "📐 4 Space Solutions"
- Heading: "Find Your **Perfect Size**" (orange accent)
- 4-column product card grid:

  Each card contains:
  - Product image (pergola photo, aspect-ratio 4:3)
  - Green "Save 15%" badge on image
  - Product name (e.g., "Balcony Size")
  - Price in orange (e.g., "€2,290") + strikethrough old price
  - Green "You save €XXX" text
  - Dimensions + short description
  - "What fits inside:" bullet list with orange dots
  - "📐 View Floor Plan" outline button
  - "Select Options" orange filled button

  **Products data:**
  | Name | Price | Old Price | Save | Dimensions | Description |
  |------|-------|-----------|------|------------|-------------|
  | Balcony Size | €2,290 | €2,929 | €439 | 200×200 cm | Perfect for small balconies and compact spaces |
  | Dining Size | €3,290 | €3,870 | €580 | 250×300 cm | Fits a 4-6 person outdoor dining room for family meals |
  | Family Size | €3,990 | €4,694 | €704 | 300×400 cm | The outdoor living room for the whole family |
  | Lounge Size | €4,990 | €5,870 | €880 | 400×500 cm | Premium full-size relaxation and entertainment space |

- Cards should have hover lift effect (translateY -4px + shadow increase)
- Responsive: 4 cols → 2 cols on tablet → 1 col on mobile

### 6. Product Configurator (`components/Configurator.tsx`)
- Section badge: "⚙️ Product Configurator"
- Heading: "Configure Your **Perfect Pergola**" (orange accent)
- Two-column layout: Left (config steps) + Right (sticky summary panel)

  **Left Panel (light gray bg, rounded):**
  
  **Step 1 — Choose Your Size:**
  - 2×2 grid of selectable size buttons
  - Selected state: orange border + orange tint bg + checkmark circle
  - Shows size label + price in orange
  
  **Step 2 — Select Control Type:**
  - 2 option cards side by side
  - Manual Control (🔧): "Simple crank operation, reliable and budget-friendly" — "Included"
  - Motorized Control (⚡): "One-touch operation with remote & smart home ready" — "+€650"
  
  **Step 3 — Add Optional Upgrades:**
  - Checkbox-style toggle card
  - "🪟 Manual Zip Screen (Side)" — "+€690"
  - Description + tag pills: "Weather Protection", "Privacy Control"

  **Right Panel (dark bg `#1A1F2E`, sticky top:90px):**
  - "Your Configuration" heading
  - Selected size with price in dark card
  - Line items for selected extras
  - Subtotal line
  - Green "✓ 15% Launch discount applied" text
  - Large "Total" with orange price
  - Orange "🛒 Add to Cart" button with glow shadow
  - Trust checklist: Free Shipping, 5-Year Warranty, Secure Checkout, German Design Quality
  - Payment badge row: VISA, MASTERCARD, KLARNA

  **Important:** All prices should update in real-time as user selects options. Use React state management (useState or Zustand if needed).

### 7. Footer (`components/Footer.tsx`)
- Dark background matching hero
- 4-column grid:
  - **Column 1:** Brand info, social icons (Facebook, LinkedIn, Instagram), "Why Choose Us" section with icon cards (5-Year Warranty, Quick Installation, German Design)
  - **Column 2:** Quick Links (About Us, Shop by Size, Product Configurator, Gallery, Contact)
  - **Column 3:** Customer Service (Shipping & Delivery, Returns & Cancellations, Track My Order, Payment Methods, Help)
  - **Column 4:** Contact Us (Phone, Email, Address)
- Bottom bar: Copyright + Privacy Policy, Terms of Service, Cookie Policy links
- Responsive: stack on mobile

---

## File Structure

```
app/
├── layout.tsx          # Root layout with fonts, metadata
├── page.tsx            # Landing page (imports all sections)
├── globals.css         # Tailwind directives + custom CSS
├── favicon.ico
components/
├── TopBanner.tsx
├── Header.tsx
├── Hero.tsx
├── ComparisonSection.tsx
├── SizeSection.tsx
├── Configurator.tsx
├── Footer.tsx
├── ui/                 # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── sheet.tsx
│   └── ...
lib/
├── utils.ts            # cn() helper, etc.
├── products.ts         # Product data constants
├── fonts.ts            # Font configuration
hooks/
├── useInView.ts        # Intersection observer hook
├── useScrolled.ts      # Scroll position hook
public/
├── images/             # Product images, hero image
├── icons/              # Custom SVG icons if needed
```

---

## Animation Requirements (Framer Motion)

- **Page load:** Staggered fade-up for hero content (delay 0.1s between elements)
- **Scroll reveals:** Each section fades up when entering viewport (threshold 0.1)
- **Product cards:** Staggered entrance (0.08s delay between cards)
- **Hover states:** Scale + shadow transitions on cards and buttons
- **Configurator:** Smooth height/opacity transitions when toggling options
- **Header:** Background opacity + border transition on scroll

---

## Responsive Breakpoints

- **Desktop:** 1200px max-width container, 4-col product grid
- **Tablet (md):** 2-col product grid, configurator stacks vertically
- **Mobile (sm):** Single column everything, hamburger nav, full-width cards

---

## SEO & Metadata

```tsx
export const metadata: Metadata = {
  title: 'Smart Space Pergola | 15% More Space with Patented Design | Powered by Palmiye',
  description: 'Smart Space Pergola gives you 15% more usable outdoor area with its patented L-shaped pillar design. German engineering, powered by Palmiye. Configure and buy directly.',
  keywords: ['pergola', 'outdoor living', 'smart space', 'palmiye', 'bioclimatic pergola', 'garden pergola'],
  openGraph: {
    title: 'Smart Space Pergola — Buy Smaller, Live Larger',
    description: 'Get 15% more usable space with our patented corner design.',
    type: 'website',
    locale: 'en_US',
  },
};
```

---

## Additional Notes

- All text content is in English
- Currency is EUR (€)
- The "Add to Cart" and "Configure & Buy" buttons should scroll to the Configurator section for now (no actual e-commerce backend needed yet)
- "View Floor Plan" buttons should open a modal/dialog (placeholder content is fine)
- Ensure all interactive elements have proper focus states and keyboard accessibility
- Use CSS `scroll-behavior: smooth` for anchor navigation
- The comparison section area visuals (85% vs 100%) should be illustrated with colored rectangles showing the usable area difference — NOT actual product photos
- Product images in the size cards can use placeholder images for now, but structure the code to easily swap in real images later via `next/image`
- Add a simple loading skeleton for any async content areas

---

## Reference

The complete React component code for this landing page is attached below. Use it as the source of truth for content, layout structure, and visual design — but refactor everything into proper Next.js architecture with Tailwind utility classes replacing inline styles.
