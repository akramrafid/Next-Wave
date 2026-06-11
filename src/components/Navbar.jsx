import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 transition-all duration-300 md:rounded-full border-b md:border px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-between md:w-11/12 max-w-5xl ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-nw-grey/50 shadow-md' : 'bg-transparent border-transparent'
      }`}>
        <div className="font-poppins font-extrabold text-lg sm:text-xl md:text-2xl tracking-tighter text-nw-black flex items-center shrink-0">
          <span className="text-nw-blue mr-1">≋</span> Next Wave
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-nw-black">
          <a href="#work" className="hover:text-nw-blue transition-colors">Work</a>
          <a href="#services" className="hover:text-nw-blue transition-colors">Services</a>
          <a href="#about" className="hover:text-nw-blue transition-colors">About</a>
          <a href="#contact" className="hover:text-nw-blue transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button className="bg-nw-blue text-white px-3 py-1.5 md:px-6 md:py-2 rounded-full font-sans font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(14,158,217,0.3)] text-xs sm:text-sm md:text-base whitespace-nowrap">
            Get a Proposal
          </button>
          
          <button 
            className="md:hidden text-nw-black hover:text-nw-blue transition-colors p-1 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-x-0 top-24 mx-auto w-[95%] z-40 transition-all duration-300 origin-top md:hidden ${
        isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border border-nw-grey shadow-lg rounded-2xl p-4 flex flex-col items-center gap-4 font-sans font-medium text-nw-black">
          <a href="#work" className="hover:text-nw-blue transition-colors py-2 w-full text-center" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#services" className="hover:text-nw-blue transition-colors py-2 w-full text-center" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" className="hover:text-nw-blue transition-colors py-2 w-full text-center" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" className="hover:text-nw-blue transition-colors py-2 w-full text-center" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
