import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PenTool, Maximize, Search, Code, Zap, CheckCircle2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: PenTool,
    title: "Creative Engineering",
    desc: "Unique campaigns tailored to your brand, captivating users with innovative visual storytelling."
  },
  {
    icon: Maximize,
    title: "Scalable Architecture",
    desc: "Ensuring seamless brand experiences across all platforms, maximizing user engagement."
  },
  {
    icon: Search,
    title: "Search Dominance",
    desc: "Elevating your online presence with strategies that boost rankings and visibility effectively."
  },
  {
    icon: Code,
    title: "Technical Precision",
    desc: "Crafting bespoke digital solutions that meet your specific needs, enhancing functionality."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Meeting deadlines consistently, providing reliable execution without compromising quality."
  },
  {
    icon: CheckCircle2,
    title: "Unwavering Support",
    desc: "Dedicated assistance during and after campaign launches, ensuring client success."
  }
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Stagger fade in grid items
      gsap.fromTo('.feature-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F5F5F7] relative" id="why-us" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] p-8 md:p-16 lg:p-20 border border-gray-100">
          
          {/* Header Section */}
          <div ref={titleRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-nw-black tracking-tighter leading-[1.1] max-w-2xl">
              When people<br />
              do 
              <div className="inline-flex items-center mx-3 align-middle translate-y-1">
                <div className="w-20 h-10 bg-nw-blue rounded-full relative flex items-center px-1.5 shadow-inner">
                  <div className="w-7 h-7 bg-white rounded-full translate-x-10 shadow-sm transition-transform"></div>
                </div>
              </div>
              work with us.
            </h2>
            
            <button className="flex items-center gap-2 bg-nw-black hover:bg-nw-blue text-white px-6 py-3.5 rounded-xl font-sans font-medium text-sm transition-colors duration-300 group">
              <Sparkles className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              Let's build something
            </button>
          </div>

          {/* Grid Section */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              // First item gets the special highlighted card style
              const isFirst = idx === 0;

              return (
                <div 
                  key={idx} 
                  className={`feature-item group flex flex-col ${isFirst ? 'bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-8 -m-8 border border-gray-50' : ''}`}
                >
                  <div className={`mb-6 ${isFirst ? 'text-nw-blue' : 'text-nw-black'}`}>
                    <Icon className="w-8 h-8" strokeWidth={isFirst ? 2.5 : 2} />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-nw-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
