import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Principles from '../components/Principles';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import CTA from '../components/CTA';

const Home = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    return () => {
      try {
        // Kill all ScrollTriggers with revert=true to undo pin spacers and inline styles
        ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
        // Clear any cached scroll values
        ScrollTrigger.clearScrollMemory();
      } catch (e) {
        // Ignore - DOM elements may already be unmounted
      }
      
      try {
        // Manually remove any leftover GSAP pin-spacer elements
        document.querySelectorAll('.pin-spacer').forEach(el => {
          const child = el.children[0];
          if (child) {
            child.removeAttribute('style');
            el.parentNode?.insertBefore(child, el);
          }
          el.remove();
        });
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Clients />
      <Principles />
      <Roadmap />
      <WhyChooseUs />
      <Features />
      <FAQ />
      <Philosophy />
      <Protocol />
      <CTA />
    </>
  );
};

export default Home;
