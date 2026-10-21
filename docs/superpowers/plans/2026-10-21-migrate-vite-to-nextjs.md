# Migrate from Vite to Next.js 15 (App Router) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the NextWave web application from Vite + React Router to Next.js 15 App Router while preserving 100% of the UI design, animations, components, and adding a secure server-side OpenRouter API route for the Chatbot.

**Architecture:** Convert client-side React Router routing to Next.js App Router (`app/` directory). Root layout (`app/layout.jsx`) will contain global font styling, noise overlay, top bar, navigation, footer, WhatsApp CTA, and Chatbot. Client-interactive components and GSAP animations will be designated with `'use client'`, and links converted from `react-router-dom` to `next/link` and `next/navigation`. An API route at `app/api/chat/route.js` will securely process OpenRouter chatbot requests without exposing the API key in client bundles.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v3, GSAP (with ScrollTrigger), Lucide React, OpenRouter API.

**Spec:** User request: "I want it using next.js not vite". Decisions confirmed: App Router (`app/`), Next.js 15, Server-side API route (`/api/chat`) for OpenRouter Chatbot.

## Global Constraints
- Preserve existing Tailwind theme config: colors `nw-blue (#0E9ED9)`, `nw-black (#262626)`, `nw-grey (#CCCCCC)`, `nw-light (#F7F7F7)`, `nw-white (#FFFFFF)`.
- Preserve Google Fonts (`Poppins`, `DM Sans`, `Space Mono`, `Playfair Display`, `Instrument Serif`).
- Preserve SVG noise overlay (`#noise-overlay`) and favicon.
- Preserve all page routes: `/` (Home), `/gallery` (Gallery), `/contact` (Contact).
- No broken imports or missing static assets.
- Eliminate `react-router-dom` and `vite` dependencies.

## Review Focus
- GSAP ScrollTrigger cleanup and window/document access during SSR hydration (must be guarded inside `'use client'` and `useEffect`).
- Next.js Link compatibility (`href` instead of `to`).
- Router navigation: `useNavigate()` -> `useRouter()` from `next/navigation`.
- Location pathname: `useLocation().pathname` -> `usePathname()` from `next/navigation`.
- OpenRouter API security: API key stored in `.env.local` / `.env` as `OPENROUTER_API_KEY` (server-side only, not `NEXT_PUBLIC_`).

---

### Task 1: Update Dependencies and Next.js Configuration

**Files:**
- Modify: `package.json`
- Create: `next.config.mjs`
- Modify: `tailwind.config.js`
- Delete: `vite.config.js`, `index.html` (after verifying layout setup)
- Modify: `.env`

**Interfaces:**
- Produces: `package.json` with Next.js scripts (`dev`, `build`, `start`), Next.js config with React Strict Mode, Tailwind config matching `app/` and `src/` directories.

- [ ] **Step 1: Update `package.json`**
Remove `vite`, `@vitejs/plugin-react`, `react-router-dom`. Add `next: "^15.2.0"`. Update scripts to:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

- [ ] **Step 2: Install dependencies**
Run `npm install` to update `package-lock.json` and install `next`.

- [ ] **Step 3: Create `next.config.mjs`**
Create `next.config.mjs` with configuration for images and React strict mode.

- [ ] **Step 4: Update `tailwind.config.js`**
Update `content` array in `tailwind.config.js` to include `./app/**/*.{js,ts,jsx,tsx}`, `./src/**/*.{js,ts,jsx,tsx}`, `./components/**/*.{js,ts,jsx,tsx}`.

- [ ] **Step 5: Configure `.env` for Next.js**
Ensure `OPENROUTER_API_KEY` is present for server-side usage in `.env`.

- [ ] **Step 6: Verify config and dependencies**
Run `npx next --version` to confirm Next.js is installed.

---

### Task 2: Create App Router Layout, Root Metadata, and Global Styles

**Files:**
- Create: `src/app/layout.jsx` (or `app/layout.jsx`)
- Create: `src/app/globals.css` (or `app/globals.css`)
- Remove: `index.html`, `src/main.jsx`, `src/App.jsx`

**Interfaces:**
- Consumes: `src/components/TopBar.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/components/WhatsAppCTA.jsx`, `src/components/Chatbot.jsx`, `src/components/ErrorBoundary.jsx`.
- Produces: Root HTML structure, fonts, meta tags, noise filter SVG, and persistent layout wrapper.

- [ ] **Step 1: Setup global styles in `src/app/globals.css`**
Import Tailwind directives, CSS variables (`--nw-blue`, etc.), font declarations, custom animations (`marquee`, `float`, `shimmerWave`), and skeleton shimmer classes.

- [ ] **Step 2: Create `src/app/layout.jsx`**
Define root `RootLayout({ children })` with metadata (`title: 'Next Wave 360 Solutions'`, viewport, favicon, Google Fonts link/import), noise overlay SVG filter, `TopBar`, `Navbar`, `<main>{children}</main>`, `Footer`, `WhatsAppCTA`, `Chatbot`.

- [ ] **Step 3: Clean up obsolete Vite entry points**
Remove `index.html`, `src/main.jsx`, and `src/App.jsx`.

---

### Task 3: Migrate Navigation and Links in Components

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/components/CTA.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/SelectedWork.jsx`
- Modify: `src/components/Services.jsx`
- Modify: `src/components/Principles.jsx`
- Modify: `src/components/Industries.jsx`
- Modify: `src/components/Team.jsx`
- Modify: `src/components/Insights.jsx`
- Modify: `src/components/Chatbot.jsx`

**Interfaces:**
- Consumes: `next/link` (`<Link href="...">`), `next/navigation` (`useRouter`, `usePathname`).
- Produces: Clean client components with `'use client'` where hooks/window/DOM APIs are needed, zero `react-router-dom` imports.

- [ ] **Step 1: Migrate `Navbar.jsx`**
Add `'use client'`. Replace `react-router-dom` with `import Link from 'next/link'` and `import { usePathname, useRouter } from 'next/navigation'`. Update `navigate(...)` calls to `router.push(...)` and `location.pathname` to `pathname`.

- [ ] **Step 2: Migrate `Footer.jsx`, `CTA.jsx`, and `Hero.jsx`**
Add `'use client'` if using hooks. Replace `react-router-dom` `Link` with `next/link` and `to="..."` with `href="..."`.

- [ ] **Step 3: Migrate `SelectedWork.jsx`, `Services.jsx`, `Principles.jsx`, `Industries.jsx`, `Team.jsx`, `Insights.jsx`**
Replace `react-router-dom` `Link` with `next/link` and `to="..."` with `href="..."`. Add `'use client'` to components that use GSAP or client hooks.

---

### Task 4: Create Next.js App Router Pages

**Files:**
- Create: `src/app/page.jsx` (Home page)
- Create: `src/app/gallery/page.jsx` (Gallery page)
- Create: `src/app/contact/page.jsx` (Contact page)

**Interfaces:**
- Consumes: `src/pages/Home.jsx`, `src/components/Gallery.jsx`, `src/pages/Contact.jsx`.
- Produces: Route handlers for `/`, `/gallery`, `/contact`.

- [ ] **Step 1: Create `src/app/page.jsx`**
Convert `src/pages/Home.jsx` to `src/app/page.jsx`. Ensure `'use client'` is placed at top for GSAP ScrollTrigger and location hash scrolling (using `next/navigation`).

- [ ] **Step 2: Create `src/app/gallery/page.jsx`**
Wrap or import `Gallery` component inside `src/app/gallery/page.jsx`. Ensure `'use client'` is used if interactive tabs/filters are present.

- [ ] **Step 3: Create `src/app/contact/page.jsx`**
Convert `src/pages/Contact.jsx` into `src/app/contact/page.jsx`. Ensure `'use client'` is added for form handling, state, and interactive controls.

- [ ] **Step 4: Remove obsolete `src/pages/` directory**
Remove `src/pages/Home.jsx` and `src/pages/Contact.jsx` now that they are properly migrated to `src/app/`.

---

### Task 5: Implement Server-Side Chatbot Route (`/api/chat`) and Update Chatbot

**Files:**
- Create: `src/app/api/chat/route.js`
- Modify: `src/components/Chatbot.jsx`
- Modify: `.env`

**Interfaces:**
- Produces: `POST /api/chat` endpoint forwarding chat messages to OpenRouter with server-side `process.env.OPENROUTER_API_KEY`.
- Consumes: `POST /api/chat` inside `Chatbot.jsx` via `fetch('/api/chat', ...)`.

- [ ] **Step 1: Create `src/app/api/chat/route.js`**
Write Next.js Route Handler for `POST`:
- Read `messages` or `prompt` from JSON body.
- Verify `process.env.OPENROUTER_API_KEY`.
- Forward request to `https://openrouter.ai/api/v1/chat/completions`.
- Return JSON response with appropriate error handling and status codes.

- [ ] **Step 2: Update `Chatbot.jsx` to call `/api/chat`**
Add `'use client'`. Replace direct `fetch("https://openrouter.ai/api/v1/chat/completions", ...)` and client-side `import.meta.env.VITE_OPENROUTER_API_KEY` with `fetch("/api/chat", { method: "POST", ... })`.

- [ ] **Step 3: Ensure environment variable naming**
In `.env`, provide `OPENROUTER_API_KEY=...` (and keep backward compatible alias if needed).

---

### Task 6: Build Verification, Dev Server Smoke Test, and Cleanup

**Files:**
- Clean up: remove any residual Vite configuration files or temporary files.

- [ ] **Step 1: Run Next.js production build**
Execute `npm run build` using `run_command`. Check for any build or hydration errors, missing modules, or type mismatches.

- [ ] **Step 2: Fix any build issues**
Address any issues found during `next build` until build passes with 0 errors.

- [ ] **Step 3: Test local dev server / endpoints**
Verify that all routes (`/`, `/gallery`, `/contact`, `/api/chat`) compile and load properly.
