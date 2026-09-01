import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, MapPin, Play } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/clientLogosData';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        '.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.card-float',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.15 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-[#080808] text-white w-full pt-28 sm:pt-32 md:pt-36 relative overflow-hidden flex flex-col justify-between"
    >
      <style>{`
        @keyframes clientMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-client-marquee {
          display: flex;
          width: max-content;
          animation: clientMarquee 32s linear infinite;
          will-change: transform;
        }
        .hero-client-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-white/[0.02] rounded-full filter blur-[140px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 w-full flex-grow">
        
        {/* Selected Work Header on Top Right */}
        <div className="flex items-center justify-end gap-4 mb-4 md:mb-6">
          <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#9DD6F3] font-semibold">
            SELECTED WORK
          </span>
          <div className="w-16 sm:w-28 h-[1px] bg-[#9DD6F3]/50" />
        </div>

        {/* 2-Column Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ── Left Column: Positioning & Typography ── */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-4 z-10">
            
            {/* Eyebrow */}
            <div className="hero-anim mb-5">
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.22em] text-[#8E8E93] uppercase font-semibold">
                STRATEGY. CREATIVE. DIGITAL. EXECUTION.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-anim font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl tracking-tight leading-[0.98] uppercase text-white mb-4">
              MARKETING THAT<br />
              MOVES <span className="font-serif italic font-normal text-[#9DD6F3] tracking-tight inline-block pr-1 text-[1.04em]" style={{ fontFamily: "'Playfair Display', 'Instrument Serif', serif" }}>BUSINESS</span><br />
              FORWARD.
            </h1>

            {/* Subtle Horizontal Accent Line */}
            <div className="hero-anim w-12 h-[2px] bg-[#9DD6F3] mb-6" />

            {/* Description */}
            <p className="hero-anim font-sans text-sm sm:text-base text-gray-400 max-w-md leading-relaxed mb-8">
              NextWave 360 Solutions combines strategic thinking, creative capability and digital execution to help ambitious businesses build stronger brands.
            </p>

            {/* Action Buttons */}
            <div className="hero-anim flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-black px-7 py-3.5 rounded-lg font-poppins font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight size={15} />
              </Link>
              
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-lg font-poppins font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-white/10"
              >
                <span>EXPLORE OUR WORK</span>
              </a>
            </div>

          </div>

          {/* ── Right Column: Selected Work 4-Card Composition ── */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] mt-4 lg:mt-0">
            
            {/* Background Watermark Framework */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 select-none z-0">
              <div className="flex justify-between items-start">
                <div className="border border-white/5 p-4 rounded-xl">
                  <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/20 font-bold">
                    STRATEGY
                  </span>
                </div>
                <div className="border border-white/5 p-4 rounded-xl">
                  <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/20 font-bold">
                    CREATIVE
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="p-4">
                  <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/20 font-bold">
                    DIGITAL
                  </span>
                </div>
                <div className="p-4">
                  <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/20 font-bold">
                    EXECUTION
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Visual Work Cards */}
            <div className="relative w-full h-full flex items-center justify-center py-6">
              
              {/* Card 1: AV / Cinema Camera Production (Left) */}
              <div 
                className="card-float absolute left-0 sm:left-2 lg:left-0 top-1/2 -translate-y-1/2 w-[170px] sm:w-[220px] md:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#111111] z-10 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop" 
                  alt="AV Production & Cinema Camera Rig"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Play Triangle Icon */}
                <div className="absolute bottom-4 left-4 w-7 h-7 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center shadow-md">
                  <Play size={12} className="fill-white text-white ml-0.5" />
                </div>
              </div>

              {/* Card 2: Packaging & Brand Identity (Center Foreground) */}
              <div 
                className="card-float relative w-[200px] sm:w-[250px] md:w-[280px] aspect-[3/4.4] rounded-2xl overflow-hidden border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#141414] z-30 transform -translate-x-2 sm:-translate-x-4 hover:scale-[1.02] transition-transform duration-500 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop" 
                  alt="MOM Aromatics Luxury Packaging & Branding"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Label Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#9DD6F3] bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 font-semibold">
                    PACKAGING
                  </span>
                </div>
              </div>

              {/* Card 3: Digital Platform / Web Mockup (Middle Right) */}
              <div 
                className="card-float absolute right-14 sm:right-20 lg:right-16 top-1/2 -translate-y-1/2 w-[200px] sm:w-[250px] md:w-[280px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#121212] z-20 transform translate-x-4 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                  alt="Digital Platform & UI Mockup"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gray-300 font-semibold">
                    DIGITAL EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Card 4: Event & Live Stage Activation (Far Right) */}
              <div 
                className="card-float absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 w-[150px] sm:w-[190px] md:w-[210px] aspect-[3/4.8] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0e0e0e] z-10 group hidden sm:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" 
                  alt="Live Auditorium & Stage Activation"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#9DD6F3] font-semibold">
                    ACTIVATION
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ── Bottom Full-Width Credibility & Slanted Client Infinite Loop Strip ── */}
      <div className="w-full mt-10 md:mt-16 border-t border-white/10 bg-[#050505] relative z-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full">
          
          {/* Left Location Credibility Anchor */}
          <div className="py-6 px-6 sm:px-10 lg:px-14 flex items-center gap-3.5 lg:w-[30%] shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#0E9ED9]/15 flex items-center justify-center text-[#0E9ED9] shrink-0">
              <MapPin size={18} />
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-snug">
              Founded in Chittagong, Bangladesh.<br />
              <span className="text-gray-400">Built with global ambition.</span>
            </p>
          </div>

          {/* Right Slanted White Corporate Client Logos Strip with Continuous Infinite Loop */}
          <div 
            className="bg-white py-6 sm:py-8 md:py-9 px-6 sm:px-10 flex items-center overflow-hidden lg:w-[70%] relative shadow-inner min-h-[100px] sm:min-h-[115px] md:min-h-[130px]"
            style={{
              clipPath: 'polygon(36px 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            {/* Left and right fade gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee Track */}
            <div className="hero-client-marquee items-center pl-8 sm:pl-12">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex items-center gap-8 sm:gap-12 md:gap-14 shrink-0 pr-8 sm:pr-12 md:pr-14">
                  {CLIENT_LOGOS.map((logo, idx) => (
                    <div 
                      key={`${loopIdx}-${idx}`}
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
      </div>

    </section>
  );
};

export default Hero;
