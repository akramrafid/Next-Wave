import React from 'react';
import Link from 'next/link';
import { BrandWaveOutline } from './BrandWatermark';
import { ArrowRightIcon } from './Icons';

const pillars = [
  {
    title: "Strategy",
    desc: "We begin by understanding the commercial architecture, audience psychology, market context and core business objective.",
    tagline: "Commercial Insight & Direction"
  },
  {
    title: "Emotion",
    desc: "We transform analytical insight into narrative resonance, distinctive aesthetics and ideas that forge visceral brand loyalty.",
    tagline: "Creative & Brand Resonance"
  },
  {
    title: "Execution",
    desc: "We engineer the rollout with uncompromising precision across digital channels, production media and physical touchpoints.",
    tagline: "Disciplined Omni-Channel Delivery"
  }
];

const Principles = () => {
  return (
    <section id="approach" className="bg-white text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Swiss Asymmetric 30/70 Methodology Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#CCCCCC]">
          {/* Left Margin Rail */}
          <div className="lg:col-span-4 p-8 sm:p-10 lg:p-12 bg-[#F7F7F7] lg:border-r lg:border-[#CCCCCC] border-b lg:border-b-0 flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold tracking-[-0.02em] text-[#262626] mb-6">
                How We Work
              </h2>
              <p className="text-xl sm:text-2xl font-poppins font-medium text-[#262626] tracking-[-0.015em] leading-snug max-w-[26ch]">
                “We believe success is never accidental. It is{' '}
                <span className="text-[#076C96] font-semibold">designed</span>.”
              </p>
            </div>

            <div className="pt-6 border-t border-[#CCCCCC] text-xs font-poppins font-medium uppercase tracking-[0.14em] text-[#262626]/75">
              Three Integrated Pillars
            </div>
          </div>

          {/* Right Ruled Pillar Rows (No decorative 01/02/03 sequence labels) */}
          <div className="lg:col-span-8 divide-y divide-[#CCCCCC] bg-white">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 sm:p-10 lg:px-12 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start hover:bg-[#F7F7F7] transition-colors duration-150"
              >
                <div className="sm:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-poppins font-semibold tracking-[-0.015em] text-[#262626] mb-1.5">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-poppins font-medium text-[#076C96]">
                    {pillar.tagline}
                  </span>
                </div>

                <div className="sm:col-span-8">
                  <p className="text-[#262626]/80 font-sans text-sm sm:text-base leading-relaxed max-w-[54ch] [text-wrap:pretty]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flush Clarity Black Closing Strip */}
        <div className="bg-[#262626] text-white p-8 sm:p-10 md:p-12 border-x border-b border-[#CCCCCC] flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
          <BrandWaveOutline
            className="pointer-events-none select-none absolute -right-6 -bottom-10 w-52 h-52 text-white"
            strokeOpacity={0.14}
          />
          <div className="relative z-10">
            <p className="font-poppins font-medium text-lg sm:text-xl md:text-2xl text-white tracking-[-0.015em] max-w-[46ch]">
              Strategy. Emotion. Execution. This is how we approach Marketing Reimagined.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center gap-2 bg-[#076C96] hover:bg-[#055475] text-white px-7 py-3.5 rounded-[2px] text-xs font-poppins font-semibold uppercase tracking-[0.12em] transition-colors duration-150 shrink-0 min-h-[48px]"
          >
            <span>Start a Conversation</span>
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Principles;
