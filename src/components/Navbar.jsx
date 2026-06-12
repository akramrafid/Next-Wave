import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Work',     type: 'hash', target: '#work'     },
  { label: 'Services', type: 'hash', target: '#services'  },
  { label: 'About',    type: 'hash', target: '#about'     },
  { label: 'Gallery',  type: 'link', target: '/gallery'   },
  { label: 'Contact',  type: 'link', target: '/contact'   },
];

/* ── Hamburger icon — three lines that animate to X ── */
const HamburgerIcon = ({ open }) => (
  <div style={{ width: 22, height: 16, position: 'relative', cursor: 'pointer' }}>
    <style>{`
      .hb-line {
        position: absolute;
        left: 0;
        width: 22px;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
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
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setIsMenuOpen(false);
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

  /* ── top offset: when TopBar visible → 36px; when scrolled (TopBar gone) → 10px ── */
  const navTop = scrolled ? '10px' : '36px';

  return (
    <>
      <style>{`
        .nav-link-item {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #1a1a2e;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
          padding: 4px 0;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #0E9ED9;
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link-item:hover { color: #0E9ED9; }
        .nav-link-item:hover::after { width: 100%; }

        /* Collapsed dropdown menu items */
        .collapsed-menu-link {
          display: block;
          width: 100%;
          padding: 14px 20px;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #1a1a2e;
          text-decoration: none;
          border-radius: 12px;
          transition: background 0.18s, color 0.18s, transform 0.18s;
          cursor: pointer;
          background: none;
          border: none;
        }
        .collapsed-menu-link:hover {
          background: rgba(14,158,217,0.08);
          color: #0E9ED9;
          transform: translateX(4px);
        }

        /* Nav transition */
        .navbar-wrap {
          transition:
            top 0.4s cubic-bezier(0.4,0,0.2,1),
            width 0.4s cubic-bezier(0.4,0,0.2,1),
            padding 0.3s ease,
            border-radius 0.4s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }
      `}</style>

      {/* ── Main nav bar ── */}
      <nav
        className="navbar-wrap"
        style={{
          position: 'fixed',
          top: navTop,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: scrolled ? '220px' : 'min(92%, 1024px)',
          padding: scrolled ? '10px 18px' : '14px 28px',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: scrolled
            ? '1.5px solid rgba(14,158,217,0.2)'
            : '1px solid transparent',
          boxShadow: scrolled
            ? '0 8px 32px rgba(14,158,217,0.15), 0 2px 8px rgba(0,0,0,0.08)'
            : 'none',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: scrolled ? '16px' : '22px',
            letterSpacing: '-0.5px',
            color: '#1a1a2e',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0,
            transition: 'font-size 0.3s ease',
          }}
        >
          <span style={{ color: '#0E9ED9' }}>≋</span> Next Wave
        </Link>

        {/* Desktop nav links — hidden when scrolled */}
        {!scrolled && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.target}
                className="nav-link-item"
                onClick={e => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {/* CTA button — hidden when scrolled */}
          {!scrolled && (
            <button
              style={{
                background: '#0E9ED9',
                color: '#fff',
                padding: '9px 22px',
                borderRadius: '9999px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 18px rgba(14,158,217,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Get a Proposal
            </button>
          )}

          {/* Hamburger — only visible when scrolled */}
          {scrolled && (
            <button
              onClick={() => setIsMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0E9ED9, #0a7ab5)',
                border: 'none',
                cursor: 'pointer',
                color: '#fff',
                boxShadow: '0 4px 14px rgba(14,158,217,0.4)',
                transition: 'all 0.3s ease',
              }}
            >
              {isMenuOpen ? <X size={16} /> : <HamburgerIcon open={false} />}
            </button>
          )}
        </div>
      </nav>

      {/* ── Dropdown menu (all states) ── */}
      <div
        style={{
          position: 'fixed',
          top: scrolled ? `calc(${navTop} + 58px)` : `calc(${navTop} + 66px)`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? '220px' : 'min(92%, 380px)',
          zIndex: 49,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen
            ? 'translateX(-50%) translateY(0) scale(1)'
            : 'translateX(-50%) translateY(-12px) scale(0.96)',
          transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1), top 0.4s ease',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1.5px solid rgba(14,158,217,0.18)',
            borderRadius: '20px',
            padding: '10px',
            boxShadow: '0 20px 60px rgba(14,158,217,0.15), 0 4px 16px rgba(0,0,0,0.08)',
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
                transitionDelay: isMenuOpen ? `${i * 40}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA in dropdown when scrolled */}
          {scrolled && (
            <div style={{ padding: '8px 8px 4px' }}>
              <button
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #0E9ED9, #0a7ab5)',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '12px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(14,158,217,0.4)',
                }}
              >
                Get a Proposal
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
