import './globals.css';
import { Poppins, Manrope } from 'next/font/google';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';
import MessengerCTA from '../components/MessengerCTA';
import ChatbotLauncher from '../components/ChatbotLauncher';
import CookieConsent from '../components/CookieConsent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const SITE_URL = 'https://nextwaves.agency';

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'Next Wave (NextWave 360 Solutions)',
  alternateName: 'NextWave 360 Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/site-icon.png?v=2`,
  description:
    'Strategy-first full-service marketing and advertising agency in Chattogram, Bangladesh specializing in brand strategy, creative design, digital performance, production, and PR.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Abdullah Al Kaisar',
    jobTitle: 'Founder & CEO',
    sameAs: ['https://bd.linkedin.com/in/abdullahkaisar'],
  },
  email: 'info.nextwaves@gmail.com',
  telephone: '+8801711204614',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road',
    addressLocality: 'Chattogram',
    postalCode: '4203',
    addressCountry: 'BD',
  },
  sameAs: [
    'https://www.facebook.com/nextwaves.agency',
    'https://www.instagram.com/nextwaves.agency',
    'https://www.linkedin.com/company/nextwavesagency',
    'https://www.tiktok.com/@nextwaves.agency',
    'https://www.behance.net/nextwavesagency',
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Next Wave | Marketing & Advertising Agency',
    template: '%s',
  },
  description:
    'Next Wave (NextWave 360 Solutions) — Strategy, Creative, Digital & Execution. Marketing that moves business forward from Chattogram, Bangladesh.',
  keywords: [
    'Next Wave',
    'NextWave 360 Solutions',
    'marketing agency Chattogram',
    'advertising agency Bangladesh',
    'brand strategy',
    'digital marketing',
    'social media design',
    'performance marketing',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Next Wave',
    title: 'Next Wave | Marketing & Advertising Agency',
    description:
      'Strategy, Creative, Digital & Execution. Marketing that moves business forward from Chattogram, Bangladesh.',
    images: [
      {
        url: '/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/NW-LogoDesign-Vertical-V1.jpg',
        width: 1200,
        height: 630,
        alt: 'Next Wave — NextWave 360 Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Wave | Marketing & Advertising Agency',
    description:
      'Strategy, Creative, Digital & Execution. Marketing that moves business forward.',
    images: ['/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/NW-LogoDesign-Vertical-V1.jpg'],
  },
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
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://mir-s3-cdn-cf.behance.net" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
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
          <ChatbotLauncher />
          <MessengerCTA />
          <WhatsAppCTA />
        </div>
      </body>
    </html>
  );
}
