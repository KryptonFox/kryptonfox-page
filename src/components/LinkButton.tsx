import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
  href: string
  children: string
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="py-2 px-4 font-semibold rounded-md border border-yellow-900 transition duration-300 bg-yellow-800/10 text-zinc-400 hover:bg-yellow-800/30"
    >
      {children}
    </Link>
  )
}
