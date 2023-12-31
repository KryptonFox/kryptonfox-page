import React from 'react';
import './globals.css';
import { Inter, Noto_Color_Emoji, Roboto_Mono } from 'next/font/google';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';
import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';

// Metadata
export const metadata: Metadata = {
  title: { default: 'KryptonFox', template: 'KryptonFox | %s' },
  description: 'personal page of KryptonFox',
};

export const viewport: Viewport = {
  themeColor: '#121214',
};

// Fonts
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: 'variable',
});

const notoEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
  variable: '--font-emoji',
});

const robotoMono = Roboto_Mono({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

// Layout
export default function RootLayout({ children }) {
  return (
    <html
      className="bg-zinc-900 text-white overflow-x-hidden w-[100vw] scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800"
      lang="ru"
    >
      <body
        className={`flex flex-col items-center min-h-screen ${inter.className} ${notoEmoji.variable} ${robotoMono.variable}`}
      >
        <Navbar />
        <main className="container mt-[var(--header-h)] mx-auto flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
