import React from 'react';

const allLogos = [
  "Asset 1.png", "Asset 2.png", "Asset 3.png", "Asset 4.png", "Asset 5.png",
  "Asset 6.png", "Asset 7.png", "Asset 8.png", "Asset 9.png", "Asset 10.png",
  "Asset 11.png", "Asset 14.png", "Asset 15.png", "Asset 16.png", "Asset 17.png",
  "Asset 18.png", "Asset 19.png", "Asset 20.png", "Asset 21.png", "Asset 22.png",
  "Asset 23.png", "Asset 24.png", "Asset 25.png", "Asset 26.png", "Asset 27.png",
  "Asset 28.png", "Asset 29.png", "Asset 30.png", "Asset 31.png", "Asset 32.png",
  "Asset 33.png", "Asset 34.png", "Asset 35.png", "Asset 36.png", "Asset 37.png",
  "Asset 38.png", "Asset 39.png"
];

// Split into two rows for the double marquee effect
const row1 = allLogos.slice(0, 19);
const row2 = allLogos.slice(19);

const Clients = () => {
  return (
    <section className="bg-nw-light w-full py-24 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter text-nw-black font-sans font-bold" style={{ letterSpacing: '-0.04em' }}>
          Our Clients
        </h2>
        <p className="text-nw-black/60 mt-4 text-lg max-w-2xl mx-auto">
          We are proud to have collaborated with these amazing brands.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-10 overflow-hidden">
        
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-nw-light to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-nw-light to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Moving Left) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 lg:gap-16 items-center shrink-0 pr-12 lg:pr-16">
              {row1.map((logo, idx) => (
                <div key={idx} className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={`/Client's Logo/${logo}`} 
                    alt={`Client ${idx + 1}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 lg:gap-16 items-center shrink-0 pr-12 lg:pr-16">
              {row2.map((logo, idx) => (
                <div key={idx} className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={`/Client's Logo/${logo}`} 
                    alt={`Client ${idx + 19}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
