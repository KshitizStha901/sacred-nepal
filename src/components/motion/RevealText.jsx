'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * RevealText — masks text inside an overflow-hidden container and slides it
 * upward into view on scroll. Used for headings, eyebrows, and single lines
 * of editorial type.
 *
 * The inner text is transformed (translateY) out of the wrapper's own box
 * before it reveals, so `whileInView` on that inner element would use the
 * overflow-hidden wrapper as its intersection root and could never register
 * as visible. Instead we watch the stable outer wrapper with `useInView`
 * and drive the inner animation from that.
 */
export default function RevealText({
  children,
  as: Tag = 'div',
  className = '',
  style,
  delay = 0,
  duration = 1,
  once = true,
  amount = 0.3,
  ...rest
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once, amount });

  if (reduceMotion) {
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className} style={{ overflow: 'hidden', display: 'block', ...style }} {...rest}>
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
