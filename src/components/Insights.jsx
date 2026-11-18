import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from './Icons';

const articles = [
  {
    id: 1,
    tag: "Marketing Strategy",
    readTime: "4 min read",
    title: "Moving Beyond Vanity Metrics: Why Real Commercial Momentum Trumps Impressions",
    summary: "How modern CMOs and business leaders are shifting budgets from surface-level engagement to full-funnel customer acquisition, unit economics and lifetime value."
  },
  {
    id: 2,
    tag: "Brand Architecture",
    readTime: "5 min read",
    title: "Building Brand Relevance in Bangladesh’s Evolving Consumer Economy",
    summary: "Why domestic brands that pair authentic local cultural insight with global visual standards are winning market share across competitive categories."
  },
  {
    id: 3,
    tag: "Digital Execution",
    readTime: "3 min read",
    title: "The Power of Integrated Execution: Aligning Creative Direction with Media Buying",
    summary: "Why creative production disconnected from media buying underperforms, and how unified campaign orchestration drives superior ROAS."
  }
];

const Insights = () => {
  return (
    <section id="insights" className="bg-white text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold text-[#262626] tracking-[-0.02em]">
            Thinking Beyond The Campaign.
          </h2>
          <p className="text-[#262626]/75 text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
            Perspectives on marketing, brand equity, digital behaviour and sustainable commercial growth.
          </p>
        </div>

        {/* Ruled Three-Column Editorial Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#CCCCCC] divide-y md:divide-y-0 md:divide-x divide-[#CCCCCC]">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-[#CCCCCC]/70 text-xs font-sans">
                  <span className="font-poppins font-semibold text-[#076C96]">
                    {art.tag}
                  </span>
                  <span className="text-[#262626]/70">
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-[#262626] tracking-[-0.015em] leading-snug mb-4 group-hover:text-[#076C96] transition-colors">
                  {art.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#262626]/80 leading-relaxed max-w-[42ch] [text-wrap:pretty]">
                  {art.summary}
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-poppins font-semibold text-[#262626] group-hover:text-[#076C96] uppercase tracking-[0.12em] transition-colors py-1"
                >
                  <span>Discuss This Topic</span>
                  <ArrowUpRightIcon size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
