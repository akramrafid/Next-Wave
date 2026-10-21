'use client';

import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import SelectedWork from '@/components/SelectedWork';
import Services from '@/components/Services';
import Principles from '@/components/Principles';
import Industries from '@/components/Industries';
import Clients from '@/components/Clients';
import Team from '@/components/Team';
import Insights from '@/components/Insights';
import CTA from '@/components/CTA';

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      try {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
        ScrollTrigger.clearScrollMemory();
      } catch (e) {}
      
      try {
        document.querySelectorAll('.pin-spacer').forEach(el => {
          const child = el.children[0];
          if (child) {
            child.removeAttribute('style');
            el.parentNode?.insertBefore(child, el);
          }
          el.remove();
        });
      } catch (e) {}
    };
  }, []);

  return (
    <>
      {/* 1. Understand NextWave */}
      <Hero />

      {/* 2. Positioning & Vision */}
      <Philosophy />

      {/* 3. See the Work */}
      <SelectedWork />

      {/* 4. Understand the Capabilities (The 360 Spectrum) */}
      <Services />

      {/* 5. How We Work (Strategy · Emotion · Execution) */}
      <Principles />

      {/* 6. Where We Work & Global Ambition */}
      <Industries />

      {/* 7. Trust NextWave (Clients & Partners + Separate Founder Experience) */}
      <Clients />

      {/* 8. Meet the Founder (The Thinking Behind NextWave & Leadership Quote) */}
      <Team />

      {/* 9. Thinking Beyond the Campaign (Insights) */}
      <Insights />

      {/* 10. Start a Conversation */}
      <CTA />
    </>
  );
}
