import React from 'react';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: "01",
    title: "Marketing Campaign Planning",
    badge: "Campaign Strategy",
    desc: "End-to-end campaign planning and execution built around objectives, timelines, and measurable results.",
    img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "02",
    title: "Website & Landing Page Strategy",
    badge: "Conversion & UX",
    desc: "Conversion-focused website and landing page strategy aligned with brand goals and user behavior.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "03",
    title: "Marketing Strategy & Consulting",
    badge: "Business Growth",
    desc: "Business-first marketing strategies aligned with growth goals, market reality, and long-term brand positioning.",
    img: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "04",
    title: "Branding & Brand Identity",
    badge: "Visual Identity",
    desc: "We shape brands through positioning, messaging, and visual identity that customers recognize, trust, and remember.",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "05",
    title: "Digital & Performance Marketing",
    badge: "Data-Driven ROI",
    desc: "Data-driven campaigns focused on real business outcomes, not just reach, likes, or impressions.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "06",
    title: "Social Media Strategy & Management",
    badge: "Audience Engagement",
    desc: "Purpose-led social media strategies designed to build trust, consistency, and meaningful audience engagement.",
    img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "07",
    title: "Creative & Content Production",
    badge: "Content Creation",
    desc: "Strategic content, copy, and creatives that communicate clearly and convert attention into action.",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-nw-white w-full py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-nw-black tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-nw-black/60 text-lg max-w-2xl">
            Comprehensive solutions to elevate your brand and drive measurable growth.
          </p>
        </div>

        {/* Custom Grid matching reference: 3 on top row, 4 on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className={`relative group bg-nw-blue rounded-3xl p-6 md:p-8 flex flex-col min-h-[300px] lg:min-h-[320px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl ${
                index < 3 ? 'lg:col-span-4 md:col-span-1' : 'lg:col-span-3 md:col-span-1'
              }`}
            >
              {/* Background Abstract Image with blend mode to tint it based on brand guidelines */}
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 ease-in-out">
                <img 
                  src={service.img} 
                  alt="abstract background" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Content */}
              <div className="relative z-10 mb-auto">
                <h3 className={`text-nw-white font-bold mb-3 leading-tight ${index < 3 ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
                  {service.title}
                </h3>
                <p className="text-nw-white/90 text-sm leading-relaxed font-medium line-clamp-3">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-6 flex flex-col xl:flex-row justify-between items-start xl:items-end w-full gap-4 xl:gap-0">
                <div className="bg-nw-white text-nw-blue text-xs font-bold px-4 py-2 rounded-full shadow-sm max-w-full truncate text-center">
                  {service.badge}
                </div>
                
                <button className="bg-nw-white text-nw-blue w-10 h-10 min-w-[40px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm shrink-0">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
