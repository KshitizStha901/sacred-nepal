'use client';

import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * FadeIn — generic opacity + upward-drift reveal for paragraphs, CTAs, and
 * any block that doesn't need the line-masking treatment of RevealText.
 */
export default function FadeIn({
  children,
  className = '',
  style,
  delay = 0,
  duration = 0.9,
  y = 24,
  once = true,
  amount = 0.2,
  as = 'div',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
