import type { Metadata } from 'next'
import { Playfair_Display, Barlow } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
})

const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Borochi - Intelligent Energy Solutions',
    template: '%s | Borochi',
  },
  description: 'Powering industry with intelligent energy solutions. Turnkey clean-energy systems for factories, business parks, and hospitals.',
  keywords: ['Energy Solutions', 'Solar Power', 'Battery Storage', 'EV Charging', 'Energy Management', 'Clean Energy'],
  authors: [{ name: 'Borochi Team' }],
  creator: 'Borochi',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.png',
      },
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borochi.com',
    title: 'Borochi - Intelligent Energy Solutions',
    description: 'Powering industry with intelligent energy solutions. Turnkey clean-energy systems for factories, business parks, and hospitals.',
    siteName: 'Borochi',
          images: [
        {
          url: '/borochi_logo.png',
          width: 1200,
          height: 630,
          alt: 'Borochi - Intelligent Energy Solutions',
        },
      ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borochi - Intelligent Energy Solutions',
    description: 'Powering industry with intelligent energy solutions. Turnkey clean-energy systems for factories, business parks, and hospitals.',
    creator: '@borochi',
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
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          playfairDisplay.variable,
          barlow.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1 pt-16 lg:pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
} 