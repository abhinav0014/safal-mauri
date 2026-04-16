# सफल मौरी पालन उद्योग
### Safal Mauri Palan Udhyog — Artisanal Honey E-Commerce
**Owner: Madhav Raj Paudel**

A full-featured, production-ready Next.js 14 e-commerce app inspired by the Artisanal Nectar UI designs.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State | React Context API (Cart) |
| Images | Next.js `<Image />` (Unsplash) |
| Icons | Lucide React |
| Fonts | Google Fonts (Playfair Display, Lato, Noto Serif Devanagari) |

---

## 📁 Project Structure

```
safal-mauri/
├── app/
│   ├── page.tsx              # Homepage (Hero, Collections, Philosophy, Reviews, CTA)
│   ├── shop/page.tsx         # Shop with search & category filter
│   ├── product/[id]/page.tsx # Product detail (images, nutritional facts, pairings)
│   ├── cart/page.tsx         # Cart with upsell & gift note
│   ├── checkout/page.tsx     # 3-step checkout (address, shipping, payment)
│   ├── order-confirmed/page.tsx # Order confirmation with journey steps
│   ├── our-story/page.tsx    # Brand story, team, values, promise
│   ├── layout.tsx            # Root layout + CartProvider + Navbar
│   └── globals.css           # Custom CSS, animations, utilities
├── components/
│   ├── Navbar.tsx            # Sticky nav with cart badge, mobile menu
│   ├── ProductCard.tsx       # Reusable card with add-to-cart
│   └── Footer.tsx            # Newsletter, links, social
├── lib/
│   ├── products.ts           # Product data & helpers
│   └── cart-context.tsx      # Cart state management
├── types/
│   └── index.ts              # TypeScript interfaces
├── tailwind.config.ts        # Custom honey/forest color palette
└── next.config.mjs           # Image domains config
```

---

## 🚀 Getting Started

```bash
# 1. Navigate to project
cd safal-mauri

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, product grid, philosophy section |
| `/shop` | All products with category filter & search |
| `/product/[id]` | Product detail with harvest story, nutrition facts, pairings |
| `/cart` | Cart review with Honey Club upsell & gift note |
| `/checkout` | 3-step checkout with eSewa/PayPal/Card support |
| `/order-confirmed` | Order success with "What's Next" journey |
| `/our-story` | Brand story, values, meet the keepers |

---

## 🎨 Design System

### Color Palette
- **Honey**: `#FFF8ED` (50) → `#C96B05` (700) — primary brand
- **Forest**: `#F3F7EE` (50) → `#456E33` (600) — organic/eco accents
- **Cream**: `#FDFAF5` → `#FAF3E8` — backgrounds

### Typography
- **Display**: Playfair Display (headings, prices, brand)
- **Devanagari**: Noto Serif Devanagari (Nepali text)
- **Body**: Lato (UI, descriptions)

### Key Components
- `.btn-honey` — shimmer gradient CTA button
- `.product-card` — hover lift with shadow
- `.hex-clip` — hexagon clip-path for bee/logo elements
- `.section-label` — small caps category labels
- `.badge-*` — color-coded product badges

---

## 🌐 Nepali Localization

The app is bilingual (English + Nepali):
- Company name in Devanagari: **सफल मौरी पालन उद्योग**
- Owner attribution: **माधव राज पौडेल**
- Product names shown in Nepali alongside English
- Prices shown in both रू (NPR) and $ (USD)
- Navigation labels include Nepali equivalents

---

## 💳 Payment Methods Supported (UI)
- Credit/Debit Card
- PayPal
- eSewa (Nepal's leading digital wallet)

---

## 📦 Adding Real Products

Edit `/lib/products.ts` — each product needs:
```typescript
{
  id: "unique-slug",
  name: "English Name",
  nameNp: "नेपाली नाम",
  price: 24, // USD
  image: "https://...",
  category: "honey" | "hive-gifts",
  badge?: "bestseller" | "new" | "handmade",
  rating: 4.9,
  reviews: 128,
  description: "...",
}
```

---

*© 2024 सफल मौरी पालन उद्योग. Madhav Raj Paudel. Harvested with Respect.*
