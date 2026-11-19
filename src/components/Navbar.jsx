'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BrandLogo } from './BrandWatermark';
import { ArrowUpRightIcon, CloseCircleIcon, MenuIcon } from './Icons';

const navLinks = [
  { label: 'ABOUT',    type: 'hash', target: '#about'    },
  { label: 'WORK',     type: 'hash', target: '#work'     },
  { label: 'SERVICES', type: 'hash', target: '#services' },
  { label: 'APPROACH', type: 'hash', target: '#approach' },
  { label: 'INSIGHT',  type: 'hash', target: '#insights' },
  { label: 'CONTACT',  type: 'link', target: '/contact'  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 40;
      setScrolled(nextScrolled);
      if (nextScrolled) setIsMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (link.type === 'link') {
      router.push(link.target);
    } else if (pathname !== '/') {
      router.push('/' + link.target);
    } else {
      const el = document.getElementById(link.target.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Solid crisp white architectural bar on scroll or inner routes; deep brand navy glaze at top of Hero
  const useLightChrome = scrolled || pathname !== '/';

  return (
    <>
      <style>{`
        .header-nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 180ms ease;
          position: relative;
          padding: 6px 0;
        }
        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #076C96;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .header-nav-link:hover::after,
        .header-nav-link[data-active='true']::after {
          transform: scaleX(1);
        }
      `}</style>

      <header
        style={{
          transform: scrolled ? 'translateY(-32px)' : 'translateY(0px)',
        }}
        className={`fixed top-8 left-0 right-0 z-50 border-b transition-[background-color,border-color,transform] duration-200 ease-out ${
          useLightChrome
            ? 'bg-white/95 backdrop-blur-md border-[#CCCCCC] text-[#262626]'
            : 'bg-[#091345]/45 backdrop-blur-md border-white/20 text-white'
        }`}
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 h-[68px] flex items-center justify-between gap-6">
          {/* Official Brand Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center py-1 shrink-0 transition-opacity hover:opacity-90"
            aria-label="Next Wave Home"
          >
            <BrandLogo
              variant={useLightChrome ? 'light' : 'dark'}
              className="h-7 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links (ABOUT, WORK, SERVICES, APPROACH, INSIGHT, CONTACT) */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = link.type === 'link' && pathname === link.target;
              const linkClass = `header-nav-link ${
                useLightChrome
                  ? isActive
                    ? 'text-[#076C96]'
                    : 'text-[#262626] hover:text-[#076C96]'
                  : isActive
                    ? 'text-white'
                    : 'text-white/90 hover:text-white'
              }`;
              if (link.type === 'link') {
                return (
                  <Link
                    key={link.label}
                    href={link.target}
                    data-active={isActive ? 'true' : 'false'}
                    className={linkClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.target}
                  data-active={isActive ? 'true' : 'false'}
                  className={linkClass}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Primary Action & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden sm:inline-flex items-center gap-2 text-xs font-poppins font-semibold px-5 py-2.5 rounded-[2px] uppercase tracking-[0.12em] transition-colors duration-150 ${
                useLightChrome
                  ? 'bg-[#262626] hover:bg-[#076C96] text-white'
                  : 'bg-white hover:bg-[#F7F7F7] text-[#262626]'
              }`}
            >
              <span>Start a Conversation</span>
              <ArrowUpRightIcon size={15} />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              className={`flex lg:hidden items-center justify-center w-11 h-11 rounded-[2px] border transition-colors duration-150 ${
                useLightChrome
                  ? 'bg-[#F7F7F7] text-[#262626] border-[#CCCCCC]'
                  : 'bg-white/10 text-white border-white/25'
              }`}
            >
              {isMenuOpen ? <CloseCircleIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Width Architectural Menu Drawer */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          style={{
            top: scrolled ? '68px' : '100px',
          }}
          className="fixed left-0 right-0 z-50 bg-white border-b border-[#CCCCCC] shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation links" className="max-w-[1560px] mx-auto px-6 py-4 flex flex-col divide-y divide-[#CCCCCC]/70">
            {navLinks.map((link) =>
              link.type === 'link' ? (
                <Link
                  key={link.label}
                  href={link.target}
                  className="py-3.5 text-sm font-poppins font-medium uppercase tracking-[0.14em] text-[#262626] hover:text-[#076C96] flex items-center justify-between transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRightIcon size={16} className="text-[#076C96]" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.target}
                  className="py-3.5 text-sm font-poppins font-medium uppercase tracking-[0.14em] text-[#262626] hover:text-[#076C96] flex items-center justify-between transition-colors"
                  onClick={(e) => handleNavClick(e, link)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRightIcon size={16} className="text-[#076C96]" />
                </a>
              )
            )}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#076C96] hover:bg-[#055475] text-white py-3.5 px-6 rounded-[2px] text-xs font-poppins font-semibold uppercase tracking-[0.14em] transition-colors"
              >
                <span>Start a Conversation</span>
                <ArrowUpRightIcon size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
