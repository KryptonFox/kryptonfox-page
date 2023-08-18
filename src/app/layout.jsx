import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KryptonFox',
  description: 'personal page of KryptonFox',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-zinc-900 text-white' lang="en">
      <body className={inter.className}>
        <link rel="icon" href="https://s.namemc.com/2d/skin/face.png?id=7ee5f095b8187b2f&scale=4" sizes="any" />
        <div className='container mx-auto h-full min-h-[calc(100vh-60px)]'>
          <Navbar />
          <div id='content'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
