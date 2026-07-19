'use client';

import { useEffect, useRef } from 'react';

/**
 * useLenis — initializes Lenis smooth scroll with its own requestAnimationFrame
 * loop. Call once at the root level (e.g., in page.js).
 *
 * @param {boolean} enabled — set to false to disable
 * @returns {{ lenis: Lenis | null }}
 */
export function useLenis(enabled = true) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    let lenis;
    let rafId;

    const init = async () => {
      const Lenis = (await import('lenis')).default;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
        infinite: false,
      });

      lenisRef.current = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  return { lenis: lenisRef.current };
}

/**
 * Scroll to a target element
 * @param {string} selector — CSS selector of target
 * @param {number} offset — pixel offset from top
 */
export function scrollTo(selector, offset = 0) {
  const target = document.querySelector(selector);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
