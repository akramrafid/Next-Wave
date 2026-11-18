---
name: Next Wave
description: NextWave Architectural Grid — Swiss hairline editorial studio system translated from the official Next Wave Brand Guidelines.
colors:
  positive-blue: "#0E9ED9"
  signal-blue: "#076C96"
  signal-blue-hover: "#055475"
  deep-navy: "#091345"
  clarity-black: "#262626"
  paper-white: "#FFFFFF"
  insight-white: "#F7F7F7"
  logic-grey: "#CCCCCC"
  placeholder-slate: "#666666"
  whatsapp-green: "#12803E"
  whatsapp-green-hover: "#0F6932"
typography:
  display:
    fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.35rem, 4.4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  architectural: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section-y-mobile: "80px"
  section-y-desktop: "112px"
  container-max: "1560px"
components:
  button-primary-dark:
    backgroundColor: "{colors.clarity-black}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.architectural}"
    padding: "14px 24px"
  button-primary-dark-hover:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper-white}"
  button-primary-blue:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.architectural}"
    padding: "14px 28px"
  button-primary-blue-hover:
    backgroundColor: "{colors.signal-blue-hover}"
  button-inverted-white:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.clarity-black}"
    typography: "{typography.label}"
    rounded: "{rounded.architectural}"
    padding: "14px 28px"
  button-inverted-white-hover:
    backgroundColor: "{colors.insight-white}"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.architectural}"
    padding: "14px 28px"
  input-field:
    backgroundColor: "{colors.insight-white}"
    textColor: "{colors.clarity-black}"
    typography: "{typography.body}"
    rounded: "{rounded.architectural}"
    padding: "14px 16px"
    height: "48px"
  card-architectural:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.clarity-black}"
    rounded: "{rounded.none}"
    padding: "32px"
  card-dark-plate:
    backgroundColor: "{colors.clarity-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "48px"
  nav-bar:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.clarity-black}"
    typography: "{typography.label}"
    height: "68px"
---

# Design System: Next Wave

## Overview

**Creative North Star: "The Swiss Studio Monograph"**

Next Wave's visual system translates its official Brand Guidelines directly onto the web as an architectural Swiss monograph. Rather than relying on soft SaaS cards, rounded pill badges, or ambient shadows, information is organized inside continuous hairline grids (`1px` dividers), generous editorial gutters, and decisive tonal contrast between Paper White (`#FFFFFF`), Insight White (`#F7F7F7`), and Clarity Black (`#262626`).

Opening and closing flagship sections anchor the brand in a full-bleed radial gradient field moving from Positive Blue (`#0E9ED9`) to Deep Navy (`#091345`), accented by the thin geometric outline of the Next Wave `N`-wave mark. Between those two bookends, alternating white and warm-light paper bands pace dense agency capabilities, asymmetric 30/70 editorial spreads, optically normalized client matrices, and long-form strategy writing with calm authority.

Motion is structural and restrained: subtle vertical reveals on entry (`12px` to `16px` upward settle via GSAP `power3.out`), crisp hover color inversions, a slow linear marquee for the client strip (`52s` cycle), and zero motion under `prefers-reduced-motion: reduce`.

**Key Characteristics:**
- Continuous `1px` Logic Grey (`#CCCCCC`) architectural grid dividers with shared flush edges and `0px` structural container corners.
- Alternating paper rhythm (`#F7F7F7` and `#FFFFFF`) framed by full-bleed Clarity Black (`#262626`) and Positive Blue-to-Navy (`.bg-nw-gradient`) statement plates.
- Geometric `Poppins` display typography paired with `Manrope` body prose constrained to readable measures (`34ch–58ch`).
- Interactive controls restricted to sharp `2px` architectural corners (`rounded-[2px]`) and high-contrast solid hover fills.

## Colors

The palette pairs high-legibility monochrome architectural surfaces with a disciplined blue signal spectrum derived from the Next Wave Brand Guidelines, supplemented by a scoped green exclusively for WhatsApp outreach.

### Primary
- **Positive Blue** (`#0E9ED9`): Official Brand Guidelines primary hue. Used as the upper-right radial highlight origin (`86% 14%`) in the signature `.bg-nw-gradient` field, for highlight phrases and icons on dark Clarity Black (`#262626`) or Deep Navy (`#091345`) surfaces, and for the keyboard skip-to-content banner. Never used for small body text on light backgrounds where it falls below AA contrast.
- **Signal Blue** (`#076C96`): Accessibility-hardened interactive blue (`--nw-blue-ink`) derived for WCAG AA legibility on Paper White (`#FFFFFF`) and Insight White (`#F7F7F7`). Used for inline text emphasis, category tags, active navigation links and underlines, icon accents on light grids, form focus outlines (`2px` solid), and primary blue CTA fills.
- **Signal Blue Hover** (`#055475`): Deepened active/hover fill (`--nw-blue-ink-hover`) reserved for Signal Blue (`#076C96`) button hover transitions.
- **Deep Navy** (`#091345`): Brand gradient anchor (`--nw-navy`) forming the dark lower-left floor of `.bg-nw-gradient` (via `#096191` at `40%` and `#0A2E75` at `72%`) so white display type maintains crisp contrast, as well as the backing fill of Hero specimen frames and the translucent scrolled-top navigation glaze (`rgba(9, 19, 69, 0.45)`).

### Secondary
- **WhatsApp Channel Green** (`#12803E`): Functional channel accent reserved strictly for WhatsApp Business outreach—the floating bottom-right `WhatsAppCTA` button and the post-submission WhatsApp handoff CTA on `/contact`.
- **WhatsApp Channel Green Hover** (`#0F6932`): Hover fill paired exclusively with `#12803E` WhatsApp actions.

### Neutral
- **Clarity Black** (`#262626`): Brand Guidelines dark anchor (`--nw-black`). Serves as primary ink on all light surfaces, the solid background of the TopBar, Footer, Chatbot header, Hero credibility rail, and high-contrast editorial statement plates, and the resting fill of primary dark CTAs.
- **Paper White** (`#FFFFFF`): Crisp architectural plate surface (`--nw-white`) for ledgers, matrix cells, manifesto blocks, form panels, and client logo slots, as well as primary text and inverted CTAs over dark or gradient plates.
- **Insight White** (`#F7F7F7`): Brand Guidelines canvas ground (`--nw-light`). Applied to `body`, alternating homepage bands (`Philosophy`, `Services`, `Industries`, `Team`), inner page grounds (`/contact`, `/gallery`), left 30% editorial rails, hover states on white rows, and resting form fields.
- **Logic Grey** (`#CCCCCC`): Brand Guidelines structural rule (`--nw-grey`). Drives continuous `1px` borders, cell dividers, section hairlines, and secondary metadata ink on Clarity Black (`#262626`) plates.
- **Placeholder Slate** (`#666666`): Accessible muted neutral used strictly for placeholder text inside light (`#F7F7F7`) text inputs and textareas.

### Named Rules
**The Surface-Split Blue Rule.** Use Positive Blue (`#0E9ED9`) exclusively on dark `#262626` / `#091345` plates and gradient highlights; switch to Signal Blue (`#076C96`) for all text, links, outlines, and button fills on `#FFFFFF` / `#F7F7F7` light surfaces.
**The Brand Field Gradient Rule.** Full-bleed opening (`Hero`), global ambition (`Industries`), and closing (`CTA`) plates use `.bg-nw-gradient` (`radial-gradient(circle at 86% 14%, #0E9ED9 0%, #096191 40%, #0A2E75 72%, #091345 100%)`), keeping the deeper `#091345` anchor beneath left-aligned headline copy.

## Typography

**Display Font:** `Poppins` (fallback `-apple-system, BlinkMacSystemFont, sans-serif`)
**Body Font:** `Manrope` (fallback `-apple-system, BlinkMacSystemFont, sans-serif`)

**Character:** Geometric clarity meets human editorial rhythm. `Poppins` carries headlines, numbered/ruled titles, navigation, and uppercase micro-labels with tight negative display tracking, while `Manrope` handles explanatory copy at comfortable reading measures and open line heights.

### Hierarchy
- **Display** (`500`–`600` weight, `clamp(2.35rem, 4.4vw, 4rem)` in Hero / `4rem` [`64px`] uppercase on desktop in CTA / up to `4.5rem` [`72px`] on Contact `h1`, `1.05`–`1.06` line-height, `-0.025em` to `-0.02em` tracking): Reserved for page hero statements, closing conversion headings, and inner-page titles (`Let's Talk.`, `Photo Gallery`).
- **Headline** (`600` weight, `1.875rem` [`30px`] mobile scaling to `2.25rem` [`36px`] at `sm` and `3rem` [`48px`] at `md+`, `1.2` line-height, `-0.02em` tracking; `42px` / `1.18` for the `Philosophy` pull-quote manifesto): Anchors every major band header (`Selected Work`, `The 360 Spectrum`, `How We Work`, `Where We Work`, `Clients & Partners`, `The Thinking Behind Next Wave`, `Thinking Beyond The Campaign.`).
- **Title** (`600` weight, `1.25rem` [`20px`] to `1.5rem` [`24px`], `1.375` `leading-snug`, `-0.015em` tracking): Card titles, service pillar names, sector names (`1rem`–`1.125rem`), and sub-section headings (`About & Vision`, `Start a Conversation`).
- **Body** (`400`–`500` weight, `0.875rem` [`14px`] to `1rem` [`16px`] standard and `1.125rem` [`18px`] lead paragraphs, `1.625` `leading-relaxed`): Narrative descriptions, service summaries, editorial insights, and form inputs (`16px` on mobile to prevent iOS input zoom, `14px` at `sm+`).
- **Label** (`500`–`600` weight, `0.75rem` [`12px`], `1.25` line-height, `0.1em`–`0.14em` tracking, predominantly uppercase): Top navigation links (`0.14em`), CTA button text (`0.12em`), form labels (`0.1em`), and inline metadata dividers (`Strategy · Creative · Digital · Execution`).

### Named Rules
**The Two-Voice Measure Rule.** Display and Headline `Poppins` copy is constrained to crisp editorial widths (`18ch–34ch`) with `[text-wrap:balance]`, while `Manrope` body blocks hold `40ch–58ch` with `[text-wrap:pretty]` so multi-column splits never stretch across full `1560px` rows.
**The No-Kicker Rule.** Section headlines (`h2`/`h1`) stand on their own weight inside a horizontal header flex row paired with a right-aligned summary sentence—never introduce pill tags or dot-eyebrow kickers above section headings.

## Layout

The site runs on a unified full-width band cadence anchored to a centered `1560px` (`max-w-[1560px]`) architectural frame with responsive horizontal gutters (`24px` mobile, `40px` at `640px`, `56px` at `1024px`).

- **Grid Archetypes:**
  - **12-Column Asymmetric Editorial Split (30/70 / 4:8):** Used in `Philosophy` and `Principles`, pinning a recessed `#F7F7F7` context rail (`4` cols) beside primary white plates (`8` cols) separated by continuous vertical and horizontal `1px` `#CCCCCC` dividers.
  - **12-Column Balanced Hero Split (6:6):** Pairs the Hero statement column with a flush `2x2` right-hand showcase grid (`gap-px` over `bg-white/20`), anchored below by a `28% / 72%` credibility and marquee rail.
  - **Asymmetric Showcase Matrix (`7/5` + `5/7`):** `SelectedWork` alternates 7-column and 5-column plates across two rows (`border-t border-l` wrapper + `border-r border-b` cells) for zero doubled interior strokes.
  - **Gapless Multi-Column Ledgers:** `Industries` renders a `1 / 2 / 4`-column (`4x2`) matrix; `Clients` renders a `2 / 3 / 4 / 6`-column grid of `34` client cells (`h-28` = `112px`) plus a `2`-column terminal CTA cell (`36` grid units for balanced rows), followed by a separate `2 / 5`-column founder-experience strip; `Insights` divides `3` equal vertical columns (`divide-y md:divide-y-0 md:divide-x`).
  - **Vertical Section Rhythm:** Standard homepage sections apply `80px` (`py-20`) vertical padding on mobile and `112px` (`md:py-28`) on desktop, while fixed chrome clearance offsets inner pages (`/contact`, `/gallery`) by `144px` (`pt-36`) and Hero by `100px` (`pt-[100px]`, clearing the `32px` TopBar + `68px` Navbar).

## Elevation & Depth

Next Wave is **Flat-By-Default**. In-flow page sections, editorial ledgers, showcase frames, client tiles, and cards use zero drop shadows (`box-shadow: none`). Depth and hierarchy come strictly from **surface tonal stepping** (`#F7F7F7` canvas -> `#FFFFFF` primary plate -> `#262626` high-contrast plate -> `.bg-nw-gradient` brand plate) separated by `1px` `#CCCCCC` hairline boundaries.

### Shadow Vocabulary
- **Floating Action Elevation** (`shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`): Applied solely to the fixed bottom-right `Chatbot` toggle and `WhatsAppCTA` launcher.
- **Mobile Overlay Elevation** (`shadow-xl`: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`): Applied solely to the open mobile dropdown navigation drawer.
- **Floating Dialog Elevation** (`shadow-2xl`: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`): Applied solely to the expanded `Chatbot` dialog window (`z-50`).

### Named Rules
**The Flat-By-Default Rule.** Never apply `box-shadow` to in-flow cards, form containers, navbars, or grid plates; reserve elevation exclusively for viewport-pinned overlays and floating utility launchers.

## Shapes

The form language is architectural, rectangular, and strictly bounded between zero and `2px` radius:

- **Structural Plates & Grids (`0px` radius):** All section containers, asymmetric split spreads, showcase frames, client matrix cells, service rows, insight columns, footer blocks, and map wrappers meet at sharp `90deg` corners, joined by shared `1px` `#CCCCCC` borders (`border-t border-l` outer container paired with `border-r border-b` cells, or `divide-y` / `divide-x`).
- **Interactive & Floating Controls (`2px` radius):** Every button, text input, select dropdown, textarea, icon button, mobile menu trigger, floating launcher, and the Chatbot dialog shell uses a crisp `2px` architectural chamfer (`rounded-[2px]`).
- **Brand Watermark Linework:** Full-bleed gradient and dark statement plates carry the geometric outline `BrandWaveOutline` SVG (`strokeWidth: 0.9`, `strokeLinejoin: miter`, `strokeOpacity: 0.07–0.22`) cropped cleanly at container edges with `overflow-hidden`.

## Components

Interactive and structural primitives prioritize crisp borders, immediate hover color shifts, and generous touch targets (`44px` square minimum for icon buttons, `48px`–`50px` minimum height for rectangular CTAs and inputs).

### Buttons
- **Shape:** Architectural chamfered rectangle (`2px` radius).
- **Primary Dark:** Clarity Black (`#262626`) background with Paper White (`#FFFFFF`) uppercase `12px` `Poppins` semibold label (`0.12em` tracking) and `14px 24px`–`28px` padding (`min-h-[48px]`). Transitions on hover to Signal Blue (`#076C96`).
- **Primary Signal Blue:** Signal Blue (`#076C96`) background with Paper White (`#FFFFFF`) label (`14px 28px`, `min-h-[48px]`), shifting to `#055475` on hover. Used inside dark Clarity Black (`#262626`) bands and the `Chatbot` / mobile drawer actions.
- **Inverted White & Ghost (On Brand Gradient / Dark):** Paper White (`#FFFFFF`) solid fill with Clarity Black (`#262626`) ink (`hover:bg-[#F7F7F7]`) paired beside a transparent `1px` `rgba(255,255,255,0.45–0.55)` bordered ghost CTA (`hover:bg-white/10 hover:border-white`).
- **Icon Square Controls:** `44px × 44px` (`w-11 h-11`) `2px`-radius tiles with `1px` `#CCCCCC` (light) or `rgba(255,255,255,0.15–0.25)` (dark) border, inverting to `#076C96` with white icon on hover.
- **Focus:** Universal `2px solid #076C96` outline with `2px` offset (`:focus-visible`).

### Cards / Containers
- **Corner Style:** Sharp `0px` corners across all grid cells, work frames, sector tiles, and editorial columns.
- **Background & Border:** Paper White (`#FFFFFF`) or Insight White (`#F7F7F7`) separated by continuous `1px` `#CCCCCC` hairlines; interactive rows and sector tiles shift from `#FFFFFF` to `#F7F7F7` on hover without lift or shadow.
- **Shadow Strategy:** None (`box-shadow: none`); contrast relies on borders and tonal plate swaps (`#FFFFFF` <-> `#F7F7F7` <-> `#262626`).
- **Internal Padding:** `24px–32px` (`p-6`–`p-8`) for dense work footers and sector cards; `32px–56px` (`p-8` to `lg:p-14`) for editorial split spreads and statement plates.

### Inputs / Fields
- **Style:** Insight White (`#F7F7F7`) resting fill, `1px solid #CCCCCC` border, `2px` radius, `48px` minimum height, `14px 16px` padding, `Manrope` text (`16px` mobile / `14px` desktop) with `#666666` placeholder and `#076C96` `caret-color`.
- **Focus:** Shifts background to Paper White (`#FFFFFF`), border to Signal Blue (`#076C96`), and displays the global `2px` `#076C96` focus-visible ring.

### Navigation
- **TopBar (`32px` height):** Fixed `#262626` strip above the header housing right-aligned `24px` social links (`border-b border-white/10`); slides up (`-100%`) after `40px` scroll.
- **Navbar (`68px` height):** Fixed beneath `TopBar` (`top-8`), translating `-32px` on scroll (`>40px`) as `TopBar` retracts. Uses a translucent Deep Navy glaze (`rgba(9, 19, 69, 0.45)` + `backdrop-blur-md`, `border-white/20`, white text) at top of homepage, transitioning to crisp translucent white (`rgba(255, 255, 255, 0.95)`, `border-[#CCCCCC]`, `#262626` ink) on scroll or inner routes (`/contact`, `/gallery`). Links render in `12px` `Poppins` `500` uppercase (`0.14em` tracking) with a `2px` `#076C96` bottom `scaleX` indicator on hover/active; mobile viewports (`<1024px`) open a full-width `#FFFFFF` ruled drawer beneath the bar.

### Brand Plate & Hairline Ledger (Signature Components)
- **Optical Client Matrix (`Clients` & `Hero`):** Displays `34` normalized partner logos inside fixed `112px`-tall (`h-28`) `#FFFFFF` grid cells bounded by `1px` `#CCCCCC` hairlines (`Hero` marquee spans `168px` cell width; `Clients` fills `2/3/4/6`-column grids). Founder executive history sits in a clearly separated `2/5`-column ledger with an explicit attribution block (`#F7F7F7` bordered callout) and Clarity Black (`#262626`) `BSRM` lead tile.
- **Bilingual AI Concierge (`Chatbot`):** Floating `#076C96` launcher (`w-11 h-11`, `right-[68px]`) opening a `2px`-radius `#FFFFFF` dialog (`384px` max width, `500px` / `80vh` height) featuring a `#262626` header with the vertical `N`-wave mark, `#F7F7F7` message scroll well (`#076C96` user bubbles, `#FFFFFF` bordered assistant bubbles), image upload preview, and `#076C96` suggested-question chips.

## Do's and Don'ts

### Do:
- **Do** use continuous `1px` Logic Grey (`#CCCCCC`) borders and collapsed `border-t border-l` + `border-r border-b` grid cells to establish structure across sections.
- **Do** enforce the surface-split blue rule: `#0E9ED9` Positive Blue on `#262626` / `#091345` dark and gradient plates; `#076C96` Signal Blue for all links, focus rings, icons, and fills on `#FFFFFF` / `#F7F7F7` surfaces.
- **Do** pair `Poppins` (`500`/`600`) display/labels with `Manrope` (`400`/`500`) prose constrained to `40ch–58ch` inside `max-w-[1560px]` containers.
- **Do** limit corner rounding strictly to `0px` on structural containers/cards and `2px` (`rounded-[2px]`) on interactive controls, inputs, and floating chrome.
- **Do** keep founder prior-experience logos in a visually separated, attribution-labeled grid apart from the 34 NextWave agency client cells.
- **Do** gate GSAP entry reveals and marquee loops behind `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** introduce SaaS card soup—never apply `rounded-xl`–`rounded-3xl`, pill badges (`rounded-full`), icon-in-tinted-box grids, or resting drop shadows to content cards.
- **Don't** place dot-eyebrow kickers or decorative category pills above `h1`/`h2` section headlines.
- **Don't** use Positive Blue (`#0E9ED9`) for body text, links, or button labels on white (`#FFFFFF`) or Insight White (`#F7F7F7`) surfaces.
- **Don't** introduce additional font families beyond `Poppins` and `Manrope`, or pastel tinted container fills; stay strictly within the monochrome paper, Clarity Black, and blue signal surfaces.
- **Don't** shrink interactive buttons or icon controls below `44px × 44px` (`48px` minimum height for rectangular CTAs and inputs).
