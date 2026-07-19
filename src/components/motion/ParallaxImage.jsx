'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * ParallaxImage — pans its children (typically a Next <Image fill />)
 * slightly vertically as the section scrolls through the viewport.
 * Transform-only, disabled under prefers-reduced-motion and below 768px.
 */
export default function ParallaxImage({ children, className = '', range = 40 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = () => setEnabled(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const activeRange = reduceMotion || !enabled ? 0 : range;
  const y = useTransform(scrollYProgress, [0, 1], [-activeRange, activeRange]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-x-0" style={{ y, top: '-10%', height: '120%' }}>
        {children}
      </motion.div>
    </div>
  );
}
