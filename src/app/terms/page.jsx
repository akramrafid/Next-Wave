import React from 'react';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms & Conditions | Next Wave',
  description:
    'Terms governing website access, intellectual property, consultation enquiries, and use of the Next Wave AI assistant.',
};

const sections = [
  {
    id: 'acceptance',
    heading: '1. Scope & Acceptance',
    paragraphs: [
      'By accessing or using nextwaves.agency, you agree to these Terms & Conditions. The website is operated by Next Wave (NextWave 360 Solutions), Chattogram, Bangladesh.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: '2. Intellectual Property & Client Marks',
    paragraphs: [
      'All Next Wave logos, brand architecture, copy, photography in our archive, design systems, and source code displayed on this site are owned by or licensed to NextWave 360 Solutions unless otherwise stated.',
      'Client and organisation logos appearing in Selected Work and Clients & Partners remain the property of their respective owners and are displayed strictly to illustrate agency client partnerships—or, where separately labelled under Selected Professional Experience, prior executive experience of our Founder.',
    ],
  },
  {
    id: 'ai-and-pricing',
    heading: '3. Enquiries, Pricing & AI Assistant',
    paragraphs: [
      'Submitting a consultation enquiry through our website does not by itself create an agency-client contract or fee commitment until a formal scope of work is agreed in writing.',
      'Any indicative rates, timelines, or recommendations returned by the Next Wave AI Assistant are provided for general guidance only and remain subject to official confirmation from Next Wave’s strategy and account leadership.',
    ],
  },
  {
    id: 'acceptable-use',
    heading: '4. Acceptable Use',
    paragraphs: [
      'You agree not to use automated scrapers, abusive traffic, or prompt-injection payloads against our API endpoints (/api/contact and /api/chat), and not to upload unlawful or infringing material via the Assistant attachment tool.',
    ],
  },
  {
    id: 'third-party-and-law',
    heading: '5. External Links & Governing Law',
    paragraphs: [
      'Links to external websites and platforms (including WhatsApp, Facebook Messenger, LinkedIn, Instagram, TikTok, and Google Maps) are provided for convenience. Next Wave is not responsible for the content or practices of external sites.',
      'To the fullest extent permitted by law, this website is provided “as is.” These Terms are governed by the applicable laws of Bangladesh, and questions may be directed to info.nextwaves@gmail.com.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      activeHref="/terms"
      title="Terms & Conditions"
      summary="Rules of access, brand and client intellectual property ownership, and non-binding notice for AI assistant estimates."
      sections={sections}
    />
  );
}
