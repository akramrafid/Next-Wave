'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandWaveOutline } from './BrandWatermark';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChartIcon,
  CompassIcon,
  MegaphoneIcon,
  PaletteIcon,
  ProductionIcon,
} from './Icons';

const servicesData = [
  {
    name: "Strategy",
    icon: CompassIcon,
    disciplines: "Brand Strategy · Communication Planning · Campaign Design · Media Strategy",
    desc: "We turn business objectives into clear strategic direction.",
  },
  {
    name: "Creative & Design",
    icon: PaletteIcon,
    disciplines: "Brand Identity · Graphic Design · Copywriting · Audio-Visual · Content · Packaging",
    desc: "We turn strategic thinking into ideas, stories and experiences people remember.",
  },
  {
    name: "Digital & Performance",
    icon: ChartIcon,
    disciplines: "Social Media · Paid Campaigns · SEO · Web Design · Performance Marketing",
    desc: "We connect brands with audiences across digital channels and turn attention into action.",
  },
  {
    name: "Production & Activation",
    icon: ProductionIcon,
    disciplines: "Event Management · OVC & TVC · Photography · Experiential & BTL Campaigns",
    desc: "We bring ideas to life through production, experiences and brand activation.",
  },
  {
    name: "PR & Communications",
    icon: MegaphoneIcon,
    disciplines: "Corporate Affairs · CSR & Advocacy · Reputation Management · Crisis Communication",
    desc: "We help organisations communicate with clarity, consistency and confidence.",
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];
  const ActiveIcon = activeService.icon;
  const activeDeliverables = activeService.disciplines.split(' · ');

  const handleKeyDown = (e, idx) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIndex((idx + 1) % servicesData.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIndex((idx - 1 + servicesData.length) % servicesData.length);
    }
  };

  return (
    <section id="services" className="bg-[#F7F7F7] text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold text-[#262626] tracking-[-0.02em]">
            The 360 Spectrum
          </h2>
          <p className="text-[#262626]/75 text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
            End-to-end marketing capabilities, connecting commercial insight to lasting brand impact.
          </p>
        </div>

        {/* Interactive Split Capability Console (5:7 Brand Guide Swiss Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#CCCCCC] bg-white">
          {/* Left Selector Column */}
          <div
            role="tablist"
            aria-label="Agency capabilities"
            className="lg:col-span-5 divide-y divide-[#CCCCCC] lg:border-r lg:border-[#CCCCCC] border-b lg:border-b-0 flex flex-col"
          >
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              const isActive = idx === activeIndex;
              const count = service.disciplines.split(' · ').length;

              return (
                <button
                  key={service.name}
                  type="button"
                  role="tab"
                  id={`service-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls="service-spotlight-panel"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-full text-left px-6 sm:px-8 py-6 lg:py-7 flex items-center justify-between gap-4 transition-colors duration-150 flex-1 ${
                    isActive
                      ? 'bg-[#262626] text-white'
                      : 'bg-white hover:bg-[#F7F7F7] text-[#262626]'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <Icon
                      size={22}
                      className={`mt-0.5 sm:mt-0 transition-colors duration-150 ${
                        isActive ? 'text-[#0E9ED9]' : 'text-[#076C96]'
                      }`}
                    />
                    <div>
                      <span className="block font-poppins font-semibold text-lg sm:text-xl tracking-[-0.015em]">
                        {service.name}
                      </span>
                      <span
                        className={`block font-sans text-xs mt-1 ${
                          isActive ? 'text-[#CCCCCC]' : 'text-[#262626]/70'
                        }`}
                      >
                        {count} core disciplines
                      </span>
                    </div>
                  </div>

                  <ArrowRightIcon
                    size={18}
                    className={`transition-transform duration-150 ${
                      isActive
                        ? 'text-[#0E9ED9] translate-x-0.5'
                        : 'text-[#262626]/65'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Executive Spotlight Panel */}
          <div
            id="service-spotlight-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeIndex}`}
            className="lg:col-span-7 bg-[#262626] text-white flex flex-col justify-between"
          >
            {/* Brand Gradient Statement Header */}
            <div className="bg-nw-gradient p-8 sm:p-10 lg:p-12 border-b border-white/15 relative overflow-hidden">
              <BrandWaveOutline
                className="pointer-events-none select-none absolute -right-10 -bottom-12 w-56 h-56 text-white"
                strokeOpacity={0.2}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-4">
                  <ActiveIcon size={32} className="text-white" />
                  <h3 className="font-poppins font-semibold text-3xl sm:text-4xl tracking-[-0.02em] text-white">
                    {activeService.name}
                  </h3>
                </div>

                <p className="font-poppins font-medium text-base sm:text-lg text-white/95 leading-relaxed max-w-[44ch] [text-wrap:pretty]">
                  {activeService.desc}
                </p>
              </div>
            </div>

            {/* Structured Ruled Deliverable Matrix */}
            <div className="p-8 sm:p-10 lg:p-12 flex-1 flex flex-col justify-between gap-8 bg-[#262626]">
              <div>
                <p className="font-poppins text-xs font-medium uppercase tracking-[0.14em] text-[#0E9ED9] mb-4">
                  Included Capabilities
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/15">
                  {activeDeliverables.map((item) => (
                    <div
                      key={item}
                      className="border-r border-b border-white/15 px-5 py-4 flex items-center justify-between gap-3 bg-[#262626]"
                    >
                      <span className="font-sans text-sm sm:text-base text-[#F7F7F7] font-medium">
                        {item}
                      </span>
                      <span className="w-1.5 h-1.5 bg-[#0E9ED9] shrink-0" aria-hidden="true" />
                    </div>
                  ))}
                  {activeDeliverables.length % 2 === 1 && (
                    <div className="hidden sm:flex border-r border-b border-white/15 px-5 py-4 items-center text-xs font-sans text-[#CCCCCC]">
                      Integrated 360 Alignment
                    </div>
                  )}
                </div>
              </div>

              {/* Action Rail */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs sm:text-sm font-sans text-[#CCCCCC]">
                  Tailored scope &amp; execution roadmap
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F7F7F7] text-[#262626] px-7 py-3.5 rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors duration-150 min-h-[48px]"
                >
                  <span>Enquire About {activeService.name}</span>
                  <ArrowUpRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-sans text-[#262626]/75">
            Need a bespoke integrated solution across strategy, creative, and performance?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-poppins font-semibold text-[#076C96] hover:text-[#262626] transition-colors uppercase tracking-[0.12em]"
          >
            <span>Discuss Your Objectives</span>
            <ArrowUpRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
