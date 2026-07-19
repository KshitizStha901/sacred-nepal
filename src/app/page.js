'use client';

import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EditorialIntro from '@/components/EditorialIntro';
import JourneySection from '@/components/JourneySection';
import LivingTradition from '@/components/LivingTradition';
import SacredVisions from '@/components/SacredVisions';
import HimalayaFinale from '@/components/HimalayaFinale';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  useLenis(true);

  // Respect deep links / hash on load once content is mounted
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <EditorialIntro />
        <JourneySection />
        <LivingTradition />
        <SacredVisions />
        <HimalayaFinale />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
