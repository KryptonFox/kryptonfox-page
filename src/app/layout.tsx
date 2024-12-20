import React from 'react'
import './globals.css'
import { Inter, Noto_Color_Emoji, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import { Metadata, Viewport } from 'next'

// Metadata
export const metadata: Metadata = {
  title: { default: 'KryptonFox', template: 'KryptonFox | %s' },
  description:
    'Personal website of KryptonFox, the random furry fox programmer',
  openGraph: {
    title: 'KryptonFox',
    url: 'https://krfox.ru/',
    type: 'website',
    description:
      'I`m KryptonFox, furry fox, JS and TS programmer. This is my small website with some information about me and some other stuff',
  },
}

export const viewport: Viewport = {
  themeColor: '#121214',
}

// Fonts
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: 'variable',
})

const notoEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
  variable: '--font-emoji',
})

const robotoMono = Roboto_Mono({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

// Layout
export default function RootLayout({ children }) {
  return (
    <html
      className="w-[100vw] overflow-x-hidden bg-zinc-950 text-white scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-900"
      lang="ru"
    >
      <body
        className={`flex min-h-screen flex-col items-center ${inter.className} ${notoEmoji.variable} ${robotoMono.variable}`}
      >
        <Navbar />
        <main className="container mx-auto min-h-screen flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
