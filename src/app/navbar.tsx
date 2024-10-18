import React from 'react'
import Link from 'next/link'
import Tab from '../components/NavbarTab'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <header className="fixed z-10 h-[var(--header-h)] w-full backdrop-blur-lg bg-zinc-950/50 border-b-2 border-yellow-400">
      <nav className="container flex justify-between items-center py-3 px-6 mx-auto">
        <Link
          href="/"
          className="font-extrabold text-[2.75rem] before:content-['Kr'] before:text-yellow-400"
        >
          yptonFox
        </Link>
        <div className="hidden space-x-4 md:block">
          <Tab href="/news" name="Новости" />
          <Tab href="/about" name="Обо мне" />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}
