import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-14 bg-[#070707] text-white border-b border-white/10">
      <div className="max-w-[1560px] mx-auto bg-[#111111] rounded-3xl p-10 sm:p-16 md:p-24 text-center flex flex-col items-center justify-center relative overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E9ED9]/15 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0E9ED9]/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0E9ED9] animate-pulse" />
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.28em] text-[#9DD6F3] font-semibold">
              START A CONVERSATION
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl text-white uppercase tracking-tight leading-[1.04] mb-6">
            WHAT'S YOUR NEXT MOVE?
          </h2>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Have a marketing challenge, a new brand launch or a business expansion in mind? Let's talk.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-xl font-poppins font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="https://wa.me/8801711204614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white text-white px-8 py-5 rounded-xl font-poppins font-semibold text-sm sm:text-base tracking-wider uppercase transition-all duration-200 hover:bg-white/10"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
