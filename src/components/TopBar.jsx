'use client';

import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from './Icons';

const TopBar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-8 bg-[#262626] border-b border-white/10 transition-transform duration-200 ease-out"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className="max-w-[1560px] mx-auto h-full px-6 sm:px-10 lg:px-14 flex items-center justify-end gap-2">
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="topbar-social-btn inline-flex items-center justify-center w-6 h-6 rounded-[2px] text-[#F7F7F7] bg-white/10 border border-white/15 hover:bg-[#076C96] hover:border-[#076C96] hover:text-white transition-colors duration-150 shrink-0"
          >
            <Icon size={13} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
