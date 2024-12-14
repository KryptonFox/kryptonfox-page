'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebartabProps {
  name: string
  href: string
}

export default function SidebarTab({ name, href }: SidebartabProps) {
  const pathname = usePathname()
  return (
    <Link
      className={
        href === pathname
          ? 'my-1 rounded-lg bg-yellow-600/10 px-4 py-1.5 text-lg font-extrabold text-yellow-400 transition duration-300 hover:bg-zinc-800/50'
          : 'my-1 rounded-lg px-4 py-1.5 text-lg font-semibold transition duration-300 hover:bg-zinc-800/50'
      }
      href={href}
    >
      {name}
    </Link>
  )
}
