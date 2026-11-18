'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowUpRightIcon, MapPointIcon } from './Icons';
import { CLIENT_LOGOS, clientLogoSrc, clientLogoStyle } from '../data/clientLogosData';
import { BrandWaveOutline } from './BrandWatermark';

const showcaseFrames = [
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    alt: 'AV Production & Cinema Camera Rig',
    label: 'AV Production',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxury Packaging & Brand Identity',
    label: 'Brand & Packaging',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    alt: 'Digital Platform & Analytics Experience',
    label: 'Digital Experience',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    alt: 'Live Auditorium & Stage Activation',
    label: 'Live Activation',
  },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 12,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-nw-gradient text-white w-full pt-[100px] relative overflow-hidden flex flex-col justify-between border-b border-[#CCCCCC]"
    >
      {/* Signature Brand Guide Outline Watermark */}
      <BrandWaveOutline
        className="pointer-events-none select-none absolute -right-16 top-16 w-[420px] sm:w-[560px] lg:w-[680px] h-[420px] sm:h-[560px] lg:h-[680px] text-white"
        strokeOpacity={0.2}
      />

      {/* Main Architectural 12-Column Grid */}
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch border-x border-white/20">
          {/* Left Column: Primary Statement & Action */}
          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between lg:border-r lg:border-white/20">
            <div className="hero-anim pt-1">
              <h1 className="font-poppins font-medium text-[clamp(2.35rem,4.4vw,4rem)] tracking-[-0.025em] leading-[1.06] text-white mb-5 [text-wrap:balance]">
                Marketing That Moves Business Forward.
              </h1>

              <p className="hero-anim font-sans text-base sm:text-lg text-white/95 max-w-[44ch] leading-relaxed mb-8 [text-wrap:pretty]">
                NextWave 360 Solutions combines strategic thinking, creative capability and digital execution to help ambitious businesses build stronger brands.
              </p>

              <div className="hero-anim flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F7F7F7] text-[#262626] px-7 py-3.5 rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors duration-150 min-h-[48px]"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRightIcon size={16} />
                </Link>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 border border-white/55 hover:border-white hover:bg-white/10 text-white px-7 py-3.5 rounded-[2px] font-poppins font-medium text-xs uppercase tracking-[0.12em] transition-colors duration-150 min-h-[48px]"
                >
                  <span>Explore Our Work</span>
                </a>
              </div>
            </div>

            <div className="hero-anim mt-10 pt-5 border-t border-white/25 flex flex-wrap items-center justify-between gap-4 text-xs font-poppins tracking-[0.14em] uppercase text-white/90">
              <span>Strategy · Creative · Digital · Execution</span>
              <span>Chattogram, Bangladesh</span>
            </div>
          </div>

          {/* Right Column: Architectural Specimen Grid (single col on mobile to avoid label truncation) */}
          <div className="lg:col-span-6 border-t lg:border-t-0 border-white/20 grid grid-cols-1 sm:grid-cols-2 bg-white/20 gap-px">
            {showcaseFrames.map((frame) => (
              <Link
                key={frame.label}
                href="/gallery"
                className="group bg-[#091345] flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#091345]">
                  <img
                    src={frame.src}
                    alt={frame.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 px-4 py-3 border-t border-white/15 bg-[#091345] flex items-center justify-between gap-2">
                  <span className="text-xs font-poppins font-medium uppercase tracking-[0.12em] text-white">
                    {frame.label}
                  </span>
                  <ArrowUpRightIcon
                    size={16}
                    className="text-[#0E9ED9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Credibility & Client Marquee Rail (h-28 accommodates up to 96px tall normalized logos without vertical clip) */}
      <div className="w-full border-t border-white/25 bg-[#262626] relative z-20">
        <div className="max-w-[1560px] mx-auto flex flex-col lg:flex-row items-stretch justify-between">
          <div className="py-5 px-6 sm:px-10 lg:px-14 flex items-center gap-3.5 lg:w-[28%] shrink-0 border-b lg:border-b-0 lg:border-r border-white/15">
            <MapPointIcon size={20} className="text-[#0E9ED9]" />
            <p className="text-xs sm:text-sm text-[#F7F7F7] font-sans leading-snug">
              Founded in Chattogram, Bangladesh.
              <br />
              <span className="text-[#CCCCCC]">Built with global ambition.</span>
            </p>
          </div>

          <div className="bg-white py-2 flex items-center overflow-hidden lg:w-[72%] relative min-h-[112px]">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" />

            <div className="hero-client-marquee items-center">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex items-center shrink-0">
                  {CLIENT_LOGOS.map((logo, idx) => (
                    <div
                      key={`${loopIdx}-${idx}`}
                      className="w-[168px] h-28 px-3 flex items-center justify-center overflow-hidden shrink-0 border-r border-[#CCCCCC]/60 bg-white"
                    >
                      <img
                        src={clientLogoSrc(logo.name)}
                        alt={logo.alt}
                        style={clientLogoStyle(logo)}
                        className={`object-contain shrink-0 ${logo.roundedBadge ? 'rounded-[2px]' : ''}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
