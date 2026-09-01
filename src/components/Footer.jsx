import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@nextwave360',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0b0b0b" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#060606] text-white pt-24 pb-12 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-white/10">
      
      <div className="max-w-[1560px] mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Lockup & Strategic Positioning */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <Link to="/" className="flex items-center gap-3 text-decoration-none group mb-4">
                <img 
                  src="/favicon.png" 
                  alt="NextWave Logo" 
                  className="w-9 h-9 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-poppins font-black text-2xl tracking-[0.06em] text-white leading-none group-hover:text-[#9DD6F3] transition-colors">
                    NEXTWAVE
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.34em] text-gray-400 font-semibold uppercase mt-1">
                    360 SOLUTIONS
                  </span>
                </div>
              </Link>

              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#9DD6F3] font-semibold mb-5">
                Strategy · Creative · Digital · Execution
              </p>
              <p className="font-sans text-gray-400 text-sm leading-relaxed max-w-sm">
                A marketing company from Bangladesh combining strategic thinking, creative expression and disciplined execution to move business forward.
              </p>
            </div>

            {/* Active Social Channels */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0E9ED9] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-transparent hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Architecture */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-6">
              Navigation
            </span>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">The 360 Spectrum</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About & Vision</a></li>
              <li><a href="#approach" className="text-gray-400 hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Where We Work</a></li>
              <li><a href="#insights" className="text-gray-400 hover:text-white transition-colors">Insights</a></li>
              <li><Link to="/contact" className="text-[#9DD6F3] hover:text-white transition-colors font-semibold">Start a Conversation ↗</Link></li>
            </ul>
          </div>

          {/* Column 3: Headquarters & Official Details */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-6">
              Headquarters & Enquiries
            </span>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-[#0E9ED9] shrink-0 mt-1" />
              <span>House 66, Road 06, O. R. Nizam R/A, GEC Circle, Chittagong, Bangladesh</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-[#0E9ED9] shrink-0" />
              <a href="mailto:info.nextwaves@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                info.nextwaves@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-[#0E9ED9] shrink-0" />
              <a href="tel:+8801711204614" className="text-gray-300 hover:text-white transition-colors">
                +880 1711-204614
              </a>
            </div>

            {/* Website */}
            <div className="flex items-center gap-3 text-sm pt-2">
              <Globe size={16} className="text-[#0E9ED9] shrink-0" />
              <span className="text-[#9DD6F3] font-mono">nextwaves.agency</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-gray-500">
          <div>
            © 2026 NextWave 360 Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Founded in Bangladesh · Built with Global Ambition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
