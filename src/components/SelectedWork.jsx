import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Brand Transformation & Luxury Visual Architecture",
    client: "Retail & Lifestyle Brand",
    category: "BRAND IDENTITY · PACKAGING",
    image: "/Gallery/541466552_122171841014575062_8137509910886669250_n.jpg",
    span: "lg:col-span-7"
  },
  {
    id: 2,
    title: "Multi-Channel Digital Media & Performance Architecture",
    client: "Healthcare & Enterprise",
    category: "PERFORMANCE · MEDIA BUYING",
    image: "/Gallery/543009753_122171841122575062_3703718188412781750_n.jpg",
    span: "lg:col-span-5"
  },
  {
    id: 3,
    title: "Integrated Brand Launch & Experiential Live Activation",
    client: "Hospitality & Corporate",
    category: "EVENT ACTIVATION · PRODUCTION",
    image: "/Gallery/588468447_122176869140774370_2632799570911795755_n.jpg",
    span: "lg:col-span-5"
  },
  {
    id: 4,
    title: "Strategic Communications, OVC & Digital Storytelling",
    client: "National & Global Enterprise",
    category: "STRATEGY · PR & COMMS",
    image: "/Gallery/615144837_34665477493051026_3045061054168619373_n.jpg",
    span: "lg:col-span-7"
  }
];

const SelectedWork = () => {
  return (
    <section id="work" className="bg-[#070707] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#0E9ED9]/5 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
              <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
                PORTFOLIO & DELIVERABLES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black tracking-tight uppercase text-white">
              SELECTED WORK
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-gray-400 text-base md:text-lg max-w-md font-sans leading-relaxed">
              A curated look into the strategic thinking, visual craft and digital execution of NextWave.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#9DD6F3] hover:text-white border-b border-[#9DD6F3]/50 hover:border-white py-1 font-poppins text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>View Archive</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((item) => (
            <div 
              key={item.id} 
              className={`${item.span} group relative rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#0E9ED9]/50 transition-all duration-500 flex flex-col justify-end min-h-[440px] sm:min-h-[500px] shadow-2xl`}
            >
              {/* Media Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-black/40 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full">
                
                {/* Top Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9DD6F3] bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-semibold">
                    {item.category}
                  </span>
                  <Link
                    to="/gallery"
                    className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                    title="View Work"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                {/* Bottom Project Title & Client */}
                <div className="mt-auto pt-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Client Focus: {item.client}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-white tracking-tight leading-snug max-w-xl group-hover:text-[#9DD6F3] transition-colors">
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Work Callout */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-sans text-gray-400">
            Showcasing commercial deliverables spanning Bangladesh and cross-border initiatives.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full text-xs font-poppins font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <span>Explore Complete Visual Archive</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;
