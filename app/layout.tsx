import { RootProvider } from 'fumadocs-ui/provider/next';

import './global.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist } from 'next/font/google';

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
