'use client';

import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EditorialIntro from '@/components/EditorialIntro';
import Interstitial from '@/components/Interstitial';
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
        <Interstitial
          image="/images/hero-patan.webp"
          alt="Patan Durbar Square at sunset, its tiered pagoda roofs crowded together above the square"
          eyebrow="Patan Durbar Square"
          caption="Three rival cities once faced each other across this valley, each building temples to outdo the others. The competition is over; the rooftops remain."
        />
        <JourneySection />
        <LivingTradition />
        <Interstitial
          image="/images/lake-mountain.webp"
          alt="Snow-covered Himalayan peaks at first light above a turquoise glacial lake"
          eyebrow="Beyond the Valley"
          caption="Past the last shrine the air thins and the path keeps climbing — to where the mountains stop being scenery and become the destination."
        />
        <SacredVisions />
        <HimalayaFinale />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
