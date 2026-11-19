import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from './Icons';
import { CLIENT_LOGOS, FOUNDER_EXPERIENCE_LOGOS, clientLogoSrc, clientLogoStyle } from '../data/clientLogosData';

const Clients = () => {
  return (
    <section id="clients" className="bg-white text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section 1: NextWave Clients & Partners */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold tracking-[-0.02em] text-[#262626]">
              Clients &amp; Partners
            </h2>
            <p className="text-[#262626]/75 text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
              Building long-term enterprise and brand partnerships through strategic clarity, distinct creative and disciplined execution.
            </p>
          </div>

          {/* Complete Gapless Swiss Identity Matrix (34 logos + 2-col terminal cell = 36 slots across 2/3/4/6 col grids) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-[#CCCCCC]">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                title={logo.alt}
                className="h-28 px-3 flex items-center justify-center overflow-hidden border-r border-b border-[#CCCCCC] bg-white hover:bg-[#F7F7F7] transition-colors duration-150"
              >
                <img
                  src={clientLogoSrc(logo.name)}
                  alt={logo.alt}
                  style={clientLogoStyle(logo)}
                  className={`object-contain shrink-0 ${logo.roundedBadge ? 'rounded-[2px]' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

            <Link
              href="/contact"
              className="col-span-2 h-28 px-6 flex items-center justify-between gap-4 border-r border-b border-[#CCCCCC] bg-[#F7F7F7] hover:bg-[#262626] text-[#262626] hover:text-white transition-colors duration-150 group"
            >
              <div>
                <span className="block font-poppins font-semibold text-sm sm:text-base tracking-[-0.01em]">
                  Your Brand Next
                </span>
                <span className="block font-sans text-xs text-[#076C96] group-hover:text-[#0E9ED9] mt-0.5 transition-colors">
                  Partner with Next Wave →
                </span>
              </div>
              <ArrowUpRightIcon size={18} className="text-[#076C96] group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* Section 2: Distinct Founder Professional Experience (BSRM spans 2 cols on mobile -> 0 orphans at 2 and 5 cols) */}
        <div className="pt-14 border-t border-[#CCCCCC]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-poppins font-semibold text-[#262626] tracking-[-0.02em] mb-2">
                Selected Professional Experience
              </h3>
              <p className="text-sm text-[#262626]/75 font-sans max-w-[54ch] leading-relaxed">
                Selected brands and organisations associated with Abdullah Al Kaisar’s executive background prior to founding NextWave 360 Solutions.
              </p>
            </div>

            <p className="bg-[#F7F7F7] px-5 py-4 max-w-lg text-xs text-[#262626]/85 font-sans leading-relaxed border border-[#CCCCCC]">
              Attribution note: Selected organisations associated with our Founder’s previous professional background are presented separately and are not represented as NextWave clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-[#CCCCCC]">
            {FOUNDER_EXPERIENCE_LOGOS.map((logo) => (
              <div
                key={logo.name}
                title={logo.alt}
                className={`${logo.spanTwoOnMobile ? 'col-span-2 md:col-span-1' : ''} bg-white hover:bg-[#F7F7F7] px-3 h-28 border-r border-b border-[#CCCCCC] flex items-center justify-center overflow-hidden transition-colors duration-150`}
              >
                <img
                  src={clientLogoSrc(logo.name)}
                  alt={logo.alt}
                  style={clientLogoStyle(logo)}
                  className={`object-contain shrink-0 ${logo.blendMultiply ? 'mix-blend-multiply' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
