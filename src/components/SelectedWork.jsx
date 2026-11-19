'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRightIcon, BehanceIcon } from './Icons';
import {
  COOKIE_CHANGE_EVENT,
  readCookieConsent,
  saveCookieConsent,
} from './CookieConsent';

gsap.registerPlugin(ScrollTrigger);

const BEHANCE_URL = 'https://www.behance.net/nextwavesagency';
const BEHANCE_HANDLE = '@nextwavesagency';

const BEHANCE_PROJECTS = [
  {
    id: '253176415',
    vectorKey: 'identity',
    title: 'Sultan Nur Brand Identity Design',
    category: 'Luxury Identity & Packaging',
    scope: 'Couture Apparel · Visual Systems',
    embedUrl: 'https://www.behance.net/embed/project/253176415?ilo0=1',
    summary:
      'Cohesive luxury visual identity uniting bespoke crest geometry, refined typography, color tokens and tactile packaging applications.',
  },
  {
    id: '253315545',
    vectorKey: 'social',
    title: 'Multi-Industry Social Media Design',
    category: 'Social Campaign Systems',
    scope: 'Retail · Sports & Electronics · Digital Creative',
    embedUrl: 'https://www.behance.net/embed/project/253315545?ilo0=1',
    summary:
      'High-impact social campaign visuals, product launch layouts and modular post systems crafted across diverse commercial sectors.',
  },
];

const DISCIPLINE_MARQUEE = [
  'Brand Identity Systems',
  'Multi-Industry Social Design',
  'Luxury Packaging Craft',
  'Campaign Art Direction',
  'Audio-Visual & OVC Production',
  'Performance Creative',
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function KineticArrowTile({ dark = false }) {
  const surfaceClasses = dark
    ? 'border-white/25 bg-white/10 group-hover:bg-[#0E9ED9] group-hover:border-[#0E9ED9] text-white'
    : 'border-[#CCCCCC] bg-[#F7F7F7] group-hover:bg-[#076C96] group-hover:border-[#076C96] text-[#262626] group-hover:text-white';

  return (
    <span
      aria-hidden="true"
      className={`relative overflow-hidden w-11 h-11 shrink-0 rounded-[2px] border flex items-center justify-center transition-colors duration-200 ${surfaceClasses}`}
    >
      <ArrowUpRightIcon
        size={18}
        className="transition-transform duration-300 ease-out group-hover:-translate-y-7 group-hover:translate-x-7 motion-reduce:transition-none motion-reduce:transform-none"
      />
      <ArrowUpRightIcon
        size={18}
        className="absolute -translate-x-7 translate-y-7 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:hidden"
      />
    </span>
  );
}

/** Animated geometric backing rendered behind embeds (and shown when embeds are opted out). */
function PortfolioVectorCanvas({ vectorKey }) {
  return (
    <svg
      viewBox="0 0 460 320"
      fill="none"
      aria-hidden="true"
      className="w-full h-full select-none"
    >
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        <line x1="0" y1="80" x2="460" y2="80" />
        <line x1="0" y1="240" x2="460" y2="240" />
        <line x1="115" y1="0" x2="115" y2="320" />
        <line x1="345" y1="0" x2="345" y2="320" />
      </g>

      <g className="sw-ring-orbit" style={{ transformOrigin: '230px 160px' }}>
        <circle
          cx="230"
          cy="160"
          r="102"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
          strokeDasharray="5 9"
        />
      </g>

      <path
        className="sw-wave-flow"
        d="M -20 220 C 90 130, 165 250, 240 160 C 315 70, 390 190, 480 100"
        stroke="#0E9ED9"
        strokeWidth="1.5"
        strokeDasharray="10 7"
        strokeOpacity="0.55"
      />

      {vectorKey === 'identity' ? (
        <g transform="translate(230 160)">
          <circle cx="0" cy="0" r="68" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx="0" cy="0" r="46" stroke="#0E9ED9" strokeWidth="1.25" strokeDasharray="4 4" />
          <path
            d="M 0 -58 C 22 -30, 22 24, 0 54 C -22 24, -22 -30, 0 -58 Z"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            fill="rgba(14,158,217,0.14)"
          />
          <path
            d="M -48 -14 C -22 -28, -4 6, 0 46 M 48 -14 C 22 -28, 4 6, 0 46"
            stroke="#0E9ED9"
            strokeWidth="1.5"
          />
        </g>
      ) : (
        <g>
          <g transform="translate(230 160) rotate(-10)">
            <rect
              x="-116"
              y="-64"
              width="92"
              height="116"
              stroke="#FFFFFF"
              strokeOpacity="0.75"
              strokeWidth="1.25"
              fill="rgba(9,19,69,0.5)"
            />
            <rect x="-104" y="-52" width="68" height="52" stroke="#0E9ED9" strokeWidth="1.25" />
          </g>
          <g transform="translate(230 160) rotate(6)">
            <rect
              x="16"
              y="-54"
              width="104"
              height="104"
              stroke="#0E9ED9"
              strokeWidth="1.5"
              fill="rgba(14,158,217,0.12)"
            />
            <path d="M 30 24 L 56 -14 L 76 8 L 98 -28 L 108 -12" stroke="#FFFFFF" strokeWidth="1.4" />
            <circle cx="98" cy="-34" r="5" fill="#0E9ED9" />
          </g>
        </g>
      )}
    </svg>
  );
}

const SelectedWork = () => {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const bannerParallaxRef = useRef({ x: null, y: null });
  const [embedsBlocked, setEmbedsBlocked] = useState(false);

  useEffect(() => {
    setEmbedsBlocked(readCookieConsent() === 'essential');
    const onConsentChange = (e) => {
      if (e.detail === 'essential') setEmbedsBlocked(true);
      else if (e.detail === 'all') setEmbedsBlocked(false);
    };
    window.addEventListener(COOKIE_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CHANGE_EVENT, onConsentChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.sw-reveal', {
        y: 16,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 86%',
          once: true,
        },
      });

      gsap.from('.sw-rule-draw', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 86%',
          once: true,
        },
      });

      gsap.to('.sw-wave-flow', {
        strokeDashoffset: -170,
        duration: 7,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.sw-ring-orbit', {
        rotation: 360,
        duration: 44,
        repeat: -1,
        ease: 'none',
      });

      const parallaxTarget = bannerRef.current?.querySelector('.sw-banner-parallax');
      if (parallaxTarget) {
        bannerParallaxRef.current = {
          x: gsap.quickTo(parallaxTarget, 'x', { duration: 0.55, ease: 'power2.out' }),
          y: gsap.quickTo(parallaxTarget, 'y', { duration: 0.55, ease: 'power2.out' }),
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBannerMouseMove = (e) => {
    if (!bannerParallaxRef.current.x || !bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    bannerParallaxRef.current.x(relX * 16);
    bannerParallaxRef.current.y(relY * 10);
  };

  const handleBannerMouseLeave = () => {
    if (!bannerParallaxRef.current.x) return;
    bannerParallaxRef.current.x(0);
    bannerParallaxRef.current.y(0);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="bg-white text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="sw-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold tracking-[-0.02em] text-[#262626]">
            Selected Work
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-[#262626]/75 text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
              Live Behance case studies showcasing brand identity systems and multi-industry campaign craft by Next Wave.
            </p>
            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group self-start sm:self-auto inline-flex items-center gap-2 text-[#076C96] hover:text-[#262626] border-b border-[#076C96] hover:border-[#262626] py-1.5 font-poppins text-xs font-semibold uppercase tracking-[0.12em] transition-colors shrink-0 min-h-[44px]"
            >
              <BehanceIcon size={17} />
              <span>View Behance Account</span>
              <ArrowUpRightIcon
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <span
            aria-hidden="true"
            className="sw-rule-draw absolute bottom-0 left-0 right-0 h-px bg-[#CCCCCC]"
          />
        </div>

        {/* Main Architectural Behance Portfolio Frame */}
        <div className="border border-[#CCCCCC] bg-white">
          {/* Top Kinetic Behance Account Banner (Click -> Behance Profile) */}
          <a
            ref={bannerRef}
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleBannerMouseMove}
            onMouseLeave={handleBannerMouseLeave}
            aria-label="Open Next Wave official Behance portfolio"
            className="sw-reveal group block bg-[#262626] text-white border-b border-[#CCCCCC] p-6 sm:p-8 lg:px-10 relative overflow-hidden"
          >
            {/* Flowing Background Vector Wave */}
            <svg
              viewBox="0 0 1200 180"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
              className="sw-banner-parallax pointer-events-none select-none absolute inset-0 w-full h-full opacity-50"
            >
              <path
                className="sw-wave-flow"
                d="M -40 135 C 220 20, 440 165, 720 75 C 940 10, 1080 140, 1240 50"
                stroke="#0E9ED9"
                strokeWidth="1.5"
                strokeDasharray="12 8"
              />
              <path
                className="sw-wave-flow"
                d="M -40 165 C 260 60, 500 175, 760 105 C 970 45, 1110 155, 1240 85"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeOpacity="0.22"
                strokeDasharray="7 11"
              />
            </svg>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4 min-w-0">
                <span className="w-12 h-12 rounded-[2px] bg-[#076C96] group-hover:bg-[#0E9ED9] text-white inline-flex items-center justify-center shrink-0 transition-colors duration-200">
                  <BehanceIcon size={22} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-poppins font-semibold text-base sm:text-lg text-white leading-tight">
                      Next Wave Portfolio
                    </span>
                    <span className="text-xs font-poppins font-medium text-[#0E9ED9] tracking-[0.04em]">
                      {BEHANCE_HANDLE}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#CCCCCC] mt-1">
                    <span>behance.net/nextwavesagency</span>
                    <span className="hidden sm:inline"> · Chattogram, Bangladesh</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                <span className="font-poppins font-semibold text-xs uppercase tracking-[0.14em] text-white group-hover:text-[#0E9ED9] transition-colors">
                  Explore Full Profile
                </span>
                <KineticArrowTile dark />
              </div>
            </div>
          </a>

          {/* 2-Column Live Embedded Behance Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#CCCCCC]">
            {BEHANCE_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="sw-reveal group relative flex flex-col bg-white"
              >
                {/* Animated Top Hover Accent Rule */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute top-0 left-0 right-0 h-[3px] bg-[#076C96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"
                />

                {/* Clickable Top Metadata Bar -> Behance Account */}
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-4 border-b border-[#CCCCCC] bg-white hover:bg-[#F7F7F7] flex flex-wrap items-center justify-between gap-2 text-xs transition-colors"
                >
                  <span className="font-poppins font-semibold text-[#076C96]">
                    {project.category}
                  </span>
                  <span className="font-sans text-[#262626]/70">
                    {project.scope}
                  </span>
                </a>

                {/* Framed Behance Embed Viewport (404:316 native aspect ratio) */}
                <div className="p-4 sm:p-6 bg-[#F7F7F7] border-b border-[#CCCCCC]">
                  <div className="relative w-full aspect-[404/316] bg-nw-gradient border border-[#CCCCCC] overflow-hidden">
                    {/* Animated Geometric Underlay / Opt-out Surface */}
                    <div className="absolute inset-0 z-0">
                      <PortfolioVectorCanvas vectorKey={project.vectorKey} />
                    </div>

                    {embedsBlocked ? (
                      <div className="relative z-10 h-full w-full bg-[#262626]/85 p-6 flex flex-col items-center justify-center text-center gap-4">
                        <BehanceIcon size={28} className="text-[#0E9ED9]" />
                        <div className="max-w-sm space-y-1.5">
                          <p className="font-poppins font-semibold text-base text-white">
                            {project.title}
                          </p>
                          <p className="font-sans text-xs text-[#CCCCCC] leading-relaxed">
                            Interactive Behance preview is paused under Essential Only cookie settings.
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              saveCookieConsent('all');
                              setEmbedsBlocked(false);
                            }}
                            className="inline-flex items-center justify-center bg-[#076C96] hover:bg-[#055475] text-white px-4 min-h-[44px] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
                          >
                            Load Behance Embed
                          </button>
                          <a
                            href={BEHANCE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 border border-white/35 hover:border-white text-white px-4 min-h-[44px] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
                          >
                            <span>Open on Behance</span>
                            <ArrowUpRightIcon size={14} />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        src={project.embedUrl}
                        title={`${project.title} — Behance Embed`}
                        loading="lazy"
                        allowFullScreen
                        allow="clipboard-write"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="relative z-10 w-full h-full border-0 block bg-transparent"
                      />
                    )}
                  </div>
                </div>

                {/* Clickable Project Details & Behance Account Action */}
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — Open Next Wave on Behance`}
                  className="p-6 sm:p-8 flex-1 flex items-end justify-between gap-6 bg-white hover:bg-[#F7F7F7] transition-colors"
                >
                  <div className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold text-[#262626] group-hover:text-[#076C96] tracking-[-0.015em] leading-snug mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-[#262626]/75 leading-relaxed max-w-[48ch] [text-wrap:pretty]">
                      {project.summary}
                    </p>
                  </div>

                  <KineticArrowTile />
                </a>
              </article>
            ))}
          </div>

          {/* Flush Kinetic Discipline Marquee + Primary Behance CTA */}
          <div className="border-t border-[#CCCCCC] bg-[#262626] text-white grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-8 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/15 py-4 flex items-center">
              <div className="behance-marquee">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
                    {DISCIPLINE_MARQUEE.map((label) => (
                      <div key={`${dup}-${label}`} className="flex items-center shrink-0">
                        <span className="px-6 font-poppins text-xs uppercase tracking-[0.14em] text-[#CCCCCC] whitespace-nowrap">
                          {label}
                        </span>
                        <span className="w-1.5 h-1.5 bg-[#0E9ED9] shrink-0" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-4 sm:px-7 flex items-center justify-between lg:justify-end">
              <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-[#076C96] hover:bg-[#055475] text-white px-6 py-3 rounded-[2px] text-xs font-poppins font-semibold uppercase tracking-[0.12em] transition-colors duration-150 min-h-[48px]"
              >
                <BehanceIcon size={17} />
                <span>Open Behance Portfolio</span>
                <ArrowUpRightIcon
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
