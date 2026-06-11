import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "We meet to discuss your brand, goals, and current marketing bottlenecks to align our vision.",
      colorTheme: "orange",
      rotation: "-rotate-3",
      align: "left"
    },
    {
      num: "02",
      title: "Strategy & Audit",
      desc: "Our team conducts a deep-dive audit and builds a custom, data-driven marketing blueprint.",
      colorTheme: "blue",
      rotation: "rotate-3",
      align: "right"
    },
    {
      num: "03",
      title: "Creative Production",
      desc: "We engineer bold, high-fidelity ad creatives and copywriting designed to grab attention.",
      colorTheme: "purple",
      rotation: "-rotate-2",
      align: "left"
    },
    {
      num: "04",
      title: "Campaign Launch",
      desc: "Your customized campaigns go live across targeted digital channels to build momentum.",
      colorTheme: "orange",
      rotation: "rotate-2",
      align: "right"
    },
    {
      num: "05",
      title: "Optimization",
      desc: "We monitor real-time analytics, A/B test variations, and relentlessly refine the strategy.",
      colorTheme: "blue",
      rotation: "-rotate-3",
      align: "left"
    },
    {
      num: "06",
      title: "Scale & Dominate",
      desc: "Once we find the winning formula, we scale the budget to maximize your ROI and market share.",
      colorTheme: "purple",
      rotation: "rotate-3",
      align: "right"
    }
  ];

  const getColorStyles = (theme) => {
    switch (theme) {
      case 'orange':
        return {
          innerBg: 'bg-[#FFF3E8]',
          textColor: 'text-[#E8734A]',
          pinOuter: 'bg-[#FF7B4F]',
          pinInner: 'bg-[#FF9B7A]',
          pinShadow: 'shadow-[#FF7B4F]/40'
        };
      case 'blue':
        return {
          innerBg: 'bg-[#EAF2FF]',
          textColor: 'text-[#4A83FF]',
          pinOuter: 'bg-[#4A83FF]',
          pinInner: 'bg-[#7AA4FF]',
          pinShadow: 'shadow-[#4A83FF]/40'
        };
      case 'purple':
        return {
          innerBg: 'bg-[#F6E8FF]',
          textColor: 'text-[#A349FF]',
          pinOuter: 'bg-[#A349FF]',
          pinInner: 'bg-[#C285FF]',
          pinShadow: 'shadow-[#A349FF]/40'
        };
      default:
        return {};
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup the SVG path animation
      const path = pathRef.current;
      const length = path.getTotalLength();
      
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 1,
        }
      });

      // Animate the sticky notes popping in
      const cards = gsap.utils.toArray('.sticky-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="py-24 px-4 overflow-hidden relative" 
      id="roadmap"
      style={{
        backgroundColor: '#FAFAFA',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #EAEAEA 31px, #EAEAEA 32px)'
      }}
    >
      <div className="max-w-4xl mx-auto relative" ref={containerRef}>
        
        {/* Animated Dashed SVG Line */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              ref={pathRef} 
              d="M 50 2 C 75 10, 75 20, 50 25 C 25 30, 25 40, 50 45 C 75 50, 75 60, 50 65 C 25 70, 25 80, 50 85 C 75 90, 75 95, 50 98" 
              fill="none" 
              stroke="#D1D5DB" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-16 md:gap-8 relative z-10 py-10">
          {steps.map((step, idx) => {
            const colors = getColorStyles(step.colorTheme);
            const isLeft = step.align === 'left';
            
            return (
              <div 
                key={idx} 
                className={`sticky-card w-full flex ${isLeft ? 'justify-start md:justify-end md:pr-[55%]' : 'justify-end md:justify-start md:pl-[55%]'}`}
              >
                {/* Polaroid/Sticky Note Wrapper */}
                <div className={`relative w-[280px] md:w-[320px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-3 ${step.rotation} hover:rotate-0 transition-transform duration-500`}>
                  
                  {/* The Pin */}
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${colors.pinOuter} ${colors.pinShadow} shadow-lg flex items-center justify-center z-20`}>
                    <div className={`w-3 h-3 rounded-full ${colors.pinInner} shadow-inner`}></div>
                    {/* Shadow cast on the paper by the pin */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black/20 rounded-full blur-[2px] -z-10"></div>
                  </div>

                  {/* Colored Inner Content */}
                  <div className={`rounded-xl p-8 h-full flex flex-col ${colors.innerBg}`}>
                    <span className={`font-poppins font-medium text-xl mb-3 ${colors.textColor}`}>{step.num}</span>
                    <h3 className="font-poppins font-bold text-2xl text-[#1E1E1E] mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[#4A4A4A] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
