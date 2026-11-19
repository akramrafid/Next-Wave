import React from 'react';
import LegalPage from '@/components/LegalPage';
import CookieResetButton from '@/components/CookieResetButton';

export const metadata = {
  title: 'Cookie Policy | Next Wave',
  description:
    'Cookie, local storage, and third-party embed disclosure for nextwaves.agency, with interactive preference controls.',
};

const sections = [
  {
    id: 'overview',
    heading: '1. How Next Wave Uses Cookies & Storage',
    paragraphs: [
      'We keep data collection minimal. By default, our website does not load third-party advertising pixels or behavioural analytics trackers.',
      'Fonts (Poppins and Manrope) are self-hosted through Next.js so your browser does not need to fetch font stylesheets from external font servers during regular browsing.',
    ],
  },
  {
    id: 'essential-storage',
    heading: '2. Essential Browser Storage',
    paragraphs: [
      'We store one strictly necessary preference key in your browser so your cookie decision is remembered:',
    ],
    bullets: [
      {
        label: 'nw_cookie_consent (localStorage)',
        detail:
          'Stores either "essential" or "all" to remember whether you opted to allow optional third-party embeds.',
      },
    ],
  },
  {
    id: 'third-party-embeds',
    heading: '3. Third-Party Embeds & Consent',
    paragraphs: [
      'Interactive embeds provided by external platforms can set their own cookies when loaded:',
    ],
    bullets: [
      {
        label: 'Behance Project Embeds (Home · Selected Work)',
        detail:
          'Selected Work includes embedded Behance project cards hosted by Adobe Behance. Selecting Essential Only pauses these iframes until you choose to load them.',
      },
      {
        label: 'Google Maps Embed (/contact)',
        detail:
          'Our Contact page includes an interactive office location map hosted by Google Maps. When enabled via Accept All or by clicking Load Interactive Map, Google may set functional and security cookies under Google’s terms.',
      },
      {
        label: 'External Messaging & Social Links',
        detail:
          'WhatsApp, Facebook Messenger, and social profile buttons only link outward; no tracking scripts run on our pages before you click them.',
      },
    ],
  },
  {
    id: 'manage',
    heading: '4. Managing Your Preferences',
    paragraphs: [
      'You can switch between Essential Only (keeping Google Maps unloaded until explicitly clicked) and Accept All at any time using the controls below or via Cookie Preferences in the website footer, as well as through your browser settings.',
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      activeHref="/cookie-policy"
      title="Cookie Policy"
      summary="Transparent inventory of browser storage and consent-gated third-party embeds across nextwaves.agency."
      sections={sections}
      afterSections={<CookieResetButton />}
    />
  );
}
