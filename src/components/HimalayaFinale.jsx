'use client';

import Image from 'next/image';
import ParallaxImage from './motion/ParallaxImage';
import RevealText from './motion/RevealText';
import FadeIn from './motion/FadeIn';

export default function HimalayaFinale() {
  return (
    <section
      id="himalaya"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: '92svh', background: '#171613' }}
    >
      <div className="absolute inset-0">
        <ParallaxImage className="w-full h-full" range={70}>
          <Image
            src="/images/himalaya-sunset.webp"
            alt="Sunset light over the snow-capped Himalayan range"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </ParallaxImage>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(23,22,19,0.5) 0%, rgba(23,22,19,0.3) 40%, rgba(23,22,19,0.78) 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-24">
        <FadeIn
          as="p"
          className="font-sans font-semibold uppercase"
          style={{ fontSize: '0.72rem', letterSpacing: '0.32em', color: 'rgba(245,235,221,0.75)', marginBottom: '2rem' }}
        >
          The Eternal Dawn
        </FadeIn>

        <h2 className="font-display text-parchment leading-[1.02]" style={{ fontSize: 'var(--font-title)' }}>
          <RevealText as="span" className="block">
            As the Himalayas
          </RevealText>
          <RevealText as="span" className="block" delay={0.12}>
            Call You Home
          </RevealText>
        </h2>

        <FadeIn
          delay={0.25}
          as="p"
          className="font-display italic"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(245,235,221,0.85)',
            lineHeight: 1.7,
            marginTop: '2rem',
            maxWidth: '38rem',
            marginInline: 'auto',
          }}
        >
          Every sunrise here is a new prayer, every stone a testament. The mountains are not an
          obstacle — they are a gateway, and they have been waiting a long time.
        </FadeIn>
      </div>
    </section>
  );
}
