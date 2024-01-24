import type { Metadata } from 'next';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import './globals.css';

import Header from './components/Header';

const sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evan Hickman',
  description: 'Frontend software developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${sans.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
