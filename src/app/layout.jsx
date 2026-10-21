import './globals.css';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Chatbot from '../components/Chatbot';

export const metadata = {
  title: 'Next Wave 360 Solutions',
  description: 'Next Wave 360 Solutions - Marketing that Moves Business Forward',
  icons: {
    icon: '/favicon.png',
  },
  other: {
    'facebook-domain-verification': '55ywjt13wwuyzdm6q1ztyd0db7u1n3',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@1,400;1,600;1,700&family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <svg
          id="noise-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: 0.04,
          }}
        >
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <div className="bg-nw-white min-h-screen flex flex-col">
          <TopBar />
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <WhatsAppCTA />
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
