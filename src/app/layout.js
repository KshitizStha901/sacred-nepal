import './globals.css';

export const metadata = {
  title: 'Sacred Nepal — A Journey Through Stone & Spirit',
  description:
    'An immersive editorial journey through the ancient sacred temples of Nepal — Pashupatinath, Swayambhunath, Boudhanath, Muktinath, Nyatapola — and the Himalayan spirituality that surrounds them.',
  keywords: ['Nepal temples', 'Himalaya', 'Pashupatinath', 'Boudhanath', 'sacred architecture', 'Nepal heritage'],
  openGraph: {
    title: 'Sacred Nepal — A Journey Through Stone & Spirit',
    description: 'An immersive editorial journey through the ancient sacred temples of Nepal.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts - Instrument Serif + Manrope */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
