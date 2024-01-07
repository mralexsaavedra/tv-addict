import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/layouts/Header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'TMDB'],
  authors: [
    {
      name: 'mralexsaavedra',
      url: 'https://github.com/mralexsaavedra',
    },
  ],
  creator: 'mralexsaavedra',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // images: [
    //   {
    //     url: absoluteUrl('/src/pages/api/og.tsx'),
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/api/og.tsx`],
    creator: '@mralexsaavedra',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        'scroll-smooth bg-neutral-900 font-sans text-slate-50 antialiased',
        fontSans.variable
      )}
    >
      <body className="min-h-screen">
        <Header />

        <main className="container w-full max-w-screen-2xl pb-16 pt-10 flex flex-col gap-12">
          {children}
        </main>
      </body>
    </html>
  );
}
