'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * RevealImage — wraps an image (typically a Next <Image fill />) and reveals
 * it with a clip-path mask plus a slow scale settle (1.06 -> 1). The caller
 * controls size/aspect via `className` on the outer wrapper.
 *
 * Watches the stable outer wrapper with `useInView` rather than putting
 * `whileInView` on the animated inner layers — see RevealText for why that
 * matters when the wrapper itself is `overflow: hidden`.
 */
export default function RevealImage({
  children,
  className = '',
  delay = 0,
  duration = 1.3,
  once = true,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once, amount });

  const clipHidden = 'inset(9% 9% 9% 9%)';
  const clipVisible = 'inset(0% 0% 0% 0%)';

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { clipPath: clipHidden }}
        animate={reduceMotion ? undefined : { clipPath: inView ? clipVisible : clipHidden }}
        transition={{ duration, delay, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={reduceMotion ? undefined : { scale: inView ? 1 : 1.06 }}
          transition={{ duration: duration + 0.5, delay, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
