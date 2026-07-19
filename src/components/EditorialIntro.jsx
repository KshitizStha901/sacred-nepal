'use client';

import Image from 'next/image';
import RevealText from './motion/RevealText';
import RevealImage from './motion/RevealImage';
import FadeIn from './motion/FadeIn';

export default function EditorialIntro() {
  return (
    <section className="relative bg-parchment py-20 lg:py-40 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-ink leading-[0.98]" style={{ fontSize: 'var(--font-title)' }}>
              <RevealText as="span" className="block">
                The Journey
              </RevealText>
              <RevealText as="span" className="block text-saffron" delay={0.12}>
                Through Stone &amp; Spirit
              </RevealText>
            </h2>

            <FadeIn
              as="p"
              delay={0.25}
              className="font-sans text-ink mt-9 max-w-xl"
              style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}
            >
              Five sacred sites. Two faiths woven through one valley and one high desert. This is a
              slow passage through temples that have never stopped being used — where devotion
              isn&rsquo;t a memory on display, but a daily practice carried out in smoke, bell, and
              stone.
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <RevealImage delay={0.2} className="aspect-[3/4]">
              <Image
                src="/images/kumari.jpg"
                alt="The Kumari of Kathmandu, a young girl venerated as a living goddess"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={88}
                className="object-cover"
              />
            </RevealImage>

            <FadeIn delay={0.35} className="mt-5">
              <h3
                className="font-sans font-semibold uppercase text-ink-muted"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
              >
                The Kumari
              </h3>
              <p
                className="font-sans text-ink-muted mt-3"
                style={{ fontSize: '0.85rem', lineHeight: 1.7 }}
              >
                In Kathmandu the divine is not only carved — it is embodied. A young girl chosen as
                the Kumari is venerated as a living goddess, appearing at her window above Durbar
                Square while the city below carries on its ordinary day.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.1} className="mt-16 lg:mt-32 lg:ml-24 max-w-3xl">
          <blockquote
            className="font-display italic text-ink"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.25 }}
          >
            &ldquo;Here, faith is not confined to temples.
            <br />
            It moves through streets, mountains, smoke and prayer.&rdquo;
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
