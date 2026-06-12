import React, { useRef, useEffect, useState } from 'react';

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
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.992 6.012 17.5 2 12 2z"/>
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
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  }
];

/* SVG overlay that draws animated lines from center to each card */
const ConnectionLines = ({ containerSize, cardRefs, centerRef }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const calc = () => {
      if (!centerRef.current || !containerSize.w) return;
      const containerEl = centerRef.current.closest('.principles-diagram');
      if (!containerEl) return;
      const containerRect = containerEl.getBoundingClientRect();
      const centerRect = centerRef.current.getBoundingClientRect();
      const cx = centerRect.left - containerRect.left + centerRect.width / 2;
      const cy = centerRect.top  - containerRect.top  + centerRect.height / 2;

      const newLines = cardRefs.current
        .map((ref) => {
          if (!ref) return null;
          const r = ref.getBoundingClientRect();
          const tx = r.left - containerRect.left + r.width / 2;
          const ty = r.top  - containerRect.top  + r.height / 2;
          return { cx, cy, tx, ty };
        })
        .filter(Boolean);

      setLines(newLines);
    };

    // slight delay to let DOM settle
    const t = setTimeout(calc, 100);
    window.addEventListener('resize', calc);
    return () => { clearTimeout(t); window.removeEventListener('resize', calc); };
  }, [containerSize, cardRefs, centerRef]);

  if (!lines.length) return null;

  return (
    <svg
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
        overflow: 'visible',
      }}
    >
      <defs>
        {lines.map((_, i) => (
          <linearGradient key={i} id={`lineGrad${i}`}
            gradientUnits="userSpaceOnUse"
            x1={_.cx} y1={_.cy} x2={_.tx} y2={_.ty}>
            <stop offset="0%"   stopColor="#0E9ED9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#863bff" stopOpacity="0.6" />
          </linearGradient>
        ))}
      </defs>

      {lines.map((l, i) => {
        const len = Math.hypot(l.tx - l.cx, l.ty - l.cy);
        const dashLen = 8;
        const gapLen  = 6;
        const period  = (dashLen + gapLen) * 2;
        const dur     = `${1.8 + i * 0.25}s`;

        return (
          <g key={i}>
            {/* Static faint base line */}
            <line
              x1={l.cx} y1={l.cy} x2={l.tx} y2={l.ty}
              stroke={`url(#lineGrad${i})`}
              strokeWidth="1.5"
              strokeOpacity="0.18"
            />

            {/* Animated dashed line (marching ants) */}
            <line
              x1={l.cx} y1={l.cy} x2={l.tx} y2={l.ty}
              stroke={`url(#lineGrad${i})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${dashLen} ${gapLen}`}
              strokeOpacity="0.85"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={period}
                to="0"
                dur={dur}
                repeatCount="indefinite"
              />
            </line>

            {/* Traveling glow dot from center → card */}
            <circle r="4" fill="#0E9ED9" opacity="0.9"
              filter="url(#dotGlow)">
              <animateMotion
                dur={dur}
                repeatCount="indefinite"
                path={`M ${l.cx} ${l.cy} L ${l.tx} ${l.ty}`}
              />
              <animate attributeName="opacity"
                values="0;1;1;0" keyTimes="0;0.1;0.85;1"
                dur={dur} repeatCount="indefinite" />
              <animate attributeName="r"
                values="3;5;3" keyTimes="0;0.5;1"
                dur={dur} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* Glow filter for the dot */}
      <defs>
        <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

const Principles = () => {
  const centerRef = useRef(null);
  const cardRefs  = useRef([]);
  const wrapRef   = useRef(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) {
        setContainerSize({ w: e.contentRect.width, h: e.contentRect.height });
      }
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="bg-[#f2f4f8] py-24 px-4 md:px-8 font-sans flex flex-col items-center">

      {/* Top Header Card */}
      <div className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-12 md:p-16 relative flex flex-col items-center text-center overflow-visible z-20">
        <div className="absolute top-0 -translate-y-1/2 bg-white px-6 py-2.5 rounded-full text-nw-black font-bold text-sm shadow-[0_15px_35px_rgba(14,158,217,0.25)] border-[1.5px] border-nw-blue/10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nw-blue animate-pulse"></span>
          NextWave
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mt-2 text-[#b0b0b0]">
          Our core guiding <br />
          <span className="text-nw-black">principles &amp; values!</span>
        </h2>
      </div>

      {/* Bottom Main Card */}
      <div
        ref={wrapRef}
        className="principles-diagram w-full max-w-[1200px] bg-white rounded-[40px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center justify-center min-h-[750px] md:min-h-[900px] mt-8 z-10"
      >
        {/* SVG connection lines — rendered behind everything */}
        <ConnectionLines
          containerSize={containerSize}
          cardRefs={cardRefs}
          centerRef={centerRef}
        />

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
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_120s_linear_infinite]">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-[1500px] h-[1px] bg-nw-blue/20" style={{ transform: `rotate(${i * 15}deg)` }} />
            ))}
          </div>
        </div>

        {/* Central Logo Hub */}
        <div
          ref={centerRef}
          className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#ffffff] to-[#f0f4f8] rounded-[2rem] flex items-center justify-center animate-float"
          style={{
            boxShadow: '0 30px 60px rgba(14,158,217,0.3), inset 0 4px 15px rgba(255,255,255,1), inset 0 -4px 15px rgba(0,0,0,0.03)',
            border: '1.5px solid white',
          }}
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-[2rem] border-2 border-nw-blue/30 animate-ping"
            style={{ animationDuration: '2.5s' }} />
          <div className="absolute inset-[-8px] rounded-[2.5rem] border border-nw-blue/10" />

          <div className="drop-shadow-[0_15px_25px_rgba(14,158,217,0.4)] transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-6">
            <img
              src="/favicon.png"
              alt="NextWave Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
          </div>

          {/* Label below logo */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              color: '#0E9ED9',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Next Wave
          </div>
        </div>

        {/* Floating Principle Cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.55] sm:scale-75 md:scale-100" style={{ zIndex: 15 }}>
          <div className="relative w-[800px] h-[800px]">
            {principles.map((p, i) => {
              const angleDeg = (i * 360) / 7 - 90;
              const angleRad = angleDeg * (Math.PI / 180);
              const x = Math.cos(angleRad) * 45;
              const y = Math.sin(angleRad) * 45;

              return (
                <div
                  key={i}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top:  `calc(50% + ${y}%)`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 20,
                  }}
                >
                  <div
                    ref={el => cardRefs.current[i] = el}
                    className="flex items-center bg-white/95 backdrop-blur-xl rounded-2xl p-3 pr-8 cursor-pointer transition-all duration-300 hover:scale-110 animate-float"
                    style={{
                      boxShadow: '0 20px 40px -10px rgba(14,158,217,0.25)',
                      border: '1.5px solid white',
                      animationDelay: `${i * 0.4}s`,
                      ring: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#0E9ED9] to-[#086a94] text-white flex items-center justify-center mr-4 border border-white/20 relative overflow-hidden"
                      style={{ boxShadow: '0 8px 20px rgba(14,158,217,0.4)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60" />
                      <div className="relative z-10 scale-90 md:scale-100 drop-shadow-md">
                        {p.icon}
                      </div>
                    </div>
                    {/* Text */}
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
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Principles;
