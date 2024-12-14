'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import useClickOutside from '@/hooks/useClickOutside'

export default function NavbarMobileMenu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const element = useRef<HTMLDivElement>(null)

  useClickOutside(element, () => {
    setMenuOpen(false)
  })
  return (
    <div className="relative z-30 h-6" ref={element}>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ transformOrigin: 'top right', scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute right-0 top-10 z-40 grid gap-2 rounded-lg border border-indigo-900 bg-zinc-950/90 p-3 font-semibold backdrop-blur-md"
          >
            <Link
              className="w-36 rounded-lg p-2 transition-colors hover:bg-blue-950/30 active:bg-blue-950/50"
              href="/news"
              onClick={() => setMenuOpen(false)}
            >
              Новости
            </Link>
            <Link
              className="rounded-lg p-2 transition-colors hover:bg-blue-950/30 active:bg-blue-950/50"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              Обо мне
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
