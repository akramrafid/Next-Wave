import ContactClient from './ContactClient';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Initiate Engagement | Contact NextWave 360 Solutions',
  description:
    'Connect with NextWave 360 Solutions senior leadership team in Chattogram, Bangladesh to discuss brand objectives, business challenges, or expansion plans.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
