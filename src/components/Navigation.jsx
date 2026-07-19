'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/templeData';

const EASE = [0.22, 1, 0.36, 1];
const SECTION_IDS = ['hero', 'journey', 'tradition', 'visions', 'himalaya'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      for (const id of [...SECTION_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const lightText = !scrolled && !menuOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-500"
        style={{
          background: scrolled ? 'rgba(245,235,221,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(117,54,31,0.14)' : '1px solid transparent',
        }}
        aria-hidden={menuOpen || undefined}
        inert={menuOpen ? '' : undefined}
      >
        <nav
          className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between"
          style={{ height: scrolled ? '72px' : '92px', transition: 'height 0.4s ' + EASE.join(',') }}
          aria-label="Primary"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display leading-none"
            style={{
              fontSize: '1.15rem',
              letterSpacing: '0.08em',
              color: lightText ? '#F5EBDD' : '#201C18',
              transition: 'color 0.4s ease',
            }}
          >
            SACRED NEPAL
          </button>

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-9">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="font-sans font-medium relative"
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: lightText
                        ? 'rgba(245,235,221,0.85)'
                        : activeSection === item.href.slice(1)
                          ? '#C95724'
                          : 'rgba(32,28,24,0.65)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMenuOpen(true)}
              className="font-sans font-semibold flex items-center gap-3"
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: lightText ? '#F5EBDD' : '#201C18',
              }}
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              Menu
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="block w-4 h-px" style={{ background: lightText ? '#F5EBDD' : '#201C18' }} />
                <span className="block w-4 h-px" style={{ background: lightText ? '#F5EBDD' : '#201C18' }} />
              </span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-px" style={{ background: lightText ? '#F5EBDD' : '#201C18' }} />
            <span className="block w-6 h-px" style={{ background: lightText ? '#F5EBDD' : '#201C18' }} />
          </button>
        </nav>
      </header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: '#F5EBDD' }}
            role="dialog"
            aria-modal="true"
          >
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex items-center justify-between h-[92px]">
              <span className="font-display" style={{ fontSize: '1.15rem', letterSpacing: '0.08em', color: '#201C18' }}>
                SACRED NEPAL
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="relative w-11 h-11 flex items-center justify-center -mr-2"
              >
                <span className="absolute w-6 h-px" style={{ background: '#201C18', transform: 'rotate(45deg)' }} />
                <span className="absolute w-6 h-px" style={{ background: '#201C18', transform: 'rotate(-45deg)' }} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-1 sm:gap-2 px-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: EASE }}
                  className="font-display flex items-baseline gap-3 sm:gap-4"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: '#201C18', lineHeight: 1.15 }}
                >
                  <span
                    className="font-sans font-semibold"
                    style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: '#C95724' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="pb-12 text-center">
              <span
                className="font-sans"
                style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#665D54' }}
              >
                A Journey Through Stone &amp; Spirit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
