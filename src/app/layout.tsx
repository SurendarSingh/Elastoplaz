import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const HackedKerx = localFont({
  src: './Hacked-KerX.ttf',
  display: 'swap',
  variable: '--font-hackedKerx',
});

export const metadata: Metadata = {
  title: 'Elastoplaz 24',
  description: 'National Level Technical Symposium',
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
      </body>
    </html>
  );
}
