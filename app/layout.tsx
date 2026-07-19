import type { Metadata } from 'next';
import { Geist, Pixelify_Sans } from 'next/font/google';
import '@/index.css';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Container from '@/components/layouts/Container';
import Layout from '@/components/common/Layout';
import { Quote } from '@/components/common/Quote';
import Footer from '@/components/common/Footer';
import PageTracker from '@/components/common/PageTracker';
import { Analytics } from '@vercel/analytics/react';


const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neutron420.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ritesh | Portfolio',
    template: '%s | Ritesh',
  },
  description: 'Full Stack & DevOps Engineer portfolio, showing projects, experience, and tools',
  keywords: [
    'Ritesh',
    'Developer Portfolio',
    'Full Stack Engineer',
    'DevOps Engineer',
    'React Developer',
    'Next.js Developer',
    'JavaScript',
    'TypeScript',
  ],
  authors: [{ name: 'Ritesh Kumar Singh', url: 'https://github.com/neutron420' }],
  creator: 'Ritesh Kumar Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Ritesh | Portfolio',
    description: 'Full Stack & DevOps Engineer portfolio, showing projects, experience, and tools',
    siteName: 'Ritesh Portfolio',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ritesh | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritesh | Portfolio',
    description: 'Full Stack & DevOps Engineer portfolio, showing projects, experience, and tools',
    images: ['/og-image.webp'],
    creator: '@neutron420',
  },

  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-custom" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" async />
      </head>
      <body
        className={`${geistSans.variable} ${pixelifySans.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PageTracker />
          <Analytics />
          <div className="min-h-screen">
            <Container>
              <Layout>
                {children}
                <Quote />
                <Footer />
              </Layout>
            </Container>
            <div className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent [mask-image:linear-gradient(to_top,black_10%,transparent)] opacity-100 backdrop-blur-[5px] select-none dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
