import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    tag: "MARKETING STRATEGY",
    readTime: "4 min read",
    title: "Moving Beyond Vanity Metrics: Why Real Commercial Momentum Trumps Impressions",
    summary: "How modern CMOs and business leaders are shifting budgets from surface-level engagement to full-funnel customer acquisition, unit economics and lifetime value."
  },
  {
    id: 2,
    tag: "BRAND ARCHITECTURE",
    readTime: "5 min read",
    title: "Building Brand Relevance in Bangladesh’s Evolving Consumer Economy",
    summary: "Why domestic brands that pair authentic local cultural insight with global visual standards are winning market share across competitive categories."
  },
  {
    id: 3,
    tag: "DIGITAL EXECUTION",
    readTime: "3 min read",
    title: "The Power of Integrated Execution: Aligning Creative Direction with Media Buying",
    summary: "Why creative production disconnected from media buying underperforms, and how unified campaign orchestration drives superior ROAS."
  }
];

const Insights = () => {
  return (
    <section id="insights" className="bg-[#090909] text-white w-full py-28 md:py-36 relative overflow-hidden border-b border-white/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0E9ED9]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0E9ED9]" />
              <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
                STRATEGIC PERSPECTIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black text-white tracking-tight uppercase">
              THINKING BEYOND THE CAMPAIGN.
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-md font-sans leading-relaxed">
            Perspectives on marketing, brand equity, digital behaviour and sustainable commercial growth.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((art) => (
            <div 
              key={art.id}
              className="bg-[#111111] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-white/10 hover:border-[#0E9ED9]/40 hover:bg-white/[0.04] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9DD6F3] bg-[#0E9ED9]/15 px-3 py-1 rounded-full font-semibold border border-[#0E9ED9]/25">
                    {art.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                    <Clock size={12} className="text-gray-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug mb-4 group-hover:text-[#9DD6F3] transition-colors">
                  {art.title}
                </h3>

                <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-poppins font-bold text-white group-hover:text-[#9DD6F3] uppercase tracking-wider transition-colors">
                  Read Perspective
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;
