import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from './Icons';

const projects = [
  {
    id: 1,
    title: "Brand Transformation & Luxury Visual Architecture",
    client: "Retail & Couture (SultanNur · Lamiara)",
    category: "Brand Identity · Packaging",
    image: "/Gallery/541466552_122171841014575062_8137509910886669250_n.jpg",
    span: "lg:col-span-7"
  },
  {
    id: 2,
    title: "Multi-Channel Digital Media & Performance Architecture",
    client: "Healthcare & Enterprise (Holistic Dental · Umar Group)",
    category: "Performance · Media Buying",
    image: "/Gallery/543009753_122171841122575062_3703718188412781750_n.jpg",
    span: "lg:col-span-5"
  },
  {
    id: 3,
    title: "Integrated Brand Launch & Experiential Live Activation",
    client: "Hospitality & Lifestyle (Wild Lake · Homey & More)",
    category: "Event Activation · Production",
    image: "/Gallery/588468447_122176869140774370_2632799570911795755_n.jpg",
    span: "lg:col-span-5"
  },
  {
    id: 4,
    title: "Strategic Communications, OVC & Digital Storytelling",
    client: "Global Advisory & Media (Aspiring Global · Dainik Purbatara)",
    category: "Strategy · PR & Comms",
    image: "/Gallery/615144837_34665477493051026_3045061054168619373_n.jpg",
    span: "lg:col-span-7"
  }
];

const SelectedWork = () => {
  return (
    <section id="work" className="bg-white text-[#262626] w-full py-20 md:py-28 relative border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#CCCCCC]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold tracking-[-0.02em] text-[#262626]">
            Selected Work
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-[#262626]/75 text-sm sm:text-base max-w-[44ch] font-sans leading-relaxed [text-wrap:pretty]">
              A curated look into the strategic thinking, visual craft and digital execution of Next Wave.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[#076C96] hover:text-[#262626] border-b border-[#076C96] hover:border-[#262626] py-1 font-poppins text-xs font-semibold uppercase tracking-[0.12em] transition-colors shrink-0"
            >
              <span>View Archive</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>

        {/* Asymmetric 12-Col Architectural Plate Grid (Single un-nested unclipped plate per deliverable) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-[#CCCCCC]">
          {projects.map((item) => (
            <article
              key={item.id}
              className={`${item.span} group bg-white border-r border-b border-[#CCCCCC] flex flex-col justify-between`}
            >
              <Link
                href="/gallery"
                className="block w-full aspect-[5/4] lg:aspect-auto lg:h-[400px] xl:h-[440px] overflow-hidden bg-[#F7F7F7]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </Link>

              <div className="p-6 sm:p-8 border-t border-[#CCCCCC] flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#262626]/75">
                  <span>{item.client}</span>
                  <span className="font-poppins font-semibold text-[#076C96]">{item.category}</span>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold text-[#262626] tracking-[-0.015em] leading-snug max-w-[34ch]">
                    {item.title}
                  </h3>
                  <Link
                    href="/gallery"
                    aria-label={`Open gallery for ${item.title}`}
                    className="w-11 h-11 shrink-0 rounded-[2px] border border-[#CCCCCC] bg-[#F7F7F7] group-hover:bg-[#076C96] group-hover:border-[#076C96] text-[#262626] group-hover:text-white flex items-center justify-center transition-colors duration-150"
                  >
                    <ArrowUpRightIcon size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Work Callout */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-sans text-[#262626]/75">
            Showcasing commercial deliverables spanning Bangladesh and cross-border initiatives.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#262626] hover:bg-[#076C96] text-white px-6 py-3.5 rounded-[2px] text-xs font-poppins font-semibold uppercase tracking-[0.12em] transition-colors duration-150 self-start sm:self-auto"
          >
            <span>Explore Complete Visual Archive</span>
            <ArrowUpRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
