# Kushal S K — Performance Marketing Portfolio

A premium, recruiter-focused portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Design direction: editorial "campaign ledger" — warm paper background, Fraunces serif display type, JetBrains Mono for data/KPIs, single terracotta accent, dark mode included.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx       — fonts, SEO/OG metadata, theme script
    page.tsx         — assembles all sections
    globals.css      — design tokens, ledger rules, grain overlay
  components/
    Navbar.tsx        Hero.tsx        About.tsx
    Experience.tsx    Skills.tsx      CaseStudies.tsx
    Education.tsx     Credentials.tsx Testimonials.tsx
    Contact.tsx       SectionHeading.tsx  AnimatedCounter.tsx
    ThemeProvider.tsx Container.tsx
    charts/
      SpendScalingChart.tsx  RoasCpaChart.tsx  FunnelChart.tsx
  data/
    content.ts        — ALL portfolio copy and data lives here
public/
  icons/favicon.svg
  resume.pdf           — ADD YOUR RESUME HERE (referenced by Hero "Download Resume")
```

## To customize

- **All text/content/stats**: edit `src/data/content.ts` — nothing else needs to change for content updates.
- **Colors/fonts**: edit `tailwind.config.js` (`colors`, `fontFamily`) and the Google Font imports in `src/app/layout.tsx`.
- **Resume**: place your PDF at `public/resume.pdf` (the Hero's "Download Resume" button links to `/resume.pdf`).
- **Real photo/og-image**: add an Open Graph image at `public/og-image.jpg` and reference it in `layout.tsx` metadata if desired.
- **Testimonials**: replace placeholders in `content.ts` `testimonials` array once real quotes are available.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS (custom "ledger" design tokens — paper/ink/ember/sage palette)
- Framer Motion (scroll reveals, animated counters, page transitions)
- Recharts (spend scaling & ROAS/CPA charts)
- lucide-react (icons)

## Notes

- Dark mode toggled via the moon/sun icon in the navbar; preference persisted to `localStorage`.
- All animations respect `prefers-reduced-motion`.
- SEO metadata, Open Graph, and Twitter card tags are set in `src/app/layout.tsx`.
