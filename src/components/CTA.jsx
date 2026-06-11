import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-nw-white">
      <div className="max-w-6xl mx-auto bg-nw-blue rounded-[2.5rem] p-12 md:p-24 text-center flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative Wave */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0,60 Q25,30 50,60 T100,60" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <h2 className="relative z-10 font-poppins font-extrabold text-4xl md:text-6xl text-white mb-6">
          Ready to ride the next wave?
        </h2>
        <p className="relative z-10 font-sans text-xl text-white/90 mb-12 max-w-2xl">
          Let's build something that moves.
        </p>
        <button className="relative z-10 bg-white text-nw-blue px-10 py-5 rounded-full font-poppins font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          Get a Proposal
        </button>
      </div>
    </section>
  );
};

export default CTA;
