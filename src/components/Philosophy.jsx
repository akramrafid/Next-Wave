import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Globe2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-manifesto',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative w-full py-28 md:py-36 px-6 sm:px-10 lg:px-16 bg-[#070707] text-white overflow-hidden border-t border-b border-white/10"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Eyebrow & Geographic Watermark */}
        <div className="reveal-manifesto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0E9ED9] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#9DD6F3] font-semibold">
              POSITIONING & STRATEGIC INTENT
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
            CHITTAGONG, BANGLADESH · EST. 2025
          </span>
        </div>

        {/* Big Editorial Manifesto Headline */}
        <div className="reveal-manifesto mb-16 md:mb-24">
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl leading-[1.12] text-white tracking-tight max-w-5xl">
            “Great marketing is not just about visibility. It is about creating <span className="text-[#9DD6F3] font-serif italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>value</span>, building <span className="text-[#9DD6F3] font-serif italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>relevance</span> and moving business forward.”
          </h2>
        </div>

        {/* Two-Column Swiss Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: The Agency Origin & Philosophy */}
          <div className="reveal-manifesto lg:col-span-6 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-gray-400">
                <Compass className="w-4 h-4 text-[#0E9ED9]" />
                <span>The Agency</span>
              </div>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-4 leading-tight">
                Strategic thinking, creative expression and disciplined execution under one wave.
              </h3>
              <p className="font-sans text-gray-300 text-base leading-relaxed mb-6">
                Founded in 2025 in Chittagong, NextWave 360 Solutions was built with a clear ambition: to unify strategic rigor, creative firepower and precise digital execution into one seamless partnership.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-sm text-[#9DD6F3] font-medium font-sans">
              <span>Strategy · Storytelling · Digital · Design</span>
              <ArrowRight size={16} className="text-[#0E9ED9]" />
            </div>
          </div>

          {/* Right Column: Global Standard Vision */}
          <div className="reveal-manifesto lg:col-span-6 bg-[#0D0D0D] p-8 sm:p-10 rounded-3xl border border-white/15 flex flex-col justify-between relative overflow-hidden group hover:border-[#0E9ED9]/40 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0E9ED9]/10 rounded-full filter blur-[60px] pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-[#9DD6F3]">
                <Globe2 className="w-4 h-4 text-[#0E9ED9]" />
                <span>Our Vision</span>
              </div>
              <h3 className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                To set a global standard for marketing excellence from Bangladesh.
              </h3>
              <p className="font-sans text-gray-300 text-base leading-relaxed">
                We envision a world where Bangladeshi creativity competes confidently on the global stage, powered by commercial insight, deep empathy and relentless digital execution.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="block font-poppins font-black text-2xl text-white">360°</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Full-Spectrum Marketing</span>
              </div>
              <div>
                <span className="block font-poppins font-black text-2xl text-[#9DD6F3]">2025</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Founded in Chittagong</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;
