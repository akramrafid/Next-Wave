import React from 'react';

/**
 * Geometric outline N-wave watermark matching the Brand Guidelines cover/closing pages.
 */
export function BrandWaveOutline({ className = '', strokeOpacity = 0.24 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M11 5.8 C31 5.8, 43 13.5, 60.9 23.4 L60.9 5.6 L89 5.6 L89 56.8 C67 59.5, 48 49.0, 39.1 40.2 C30 31.4, 21 33.6, 11 33.6 Z"
        stroke="currentColor"
        strokeOpacity={strokeOpacity}
        strokeWidth="0.9"
        strokeLinejoin="miter"
      />
      <path
        d="M11 46.1 C29 46.1, 41 53.0, 50 58.6 C62 66.0, 74 67.8, 89 65.2 L89 97.0 C73 97.6, 56 91.5, 39.1 81.0 L39.1 97.3 L11 97.3 Z"
        stroke="currentColor"
        strokeOpacity={strokeOpacity}
        strokeWidth="0.9"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/**
 * Official Next Wave horizontal logo asset selector for light and dark surfaces.
 */
export function BrandLogo({ variant = 'light', className = 'h-8 w-auto' }) {
  const src =
    variant === 'dark'
      ? '/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/Horizontal%20Logo%20for%20Dark%20BG%404x.png'
      : '/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/Horizontal%20Logo%20-%20For%20Dark%20Backgrounds%20copy%404x.png';

  return (
    <img
      src={src}
      alt="Next Wave"
      decoding="async"
      className={`${className} object-contain select-none`}
    />
  );
}
