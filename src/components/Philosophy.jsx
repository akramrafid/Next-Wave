'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRightIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.reveal-manifesto', {
        y: 16,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 82%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#F7F7F7] text-[#262626] overflow-hidden border-b border-[#CCCCCC]"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Swiss Brand Guidelines 30/70 Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-[#CCCCCC]">
          {/* Left Margin Rail */}
          <div className="reveal-manifesto lg:col-span-4 p-8 sm:p-10 lg:p-12 lg:border-r lg:border-[#CCCCCC] border-b lg:border-b-0 flex flex-col justify-between bg-[#F7F7F7]">
            <div>
              <h2 className="font-poppins font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-[#262626] mb-4">
                About &amp; Vision
              </h2>
              <p className="font-sans text-sm text-[#262626]/75 leading-relaxed max-w-[34ch]">
                Chattogram, Bangladesh · Established 2025
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#CCCCCC] text-xs font-poppins font-medium uppercase tracking-[0.14em] text-[#262626]/80">
              Strategy · Storytelling · Digital · Design
            </div>
          </div>

          {/* Right Manifesto & Dual Architectural Plates */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Manifesto Headline Block */}
            <div className="reveal-manifesto p-8 sm:p-12 lg:p-14 bg-white border-b border-[#CCCCCC]">
              <p className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.18] text-[#262626] tracking-[-0.02em] max-w-[34ch] [text-wrap:balance]">
                “Great marketing is not just about visibility. It is about creating{' '}
                <span className="text-[#076C96] font-semibold">value</span>, building{' '}
                <span className="text-[#076C96] font-semibold">relevance</span> and moving business forward.”
              </p>
            </div>

            {/* Agency + Vision Split Plates */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
              <div className="reveal-manifesto bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#CCCCCC]">
                <div>
                  <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-[#262626] mb-4 leading-snug tracking-[-0.015em]">
                    Strategic thinking, creative expression and disciplined execution under one wave.
                  </h3>
                  <p className="font-sans text-[#262626]/80 text-sm sm:text-base leading-relaxed max-w-[48ch] [text-wrap:pretty]">
                    Founded in 2025 in Chattogram, NextWave 360 Solutions was built with a clear ambition: to unify strategic rigor, creative firepower and precise digital execution into one seamless partnership.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#CCCCCC]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-[0.14em] text-[#076C96] hover:text-[#262626] transition-colors"
                  >
                    <span>The Agency</span>
                    <ArrowRightIcon size={15} />
                  </Link>
                </div>
              </div>

              <div className="reveal-manifesto bg-[#262626] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-white leading-snug mb-4 tracking-[-0.015em]">
                    To set a global standard for marketing excellence from Bangladesh.
                  </h3>
                  <p className="font-sans text-[#F7F7F7]/85 text-sm sm:text-base leading-relaxed max-w-[48ch] [text-wrap:pretty]">
                    We envision a world where Bangladeshi creativity competes confidently on the global stage, powered by commercial insight, deep empathy and relentless digital execution.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-poppins uppercase tracking-[0.14em] text-[#CCCCCC]">
                  <span>Full-Spectrum 360 Partner</span>
                  <span className="text-[#0E9ED9]">Est. 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
