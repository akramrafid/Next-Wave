import React from 'react';
import { ArrowUpRight, Building2, ShoppingBag, GraduationCap, Utensils, Home, Stethoscope, Cpu, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  { name: "RETAIL & CONSUMER", icon: ShoppingBag, desc: "Fast-moving goods, lifestyle retail & consumer brand ecosystems." },
  { name: "EDUCATION", icon: GraduationCap, desc: "Institutions, edtech platforms & national academic organisations." },
  { name: "HOSPITALITY & LIFESTYLE", icon: Utensils, desc: "Restaurants, luxury destinations & experiential lifestyle ventures." },
  { name: "CORPORATE & B2B", icon: Building2, desc: "Enterprise conglomerates, industrial leaders & holding companies." },
  { name: "REAL ESTATE", icon: Home, desc: "Developers, commercial architectural firms & property leaders." },
  { name: "HEALTHCARE & PHARMA", icon: Stethoscope, desc: "Hospitals, wellness brands & healthcare innovators." },
  { name: "TECHNOLOGY & SAAS", icon: Cpu, desc: "Digital products, SaaS enterprises & technology leaders." },
  { name: "EMERGING VENTURES", icon: Briefcase, desc: "Ambitious founder-led businesses & high-growth disruptors." }
];

const Industries = () => {
  return (
    <section id="industries" className="bg-[#090909] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section 1: Where We Work Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
                <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
                  SECTOR EXPERTISE
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-white tracking-tight uppercase">
                WHERE WE WORK
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg max-w-md font-sans leading-relaxed">
              Tailored brand architectures and digital systems engineered across key economic sectors.
            </p>
          </div>

          {/* 8 Sector Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#111111] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#0E9ED9]/40 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 text-[#9DD6F3] group-hover:bg-[#0E9ED9] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-poppins font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-2 group-hover:text-[#9DD6F3] transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Enterprise & Global Ambition Dual Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Enterprise Positioning */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#141414] to-[#0d0d0d] text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between border border-white/15 shadow-2xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#9DD6F3] font-semibold block mb-4">
                CORPORATE & ENTERPRISE FOCUS
              </span>
              <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-6">
                FOR BUSINESSES THAT THINK BIGGER.
              </h3>
              <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
                From growing businesses to established organisations, we bring strategic thinking, creative capability and disciplined execution together to solve marketing and communication challenges.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white text-white hover:text-black px-7 py-4 rounded-full text-xs font-poppins font-bold uppercase tracking-wider transition-all duration-300 group"
            >
              <span>Consult with Our Strategic Team</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Card 2: Global Ambition */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0c7aa8] to-[#0E9ED9] text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-white/80 font-semibold block mb-4">
                INTERNATIONAL AMBITION
              </span>
              <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-6">
                FROM BANGLADESH. FOR THE WORLD.
              </h3>
              <p className="text-white/95 font-sans text-base sm:text-lg leading-relaxed mb-8">
                Rooted in local insight, built with global ambition. We believe great marketing created in Bangladesh can compete confidently across international markets.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/25 flex items-center justify-between">
              <span className="text-xs font-mono text-white/90 uppercase tracking-widest font-semibold">
                Local Insight · Global Standard
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                ✓
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Industries;
