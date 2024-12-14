import React from 'react'
import Link from 'next/link'
import Tab from './NavbarTab'
import NavbarMobileMenu from './NavbarMobileMenu'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 h-20 w-screen border-b-2 border-indigo-800 bg-zinc-950/50 backdrop-blur-lg md:h-24">
      <nav className="container mx-auto hidden items-center justify-between px-6 py-3 md:flex">
        <Link href="/" className="text-[2.75rem] font-extrabold">
          <span className="text-blue-500">Kr</span>
          <span>yptonFox</span>
        </Link>
        <div className="space-x-4">
          <Tab href="/news" name="Новости" />
          <Tab href="/about" name="Обо мне" />
        </div>
      </nav>
      <nav className="mx-auto flex h-full items-center justify-between px-6 py-3 md:hidden">
        <Link href="/" className="text-4xl font-extrabold">
          <span className="text-blue-500">Kr</span>
          <span>yptonFox</span>
        </Link>
        <NavbarMobileMenu />
      </nav>
    </header>
  )
}
