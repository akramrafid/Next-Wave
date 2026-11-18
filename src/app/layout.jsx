import './globals.css';
import { Poppins, Manrope } from 'next/font/google';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';
import MessengerCTA from '../components/MessengerCTA';
import Chatbot from '../components/Chatbot';
import CookieConsent from '../components/CookieConsent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Next Wave | Marketing & Advertising Agency',
  description: 'Next Wave (NextWave 360 Solutions) — Strategy, Creative, Digital & Execution. Marketing that moves business forward.',
  icons: {
    icon: [
      { url: '/site-icon.png?v=2', type: 'image/png', sizes: '256x256' },
    ],
    shortcut: '/site-icon.png?v=2',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'facebook-domain-verification': '55ywjt13wwuyzdm6q1ztyd0db7u1n3',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const DIRECTION_CONTRACT = `<!--
THESIS: NextWave rejects rounded SaaS agency templates in favor of the sharp Swiss hairline architecture directly authored in its Brand Guidelines PDF—letting real work, disciplined spacing, and typographic contrast carry authority without pill eyebrows or card soup.
OWN-WORLD: Architectural white (#FFFFFF) and Insight White (#F7F7F7) surfaces divided by continuous 1px Logic Grey (#CCCCCC) structural rules, Clarity Black (#262626) anchors, and Positive Blue-to-Navy (.bg-nw-gradient) plates with thin geometric N-wave linework; sharp 0px-2px corners; Poppins display and Manrope prose.
STORY: Growth and enterprise decision-makers immediately grasp NextWave's 360 integrated capability across Strategy, Creative, Digital, Production & PR, review client partnerships separately from founder background, and initiate engagement cleanly.
FIRST VIEWPORT: Full-bleed .bg-nw-gradient Hero on a 12-column hairline grid—left column holds display statement, concise positioning, and crisp rectangular CTAs; right column frames the 4 flagship work plates in a flush 2x2 architectural grid; bottom full-bleed rail pairs Chattogram positioning with the normalized client marquee.
FORM: NextWave Architectural Grid (brief-pinned Swiss studio monograph derived from Brand Style Guide, position 1; concept-seed key: 6b3a0d2d).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable}`}>
      <body className="bg-[#F7F7F7] text-[#262626] antialiased">
        <div
          hidden
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0E9ED9] focus:text-white focus:font-poppins focus:text-xs focus:font-semibold"
        >
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <TopBar />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <Chatbot />
          <MessengerCTA />
          <WhatsAppCTA />
        </div>
      </body>
    </html>
  );
}
