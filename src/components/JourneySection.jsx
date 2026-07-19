'use client';

import { temples } from '@/lib/templeData';
import DestinationChapter from './DestinationChapter';
import JourneyProgress from './JourneyProgress';
import SectionHeading from './motion/SectionHeading';
import FadeIn from './motion/FadeIn';

export default function JourneySection() {
  return (
    <div id="journey" className="relative bg-parchment">
      <JourneyProgress />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-14 lg:pt-36 pb-6">
        <SectionHeading eyebrow="Five Sacred Sites" title={['The Sacred', 'Journey']} />
        <FadeIn delay={0.2} className="max-w-xl mx-auto text-center mt-8">
          <p className="font-sans text-ink-muted" style={{ fontSize: 'var(--font-body)', lineHeight: 1.75 }}>
            Each temple holds centuries of devotion within its walls. Scroll to walk through the five
            most revered shrines of the Himalayas, from the cremation ghats of Kathmandu to the
            wind-scoured heights of Mustang.
          </p>
        </FadeIn>
      </div>

      {temples.map((temple, i) => (
        <DestinationChapter key={temple.id} temple={temple} index={i} />
      ))}
    </div>
  );
}
