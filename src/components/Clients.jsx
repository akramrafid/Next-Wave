import React from 'react';
import { CLIENT_LOGOS } from '../data/clientLogosData';

// Founder's previous professional experience brands
const founderExperienceLogos = [
  "Asset 21.png", "Asset 22.png", "Asset 23.png", "Asset 24.png", "Asset 25.png",
  "Asset 26.png", "Asset 27.png", "Asset 28.png", "Asset 29.png", "Asset 30.png"
];

const Clients = () => {
  return (
    <section id="clients" className="bg-[#080808] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section 1: NextWave Clients & Partners */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
                <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
                  TRUSTED PARTNERSHIPS
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black tracking-tight text-white uppercase">
                CLIENTS & PARTNERS
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg max-w-md font-sans leading-relaxed">
              Building long-term enterprise partnerships through strategic clarity, distinct creative and disciplined execution.
            </p>
          </div>

          {/* Client Logos Full-Width Marquee */}
          <div className="relative w-full overflow-hidden bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 lg:gap-12 items-center shrink-0 pr-8 lg:pr-12">
                  {CLIENT_LOGOS.map((logo, idx) => (
                    <div 
                      key={idx} 
                      className="w-36 sm:w-44 md:w-52 h-20 sm:h-24 flex items-center justify-center opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0"
                    >
                      <img 
                        src={`/Client's Logo/${logo.name}`} 
                        alt={logo.alt || "Client Partner Logo"} 
                        className={`${logo.className} object-contain filter drop-shadow-sm`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Distinct Founder Professional Experience */}
        <div className="mt-20 pt-14 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-mono tracking-[0.22em] text-[#9DD6F3] uppercase font-semibold block mb-2">
                EXECUTIVE TRACK RECORD
              </span>
              <h3 className="text-2xl sm:text-3xl font-poppins font-black text-white uppercase tracking-tight">
                SELECTED PROFESSIONAL EXPERIENCE
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans mt-2 max-w-xl leading-relaxed">
                Selected brands and organisations associated with Abdullah Al Kaisar’s executive background prior to founding NextWave 360 Solutions.
              </p>
            </div>
            
            {/* Mandatory Attribution Note */}
            <div className="bg-[#141414] rounded-2xl p-4 max-w-lg text-xs text-gray-300 font-sans leading-relaxed border border-white/10 shadow-lg">
              <span className="font-bold text-white uppercase tracking-wider block mb-1 text-[10px] text-[#9DD6F3]">
                Attribution Note
              </span>
              Selected organisations associated with our Founder’s previous professional background are presented separately and are not represented as NextWave clients.
            </div>
          </div>

          {/* Founder Experience Brand Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-2xl p-4 h-22 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="font-poppins font-black text-xl text-black tracking-wider leading-none">BSRM</span>
              <span className="text-[9px] font-mono text-gray-500 uppercase mt-1">Steel Manufacturing</span>
            </div>
            {founderExperienceLogos.slice(0, 4).map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-4 h-22 flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-opacity shadow-lg"
              >
                <img 
                  src={`/Client's Logo/${logo}`} 
                  alt="Professional Experience Brand" 
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
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
