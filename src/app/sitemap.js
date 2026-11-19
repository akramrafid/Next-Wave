const BASE_URL = 'https://nextwaves.agency';

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
