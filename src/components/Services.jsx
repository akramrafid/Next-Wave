import React, { useState } from 'react';
import { ArrowUpRight, Compass, Palette, LineChart, Film, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: "01",
    name: "STRATEGY",
    icon: Compass,
    disciplines: "Brand Strategy · Communication Planning · Campaign Design · Media Strategy",
    desc: "We turn business objectives into clear strategic direction.",
    tag: "Core Strategic Foundation"
  },
  {
    id: "02",
    name: "CREATIVE & DESIGN",
    icon: Palette,
    disciplines: "Brand Identity · Graphic Design · Copywriting · Audio-Visual · Content · Packaging",
    desc: "We turn strategic thinking into ideas, stories and experiences people remember.",
    tag: "Brand Expression"
  },
  {
    id: "03",
    name: "DIGITAL & PERFORMANCE",
    icon: LineChart,
    disciplines: "Social Media · Paid Campaigns · SEO · Web Design · Performance Marketing",
    desc: "We connect brands with audiences across digital channels and turn attention into action.",
    tag: "Growth & ROI"
  },
  {
    id: "04",
    name: "PRODUCTION & ACTIVATION",
    icon: Film,
    disciplines: "Event Management · OVC & TVC · Photography · Experiential & BTL Campaigns",
    desc: "We bring ideas to life through production, experiences and brand activation.",
    tag: "On-Ground & Media"
  },
  {
    id: "05",
    name: "PR & COMMUNICATIONS",
    icon: Megaphone,
    disciplines: "Corporate Affairs · CSR & Advocacy · Reputation Management · Crisis Communication",
    desc: "We help organisations communicate with clarity, consistency and confidence.",
    tag: "Reputation & Corporate"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="bg-[#090909] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
              <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
                CAPABILITIES & SOLUTIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-white tracking-tight uppercase">
              THE 360 SPECTRUM
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-md font-sans leading-relaxed">
            End-to-end marketing capabilities, connecting commercial insight to lasting brand impact.
          </p>
        </div>

        {/* Interactive Capability Rows */}
        <div className="flex flex-col gap-3.5">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeService === index;

            return (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className={`group relative rounded-2xl p-6 sm:p-8 md:p-9 transition-all duration-300 border ${
                  isHovered 
                    ? 'bg-white/[0.07] border-[#0E9ED9]/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)] translate-x-1.5' 
                    : 'bg-[#111111] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Number, Icon, Name */}
                  <div className="flex items-start sm:items-center gap-6 lg:w-[35%] shrink-0">
                    <span className={`font-mono text-sm font-bold tracking-widest transition-colors ${
                      isHovered ? 'text-[#9DD6F3]' : 'text-gray-500'
                    }`}>
                      {service.id}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isHovered ? 'bg-[#0E9ED9] text-white' : 'bg-white/5 text-gray-300'
                      }`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="font-poppins font-bold text-xl sm:text-2xl tracking-tight uppercase text-white">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Middle: Core Impact & Disciplines */}
                  <div className="lg:w-[45%] flex flex-col justify-center">
                    <p className={`font-sans font-medium text-sm md:text-base leading-relaxed mb-1.5 transition-colors ${
                      isHovered ? 'text-white' : 'text-gray-300'
                    }`}>
                      {service.desc}
                    </p>
                    <p className="text-xs font-mono tracking-wide text-gray-400">
                      {service.disciplines}
                    </p>
                  </div>

                  {/* Right: Category Tag & Arrow Link */}
                  <div className="lg:w-[20%] flex items-center justify-between lg:justify-end gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                    <span className={`text-[10px] font-mono uppercase tracking-wider hidden xl:inline-block px-3 py-1 rounded-full border ${
                      isHovered ? 'bg-[#0E9ED9]/15 text-[#9DD6F3] border-[#0E9ED9]/30' : 'bg-white/5 text-gray-400 border-white/10'
                    }`}>
                      {service.tag}
                    </span>
                    <Link
                      to="/contact"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isHovered 
                          ? 'bg-white text-black scale-110 shadow-lg' 
                          : 'bg-white/10 text-white group-hover:bg-white/20'
                      }`}
                      title="Enquire about this capability"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-sans text-gray-400">
            Need a bespoke integrated solution across strategy, creative, and performance?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-poppins font-bold text-[#9DD6F3] hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>DISCUSS YOUR OBJECTIVES</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
