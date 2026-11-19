'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrandWaveOutline } from './BrandWatermark';
import { ArrowUpRightIcon, BehanceIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const BEHANCE_URL = 'https://www.behance.net/nextwavesagency';
const BEHANCE_HANDLE = '@nextwavesagency';

const NEXTWAVE_DARK_MARK =
  '/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/Logo%20Mark%20Only%20-%20Vertical%20-%20For%20Dark%404x.png';
const NEXTWAVE_COLOR_MARK =
  '/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/Logo%20Mark%20Only%20-%20Vertical%20-%20Colorful%404x.png';

const BEHANCE_PROJECTS = [
  {
    id: '253176415',
    title: 'Sultan Nur Brand Identity Design',
    category: 'Luxury Identity & Packaging',
    scope: 'Couture Apparel · Visual Systems',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b56b2e253176415.Y3JvcCwyMDQ0LDE1OTksMTA3Nyww.jpg',
    coverAlt: 'Sultan Nur Brand Identity Design showcase cover by Next Wave',
    summary:
      'Cohesive luxury visual identity uniting bespoke crest geometry, refined typography, color tokens and tactile packaging applications.',
  },
  {
    id: '253315545',
    title: 'Multi-Industry Social Media Design',
    category: 'Social Campaign Systems',
    scope: 'Retail · Sports & Electronics · Digital Creative',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/382c88253315545.Y3JvcCwyNTU2LDIwMDAsMTc0MCww.jpg',
    coverAlt: 'Multi-Industry Social Media Design campaign grid by Next Wave',
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

function KineticArrowTile({ emphasized = false }) {
  return (
    <span
      aria-hidden="true"
      className={`relative overflow-hidden w-11 h-11 shrink-0 rounded-[2px] border flex items-center justify-center transition-colors duration-200 ${
        emphasized
          ? 'border-[#0E9ED9] bg-[#076C96] group-hover:bg-[#0E9ED9] text-white'
          : 'border-white/25 bg-white/5 group-hover:bg-[#0E9ED9] group-hover:border-[#0E9ED9] text-white'
      }`}
    >
      <ArrowUpRightIcon
        size={18}
        className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-7 group-hover:translate-x-7 motion-reduce:transition-none motion-reduce:transform-none"
      />
      <ArrowUpRightIcon
        size={18}
        className="absolute -translate-x-7 translate-y-7 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:hidden"
      />
    </span>
  );
}

/** Corner calibration reticles that lock onto the card frame during hover/focus. */
function ViewfinderBrackets() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-3 z-20">
      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#0E9ED9] opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
      <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#0E9ED9] opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
      <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#0E9ED9] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#0E9ED9] opacity-0 translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
    </div>
  );
}

/** Sole Next Wave brand badge linking attribution without co-owner clutter. */
function NextWaveBadge({ size = 'md' }) {
  const dims = size === 'lg' ? 'w-11 h-11 p-2' : 'w-9 h-9 p-1.5';
  return (
    <span
      className={`${dims} rounded-[2px] bg-white border border-white/80 inline-flex items-center justify-center shrink-0`}
    >
      <img
        src={NEXTWAVE_COLOR_MARK}
        alt="Next Wave logo"
        className="w-full h-full object-contain select-none"
      />
    </span>
  );
}

function PortfolioProjectCard({ project, featured = false, dimmed = false, onHoverChange }) {
  return (
    <a
      href={BEHANCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHoverChange(project.id)}
      onMouseLeave={() => onHoverChange(null)}
      onFocus={() => onHoverChange(project.id)}
      onBlur={() => onHoverChange(null)}
      aria-label={`${project.title} — Explore on Next Wave Behance portfolio`}
      className={`sw-reveal group relative flex flex-col bg-[#1F1F1F] hover:bg-[#242424] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-offset-[-4px] ${
        dimmed ? 'lg:opacity-65' : 'opacity-100'
      }`}
    >
      {/* Top Signal Rule */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#0E9ED9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-30"
      />

      {/* Discipline Metadata Header */}
      <div className="px-6 sm:px-8 py-4 border-b border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-poppins font-semibold text-[#0E9ED9] tracking-[0.04em]">
          {project.category}
        </span>
        <span className="font-sans text-[#CCCCCC]">
          {project.scope}
        </span>
      </div>

      {/* Cinema Cover Plate with Scroll Parallax & Viewfinder Framing */}
      <div className="p-4 sm:p-6 bg-[#171717] border-b border-white/15">
        <div
          className={`relative w-full overflow-hidden border border-white/15 bg-nw-gradient ${
            featured
              ? 'aspect-[404/316] lg:aspect-[16/11]'
              : 'aspect-[404/316]'
          }`}
        >
          <ViewfinderBrackets />
          <BrandWaveOutline
            className="pointer-events-none select-none absolute inset-0 m-auto w-44 h-44 text-white z-0"
            strokeOpacity={0.14}
          />

          <img
            src={project.coverUrl}
            alt={project.coverAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="sw-cover-parallax relative z-10 w-full h-[106%] -top-[3%] object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] motion-reduce:top-0 motion-reduce:h-full motion-reduce:transform-none"
          />

          {/* Obsidian Gradient Scrim + Solo Next Wave Brand Stamp */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#121212] via-[#121212]/75 to-transparent pt-14 pb-4 px-4 sm:px-5 flex items-end justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <NextWaveBadge />
              <div className="min-w-0">
                <span className="block font-poppins font-semibold text-sm text-white leading-snug truncate">
                  Next Wave
                </span>
                <span className="block font-sans text-xs text-[#CCCCCC] truncate">
                  {BEHANCE_HANDLE}
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-white group-hover:text-[#0E9ED9] font-poppins font-semibold text-xs shrink-0 pb-0.5 transition-colors">
              <BehanceIcon size={16} />
              <span className="hidden sm:inline uppercase tracking-[0.1em]">View Case</span>
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Footer Details + Dual Arrow */}
      <div className="p-6 sm:p-8 flex items-end justify-between gap-6 flex-1">
        <div className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transform-none">
          <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-white group-hover:text-[#0E9ED9] tracking-[-0.015em] leading-snug mb-2 transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-sm text-[#CCCCCC] leading-relaxed max-w-[48ch] [text-wrap:pretty]">
            {project.summary}
          </p>
        </div>

        <KineticArrowTile />
      </div>
    </a>
  );
}

const SelectedWork = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [leadProject, secondaryProject] = BEHANCE_PROJECTS;

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.sw-reveal', {
        y: 18,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 84%',
          once: true,
        },
      });

      gsap.from('.sw-rule-draw', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 84%',
          once: true,
        },
      });

      gsap.utils.toArray('.sw-cover-parallax').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -2.5 },
          {
            yPercent: 2.5,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      gsap.to('.sw-wave-flow', {
        strokeDashoffset: -170,
        duration: 8,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleStagePointerMove = (e) => {
    if (prefersReducedMotion() || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (((e.clientX - rect.left) / rect.width) * 100).toFixed(2);
    const yPct = (((e.clientY - rect.top) / rect.height) * 100).toFixed(2);
    stageRef.current.style.setProperty('--sw-px', `${xPct}%`);
    stageRef.current.style.setProperty('--sw-py', `${yPct}%`);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="bg-[#262626] text-white w-full py-20 md:py-28 relative overflow-hidden border-b border-white/15"
    >
      {/* Subtle Ambient Brand Watermark Geometry */}
      <BrandWaveOutline
        className="pointer-events-none select-none absolute -left-24 top-10 w-[520px] h-[520px] text-white"
        strokeOpacity={0.05}
      />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Bold Obsidian Header Band (Respects No-Kicker Rule) */}
        <div className="sw-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 relative">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-[-0.025em] text-white">
              Selected Work
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-[#CCCCCC] text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
              Featured brand identity systems and multi-industry campaign architecture published on Next Wave’s official Behance portfolio.
            </p>
            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group self-start sm:self-auto inline-flex items-center gap-2.5 text-white hover:text-[#0E9ED9] border-b border-[#0E9ED9] py-2 font-poppins text-xs font-semibold uppercase tracking-[0.14em] transition-colors shrink-0 min-h-[44px]"
            >
              <BehanceIcon size={17} />
              <span>behance.net/nextwavesagency</span>
              <ArrowUpRightIcon
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <span
            aria-hidden="true"
            className="sw-rule-draw absolute bottom-0 left-0 right-0 h-px bg-white/20"
          />
        </div>

        {/* Interactive Cursor-Lit Staggered 7:5 Obsidian Studio Monograph Grid */}
        <div
          ref={stageRef}
          onPointerMove={handleStagePointerMove}
          className="relative border border-white/15 bg-[#1B1B1B]"
        >
          {/* Ambient Pointer Spotlight Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute inset-0 z-0 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(640px circle at var(--sw-px, 50%) var(--sw-py, 35%), rgba(14, 158, 217, 0.14), transparent 70%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT ASYMMETRIC COLUMN (7 Cols): Monumental Lead Case + Studio Manifesto Anchor */}
            <div className="lg:col-span-7 flex flex-col border-b lg:border-b-0 lg:border-r border-white/15">
              <PortfolioProjectCard
                project={leadProject}
                featured
                dimmed={hoveredId !== null && hoveredId !== leadProject.id}
                onHoverChange={setHoveredId}
              />

              {/* Closing Editorial Conversion Anchor Balancing Asymmetric Offset Height */}
              <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sw-reveal group relative bg-nw-gradient p-7 sm:p-9 border-t border-white/15 flex-1 hidden lg:flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden"
              >
                <svg
                  viewBox="0 0 800 180"
                  fill="none"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                  className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-45"
                >
                  <path
                    className="sw-wave-flow"
                    d="M -30 140 C 160 30, 340 165, 560 65 C 680 15, 760 110, 830 45"
                    stroke="#FFFFFF"
                    strokeWidth="1.25"
                    strokeOpacity="0.45"
                    strokeDasharray="10 8"
                  />
                </svg>

                <div className="relative z-10 flex items-center gap-4 min-w-0">
                  <span className="w-12 h-12 rounded-[2px] bg-[#262626] border border-white/25 p-2.5 inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={NEXTWAVE_DARK_MARK}
                      alt="Next Wave"
                      className="w-full h-full object-contain select-none"
                    />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-poppins font-semibold text-base sm:text-lg text-white leading-snug">
                      Every Case Study &amp; Brand System
                    </span>
                    <span className="block font-sans text-xs sm:text-sm text-white/85 mt-0.5">
                      Explore the complete visual body of work on Behance.
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-3 shrink-0 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-2 bg-white text-[#262626] group-hover:bg-[#F7F7F7] px-5 py-3 rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] min-h-[44px] transition-colors">
                    <BehanceIcon size={16} />
                    <span>Explore Portfolio</span>
                    <ArrowUpRightIcon
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </div>

            {/* RIGHT ASYMMETRIC COLUMN (5 Cols): Next Wave Studio Index Header + Staggered Case 02 */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Studio Identity Anchor Creating Staggered Offset Depth */}
              <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sw-reveal group p-7 sm:p-8 lg:p-9 bg-[#222222] hover:bg-[#262626] border-b border-white/15 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <NextWaveBadge size="lg" />
                  <div className="min-w-0">
                    <span className="block font-poppins font-semibold text-base sm:text-lg text-white leading-tight">
                      Next Wave Studio
                    </span>
                    <span className="block font-sans text-xs text-[#CCCCCC] mt-1">
                      Behance · {BEHANCE_HANDLE}
                    </span>
                  </div>
                </div>

                <KineticArrowTile emphasized />
              </a>

              <PortfolioProjectCard
                project={secondaryProject}
                dimmed={hoveredId !== null && hoveredId !== secondaryProject.id}
                onHoverChange={setHoveredId}
              />
            </div>
          </div>

          {/* Flush Kinetic Studio Discipline Marquee + Primary Action Strip */}
          <div className="relative z-10 border-t border-white/15 bg-[#171717] grid grid-cols-1 lg:grid-cols-12 items-stretch">
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
                <span>Open Behance Account</span>
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
