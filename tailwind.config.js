/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment:      '#F5EBDD',
        sand:           '#E9D9C1',
        ink:            '#201C18',
        'ink-muted':    '#665D54',
        saffron:        '#C95724',
        terracotta:     '#75361F',
        charcoal:       '#171613',
        gold:           '#C49A56',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans:  ['Manrope', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in':   'fadeIn 1.2s ease-out forwards',
        'spin-slow': 'spinSlow 48s linear infinite',
      },
    },
  },
  plugins: [],
};
