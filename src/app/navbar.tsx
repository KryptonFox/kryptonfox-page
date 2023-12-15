import React from 'react';
import Link from 'next/link';
import Tab from '../components/Tab';

export default function Navbar() {
  return (
    <header className="fixed z-10 h-[var(--header-h)] w-full backdrop-blur-md bg-zinc-950/40 border-b-2 border-yellow-400">
      <nav className="flex justify-between container mx-auto items-center px-6 py-3">
        <Link
          href="/"
          className="text-[2.75rem] font-extrabold before:content-['Kr'] before:text-yellow-400"
        >
          yptonFox
        </Link>
        <div className="space-x-4 justify-between">
          <Tab href="/about/facts" name="Интересные факты" />
          <Tab href="/about" name="Обо мне" />
        </div>
      </nav>
    </header>
  );
}
