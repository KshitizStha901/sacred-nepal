'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// The <h1> runs at leading 0.92, which is tighter than Instrument Serif's
// descenders, so an unpadded overflow:hidden mask cuts the tail off the "p" in
// "Nepal". Same fix as RevealText: pad the mask's bottom edge, cancel it with a
// negative margin so the layout is unchanged, and start the slide below 100% so
// the text is still fully hidden inside the now-taller box.
const HERO_DESCENDER_ROOM = '0.28em';
const HERO_HIDDEN_Y = '145%';
const HERO_LINE_MASK = {
  overflow: 'hidden',
  paddingBottom: HERO_DESCENDER_ROOM,
  marginBottom: `-${HERO_DESCENDER_ROOM}`,
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="noise relative w-full flex flex-col justify-end overflow-hidden"
      style={{ minHeight: '100svh', background: '#171613' }}
    >
      {/* Background photo — slow settle from 1.07 -> 1 */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduceMotion ? false : { scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: EASE }}
      >
        <Image
          src="/images/hero-pokhara.webp"
          alt="Terraced hillsides and prayer-flag-strung rooftops above the Kathmandu Valley at first light"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Dark cinematic overlay, heaviest where the text sits */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(23,22,19,0.12) 0%, rgba(23,22,19,0.32) 55%, rgba(23,22,19,0.82) 100%)',
        }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      />

      {/* Content — asymmetric, anchored to the lower third */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-14 lg:pb-16 pt-24 lg:pt-28">
        <div className="max-w-3xl">
          <div style={{ overflow: 'hidden' }}>
            <motion.p
              initial={reduceMotion ? false : { y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'rgba(245,235,221,0.85)', marginBottom: '1.25rem' }}
            >
              An Immersive Journey Through the Himalayas
            </motion.p>
          </div>

          <h1
            className="font-display text-parchment"
            style={{ fontSize: 'var(--font-hero)', lineHeight: 0.92 }}
            aria-label="Sacred Nepal"
          >
            <div style={HERO_LINE_MASK} aria-hidden="true">
              <motion.span
                style={{ display: 'block' }}
                initial={reduceMotion ? false : { y: HERO_HIDDEN_Y }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
              >
                Sacred
              </motion.span>
            </div>
            <div style={HERO_LINE_MASK} aria-hidden="true">
              <motion.span
                style={{ display: 'block' }}
                initial={reduceMotion ? false : { y: HERO_HIDDEN_Y }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.62, ease: EASE }}
              >
                Nepal
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE }}
            className="font-display italic"
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.65rem)',
              color: 'rgba(245,235,221,0.92)',
              marginTop: '1.25rem',
              lineHeight: 1.4,
              maxWidth: '32rem',
            }}
          >
            Where mountains become gods, and every stone carries a prayer.
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: EASE }}
            className="font-sans"
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,235,221,0.72)',
              marginTop: '1rem',
              maxWidth: '30rem',
            }}
          >
            An immersive journey through Nepal&rsquo;s ancient temples, living rituals, and Himalayan landscapes.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: EASE }}
            style={{ marginTop: '1.75rem' }}
          >
            <button
              className="btn-primary"
              onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin the Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="hidden sm:flex absolute bottom-8 right-6 lg:right-12 z-20 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span
          className="font-sans"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,235,221,0.6)' }}
        >
          Scroll
        </span>
        <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(245,235,221,0.2)' }}>
          <div
            className="scroll-dot absolute top-0 left-0 w-full h-6"
            style={{ background: 'linear-gradient(to bottom, transparent, #C95724)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
