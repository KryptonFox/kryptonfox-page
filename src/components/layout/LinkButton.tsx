import Link from 'next/link'
import type { ReactNode } from 'react'

interface LinkButtonProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
}

export default function LinkButton({
  children,
  href,
  className,
  target,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target ?? '_self'}
      className={`rounded-md border border-indigo-900 bg-blue-800/10 px-4 py-2 font-semibold text-zinc-400 transition duration-300 hover:bg-blue-800/30 ${className}`}
    >
      {children}
    </Link>
  )
}
