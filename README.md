# STEVE O SMITH — Luxury Couture House

A refined, minimal luxury fashion website for STEVE O SMITH, a couture house based in London.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

Add your assets to the `public` folder:

- `public/hero-video.mp4` — Hero background video (9:16)
- `public/hero-poster.jpg` — Video poster/fallback
- `public/logo-white.png` — Logo for dark backgrounds (hero)
- `public/logo-black.png` — Logo for light backgrounds (footer)

If logos are missing, the brand name is shown as text fallback.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── HeaderHero.tsx
│   ├── BottomNav.tsx
│   ├── CollectionsFan.tsx
│   ├── EnquiriesFan.tsx
│   ├── EnquiryForm.tsx
│   └── FooterBar.tsx
└── data/
    └── config.ts
```

## Build

```bash
npm run build
npm start
```
