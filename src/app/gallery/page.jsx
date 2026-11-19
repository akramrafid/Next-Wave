import Gallery from '@/components/Gallery';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Visual Archive & Deliverables | NextWave 360 Solutions',
  description:
    'A comprehensive showcase of commercial deliverables, brand identities, digital campaigns, and experiential activations by NextWave 360 Solutions.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return <Gallery />;
}
