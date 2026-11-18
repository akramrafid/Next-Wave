import React from 'react';
import Link from 'next/link';
import { BrandWaveOutline } from './BrandWatermark';
import { ArrowUpRightIcon, GlobalIcon } from './Icons';

const sectors = [
  { name: "Retail & Consumer", desc: "Fast-moving goods, lifestyle retail & consumer brand ecosystems." },
  { name: "Education", desc: "Institutions, edtech platforms & national academic organisations." },
  { name: "Hospitality & Lifestyle", desc: "Restaurants, luxury destinations & experiential lifestyle ventures." },
  { name: "Corporate & B2B", desc: "Enterprise conglomerates, industrial leaders & holding companies." },
  { name: "Real Estate", desc: "Developers, commercial architectural firms & property leaders." },
  { name: "Healthcare & Pharma", desc: "Hospitals, wellness brands & healthcare innovators." },
  { name: "Technology & SaaS", desc: "Digital products, SaaS enterprises & technology leaders." },
  { name: "Emerging Ventures", desc: "Ambitious founder-led businesses & high-growth disruptors." }
];

const Industries = () => {
  return (
    <section id="industries" className="bg-[#F7F7F7] text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold text-[#262626] tracking-[-0.02em]">
            Where We Work
          </h2>
          <p className="text-[#262626]/75 text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
            Tailored brand architectures and digital systems engineered across key economic sectors.
          </p>
        </div>

        {/* Continuous 4x2 Architectural Hairline Sector Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#CCCCCC] bg-white">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="group p-7 sm:p-8 border-r border-b border-[#CCCCCC] hover:bg-[#F7F7F7] transition-colors duration-150 flex flex-col justify-between min-h-[172px]"
            >
              <h3 className="font-poppins font-semibold text-base sm:text-lg text-[#262626] tracking-[-0.01em] mb-3 group-hover:text-[#076C96] transition-colors">
                {sector.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#262626]/75 font-sans leading-relaxed [text-wrap:pretty]">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Flush Enterprise & Global Ambition Split Plates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-[#CCCCCC]">
          {/* Left: Clarity Black Enterprise Focus */}
          <div className="lg:col-span-6 bg-[#262626] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between lg:border-r lg:border-[#CCCCCC]">
            <div>
              <h3 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-[-0.02em] leading-tight mb-5 max-w-[18ch]">
                For Businesses That Think Bigger.
              </h3>
              <p className="text-[#F7F7F7]/85 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-[48ch] [text-wrap:pretty]">
                From growing businesses to established organisations, we bring strategic thinking, creative capability and disciplined execution together to solve marketing and communication challenges.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-[#076C96] text-white px-6 py-4 rounded-[2px] text-xs font-poppins font-semibold uppercase tracking-[0.12em] transition-colors duration-150 group border border-white/20 hover:border-[#076C96]"
            >
              <span>Consult with Our Strategic Team</span>
              <ArrowUpRightIcon size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right: Brand Guide Gradient Global Ambition */}
          <div className="lg:col-span-6 bg-nw-gradient text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            <BrandWaveOutline
              className="pointer-events-none select-none absolute -right-10 -bottom-10 w-60 h-60 text-white"
              strokeOpacity={0.18}
            />
            <div className="relative z-10">
              <h3 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-[-0.02em] leading-tight mb-5 max-w-[18ch]">
                From Bangladesh. For The World.
              </h3>
              <p className="text-white/95 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-[48ch] [text-wrap:pretty]">
                Rooted in local insight, built with global ambition. We believe great marketing created in Bangladesh can compete confidently across international markets.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/25 flex items-center justify-between">
              <span className="text-xs font-poppins text-white/95 uppercase tracking-[0.14em] font-medium">
                Local Insight · Global Standard
              </span>
              <GlobalIcon size={20} className="text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
