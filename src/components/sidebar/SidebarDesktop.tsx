'use client'
import { linkList } from '@/components/sidebar/sidebarList'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAnimate } from 'motion/react'
import Link from 'next/link'

export default function SidebarDesktop() {
  const pathname = usePathname()
  const [scope, animate] = useAnimate<HTMLDivElement>()

  const [selectedTab, setSelectedTab] = useState<number>(
    linkList.findIndex((link) => link.href === pathname),
  )
  const [hoveredTab, setHoveredTab] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (selectedTab < 0) setSelectedTab(0)

    const elem = scope.current.children.item(selectedTab)
    if (!(elem instanceof HTMLElement)) return
    animate(
      'span#select',
      { top: elem.offsetTop, height: elem.offsetHeight },
      { ease: 'easeInOut', duration: 0.2 },
    )
  }, [animate, scope, selectedTab])

  useEffect(() => {
    if (hoveredTab === undefined) return
    const elem = scope.current.children.item(hoveredTab)
    if (!(elem instanceof HTMLElement)) return
    animate(
      'span#hover',
      { top: elem.offsetTop, height: elem.offsetHeight, opacity: 1 },
      { ease: 'easeInOut', duration: 0.2 },
    )
    if (hoveredTab === selectedTab) {
      animate('span#hover', { opacity: 0 }, { duration: 0 })
      return
    }
  }, [animate, hoveredTab, scope, selectedTab])

  return (
    <div ref={scope} className="relative grid">
      {linkList.map(({ name, href }, index) => (
        <Link
          className={`my-1 rounded-lg px-4 py-1.5 text-lg font-semibold ${href === pathname && 'text-blue-300'}`}
          href={href}
          key={index}
          onClick={() => setSelectedTab(index)}
          onMouseEnter={() => setHoveredTab(index)}
          onMouseLeave={() => setHoveredTab(undefined)}
        >
          {name}
        </Link>
      ))}
      <span
        id="select"
        className="absolute top-0 -z-10 w-full cursor-pointer rounded-lg bg-blue-600/30"
      ></span>
      <span
        id="hover"
        className="absolute -z-10 w-full cursor-pointer rounded-lg bg-zinc-800/50"
      ></span>
    </div>
  )
}
