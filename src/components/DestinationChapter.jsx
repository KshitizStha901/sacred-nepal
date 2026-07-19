'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from './motion/RevealText';
import RevealImage from './motion/RevealImage';
import FadeIn from './motion/FadeIn';
import ParallaxImage from './motion/ParallaxImage';

const EASE = [0.22, 1, 0.36, 1];
const pad = (n) => String(n).padStart(2, '0');

function ChapterLabel({ temple, tone = 'ink' }) {
  const color = tone === 'parchment' ? 'text-parchment/70' : 'text-ink-muted';
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-px" style={{ background: temple.color }} />
      <span className={`font-sans font-semibold tracking-[0.28em] uppercase ${color}`} style={{ fontSize: '0.65rem' }}>
        Chapter {pad(temple.chapterNumber)} — {temple.location}
      </span>
    </div>
  );
}

function MetaRow({ temple, tone = 'ink' }) {
  const color = tone === 'parchment' ? 'text-parchment/60' : 'text-ink-muted';
  return (
    <div className={`font-sans ${color} flex flex-wrap gap-x-3 gap-y-1`} style={{ fontSize: '0.78rem', letterSpacing: '0.02em' }}>
      <span>{temple.era}</span>
      <span aria-hidden="true">·</span>
      <span>{temple.elevation} elevation</span>
      <span aria-hidden="true">·</span>
      <span>{temple.coordinates}</span>
    </div>
  );
}

function DetailsDisclosure({ temple, tone = 'ink' }) {
  const [open, setOpen] = useState(false);
  const textColor = tone === 'parchment' ? 'text-parchment' : 'text-ink';
  const mutedColor = tone === 'parchment' ? 'text-parchment/55' : 'text-ink-muted';

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`font-sans font-semibold uppercase flex items-center gap-3 ${textColor}`}
        style={{ fontSize: '0.72rem', letterSpacing: '0.2em' }}
      >
        {open ? 'Close Story' : 'View Story'}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="inline-block"
          style={{ color: temple.color }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <ul className="pt-5 flex flex-col gap-2">
              {temple.details.map((d, i) => (
                <li key={i} className={`font-sans ${mutedColor}`} style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GhostNumber({ temple, align = 'left' }) {
  return (
    <span
      className="hidden lg:inline absolute font-display select-none pointer-events-none"
      style={{
        fontSize: 'clamp(6rem, 15vw, 12rem)',
        color: temple.color,
        opacity: 0.1,
        lineHeight: 1,
        top: '-2.5rem',
        [align]: '-1rem',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {pad(temple.chapterNumber)}
    </span>
  );
}

// ─── Variant: Two Column (Pashupatinath) ──────────────────────────────────
function TwoColumn({ temple, imageOnRight }) {
  return (
    <section id={`temple-${temple.chapterNumber - 1}`} className="relative bg-parchment px-6 lg:px-12 py-16 lg:py-32">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className={`relative ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <GhostNumber temple={temple} align={imageOnRight ? 'right' : 'left'} />
          <RevealImage className="relative aspect-[4/5] lg:aspect-[3/4] z-10">
            <Image
              src={temple.image}
              alt={`${temple.name} temple, ${temple.location}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </RevealImage>
        </div>

        <div className={`flex flex-col gap-6 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
          <ChapterLabel temple={temple} />
          <h3 className="font-display text-ink leading-[1.02]" style={{ fontSize: 'var(--font-title)' }}>
            <RevealText as="span" className="block">{temple.name}</RevealText>
          </h3>
          <FadeIn as="p" delay={0.1} className="font-display italic text-ink" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.45 }}>
            {temple.headline}
          </FadeIn>
          <FadeIn as="p" delay={0.18} className="font-sans text-ink" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            {temple.description}
          </FadeIn>
          <FadeIn delay={0.24}><MetaRow temple={temple} /></FadeIn>
          <FadeIn delay={0.3} className="mt-2"><DetailsDisclosure temple={temple} /></FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Variant: Cinematic Horizontal (Swayambhunath) ────────────────────────
function CinematicHorizontal({ temple }) {
  return (
    <section id={`temple-${temple.chapterNumber - 1}`} className="relative bg-parchment py-16 lg:py-32">
      <RevealImage className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src={temple.image}
          alt={`${temple.name}, ${temple.location}`}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(23,22,19,0.55) 0%, transparent 40%)' }}
        />
        <div className="absolute bottom-5 left-5 lg:bottom-8 lg:left-8 flex items-center gap-4">
          <div className="w-6 h-px" style={{ background: temple.color }} />
          <span
            className="font-sans font-semibold uppercase text-parchment"
            style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}
          >
            Chapter {pad(temple.chapterNumber)} — {temple.location}
          </span>
        </div>
      </RevealImage>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12 grid lg:grid-cols-2 gap-10 lg:gap-24">
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-ink leading-[1.02]" style={{ fontSize: 'var(--font-title)' }}>
            <RevealText as="span" className="block">{temple.name}</RevealText>
          </h3>
          <FadeIn as="p" delay={0.1} className="font-display italic text-ink" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.45 }}>
            {temple.headline}
          </FadeIn>
        </div>
        <div className="flex flex-col gap-6 lg:pt-2">
          <FadeIn as="p" delay={0.18} className="font-sans text-ink" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            {temple.description}
          </FadeIn>
          <FadeIn delay={0.24}><MetaRow temple={temple} /></FadeIn>
          <FadeIn delay={0.3}><DetailsDisclosure temple={temple} /></FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Variant: Sticky Parallax (Boudhanath) ────────────────────────────────
function StickyParallax({ temple }) {
  return (
    <section id={`temple-${temple.chapterNumber - 1}`} className="relative bg-parchment px-6 lg:px-12 py-16 lg:py-32">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="lg:sticky lg:top-24 self-start">
          <ParallaxImage className="aspect-[4/5] lg:aspect-[3/4]" range={50}>
            <Image
              src={temple.image}
              alt={`${temple.name}, ${temple.location}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </ParallaxImage>
        </div>

        <div className="flex flex-col gap-6 lg:py-16">
          <ChapterLabel temple={temple} />
          <h3 className="font-display text-ink leading-[1.02]" style={{ fontSize: 'var(--font-title)' }}>
            <RevealText as="span" className="block">{temple.name}</RevealText>
          </h3>
          <FadeIn as="p" delay={0.1} className="font-display italic text-ink" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.45 }}>
            {temple.headline}
          </FadeIn>
          <FadeIn as="p" delay={0.18} className="font-sans text-ink" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            {temple.description}
          </FadeIn>
          <FadeIn delay={0.24} className="font-display italic border-l-2 pl-5" style={{ borderColor: temple.color, fontSize: '1.05rem', color: temple.color, lineHeight: 1.7 }}>
            &ldquo;{temple.quote}&rdquo;
          </FadeIn>
          <FadeIn delay={0.3}><MetaRow temple={temple} /></FadeIn>
          <FadeIn delay={0.36}><DetailsDisclosure temple={temple} /></FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Variant: Dark Full Bleed (Muktinath) ─────────────────────────────────
function DarkFullBleed({ temple }) {
  return (
    <section
      id={`temple-${temple.chapterNumber - 1}`}
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100svh', background: '#171613' }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={temple.image}
          alt={`${temple.name} beneath the Annapurna range, Mustang`}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(23,22,19,0.9) 0%, rgba(23,22,19,0.55) 45%, rgba(23,22,19,0.25) 100%)' }}
      />

      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-xl flex flex-col gap-6">
          <ChapterLabel temple={temple} tone="parchment" />
          <h3 className="font-display text-parchment leading-[1.02]" style={{ fontSize: 'var(--font-title)' }}>
            <RevealText as="span" className="block">{temple.name}</RevealText>
          </h3>
          <FadeIn as="p" delay={0.1} className="font-display italic text-parchment" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.45 }}>
            {temple.headline}
          </FadeIn>
          <FadeIn as="p" delay={0.18} className="font-sans" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75, color: 'rgba(245,235,221,0.85)' }}>
            {temple.description}
          </FadeIn>
          <FadeIn delay={0.24}><MetaRow temple={temple} tone="parchment" /></FadeIn>
          <FadeIn delay={0.3}><DetailsDisclosure temple={temple} tone="parchment" /></FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Variant: Tall Vertical (Nyatapola) ───────────────────────────────────
function TallVertical({ temple }) {
  return (
    <section id={`temple-${temple.chapterNumber - 1}`} className="relative bg-parchment px-6 lg:px-12 py-16 lg:py-32">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.85fr,1.15fr] gap-12 lg:gap-20 items-start">
        <div className="relative order-2 lg:order-1">
          <RevealImage className="aspect-[3/4] lg:aspect-[3/5]">
            <Image
              src={temple.image}
              alt={`${temple.name}, the tallest pagoda in Nepal`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              quality={90}
              className="object-cover"
            />
          </RevealImage>
        </div>

        <div className="flex flex-col gap-6 order-1 lg:order-2 lg:pt-8">
          <ChapterLabel temple={temple} />
          <h3
            className="font-display text-ink leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 6rem)' }}
          >
            <RevealText as="span" className="block">{temple.name}</RevealText>
          </h3>
          <FadeIn as="p" delay={0.1} className="font-display italic text-ink" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.45 }}>
            {temple.headline}
          </FadeIn>
          <FadeIn as="p" delay={0.18} className="font-sans text-ink" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            {temple.description}
          </FadeIn>
          <FadeIn delay={0.24}><MetaRow temple={temple} /></FadeIn>
          <FadeIn delay={0.3}><DetailsDisclosure temple={temple} /></FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function DestinationChapter({ temple, index }) {
  switch (temple.layoutVariant) {
    case 'cinematicHorizontal':
      return <CinematicHorizontal temple={temple} />;
    case 'stickyParallax':
      return <StickyParallax temple={temple} />;
    case 'darkFullBleed':
      return <DarkFullBleed temple={temple} />;
    case 'tallVertical':
      return <TallVertical temple={temple} />;
    case 'twoColumn':
    default:
      return <TwoColumn temple={temple} imageOnRight={index % 2 === 1} />;
  }
}
