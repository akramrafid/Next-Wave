import React from 'react';
import LegalPage from '@/components/LegalPage';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Privacy Policy | Next Wave',
  description:
    'How Next Wave (NextWave 360 Solutions) collects, uses, processes, and protects enquiry, AI assistant, and third-party embed data.',
  alternates: { canonical: '/privacy-policy' },
};

const sections = [
  {
    id: 'controller',
    heading: '1. Who We Are',
    paragraphs: [
      'Next Wave (NextWave 360 Solutions) operates nextwaves.agency from our headquarters at Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203, Bangladesh.',
      'This Privacy Policy explains what information is collected when you visit our website, submit a consultation enquiry, use the Next Wave Assistant chatbot, or choose to interact with embedded maps and external messaging channels.',
    ],
  },
  {
    id: 'data-collected',
    heading: '2. Information We Collect',
    paragraphs: [
      'We collect only the information you actively provide or that is strictly necessary to serve the requested website feature:',
    ],
    bullets: [
      {
        label: 'Consultation Form (/contact)',
        detail:
          'Your name, company/organisation name, email address, phone or WhatsApp number, selected service capability, project overview message, timestamp (receivedAt), and recorded consent confirmation.',
      },
      {
        label: 'Next Wave Assistant (Chatbot)',
        detail:
          'Text prompts and any image files you voluntarily attach during a browser session. Messages are stored in temporary page memory for the active session and cleared when you reset the chat or close/reload the page.',
      },
      {
        label: 'Third-Party Channels',
        detail:
          'If you click WhatsApp, Facebook Messenger, LinkedIn, Instagram, or TikTok links—or pre-fill a WhatsApp consultation handoff after submitting the Contact form—that communication moves directly onto those third-party platforms.',
      },
      {
        label: 'Technical Logs',
        detail:
          'Standard web server request metadata (IP address, browser user agent, requested URL, and HTTP status) needed for security and reliability.',
      },
    ],
  },
  {
    id: 'how-used',
    heading: '3. How We Use Your Data',
    paragraphs: [
      'Your enquiry details are used strictly to evaluate your marketing brief, contact you regarding a consultation or proposal, and maintain an audit record of enquiries and consent.',
      'We do not sell, rent, or trade your contact details or uploaded assets to data brokers or unrelated third parties.',
    ],
  },
  {
    id: 'ai-and-third-parties',
    heading: '4. AI Processing & Third-Party Services',
    paragraphs: [
      'Certain interactive capabilities rely on trusted external processors:',
    ],
    bullets: [
      {
        label: 'Google Gemini API',
        detail:
          'Questions and optional image attachments sent through the Next Wave Assistant are forwarded server-side to Google’s Gemini API solely to generate answers. Please avoid sharing passwords, payment card numbers, or sensitive personal records inside chat.',
      },
      {
        label: 'Google Maps Embed (/contact)',
        detail:
          'The interactive map on our Contact page loads third-party Google Maps content (and associated Google cookies) only when you accept optional embeds or click Load Interactive Map.',
      },
      {
        label: 'Meta Platforms & External Socials',
        detail:
          'WhatsApp and Facebook Messenger launchers redirect to external Meta services governed by Meta’s privacy policies.',
      },
    ],
  },
  {
    id: 'retention-rights',
    heading: '5. Storage, Retention & Your Rights',
    paragraphs: [
      'Enquiry submissions are stored in our agency enquiry log or configured team webhook strictly for as long as needed to handle business discussions or satisfy legal obligations.',
      'You may request access to, correction of, or deletion of your consultation record at any time by emailing info.nextwaves@gmail.com or calling +880 1711-204614.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      activeHref="/privacy-policy"
      title="Privacy Policy"
      summary="Clear disclosure of the contact details, AI chat inputs, and third-party services processed on nextwaves.agency."
      sections={sections}
    />
  );
}
