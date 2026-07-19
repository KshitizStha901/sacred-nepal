'use client';

import RevealText from './motion/RevealText';
import FadeIn from './motion/FadeIn';

export default function FinalCTA() {
  return (
    <section className="relative bg-parchment px-6 lg:px-12 py-20 lg:py-40 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-ink leading-[1.05]" style={{ fontSize: 'var(--font-title)' }}>
          <RevealText as="span" className="block">
            The Journey
          </RevealText>
          <RevealText as="span" className="block" delay={0.12}>
            Doesn&rsquo;t End Here.
          </RevealText>
        </h2>

        <FadeIn
          delay={0.25}
          as="p"
          className="font-display italic text-ink-muted"
          style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: 1.6, marginTop: '1.75rem' }}
        >
          Some places are visited. Others stay with you.
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Nepal
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Return to the Beginning
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
