import React, { useEffect, useState } from 'react';

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const tickerItems = [
  '🚀 Digital Marketing Agency in Chattogram',
  '⭐ Rated 5.0 on Google',
  '📣 Facebook Ads · Social Media · Branding',
  '💼 10+ Years of Marketing Excellence',
  '🎯 Data-Driven. Results-Focused.',
  '📍 O.R. Nizam Road, Chattogram',
];

const TopBar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: '36px',
        background: 'linear-gradient(90deg, #0a0a1a 0%, #0E9ED9 50%, #0a0a1a 100%)',
        backgroundSize: '200% 100%',
        animation: 'topbarShimmer 6s linear infinite',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        overflow: 'hidden',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
      }}
    >
      <style>{`
        @keyframes topbarShimmer {
          0%   { background-position: 0% 0%; }
          50%  { background-position: 100% 0%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .topbar-ticker-track {
          display: flex;
          gap: 0;
          animation: tickerScroll 28s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        .topbar-ticker-track:hover {
          animation-play-state: paused;
        }
        .topbar-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.25s ease;
          text-decoration: none;
          flex-shrink: 0;
        }
        .topbar-social-btn:hover {
          background: rgba(255,255,255,0.22);
          color: #fff;
          transform: translateY(-2px) scale(1.15);
          border-color: rgba(255,255,255,0.35);
          box-shadow: 0 4px 12px rgba(14,158,217,0.4);
        }
        .topbar-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
      `}</style>

      {/* Scrolling ticker */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}>
        <div className="topbar-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.85)',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.02em',
                padding: '0 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {item}
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '8px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Social icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '16px', flexShrink: 0 }}>
        <div className="topbar-divider" style={{ marginRight: '6px' }} />
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            aria-label={s.label} className="topbar-social-btn" title={s.label}>
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
