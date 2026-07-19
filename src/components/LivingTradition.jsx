'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { stats } from '@/lib/templeData';
import SectionHeading from './motion/SectionHeading';
import FadeIn from './motion/FadeIn';
import RevealImage from './motion/RevealImage';

const items = [
  {
    image: '/images/boudhanath-2.webp',
    label: 'Prayer Flags',
    caption: 'Strung from stupa to rooftop, each flag carries a mantra outward on the wind.',
  },
  {
    image: '/images/pashupatinath.webp',
    label: 'Butter Lamps & Fire',
    caption: 'Flame as offering — lit at dawn, tended by hand, rarely left to go out.',
  },
  {
    image: '/images/swayambhunath.webp',
    label: 'The Watching Eyes',
    caption: 'Painted onto every stupa face, the Buddha’s eyes look toward all four directions at once.',
  },
  {
    image: '/images/nyatapola.jpg',
    label: 'Guardian Carvings',
    caption: 'Stone wrestlers and deities line the stairways, each said to outmatch the guardian below.',
  },
];

function SlowMandala({ size = 240 }) {
  const reduceMotion = useReducedMotion();
  const petals = 16;
  const r = size * 0.38;

  return (
    <svg width={size} height={size} viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`} aria-hidden="true">
      <circle cx="0" cy="0" r={size * 0.47} stroke="rgba(196,154,86,0.25)" strokeWidth="0.75" fill="none" />
      <motion.g
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: petals }).map((_, i) => {
          const angle = (i / petals) * Math.PI * 2;
          const x = (Math.cos(angle) * r).toFixed(2);
          const y = (Math.sin(angle) * r).toFixed(2);
          const cx = (Math.cos(angle) * r * 0.55).toFixed(2);
          const cy = (Math.sin(angle) * r * 0.55).toFixed(2);
          return (
            <g key={i}>
              <path d={`M 0 0 Q ${cx} ${cy} ${x} ${y}`} stroke="rgba(201,87,36,0.35)" strokeWidth="0.75" fill="none" />
              <circle cx={x} cy={y} r="2" fill="rgba(196,154,86,0.5)" />
            </g>
          );
        })}
      </motion.g>
      <circle cx="0" cy="0" r="10" fill="rgba(196,154,86,0.12)" stroke="rgba(196,154,86,0.4)" strokeWidth="0.75" />
      <circle cx="0" cy="0" r="4" fill="#C95724" />
    </svg>
  );
}

function AnimatedStat({ value, suffix, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        if (reduceMotion) {
          setDisplay(value);
          return;
        }

        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.floor(eased * value));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, reduceMotion]);

  return (
    <div ref={ref} className="text-center px-6 py-6">
      <div className="font-display text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        {display.toLocaleString()}
        {suffix}
      </div>
      <div
        className="font-sans text-ink-muted uppercase mt-2"
        style={{ fontSize: '0.65rem', letterSpacing: '0.15em', maxWidth: '14rem', marginInline: 'auto' }}
      >
        {label}
      </div>
    </div>
  );
}

export default function LivingTradition() {
  return (
    <section id="tradition" className="relative bg-sand/60 px-6 lg:px-12 py-20 lg:py-40">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-10 lg:gap-8">
          <SectionHeading eyebrow="Cultural Heritage" title={['The Living', 'Tradition']} align="left" className="lg:max-w-xl" />
          <div className="flex-shrink-0 self-center">
            <SlowMandala />
          </div>
        </div>

        <FadeIn delay={0.15} className="max-w-2xl mt-10">
          <p className="font-sans text-ink" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            Faith in Nepal is not kept behind glass. It is lit, spun, carried, and worn into the fabric
            of daily life — in the flags that fray in the wind, the lamps that never quite go dark, and
            the eyes carved into stone that have watched the valley for centuries.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-14 lg:mt-28">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08} className={i % 2 === 1 ? 'lg:mt-16' : ''}>
              <RevealImage className="aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </RevealImage>
              <div className="mt-5">
                <h4 className="font-display text-ink" style={{ fontSize: '1.2rem' }}>
                  {item.label}
                </h4>
                <p className="font-sans text-ink-muted mt-2" style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>
                  {item.caption}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div
          className="mt-16 lg:mt-32 pt-14 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/10"
          style={{ borderTop: '1px solid rgba(32,28,24,0.1)' }}
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
