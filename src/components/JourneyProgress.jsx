'use client';

import { useEffect, useState } from 'react';
import { temples } from '@/lib/templeData';

export default function JourneyProgress() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = 0;
      temples.forEach((_, i) => {
        const el = document.getElementById(`temple-${i}`);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          current = i;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const journeyEl = document.getElementById('journey');
    if (!journeyEl || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.03,
    });
    observer.observe(journeyEl);
    return () => observer.disconnect();
  }, []);

  const goTo = (i) => {
    document.getElementById(`temple-${i}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      aria-label="Temple chapters"
    >
      <span
        className="font-sans font-semibold text-ink-muted"
        style={{ fontSize: '0.6rem', letterSpacing: '0.3em', writingMode: 'vertical-rl' }}
      >
        JOURNEY
      </span>
      <div className="w-px h-6" style={{ background: 'rgba(32,28,24,0.15)' }} />
      <div className="flex flex-col items-center gap-4">
        {temples.map((temple, i) => (
          <button
            key={temple.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${temple.name}`}
            aria-current={active === i ? 'true' : undefined}
            className="font-sans"
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.05em',
              fontWeight: active === i ? 700 : 500,
              color: active === i ? '#C95724' : 'rgba(32,28,24,0.32)',
              transition: 'color 0.3s ease',
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </button>
        ))}
      </div>
    </nav>
  );
}
