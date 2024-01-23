import type { Metadata } from 'next';
import Link from 'next/link';
import { Urbanist } from 'next/font/google';
import './globals.css';

import Nav from './components/nav';

const inter = Urbanist({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <header className='section py-20 bg-neutral-900 w-full'>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
