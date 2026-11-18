'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CompassIcon,
  LayersIcon,
  MailIcon,
  PaletteIcon,
  QuoteIcon,
} from './Icons';
import { BrandWaveOutline } from './BrandWatermark';

gsap.registerPlugin(ScrollTrigger);

const LEADERSHIP_PILLARS = [
  {
    id: 'strategy',
    title: 'Strategic Thinking',
    tag: 'Commercial Clarity',
    icon: CompassIcon,
    summary:
      'Grounded in agency leadership, marketing operations and multi-sector commercial reality before a single campaign launches.',
  },
  {
    id: 'creativity',
    title: 'Creative Expression',
    tag: 'Distinctive Craft',
    icon: PaletteIcon,
    summary:
      'Sharp ideas and brand storytelling shaped to build relevance and lasting preference across competitive markets.',
  },
  {
    id: 'execution',
    title: 'Disciplined Execution',
    tag: 'End-to-End Rigor',
    icon: LayersIcon,
    summary:
      'Accountable client management and integrated rollout built in Chattogram to create work that moves business forward.',
  },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const readoutRef = useRef(null);
  const hasInteractedRef = useRef(false);

  const activePillar = LEADERSHIP_PILLARS[activeIndex];

  const selectPillar = (idx) => {
    hasInteractedRef.current = true;
    setActiveIndex(idx);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      selectPillar((idx + 1) % LEADERSHIP_PILLARS.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      selectPillar((idx - 1 + LEADERSHIP_PILLARS.length) % LEADERSHIP_PILLARS.length);
    }
  };

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      tl.from('.team-header-anim', {
        y: 16,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
      })
        .from(
          '.team-portrait-img',
          {
            scale: 1.08,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.45'
        )
        .from(
          '.team-rule-draw',
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.65'
        )
        .from(
          '.team-narrative-anim',
          {
            y: 14,
            duration: 0.6,
            stagger: 0.07,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.55'
        )
        .from(
          '.team-manifesto-anim',
          {
            y: 16,
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.4'
        );

      gsap.to('.team-wave-mark', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.team-manifesto-band',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!hasInteractedRef.current || !readoutRef.current) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tween = gsap.fromTo(
      readoutRef.current,
      { y: 6, opacity: 0.35 },
      { y: 0, opacity: 1, duration: 0.24, ease: 'power3.out', clearProps: 'transform,opacity' }
    );

    return () => tween.kill();
  }, [activeIndex]);

  return (
    <section
      id="about-team"
      ref={sectionRef}
      className="bg-[#F7F7F7] text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="team-header-anim text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold tracking-[-0.02em] text-[#262626]">
            The Thinking Behind Next Wave
          </h2>
          <p className="team-header-anim text-[#262626]/75 text-sm sm:text-base font-sans">
            Founder &amp; Executive Leadership
          </p>
        </div>

        {/* Unified Swiss Architectural Monograph Shell */}
        <div className="bg-white border border-[#CCCCCC]">
          {/* Upper 5:7 Executive Portrait & Narrative Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Portrait Frame + Verified Nameplate + Tenure Grid */}
            <div className="lg:col-span-5 lg:border-r lg:border-[#CCCCCC] border-b lg:border-b-0 flex flex-col justify-between bg-[#F7F7F7]">
              <div className="group/portrait relative overflow-hidden bg-[#091345]">
                <img
                  src="/Meet our team/Mohammad Abdullah Al Kaisar.jpeg"
                  alt="Abdullah Al Kaisar - Founder & CEO"
                  className="team-portrait-img w-full h-[360px] sm:h-[430px] lg:h-[460px] object-cover object-top transition-transform duration-700 ease-out group-hover/portrait:scale-[1.03]"
                />
              </div>

              <div>
                <div className="p-6 sm:p-8 bg-white border-t border-[#CCCCCC] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#262626] text-lg sm:text-xl font-semibold font-poppins tracking-[-0.015em]">
                        Abdullah Al Kaisar
                      </h3>
                      <img
                        src="/Meet our team/Verified badge sign.png"
                        alt=""
                        className="w-4 h-4 shrink-0"
                      />
                    </div>
                    <p className="text-[#076C96] text-xs font-semibold uppercase tracking-[0.14em] font-poppins">
                      Founder &amp; CEO
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://bd.linkedin.com/in/abdullahkaisar"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Abdullah Al Kaisar on LinkedIn"
                      title="Connect on LinkedIn"
                      className="w-11 h-11 rounded-[2px] bg-[#F7F7F7] hover:bg-[#076C96] text-[#262626] hover:text-white border border-[#CCCCCC] hover:border-[#076C96] flex items-center justify-center transition-colors duration-150"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href="mailto:info.nextwaves@gmail.com"
                      aria-label="Email Abdullah Al Kaisar"
                      title="Email Kaisar"
                      className="w-11 h-11 rounded-[2px] bg-[#F7F7F7] hover:bg-[#076C96] text-[#262626] hover:text-white border border-[#CCCCCC] hover:border-[#076C96] flex items-center justify-center transition-colors duration-150"
                    >
                      <MailIcon size={18} />
                    </a>
                    <Link
                      href="/contact"
                      className="group/cta inline-flex items-center gap-2 bg-[#262626] hover:bg-[#076C96] text-white text-xs font-poppins font-semibold px-5 min-h-[48px] rounded-[2px] uppercase tracking-[0.12em] transition-colors duration-150"
                    >
                      <span>Connect</span>
                      <ArrowUpRightIcon
                        size={15}
                        className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>

                {/* Fact Ledger Bar */}
                <div className="grid grid-cols-2 border-t border-[#CCCCCC] bg-[#F7F7F7] divide-x divide-[#CCCCCC]">
                  <div className="px-6 sm:px-8 py-4">
                    <span className="block text-xs font-poppins font-medium uppercase tracking-[0.14em] text-[#262626]/70 mb-1">
                      Leadership
                    </span>
                    <span className="block font-poppins font-semibold text-xs sm:text-sm text-[#262626]">
                      10+ Years Experience
                    </span>
                  </div>
                  <div className="px-6 sm:px-8 py-4">
                    <span className="block text-xs font-poppins font-medium uppercase tracking-[0.14em] text-[#262626]/70 mb-1">
                      Headquarters
                    </span>
                    <span className="block font-poppins font-semibold text-xs sm:text-sm text-[#262626]">
                      Chattogram, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative + Interactive Pillar Console */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white">
              {/* Top Narrative Prose */}
              <div className="p-7 sm:p-10 lg:p-14 flex-1 flex flex-col justify-center">
                <h3 className="team-narrative-anim text-2xl sm:text-3xl lg:text-4xl lg:leading-[1.15] font-poppins font-semibold text-[#262626] tracking-[-0.02em] max-w-[24ch] [text-wrap:balance]">
                  Bridging Strategic Acumen &amp; Creative Precision
                </h3>

                <div className="team-rule-draw h-[1px] w-24 bg-[#076C96] my-7" aria-hidden="true" />

                <div className="space-y-5 text-[#262626]/80 font-sans text-base sm:text-lg leading-relaxed max-w-[58ch] [text-wrap:pretty]">
                  <p className="team-narrative-anim">
                    Abdullah Al Kaisar is the Founder &amp; CEO of NextWave 360 Solutions. With a background in agency leadership, marketing operations and client management, he has been directly involved in marketing engagements with leading businesses and brands across multiple sectors.
                  </p>
                  <p className="team-narrative-anim text-[#262626] font-medium">
                    He founded Next Wave with the ambition of building a marketing company from Bangladesh that combines strategic thinking, creative expression and disciplined execution.
                  </p>
                </div>
              </div>

              {/* Interactive Leadership Pillars Selector */}
              <div className="team-narrative-anim border-t border-[#CCCCCC] bg-[#F7F7F7]">
                <div
                  role="tablist"
                  aria-label="Core leadership pillars"
                  className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#CCCCCC]"
                >
                  {LEADERSHIP_PILLARS.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    const isActive = idx === activeIndex;

                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        role="tab"
                        id={`leadership-tab-${pillar.id}`}
                        aria-selected={isActive}
                        aria-controls="leadership-pillar-panel"
                        onClick={() => selectPillar(idx)}
                        onMouseEnter={() => selectPillar(idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className={`relative text-left px-6 py-5 transition-colors duration-200 flex flex-col justify-between gap-2.5 min-h-[92px] ${
                          isActive
                            ? 'bg-[#262626] text-white'
                            : 'bg-white hover:bg-[#F7F7F7] text-[#262626]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <Icon
                            size={20}
                            className={`transition-colors duration-200 ${
                              isActive ? 'text-[#0E9ED9]' : 'text-[#076C96]'
                            }`}
                          />
                          <span
                            className={`text-xs font-poppins font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                              isActive ? 'text-[#CCCCCC]' : 'text-[#262626]/70'
                            }`}
                          >
                            {pillar.tag}
                          </span>
                        </div>

                        <span className="font-poppins font-semibold text-sm sm:text-base tracking-[-0.01em]">
                          {pillar.title}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#0E9ED9] origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Live Pillar Readout Strip */}
                <div
                  id="leadership-pillar-panel"
                  role="tabpanel"
                  aria-labelledby={`leadership-tab-${activePillar.id}`}
                  className="border-t border-[#CCCCCC] bg-white px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <p
                    ref={readoutRef}
                    className="text-sm font-sans text-[#262626]/85 leading-relaxed max-w-[54ch] [text-wrap:pretty]"
                  >
                    {activePillar.summary}
                  </p>
                  <a
                    href="#approach"
                    className="group/link inline-flex items-center gap-2 text-[#076C96] hover:text-[#262626] text-xs font-poppins font-semibold uppercase tracking-[0.12em] transition-colors shrink-0 min-h-[44px]"
                  >
                    <span>Explore Our Approach</span>
                    <ArrowRightIcon
                      size={16}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Manifesto Stage + Brand Gradient Action Plate */}
          <div className="team-manifesto-band team-manifesto-anim grid grid-cols-1 lg:grid-cols-12 border-t border-[#CCCCCC] bg-[#262626] text-white">
            {/* Quote Surface (8 Cols) */}
            <div className="lg:col-span-8 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <QuoteIcon size={28} className="text-[#0E9ED9] mb-5" />
                <blockquote className="font-poppins font-medium text-xl sm:text-2xl md:text-3xl text-white leading-[1.35] tracking-[-0.015em] mb-8 max-w-[44ch]">
                  “Great marketing begins with understanding the business behind the brand. At Next Wave, our ambition is to bring{' '}
                  <span
                    className={`transition-colors duration-300 ${
                      activeIndex === 0
                        ? 'text-white underline decoration-[#0E9ED9] decoration-2 underline-offset-4'
                        : 'text-white/90'
                    }`}
                  >
                    sharper thinking
                  </span>
                  ,{' '}
                  <span
                    className={`transition-colors duration-300 ${
                      activeIndex === 1
                        ? 'text-white underline decoration-[#0E9ED9] decoration-2 underline-offset-4'
                        : 'text-white/90'
                    }`}
                  >
                    stronger creativity
                  </span>{' '}
                  and{' '}
                  <span
                    className={`transition-colors duration-300 ${
                      activeIndex === 2
                        ? 'text-white underline decoration-[#0E9ED9] decoration-2 underline-offset-4'
                        : 'text-white/90'
                    }`}
                  >
                    disciplined execution
                  </span>{' '}
                  together to create work that moves{' '}
                  <span className="text-[#0E9ED9] font-semibold">business forward</span>.”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-poppins text-sm sm:text-base font-medium text-white">
                  Abdullah Al Kaisar · Founder &amp; CEO · NextWave 360 Solutions
                </div>
                <span className="text-xs font-poppins text-[#CCCCCC] uppercase tracking-[0.14em]">
                  Focus: {activePillar.title}
                </span>
              </div>
            </div>

            {/* Signature Brand Gradient Conversion Plate (4 Cols) */}
            <div className="lg:col-span-4 bg-nw-gradient p-8 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/15 flex flex-col justify-between gap-8 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#091345]/60 via-[#091345]/25 to-[#091345]/45"
              />
              <BrandWaveOutline
                className="team-wave-mark pointer-events-none select-none absolute -right-10 -bottom-10 w-56 h-56 text-white"
                strokeOpacity={0.22}
              />

              <div className="relative z-10">
                <p className="text-xs font-poppins font-medium uppercase tracking-[0.14em] text-white/90 mb-3">
                  Chattogram · Global Outlook
                </p>
                <p className="font-poppins font-semibold text-xl sm:text-2xl text-white tracking-[-0.015em] leading-snug max-w-[24ch]">
                  Strategic insight meets disciplined brand execution.
                </p>
              </div>

              <div className="relative z-10">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center justify-between w-full gap-3 bg-white hover:bg-[#F7F7F7] text-[#262626] px-6 py-3.5 rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-150 min-h-[48px]"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRightIcon
                    size={16}
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
