import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = revealRef.current.querySelectorAll('.reveal-word');
      
      gsap.fromTo(words, 
        { opacity: 0, y: 20 },
        {
          opacity: 1, 
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const contrastStatement = "momentum that converts.";
  const contrastWords = contrastStatement.split(' ');

  return (
    <section ref={sectionRef} className="relative w-full py-40 px-8 md:px-16 bg-nw-black overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550757750-4ce187a65014?q=80&w=2000&auto=format&fit=crop)' }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="font-sans text-nw-grey text-xl md:text-2xl mb-8">
          Most agencies focus on: impressions and vanity metrics.
        </p>
        
        <div className="flex flex-col items-center">
          <p className="font-sans text-nw-white text-xl md:text-2xl mb-4">
            We focus on:
          </p>
          <h2 ref={revealRef} className="font-poppins font-extrabold italic text-4xl md:text-6xl lg:text-8xl leading-tight text-nw-blue flex flex-wrap justify-center gap-x-4 gap-y-2">
            {contrastWords.map((word, i) => (
              <span key={i} className="reveal-word inline-block">{word}</span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
