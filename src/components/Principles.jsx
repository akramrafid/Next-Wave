import React from 'react';

const principles = [
  {
    title: "Strategic", subtitle: "Clarity",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    )
  },
  {
    title: "Emotional", subtitle: "Intelligence",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    )
  },
  {
    title: "Creative", subtitle: "Integrity",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.992 6.012 17.5 2 12 2z"/>
      </svg>
    )
  },
  {
    title: "Seamless", subtitle: "Execution",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )
  },
  {
    title: "Continuous", subtitle: "Evolution",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
      </svg>
    )
  },
  {
    title: "Ethical", subtitle: "Impact",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    title: "Borderless", subtitle: "Thinking",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  }
];

const Principles = () => {
  return (
    <section className="bg-[#f2f4f8] py-24 px-4 md:px-8 font-sans flex flex-col items-center">

      {/* Top Header Card */}
      <div className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-12 md:p-16 relative flex flex-col items-center text-center overflow-visible z-20">
        
        {/* Glowing Pill */}
        <div className="absolute top-0 -translate-y-1/2 bg-white px-6 py-2.5 rounded-full text-nw-black font-bold text-sm shadow-[0_15px_35px_rgba(14,158,217,0.25)] border-[1.5px] border-nw-blue/10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nw-blue animate-pulse"></span>
          NextWave
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mt-2 text-[#b0b0b0]">
          Our core guiding <br />
          <span className="text-nw-black">principles & values!</span>
        </h2>
      </div>

      {/* Bottom Main Card */}
      <div className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center justify-center min-h-[750px] md:min-h-[900px] mt-8 z-10">
        
        {/* Central Glow Blob */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-nw-blue/10 blur-[100px] rounded-full pointer-events-none" />
        </div>

        {/* Concentric Circles & Radial Pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
          <div className="w-[1200px] h-[1200px] rounded-full border border-nw-blue/20 absolute" />
          <div className="w-[900px] h-[900px] rounded-full border border-nw-blue/20 absolute" />
          <div className="w-[600px] h-[600px] rounded-full border border-nw-blue/20 absolute" />
          <div className="w-[300px] h-[300px] rounded-full border-[2px] border-nw-blue/20 absolute bg-gradient-to-b from-nw-blue/5 to-transparent" />
          
          {/* Rotating Radial Lines */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_120s_linear_infinite]">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-[1500px] h-[1px] bg-nw-blue/20" style={{ transform: `rotate(${i * 15}deg)` }} />
            ))}
          </div>
        </div>

        {/* Central 3D Hub */}
        <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#ffffff] to-[#f0f4f8] rounded-[2rem] shadow-[0_30px_60px_rgba(14,158,217,0.3),_inset_0_4px_15px_rgba(255,255,255,1),_inset_0_-4px_15px_rgba(0,0,0,0.03)] border-[1.5px] border-white flex items-center justify-center animate-float" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
           <div className="drop-shadow-[0_15px_25px_rgba(14,158,217,0.4)] transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-6">
              <img 
                src="/favicon.svg" 
                alt="NextWave" 
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
           </div>
        </div>

        {/* Floating Concept Cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.55] sm:scale-75 md:scale-100">
          <div className="relative w-[800px] h-[800px]">
            {principles.map((p, i) => {
               // Distribute 7 cards evenly around the center
               const angleDeg = (i * 360) / 7 - 90; 
               const angleRad = angleDeg * (Math.PI / 180);
               const x = Math.cos(angleRad) * 45; // 45% radius from center
               const y = Math.sin(angleRad) * 45;
               
               return (
                 <div 
                   key={i}
                   className="absolute pointer-events-auto"
                   style={{
                     left: `calc(50% + ${x}%)`,
                     top: `calc(50% + ${y}%)`,
                     transform: 'translate(-50%, -50%)',
                     zIndex: 20
                   }}
                 >
                   <div 
                     className="flex items-center bg-white/95 backdrop-blur-xl rounded-2xl p-3 pr-8 shadow-[0_20px_40px_-10px_rgba(14,158,217,0.25)] border-[1.5px] border-white ring-1 ring-black/5 cursor-pointer transition-transform duration-300 hover:scale-110 animate-float"
                     style={{ animationDelay: `${i * 0.4}s` }}
                   >
                     {/* Glossy Icon Box */}
                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#0E9ED9] to-[#086a94] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(14,158,217,0.4)] mr-4 border border-white/20 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60" />
                       <div className="relative z-10 scale-90 md:scale-100 drop-shadow-md">
                         {p.icon}
                       </div>
                     </div>

                     {/* Text Block */}
                     <div className="flex flex-col items-start text-left">
                       <span className="text-nw-black font-extrabold text-[16px] md:text-[18px] leading-tight tracking-tight">
                         {p.title}
                       </span>
                       <span className="text-nw-black/60 text-[12px] md:text-[14px] font-semibold tracking-wide mt-0.5">
                         {p.subtitle}
                       </span>
                     </div>
                   </div>
                 </div>
               )
            })}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Principles;
