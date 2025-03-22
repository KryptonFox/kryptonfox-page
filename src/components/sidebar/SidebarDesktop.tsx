'use client'
import { linkList } from '@/components/sidebar/sidebarList'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAnimate } from 'motion/react'
import Link from 'next/link'

export default function SidebarDesktop() {
  const pathname = usePathname()
  const [scope, animate] = useAnimate<HTMLDivElement>()

  const [hoveredTab, setHoveredTab] = useState<number | undefined>(undefined)
  const [inScope, setInScope] = useState<boolean>(false)

  // tab select animate
  useEffect(() => {
    const elem = scope.current.children.item(
      linkList.findIndex((link) => link.href === pathname),
    )
    if (!(elem instanceof HTMLElement)) return
    animate(
      'span#select',
      { top: elem.offsetTop, height: elem.offsetHeight },
      { ease: 'easeInOut', duration: 0.2 },
    )
  }, [animate, scope, pathname])

  // tab hover animate
  useEffect(() => {
    // move hover effect
    if (hoveredTab !== undefined) {
      const elem = scope.current.children.item(hoveredTab)
      if (!(elem instanceof HTMLElement)) return
      animate(
        'span#hover',
        { top: elem.offsetTop, height: elem.offsetHeight, opacity: 1 },
        { ease: 'easeInOut', duration: 0.2 },
      )
    }
    // remove hover effect
    if (
      hoveredTab === linkList.findIndex((link) => link.href === pathname) ||
      !inScope
    ) {
      animate('span#hover', { opacity: 0 }, { duration: 0.1 })
      return
    }
  }, [animate, hoveredTab, inScope, pathname, scope])

  return (
    <div
      ref={scope}
      className="relative grid"
      onMouseEnter={() => setInScope(true)}
      onMouseLeave={() => setInScope(false)}
    >
      {linkList.map(({ name, href }, index) => (
        <Link
          className={`my-1 rounded-lg px-4 py-1.5 text-lg font-semibold ${href === pathname && 'text-blue-300'}`}
          href={href}
          key={index}
          onMouseEnter={() => setHoveredTab(index)}
          onTouchStart={() => setHoveredTab(index)}
          onMouseLeave={() => setHoveredTab(undefined)}
          onTouchEnd={() => setHoveredTab(undefined)}
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
