import type { Metadata } from 'next';
import { Playfair_Display, Barlow } from 'next/font/google';
import '../styles/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Borochi - Intelligent Energy Solutions for Industry',
  description: 'Powering industry with intelligent energy. Turnkey clean-energy systems for factories, business parks, and hospitals that cut operating costs and unlock new revenue streams.',
  keywords: 'energy solutions, clean energy, solar power, battery storage, EV charging, energy management, industrial energy, renewable energy',
  authors: [{ name: 'Borochi' }],
  creator: 'Borochi',
  publisher: 'Borochi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://borochi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Borochi - Intelligent Energy Solutions for Industry',
    description: 'Powering industry with intelligent energy. Turnkey clean-energy systems that cut operating costs and unlock new revenue streams.',
    url: 'https://borochi.com',
    siteName: 'Borochi',
    images: [
      {
        url: '/borochi_logo.png',
        width: 1200,
        height: 630,
        alt: 'Borochi - Intelligent Energy Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borochi - Intelligent Energy Solutions for Industry',
    description: 'Powering industry with intelligent energy. Turnkey clean-energy systems that cut operating costs and unlock new revenue streams.',
    images: ['/borochi_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here when available
    // google: 'your-google-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${barlow.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#237ebc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${barlow.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 