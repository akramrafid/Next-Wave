import React from 'react';
import Link from 'next/link';
import { BrandWaveOutline } from './BrandWatermark';
import { ArrowUpRightIcon, WhatsAppIcon } from './Icons';

const CTA = () => {
  return (
    <section className="w-full bg-nw-gradient text-white relative overflow-hidden border-b border-white/15">
      {/* Brand Guidelines Closing Slide Outline N-Wave */}
      <BrandWaveOutline
        className="pointer-events-none select-none -right-12 -bottom-16 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] text-white absolute"
        strokeOpacity={0.22}
      />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 py-20 sm:py-24 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-poppins font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white uppercase tracking-[-0.02em] leading-[1.06] mb-6 [text-wrap:balance]">
            What&apos;s Your Next Move?
          </h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-[48ch] leading-relaxed [text-wrap:pretty]">
            Have a marketing challenge, a new brand launch or a business expansion in mind? Let&apos;s talk.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F7F7F7] text-[#262626] px-8 py-4 rounded-[2px] font-poppins font-semibold text-xs sm:text-sm tracking-[0.12em] uppercase transition-colors duration-150 min-h-[48px]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRightIcon size={17} />
            </Link>

            <a
              href="https://wa.me/8801711204614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/45 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-poppins font-medium text-xs sm:text-sm tracking-[0.12em] uppercase transition-colors duration-150 min-h-[48px]"
            >
              <WhatsAppIcon size={19} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Closing Slide Bottom Metadata Rule */}
        <div className="mt-16 pt-6 border-t border-white/25 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-sans text-white/85">
          <span>Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203</span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:info.nextwaves@gmail.com" className="hover:text-white transition-colors">
              info.nextwaves@gmail.com
            </a>
            <span>nextwaves.agency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
