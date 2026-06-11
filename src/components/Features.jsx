import React, { useState, useEffect } from 'react';
import { Activity, LayoutDashboard, CalendarDays } from 'lucide-react';

const Features = () => {
  return (
    <section id="services" className="py-32 px-8 md:px-16 bg-nw-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <CampaignShuffler />
        <LiveAnalytics />
        <CampaignPlanner />
      </div>
    </section>
  );
};

const CampaignShuffler = () => {
  const [active, setActive] = useState(0);
  const items = ["Brand Audits", "Competitor Analysis", "Market Positioning"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-nw-light border border-nw-grey rounded-[2rem] p-8 shadow-sm flex flex-col h-[350px] relative overflow-hidden group">
      <div className="flex items-center gap-3 mb-6">
        <LayoutDashboard className="text-nw-blue w-6 h-6" />
        <h3 className="font-poppins font-semibold text-2xl text-nw-black">Precision Audits</h3>
      </div>
      <p className="font-sans text-nw-black/70 mb-auto">Data-driven strategy to uncover market opportunities.</p>
      
      <div className="relative h-40 mt-4 perspective-[1000px]">
        {items.map((item, idx) => {
          const isActive = idx === active;
          const isPrev = idx === (active - 1 + items.length) % items.length;
          
          return (
            <div 
              key={idx}
              className={`absolute top-0 left-0 w-full bg-white border border-nw-grey rounded-2xl p-4 shadow-md transition-all duration-700 ease-in-out font-mono text-sm text-center`}
              style={{
                transform: isActive ? 'translateY(0) scale(1) translateZ(0)' : 
                          isPrev ? 'translateY(15px) scale(0.9) translateZ(-50px)' : 
                          'translateY(30px) scale(0.8) translateZ(-100px)',
                opacity: isActive ? 1 : isPrev ? 0.6 : 0.3,
                zIndex: isActive ? 10 : isPrev ? 5 : 1
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LiveAnalytics = () => {
  const messages = ["ROI increased by 145%", "CPA reduced by 30%", "Conversion rate +2.5%"];
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (charIdx < messages[msgIdx].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + messages[msgIdx][charIdx]);
        setCharIdx((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIdx(0);
        setMsgIdx((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, msgIdx]);

  return (
    <div className="bg-nw-light border border-nw-grey rounded-[2rem] p-8 shadow-sm flex flex-col h-[350px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Activity className="text-nw-blue w-6 h-6" />
          <h3 className="font-poppins font-semibold text-2xl text-nw-black">Bold Campaigns</h3>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-nw-grey">
          <div className="w-2 h-2 rounded-full bg-nw-blue animate-pulse"></div>
          <span className="font-mono text-[10px] uppercase tracking-wider">Live Results</span>
        </div>
      </div>
      <p className="font-sans text-nw-black/70 mb-auto">Creative engineering that demands attention.</p>
      
      <div className="bg-nw-black rounded-xl p-4 mt-8 h-24 flex items-center">
        <span className="font-mono text-[#C6FF34] text-sm leading-relaxed">
          &gt; {text}<span className="inline-block w-2 h-4 bg-nw-blue ml-1 animate-pulse" />
        </span>
      </div>
    </div>
  );
};

const CampaignPlanner = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDay((prev) => (prev + 1) % 7);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-nw-light border border-nw-grey rounded-[2rem] p-8 shadow-sm flex flex-col h-[350px] relative overflow-hidden group">
      <div className="flex items-center gap-3 mb-6">
        <CalendarDays className="text-nw-blue w-6 h-6" />
        <h3 className="font-poppins font-semibold text-2xl text-nw-black">Data Scaling</h3>
      </div>
      <p className="font-sans text-nw-black/70 mb-auto">Relentless optimization for measurable momentum.</p>
      
      <div className="mt-8 bg-white border border-nw-grey rounded-xl p-4">
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-md flex items-center justify-center font-mono text-xs font-bold transition-colors duration-300 ${
                i === activeDay ? 'bg-nw-blue text-white' : 'bg-nw-light text-nw-grey'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="h-2 w-16 bg-nw-grey/30 rounded-full"></div>
          <div className="h-6 w-16 bg-nw-blue rounded-full flex items-center justify-center text-[10px] text-white font-mono uppercase tracking-widest">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
