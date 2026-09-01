import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MessageSquareQuote } from 'lucide-react';

const Team = () => {
  return (
    <section id="about-team" className="bg-[#070707] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
            <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
              FOUNDER & LEADERSHIP
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black tracking-tight uppercase text-white">
            THE THINKING BEHIND NEXTWAVE
          </h2>
        </div>

        {/* Founder Bio Card */}
        <div className="bg-[#111111] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img 
                  src="/Meet our team/Mohammad Abdullah Al Kaisar.jpeg" 
                  alt="Abdullah Al Kaisar - Founder & CEO"
                  className="w-full h-[420px] md:h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent" />

                {/* Bottom Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white text-xl sm:text-2xl font-bold font-sans tracking-tight">
                      ABDULLAH AL KAISAR
                    </h3>
                    <img 
                      src="/Meet our team/Verified badge sign.png" 
                      alt="Verified Badge" 
                      className="w-5 h-5 drop-shadow-sm shrink-0" 
                    />
                  </div>
                  <p className="text-[#9DD6F3] text-xs font-semibold uppercase tracking-widest font-mono">
                    FOUNDER & CEO
                  </p>
                </div>
              </div>

              {/* Social Connect Bar */}
              <div className="flex items-center justify-between w-full max-w-md mt-6 px-2">
                <div className="flex items-center gap-3">
                  <a 
                    href="https://linkedin.com/in/kaisar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0E9ED9] text-white flex items-center justify-center transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:info.nextwaves@gmail.com" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0E9ED9] text-white flex items-center justify-center transition-colors"
                    title="Email Kaisar"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 text-black text-xs font-poppins font-bold px-5 py-2.5 rounded-full uppercase tracking-wider transition-all duration-200 shadow-md"
                >
                  <span>Connect</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Bio Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9DD6F3] mb-4 block font-semibold">
                  EXECUTIVE PROFILE
                </span>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-black text-white tracking-tight mb-6">
                  Bridging Strategic Acumen & Creative Precision
                </h3>

                <div className="space-y-6 text-gray-300 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    Abdullah Al Kaisar is the Founder & CEO of NextWave 360 Solutions. With a background in agency leadership, marketing operations and client management, he has been directly involved in marketing engagements with leading businesses and brands across multiple sectors.
                  </p>
                  <p className="text-white font-medium border-l-2 border-[#0E9ED9] pl-4 py-1">
                    He founded NextWave with the ambition of building a marketing company from Bangladesh that combines strategic thinking, creative expression and disciplined execution.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  10+ Years Marketing Leadership
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#9DD6F3] hover:text-white text-xs font-poppins font-bold uppercase tracking-wider transition-colors"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Width Leadership Quote Section */}
        <div className="bg-[#111111] rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 text-[#0E9ED9] mb-6">
            <MessageSquareQuote size={28} />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DD6F3] font-semibold">LEADERSHIP PERSPECTIVE</span>
          </div>

          <blockquote className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-3.5xl text-white leading-snug tracking-tight mb-8 max-w-5xl">
            “Great marketing begins with understanding the business behind the brand. At NextWave, our ambition is to bring sharper thinking, stronger creativity and disciplined execution together to create work that moves <span className="font-serif italic font-normal text-[#9DD6F3]" style={{ fontFamily: "'Playfair Display', serif" }}>business forward</span>.”
          </blockquote>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-poppins text-sm sm:text-base font-bold text-[#9DD6F3] tracking-wide">
              Abdullah Al Kaisar · Founder & CEO · NextWave 360 Solutions
            </div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Chittagong, Bangladesh
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
