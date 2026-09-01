import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'WORK',     type: 'hash', target: '#work'     },
  { label: 'SERVICES', type: 'hash', target: '#services'  },
  { label: 'ABOUT',    type: 'hash', target: '#about'     },
  { label: 'APPROACH', type: 'hash', target: '#approach'  },
  { label: 'INSIGHTS', type: 'hash', target: '#insights'  },
  { label: 'CONTACT',  type: 'link', target: '/contact'   },
];

/* ── Hamburger icon ── */
const HamburgerIcon = ({ open }) => (
  <div style={{ width: 22, height: 16, position: 'relative', cursor: 'pointer' }}>
    <style>{`
      .hb-line {
        position: absolute;
        left: 0;
        width: 22px;
        height: 2px;
        border-radius: 2px;
        background: #ffffff;
        transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        transform-origin: center;
      }
    `}</style>
    <span className="hb-line" style={{
      top: open ? '7px' : '0px',
      transform: open ? 'rotate(45deg)' : 'none',
    }} />
    <span className="hb-line" style={{
      top: '7px',
      opacity: open ? 0 : 1,
      transform: open ? 'scaleX(0)' : 'none',
    }} />
    <span className="hb-line" style={{
      top: open ? '7px' : '14px',
      transform: open ? 'rotate(-45deg)' : 'none',
    }} />
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (link.type === 'link') {
      navigate(link.target);
    } else {
      if (location.pathname !== '/') {
        navigate('/' + link.target);
      } else {
        const el = document.getElementById(link.target.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navTop = scrolled ? '12px' : '36px';

  return (
    <>
      <style>{`
        .header-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.12em;
          color: #D1D5DB;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s ease;
          position: relative;
          padding: 4px 0;
        }
        .header-nav-link:hover {
          color: #FFFFFF;
        }
        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #9DD6F3;
          transition: width 0.25s ease;
        }
        .header-nav-link:hover::after {
          width: 100%;
        }

        .collapsed-menu-link {
          display: block;
          width: 100%;
          padding: 12px 18px;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: #E5E7EB;
          text-decoration: none;
          border-radius: 12px;
          transition: background 0.18s, color 0.18s, transform 0.18s;
          cursor: pointer;
          background: none;
          border: none;
        }
        .collapsed-menu-link:hover {
          background: rgba(255,255,255,0.08);
          color: #9DD6F3;
          transform: translateX(4px);
        }
      `}</style>

      {/* ── Main Top Header / Navbar Bar ── */}
      <header
        style={{
          position: 'fixed',
          top: navTop,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: scrolled ? 'min(92%, 1240px)' : 'min(94%, 1560px)',
          padding: scrolled ? '12px 24px' : '16px 32px',
          borderRadius: scrolled ? '9999px' : '20px',
          background: scrolled
            ? 'rgba(10,10,10,0.92)'
            : 'rgba(8,8,8,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: scrolled
            ? '1px solid rgba(255,255,255,0.12)'
            : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled
            ? '0 12px 40px rgba(0,0,0,0.6)'
            : 'none',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Left: Brand Lockup with NextWave Logo Mark */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3 text-decoration-none group"
        >
          <img 
            src="/favicon.png" 
            alt="NextWave Logo" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-poppins font-black text-xl sm:text-2xl tracking-[0.06em] text-white leading-none group-hover:text-[#9DD6F3] transition-colors">
              NEXTWAVE
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.34em] text-gray-400 font-semibold uppercase mt-1">
              360 SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.target}
              className="header-nav-link"
              onClick={e => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Pill Outlined Button + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 border border-white/40 hover:border-white text-white hover:text-black hover:bg-white text-xs font-poppins font-semibold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all duration-200"
          >
            <span>START A CONVERSATION</span>
            <span className="text-sm font-normal">↗</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white border border-white/20"
          >
            {isMenuOpen ? <X size={16} /> : <HamburgerIcon open={false} />}
          </button>
        </div>
      </header>

      {/* ── Mobile / Collapsed Dropdown Menu ── */}
      <div
        style={{
          position: 'fixed',
          top: scrolled ? `calc(${navTop} + 60px)` : `calc(${navTop} + 72px)`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(92%, 360px)',
          zIndex: 49,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen
            ? 'translateX(-50%) translateY(0) scale(1)'
            : 'translateX(-50%) translateY(-12px) scale(0.96)',
          transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          style={{
            background: 'rgba(18,18,18,0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '20px',
            padding: '12px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
            overflow: 'hidden',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.target}
              className="collapsed-menu-link"
              onClick={e => handleNavClick(e, link)}
              style={{
                transitionDelay: isMenuOpen ? `${i * 25}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA in mobile dropdown */}
          <div style={{ padding: '8px 6px 4px' }}>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded-xl font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-decoration-none shadow-md transition-colors"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
