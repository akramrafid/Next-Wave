import React from 'react';
import HomeScrollManager from '@/components/HomeScrollManager';
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

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      <HomeScrollManager />

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
