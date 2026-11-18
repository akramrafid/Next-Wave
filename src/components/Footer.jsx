import React from 'react';
import Link from 'next/link';
import { BrandLogo, BrandWaveOutline } from './BrandWatermark';
import { CookiePreferencesTrigger } from './CookieConsent';
import { GlobalIcon, MailIcon, MapPointIcon, PhoneIcon } from './Icons';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#262626" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#262626] text-[#F7F7F7] overflow-hidden border-t border-white/15">
      <BrandWaveOutline
        className="pointer-events-none select-none absolute -right-12 -bottom-16 w-[320px] h-[320px] text-white"
        strokeOpacity={0.07}
      />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-b border-white/15">
          {/* Column 1: Official Primary White Logo & Positioning */}
          <div className="lg:col-span-5 py-14 lg:pr-12 lg:border-r lg:border-white/15 flex flex-col justify-between gap-8">
            <div>
              <Link href="/" className="inline-block mb-6 py-1 transition-opacity hover:opacity-90">
                <BrandLogo variant="dark" className="h-8 sm:h-9 w-auto" />
              </Link>

              <p className="font-poppins text-xs uppercase tracking-[0.2em] text-[#0E9ED9] font-medium mb-4">
                Strategy · Creative · Digital · Execution
              </p>
              <p className="font-sans text-[#CCCCCC] text-sm leading-relaxed max-w-[42ch]">
                NextWave 360 Solutions combines strategic thinking, creative expression and disciplined execution to move business forward.
              </p>
            </div>

            <div>
              <p className="text-xs font-poppins font-medium uppercase tracking-[0.16em] text-[#CCCCCC] mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-11 h-11 rounded-[2px] bg-white/10 hover:bg-[#076C96] text-white flex items-center justify-center transition-colors duration-150 border border-white/15 hover:border-[#076C96]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 py-14 lg:px-10 lg:border-r lg:border-white/15 border-t md:border-t-0 border-white/15">
            <h2 className="text-xs font-poppins font-medium uppercase tracking-[0.18em] text-[#CCCCCC] mb-6">
              Navigation
            </h2>
            <ul className="space-y-3.5 font-sans text-sm">
              <li><a href="/#work" className="text-[#CCCCCC] hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="/#about" className="text-[#CCCCCC] hover:text-white transition-colors">About &amp; Vision</a></li>
              <li><a href="/#services" className="text-[#CCCCCC] hover:text-white transition-colors">The 360 Spectrum</a></li>
              <li><a href="/#approach" className="text-[#CCCCCC] hover:text-white transition-colors">How We Work</a></li>
              <li><a href="/#industries" className="text-[#CCCCCC] hover:text-white transition-colors">Where We Work</a></li>
              <li><a href="/#insights" className="text-[#CCCCCC] hover:text-white transition-colors">Insights</a></li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#0E9ED9] hover:text-white transition-colors font-medium">
                  Start a Conversation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Headquarters & Enquiries */}
          <div className="lg:col-span-4 py-14 lg:pl-10 border-t lg:border-t-0 border-white/15 space-y-5">
            <h2 className="text-xs font-poppins font-medium uppercase tracking-[0.18em] text-[#CCCCCC] mb-6">
              Headquarters &amp; Enquiries
            </h2>

            <div className="flex items-start gap-3 text-sm text-[#F7F7F7] leading-relaxed">
              <MapPointIcon size={18} className="text-[#0E9ED9] mt-0.5" />
              <span>Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203, Bangladesh</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MailIcon size={18} className="text-[#0E9ED9]" />
              <a href="mailto:info.nextwaves@gmail.com" className="text-[#F7F7F7] hover:text-[#0E9ED9] transition-colors">
                info.nextwaves@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <PhoneIcon size={18} className="text-[#0E9ED9]" />
              <a href="tel:+8801711204614" className="text-[#F7F7F7] hover:text-[#0E9ED9] transition-colors">
                +880 1711-204614
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm pt-2">
              <GlobalIcon size={18} className="text-[#0E9ED9]" />
              <span className="text-[#0E9ED9] font-poppins font-medium">nextwaves.agency</span>
            </div>
          </div>
        </div>

        {/* Continuous Brand Guidelines Bottom Strip (pb clears bottom-right floating utility controls) */}
        <div className="pt-6 pb-24 sm:pb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs font-sans text-[#CCCCCC]">
          <div>© 2026 Next Wave (NextWave 360 Solutions). All rights reserved.</div>

          <nav aria-label="Legal and privacy" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="py-1 text-[#CCCCCC] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="py-1 text-[#CCCCCC] hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookie-policy" className="py-1 text-[#CCCCCC] hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <CookiePreferencesTrigger className="py-1 text-[#CCCCCC] hover:text-[#0E9ED9] transition-colors cursor-pointer" />
          </nav>

          <div>Founded in Bangladesh · Built with Global Ambition</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
