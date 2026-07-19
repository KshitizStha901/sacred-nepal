'use client';

import RevealText from './RevealText';
import FadeIn from './FadeIn';

/**
 * SectionHeading — the recurring eyebrow + display heading + rule pattern
 * used to open EditorialIntro, LivingTradition, SacredVisions, and
 * HimalayaFinale. `title` accepts a string or an array of lines, each
 * revealed on its own stagger.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  tone = 'ink',
  className = '',
}) {
  const lines = Array.isArray(title) ? title : [title];
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const textColor = tone === 'parchment' ? 'text-parchment' : 'text-ink';
  const mutedColor = tone === 'parchment' ? 'text-parchment/60' : 'text-ink-muted';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <FadeIn
          as="p"
          className={`font-sans font-semibold tracking-[0.3em] uppercase text-xs mb-5 ${mutedColor}`}
        >
          {eyebrow}
        </FadeIn>
      )}
      <h2 className={`font-display leading-[1.05] ${textColor}`} style={{ fontSize: 'var(--font-title)' }}>
        {lines.map((line, i) => (
          <RevealText key={i} as="span" delay={i * 0.12} className="block">
            {line}
          </RevealText>
        ))}
      </h2>
      <div className={`rule mt-8 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
