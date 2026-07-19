'use client';

import Image from 'next/image';
import { temples } from '@/lib/templeData';
import SectionHeading from './motion/SectionHeading';
import RevealImage from './motion/RevealImage';
import FadeIn from './motion/FadeIn';

// Asymmetric spans per temple, applied at the lg breakpoint. Below lg every
// item falls back to a single stacked column at aspect-[4/5].
const spans = [
  'lg:col-span-4 lg:row-span-2', // Pashupatinath — large landscape
  'lg:col-span-2 lg:row-span-3', // Swayambhunath — tall portrait
  'lg:col-span-2 lg:row-span-2', // Boudhanath — detail
  'lg:col-span-2 lg:row-span-2', // Muktinath — detail
  'lg:col-span-4 lg:row-span-2', // Nyatapola — landscape
];

export default function SacredVisions() {
  return (
    <section id="visions" className="relative bg-parchment px-6 lg:px-12 py-20 lg:py-40">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading eyebrow="Visual Showcase" title={['Sacred', 'Visions']} />

        <FadeIn delay={0.2} className="max-w-lg mx-auto text-center mt-8">
          <p className="font-sans text-ink-muted" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            Five temples, five moments held in light and stone.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-flow-row-dense lg:auto-rows-[160px] gap-6 lg:gap-7 mt-10 lg:mt-24">
          {temples.map((temple, i) => (
            <RevealImage
              key={temple.id}
              delay={i * 0.06}
              className={`group aspect-[4/5] lg:aspect-auto lg:h-full ${spans[i]}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <Image
                  src={temple.galleryImage || temple.image}
                  alt={`${temple.name}, ${temple.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  quality={88}
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(23,22,19,0.78) 0%, rgba(23,22,19,0.2) 45%, transparent 70%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <span
                  className="font-sans uppercase"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(245,235,221,0.7)' }}
                >
                  {temple.location.split(',')[0]} · {temple.era}
                </span>
                <h4 className="font-display text-parchment mt-1" style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
                  {temple.name}
                </h4>
                <div className="mt-2 overflow-hidden h-0 group-hover:h-5 transition-all duration-300 ease-out">
                  <span
                    className="font-sans uppercase"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(245,235,221,0.9)' }}
                  >
                    View Story →
                  </span>
                </div>
              </div>
            </RevealImage>
          ))}
        </div>
      </div>
    </section>
  );
}
