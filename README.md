# ITZFIZZ — Scroll-Driven Hero Animation

> **Internship UI Assignment** — A premium, scroll-driven hero section built for [Itzfizz Digital](https://itzfizz.com), showcasing advanced GSAP animations, pinned scroll sequences, and a polished neo-brutalist design system.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-green?logo=greensock)](https://gsap.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

## ✨ Features

- **Scroll-Driven GSAP Animation** — Master `ScrollTrigger` timeline pinned for `200vh` of scroll travel with seamless scrub and perfect bi-directional (forward + reverse) playback
- **Letter Explosion Effect** — Individual headline letters animate outward on scroll with stagger, scale, and rotation
- **Floating Geometric Shapes** — Multi-layered parallax shapes fly off-screen as you scroll
- **Marquee Text Parallax** — Background marquee scales and drifts continuously during scroll
- **Magnetic Custom Cursor** — Smooth custom cursor with mix-blend-mode difference effect
- **Stats Cards** — Animated counter cards fade out on scroll entry
- **Neo-Brutalist UI** — Bold borders, offset shadows, and premium typography (Syne + Space Grotesk)
- **Sliding Drawer Transition** — Post-hero section slides in with rounded corners over the hero
- **Premium Footer** — Full-bleed dark footer with large branding and a "Let's Talk" CTA
- **Fully Reverse-Scrollable** — All animations play perfectly in reverse when scrolling back up
- **Zero Layout Reflow** — Animates only `opacity` and `transform` for silky 60fps on all devices
- **Touch Device Fallback** — Graceful degradation for mobile/tablet

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework & SSG |
| [TypeScript](https://typescriptlang.org) | 5 | Type safety |
| [GSAP](https://gsap.com) | 3.14 | Core animation engine |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | 3.14 | Scroll-driven animation |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Display / heading font |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Body font |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18`
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sharvarianand/Itzfizz.git
cd Itzfizz

# Install dependencies
npm install

# Start development server
npm run dev -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001) to view the project.

---

## 📁 Project Structure

```
itzfizz-hero/
├── app/
│   ├── globals.css       # Design system — CSS variables, typography, utilities
│   ├── layout.tsx        # Root layout with metadata & Google Fonts
│   └── page.tsx          # Main page — Hero + Post-hero + Footer
├── components/
│   ├── HeroSection.tsx   # Core scroll-driven animation component
│   ├── StatCard.tsx      # Animated stat counter cards
│   └── CursorGlow.tsx    # Magnetic custom cursor
├── hooks/
│   └── useGSAP.ts        # Custom hook — GSAP + ScrollTrigger registration
└── public/               # Static assets
```

---

## 🎬 Animation Architecture

The hero animation is built on a **single master GSAP timeline** scrubbed by `ScrollTrigger`:

```
Load animation (auto-plays on mount)
  └── Headline letters drop in
  └── ITZFIZZ slides up
  └── Shapes float in
  └── Stats fade in

Scroll timeline (scrubbed by ScrollTrigger — pinned 200vh)
  ├── 0%  → Scroll indicator fades out
  ├── 5%  → Stats cards fly up and fade
  ├── 10% → WELCOME letters spread apart
  ├── 25% → ITZFIZZ letters explode outward
  ├── 30% → Visual card rises and rotates
  ├── 40% → Marquee scales up
  └── 45% → Geometric shapes fly off-screen
```

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build (TypeScript checked)
npm run start     # Start production server
npm run lint      # ESLint check
```

---

## 🌐 Deployment

This project is optimised for **Vercel** deployment:

```bash
git add .
git commit -m "feat: initial release"
git push origin main
```

Then visit [vercel.com/new](https://vercel.com/new), import the `sharvarianand/Itzfizz` repository — Vercel auto-detects Next.js, no additional configuration required.

---

## 📄 License

This project was created as part of an internship UI assignment for **Itzfizz Digital**. All rights reserved.

---

<p align="center">Built with ❤️ for <a href="https://itzfizz.com">Itzfizz Digital</a></p>
