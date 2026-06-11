import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate all elements with the 'bento-animate' class
      gsap.fromTo('.bento-animate',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );

      // Animate the bars in the chart
      gsap.fromTo('.chart-bar',
        { height: '0%' },
        { height: (i, el) => el.getAttribute('data-height'), duration: 1, stagger: 0.1, ease: 'back.out(1.2)', delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="px-4 py-8 md:px-8 mt-24" id="work" ref={containerRef}>
      <div className="max-w-7xl mx-auto bg-[#1A1A1A] rounded-[3rem] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)]">

        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 mb-12">

          {/* Headline */}
          <div className="xl:w-2/3 bento-animate z-10">
            <h1 className="font-poppins font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] md:leading-[1.2] tracking-tight">
              We create successful stories <br className="hidden md:block" />
              <span className="inline-block bg-[#E6F5FB] text-nw-black px-6 py-2 rounded-full mx-1 align-middle shadow-sm">together</span>
              with your business <br className="hidden md:block" />
              through innovation
            </h1>

            {/* Swirl SVG */}
            <div className="w-48 h-12 mt-4 ml-auto xl:mx-auto">
              <svg viewBox="0 0 200 50" className="w-full h-full text-white/30" preserveAspectRatio="none">
                <path d="M 0,25 Q 50,0 100,25 T 200,25" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>

          {/* Right Stats Box */}
          <div className="xl:w-1/3 flex flex-col items-start xl:items-end w-full bento-animate z-10">
            <div className="bg-[#2A2A2A] rounded-[2rem] p-8 w-full max-w-sm shadow-inner">
              <div className="text-gray-300 font-sans mb-4">1300+ customer reviews</div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#2A2A2A] -ml-0 z-30 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=1" alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#2A2A2A] -ml-3 z-20 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=2" alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#2A2A2A] -ml-3 z-10 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=3" alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-nw-black border-2 border-[#2A2A2A] -ml-3 z-0 flex items-center justify-center font-bold text-xs">
                  +9
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mt-6 w-full max-w-sm">
              <span className="border border-gray-600 rounded-full px-5 py-2.5 text-sm text-gray-300 flex items-center gap-2 hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-white">+</span> Marketing
              </span>
              <span className="border border-gray-600 rounded-full px-5 py-2.5 text-sm text-gray-300 flex items-center gap-2 hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-white">+</span> Search Engine OPT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[350px]">

          {/* Global Partners Card */}
          <div className="lg:col-span-5 bg-[#E6F5FB] text-nw-black rounded-[2.5rem] p-10 relative flex flex-col justify-between overflow-hidden bento-animate">
            <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-medium text-3xl mb-12 pr-12">Global partners</h3>
            <div className="grid grid-cols-2 gap-8 mt-auto">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-[2px] rotate-45"></div>
                </div>
                <p className="text-xs lg:text-sm font-sans text-[#4A4A4A] leading-relaxed">
                  We create incredible products to take your business to a new level.
                </p>
              </div>
              <div>
                <div className="w-8 h-8 mb-4 grid grid-cols-2 gap-1 rotate-45">
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-[2px]"></div>
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-[2px]"></div>
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-[2px]"></div>
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-[2px]"></div>
                </div>
                <p className="text-xs lg:text-sm font-sans text-[#4A4A4A] leading-relaxed">
                  Subscribe to stay informed about our latest offers and news.
                </p>
              </div>
            </div>
          </div>

          {/* 50K Card */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0A88BD] to-[#0E9ED9] rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden text-center bento-animate shadow-inner">
            {/* Abstract Blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#3AC0F8] rounded-full mix-blend-overlay filter blur-2xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black rounded-full mix-blend-overlay filter blur-2xl opacity-40"></div>

            {/* Intersecting circles icon */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-10 border border-white rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-10 h-10 border border-white rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-10 h-10 border border-white rounded-full"></div>
            </div>

            <h2 className="font-poppins font-bold text-5xl mb-2 relative z-10">50K</h2>
            <p className="font-sans text-sm text-white/90 relative z-10 leading-tight">
              263 Contributions<br />in the last year
            </p>
          </div>

          {/* 1400+ Card */}
          <div className="lg:col-span-4 flex flex-col relative pt-5 lg:pt-0 bento-animate">
            {/* Overlapping Button */}
            <div className="absolute top-0 lg:-top-6 right-0 z-20 flex justify-between items-center bg-white rounded-full p-1.5 pl-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] gap-4 cursor-pointer hover:scale-[1.02] transition-transform">
              <span className="font-poppins font-medium text-nw-black text-sm whitespace-nowrap">Get early access</span>
              <div className="w-10 h-10 bg-nw-black border border-gray-100 rounded-full flex items-center justify-center shadow-sm text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-[#F5F5F7] text-nw-black rounded-[2.5rem] p-8 flex-1 mt-6 lg:mt-0 relative overflow-hidden flex flex-col justify-between">
              <div>
                <h2 className="font-poppins font-bold text-4xl mb-2">1400+</h2>
                <p className="font-sans text-sm text-nw-black/70 max-w-[150px] leading-relaxed">
                  Customers who joined in 6 months
                </p>
              </div>

              {/* Mini Bar Chart */}
              <div className="h-24 flex items-end justify-between gap-3 mt-8">
                {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                  <div key={i} className="w-full bg-[#E0E0E0] rounded-full h-full flex flex-col justify-end overflow-hidden">
                    <div className="chart-bar w-full bg-[#1A1A1A] rounded-full" data-height={`${h}%`} style={{ height: '0%' }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
