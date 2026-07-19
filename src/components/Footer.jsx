'use client';

import { navItems } from '@/lib/templeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNav = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-charcoal" style={{ borderTop: '1px solid rgba(245,235,221,0.08)' }}>
      {/* Large faded wordmark — sits behind the content as a watermark */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none px-4 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display block text-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.5rem, 13vw, 13rem)',
            color: 'rgba(245,235,221,0.06)',
            lineHeight: 0.8,
          }}
        >
          Sacred Nepal
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-parchment" style={{ fontSize: '1.3rem', letterSpacing: '0.04em' }}>
              Sacred Nepal
            </h3>
            <p className="font-sans" style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(245,235,221,0.55)', maxWidth: '22rem' }}>
              An editorial journey through the ancient sacred temples and living Himalayan spirituality
              of Nepal.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '0.62rem', letterSpacing: '0.25em', color: 'rgba(245,235,221,0.4)' }}
            >
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="font-sans"
                    style={{ fontSize: '0.95rem', color: 'rgba(245,235,221,0.7)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '0.62rem', letterSpacing: '0.25em', color: 'rgba(245,235,221,0.4)' }}
            >
              Credits
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="font-sans" style={{ fontSize: '0.95rem', color: 'rgba(245,235,221,0.5)' }}>
                Instagram
              </li>
              <li className="font-sans" style={{ fontSize: '0.95rem', color: 'rgba(245,235,221,0.5)' }}>
                Photography Credits
              </li>
            </ul>
            <p className="font-sans italic mt-2" style={{ fontSize: '0.85rem', color: 'rgba(245,235,221,0.4)' }}>
              Designed as a digital tribute to Nepal.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(245,235,221,0.08)' }}
        >
          <p className="font-sans" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(245,235,221,0.32)' }}>
            © {currentYear} Sacred Nepal — An Editorial Journey
          </p>
        </div>
      </div>
    </footer>
  );
}
