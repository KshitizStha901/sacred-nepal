'use client';

import Image from 'next/image';
import ParallaxImage from './motion/ParallaxImage';
import FadeIn from './motion/FadeIn';

/**
 * Interstitial — a full-bleed photographic breather placed between the
 * parchment-toned reading sections, to reset the eye before the next block
 * of editorial content. Caption sits bottom-left over a foot gradient.
 *
 * Note the wrapper <div> around ParallaxImage: ParallaxImage hardcodes
 * `relative` in its own className, so the positioning has to live on a
 * parent rather than being passed through (see CLAUDE.md).
 */
export default function Interstitial({ image, alt, eyebrow, caption, height = '66svh' }) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: height, background: '#171613' }}>
      <div className="absolute inset-0">
        <ParallaxImage className="w-full h-full" range={60}>
          <Image src={image} alt={alt} fill sizes="100vw" quality={88} className="object-cover" />
        </ParallaxImage>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(23,22,19,0.82) 0%, rgba(23,22,19,0.25) 45%, rgba(23,22,19,0.05) 75%)',
        }}
      />

      <div
        className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-end"
        style={{ minHeight: height }}
      >
        <FadeIn className="pb-12 lg:pb-20 max-w-xl">
          <span
            className="font-sans font-semibold uppercase block"
            style={{ fontSize: '0.68rem', letterSpacing: '0.28em', color: 'rgba(245,235,221,0.72)' }}
          >
            {eyebrow}
          </span>
          <p
            className="font-display italic text-parchment mt-4"
            style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)', lineHeight: 1.5 }}
          >
            {caption}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
