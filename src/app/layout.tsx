import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const HackedKerx = localFont({
  src: './Hacked-KerX.ttf',
  display: 'swap',
  variable: '--font-hackedKerx',
});

export const metadata: Metadata = {
  title: 'Elastoplaz 2024',
  description:
    'National Level Technical Symposium by Department of Rubber & Plastics Technology at MIT campus, Anna University, Chennai - 600044',
  icons: '/icon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${HackedKerx.variable}`}>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
