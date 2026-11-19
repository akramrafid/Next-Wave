/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    const assetCacheControl = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=604800, s-maxage=2592000, stale-while-revalidate=86400',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      { source: '/Gallery/:path*', headers: assetCacheControl },
      { source: "/Client's Logo/:path*", headers: assetCacheControl },
      { source: '/NextWave Logo PNG/:path*', headers: assetCacheControl },
      { source: '/Meet our team/:path*', headers: assetCacheControl },
      { source: '/site-icon.png', headers: assetCacheControl },
      { source: '/apple-touch-icon.png', headers: assetCacheControl },
    ];
  },
};

export default nextConfig;
