import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header'

const urban = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evan Hickman',
  description: 'Frontend software developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urban.className} bg-neutral-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
