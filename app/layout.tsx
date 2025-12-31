import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';

import './global.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist } from 'next/font/google';

export const metadata: Metadata = {
  title: 'fab ui',
  description: 'Beautiful UI components built with Base UI and Tailwind CSS',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const geist = Geist({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={geist.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className='root flex min-h-screen flex-col'>
          <RootProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </RootProvider>
        </div>
      </body>
    </html>
  );
}
