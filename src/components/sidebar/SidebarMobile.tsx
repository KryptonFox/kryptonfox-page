'use client'
import { SquareChevronLeft, SquareChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimate } from 'motion/react'
import { linkList } from './sidebarList'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useClickOutside from '@/hooks/useClickOutside'

export default function SidebarMobile() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const container = useRef<HTMLDivElement>(null)
  const [buttonRef, animate] = useAnimate<HTMLButtonElement>()
  useClickOutside(container, () => setMenuOpen(false))

  useEffect(() => {
    animate(
      buttonRef.current,
      { x: menuOpen ? '46vw' : 0 },
      { ease: 'easeInOut', duration: 0.21 },
    )
    console.log(menuOpen && '46vw')
  }, [buttonRef, animate, menuOpen])

  return (
    <div ref={container}>
      <motion.button
        ref={buttonRef}
        className="rounded-lg border border-indigo-900 bg-zinc-950 p-1 text-blue-300/60"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <SquareChevronLeft /> : <SquareChevronRight />}
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ translateX: '-45vw' }}
            animate={{ translateX: 0 }}
            exit={{ translateX: '-45vw' }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            className="absolute top-0 grid w-[45vw] rounded-lg border border-indigo-900 bg-zinc-950/70 p-2 backdrop-blur-md"
          >
            {linkList.map(({ name, href }, index) => (
              <Link
                className={`my-1 rounded-lg px-4 py-1.5 text-lg font-bold transition duration-300 active:bg-zinc-800/70 ${
                  href === pathname
                    ? 'bg-blue-600/30 text-blue-300'
                    : 'hover:bg-zinc-800/50'
                }`}
                href={href}
                key={index}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
