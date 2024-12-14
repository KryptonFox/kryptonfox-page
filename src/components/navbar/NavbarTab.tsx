import Link from 'next/link'

interface NavbartabProps {
  name: string
  href: string
}

export default function Tab({ href, name }: NavbartabProps) {
  return (
    <Link
      href={href}
      className="rounded-full px-6 py-2 text-[1.25rem] font-semibold transition duration-300 hover:bg-zinc-800"
    >
      {name}
    </Link>
  )
}
