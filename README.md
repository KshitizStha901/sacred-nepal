# 🏔 Sacred Nepal — Temples of the Himalayas

> A cinematic, premium, immersive 3D scrolling website about the sacred temples of Nepal.
> Built with Next.js 14, Three.js / React Three Fiber, GSAP, Lenis, and Framer Motion.

---

## ✨ Features

- 🎬 **Cinematic 3D Hero** — Fullscreen Three.js scene with procedurally built Nepalese pagoda temples, Himalayan mountains, prayer flags, floating particles, clouds, and lantern glows
- 📜 **Scroll Journey** — Five temples revealed cinematically as you scroll, each with its own 3D mini-scene, colors, and atmosphere
- 🌀 **Interactive Mandala** — Animated SVG sacred mandala with rotating rings and petals
- 🪔 **Spinning Prayer Wheel** — Drag-to-spin interactive prayer wheel component
- 🖼 **3D Gallery** — Mouse-tilt depth cards with specular highlights for each temple
- 🌅 **Himalayan Sunrise Finale** — Custom GLSL sunrise shader sky, temple silhouettes at dawn
- 🌑 **Custom Cursor** — Gold dot + lagging ring cursor
- ✨ **Premium Loading Screen** — Animated mandala with progress bar
- 🎛 **Glassmorphism Navigation** — Minimal fixed nav with smooth anchor scrolling
- 🔲 **Lenis Smooth Scrolling** — Connected to GSAP ScrollTrigger for buttery animations
- 📱 **Responsive** — Desktop, tablet, and mobile layouts

---

## 📁 Folder Structure

```
nepal-temples/
├── 📄 package.json           — All dependencies
├── 📄 next.config.mjs        — Next.js configuration
├── 📄 tailwind.config.js     — Tailwind theme, custom colors, fonts
├── 📄 postcss.config.js      — PostCSS config
├── 📄 README.md              — This file
│
└── src/
    ├── app/
    │   ├── globals.css        — Global styles, CSS variables, custom cursor, animations
    │   ├── layout.js          — Root layout with fonts and metadata (Server Component)
    │   └── page.js            — Main page orchestrator (Client Component)
    │
    ├── lib/
    │   └── templeData.js      — Temple data: names, descriptions, colors, types
    │
    ├── hooks/
    │   ├── useLenis.js        — Smooth scroll hook (Lenis + GSAP ticker)
    │   └── useScrollProgress.js — Scroll tracking and useInView hook
    │
    └── components/
        ├── CustomCursor.jsx   — Animated gold cursor dot + ring
        ├── LoadingScreen.jsx  — SVG mandala + progress bar loading screen
        ├── Navigation.jsx     — Glassmorphism fixed nav + mobile menu
        ├── HeroSection.jsx    — Fullscreen 3D Three.js hero with temple, mountains, particles
        ├── TempleJourney.jsx  — Scroll sections for each of the 5 temples
        ├── CulturalSection.jsx— SVG mandala + interactive prayer wheel + artifacts
        ├── Gallery.jsx        — 3D tilt hover cards for each temple
        ├── FinalScene.jsx     — Himalayan sunrise with GLSL shader sky
        ├── Footer.jsx         — Footer with navigation and credits
        │
        └── three/
            ├── TempleGeometry.jsx — PagodaTemple + StupaTemple 3D geometries
            └── ParticleField.jsx  — Particles, CloudSystem, PrayerFlags, GlowOrb
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher

### 1. Clone / Extract the Project

If you downloaded a ZIP, extract it to your desired folder.
If cloning from Git:

```bash
git clone <your-repo-url> nepal-temples
cd nepal-temples
```

### 2. Install Dependencies

```bash
npm install
```

This installs: `next`, `react`, `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `@gsap/react`, `framer-motion`, `lenis`, `tailwindcss`.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **First load tip**: The Three.js scenes may take a second to initialize — this is normal.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Vercel (Recommended — Free & Fast)

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up / log in
3. Click **"New Project"** → Import your GitHub repo
4. Framework auto-detected as **Next.js** — click **Deploy**
5. Done! Your site is live at `https://your-project.vercel.app`

### Netlify

1. Run `npm run build` locally
2. Upload the `.next` folder to Netlify, or connect GitHub and set:
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## 🎨 Customization Guide

### Change Temple Data
Edit `src/lib/templeData.js` to change temple names, descriptions, colors, or add new temples.

```js
// Example: Change a temple's gold accent color
{
  id: 'pashupatinath',
  color: '#D4711A',       // Main color (used for glow, text)
  glowColor: 'rgba(212, 113, 26, 0.4)', // Atmospheric glow
  accentColor: '#F0A04A', // Accent color
}
```

### Change Colors
Edit `tailwind.config.js` and `src/app/globals.css` CSS variables:

```css
:root {
  --gold: #C9A84C;       /* Change main gold tone */
  --crimson: #8B1A1A;    /* Change crimson red */
}
```

### Add New Sections
1. Create a new component in `src/components/`
2. Add `'use client';` at the top (required for React hooks)
3. Import it dynamically in `src/app/page.js`:

```js
const MySection = dynamic(() => import('@/components/MySection'), { ssr: false });
```

4. Add it inside the `<motion.main>` in `page.js`

### Add Real Images
To add actual temple photos:
1. Place images in `public/images/`
2. Import Next.js `Image` component:
```js
import Image from 'next/image';
<Image src="/images/pashupatinath.jpg" alt="Pashupatinath" fill objectFit="cover" />
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework, App Router, SSR/SSG |
| **React 18** | UI components and state |
| **Three.js** | Low-level 3D WebGL rendering |
| **@react-three/fiber** | React wrapper for Three.js |
| **@react-three/drei** | Three.js helpers (Stars, Float, etc.) |
| **GSAP + ScrollTrigger** | Scroll-based animations |
| **Lenis** | Smooth, buttery scrolling |
| **Framer Motion** | UI transitions and micro-animations |
| **Tailwind CSS** | Utility-first styling |

---

## 📱 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Responsive |

> ⚠️ WebGL must be enabled (it is by default in all modern browsers).

---

## ⚡ Performance Tips

- Three.js canvases use `dpr={[1, 1.5]}` to limit pixel ratio on high-DPI screens
- Dynamic imports prevent Three.js from loading during SSR
- `ssr: false` on all 3D components prevents server errors
- Particles use `BufferGeometry` for maximum performance
- Set `antialias: false` in Canvas gl props to improve performance on mobile

---

## 🏆 Portfolio / Upwork Tips

This project demonstrates:
- **Three.js / WebGL** 3D rendering expertise
- **GSAP** professional scroll animation
- **Shader programming** (GLSL sunrise sky)
- **React architecture** — hooks, dynamic imports, client/server boundaries
- **UI/UX Design** — glassmorphism, typography, color theory
- **Performance optimization** — lazy loading, `dpr`, `BufferGeometry`

---

## 📜 License

This project is created as a portfolio showcase. Feel free to use and modify for personal or commercial projects.

---

*Created with love for the sacred mountains of Nepal 🏔*
