import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.protocol-panel');
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (panels.length * window.innerHeight),
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    panels.forEach((panel, i) => {
      if (i > 0) {
        tl.fromTo(panel, { yPercent: 100 }, { yPercent: 0, ease: "none" }, i - 1);
      }
    });
    
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] bg-nw-white overflow-hidden">
      
      {/* Discover */}
      <div className="protocol-panel absolute inset-0 bg-nw-light flex flex-col md:flex-row items-center justify-center p-8 md:p-24 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-12 md:mb-0">
          <span className="font-mono text-nw-blue uppercase tracking-widest text-sm font-bold mb-4 block">01 / Discover</span>
          <h2 className="font-poppins font-bold text-5xl md:text-7xl text-nw-black mb-6">Audit.</h2>
          <p className="font-sans text-xl text-nw-black/80 max-w-lg">
            We audit your brand, market, and competitors before we write a single brief.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <svg className="w-64 h-64 text-nw-blue animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="5" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Create */}
      <div className="protocol-panel absolute inset-0 bg-white flex flex-col md:flex-row items-center justify-center p-8 md:p-24 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-10">
        <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-12 md:mb-0">
          <span className="font-mono text-nw-blue uppercase tracking-widest text-sm font-bold mb-4 block">02 / Create</span>
          <h2 className="font-poppins font-bold text-5xl md:text-7xl text-nw-black mb-6">Craft.</h2>
          <p className="font-sans text-xl text-nw-black/80 max-w-lg">
            Strategy meets craft: campaigns engineered for attention and built for results.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden h-64">
          <div className="grid grid-cols-5 gap-2 w-full h-full opacity-20">
            {Array.from({length: 25}).map((_, i) => (
              <div key={i} className="bg-nw-blue rounded-sm" />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-2 h-full bg-nw-blue shadow-[0_0_20px_#0E9ED9] animate-[ping_3s_linear_infinite_alternate]" style={{ animationName: 'scan', animationDuration: '3s', animationIterationCount: 'infinite', animationDirection: 'alternate' }} />
          <style>{`
            @keyframes scan {
              0% { transform: translateX(0); }
              100% { transform: translateX(400px); }
            }
          `}</style>
        </div>
      </div>

      {/* Amplify */}
      <div className="protocol-panel absolute inset-0 bg-nw-black flex flex-col md:flex-row items-center justify-center p-8 md:p-24 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-20">
        <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-12 md:mb-0">
          <span className="font-mono text-nw-blue uppercase tracking-widest text-sm font-bold mb-4 block">03 / Amplify</span>
          <h2 className="font-poppins font-bold text-5xl md:text-7xl text-white mb-6">Scale.</h2>
          <p className="font-sans text-xl text-nw-grey max-w-lg">
            We deploy, measure, optimize, and scale — relentlessly.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <svg className="w-full max-w-md h-32 text-nw-blue" viewBox="0 0 500 100" preserveAspectRatio="none">
            <polyline 
              points="0,50 100,50 120,20 140,80 160,50 340,50 360,10 380,90 400,50 500,50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="animate-[dash_2s_linear_infinite]"
              style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
            />
          </svg>
          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </div>
      </div>

    </section>
  );
};

export default Protocol;
