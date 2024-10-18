import Link from 'next/link'

interface NavbartabProps {
  name: string
  href: string
}

export default function Tab({ href, name }: NavbartabProps) {
  return (
    <Link
      href={href}
      className="py-2 px-6 font-semibold rounded-full transition duration-300 text-[1.25rem] hover:bg-zinc-800"
    >
      {name}
    </Link>
  )
}
