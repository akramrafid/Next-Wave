import React from 'react';
import { Target, HeartHandshake, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: "01",
    title: "STRATEGY",
    icon: Target,
    desc: "We begin by understanding the commercial architecture, audience psychology, market context and core business objective.",
    tagline: "Commercial Insight & Direction"
  },
  {
    id: "02",
    title: "EMOTION",
    icon: HeartHandshake,
    desc: "We transform analytical insight into narrative resonance, distinctive aesthetics and ideas that forge visceral brand loyalty.",
    tagline: "Creative & Brand Resonance"
  },
  {
    id: "03",
    title: "EXECUTION",
    icon: Zap,
    desc: "We engineer the rollout with uncompromising precision across digital channels, production media and physical touchpoints.",
    tagline: "Disciplined Omni-Channel Delivery"
  }
];

const Principles = () => {
  return (
    <section id="approach" className="bg-[#080808] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
            <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
              METHODOLOGY & EXECUTION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black tracking-tight uppercase text-white mb-6">
            HOW WE WORK
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-gray-200 tracking-tight leading-snug">
            “We believe success is never accidental. It is <span className="font-serif italic font-normal text-[#9DD6F3]" style={{ fontFamily: "'Playfair Display', serif" }}>designed</span>.”
          </p>
        </div>

        {/* 3 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id}
                className="bg-[#111111] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/10 hover:border-[#0E9ED9]/40 hover:bg-white/[0.04] transition-all duration-300 group min-h-[380px] shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-[#9DD6F3] tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      PHASE {step.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#0E9ED9] text-white flex items-center justify-center transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-poppins font-black uppercase tracking-tight text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                    {step.tagline}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E9ED9]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing DNA Statement Banner */}
        <div className="bg-gradient-to-r from-[#0E9ED9]/15 via-white/[0.03] to-transparent p-8 md:p-10 rounded-3xl border border-[#0E9ED9]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DD6F3] mb-1.5 block font-semibold">
              CORE PHILOSOPHY
            </span>
            <p className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight">
              Strategy. Emotion. Execution. This is how we approach Marketing Reimagined.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-7 py-3.5 rounded-full text-xs font-poppins font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-lg hover:scale-105"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Principles;
