import Image from 'next/image'

export default function GithubLink() {
  return (
    <a
      className="flex gap-2 items-center py-1.5 px-3 rounded-lg border border-white transition-colors hover:bg-zinc-900"
      href="https://github.com/KirikLit/kryptonfox-page"
      target="_blank"
    >
      <span className="hidden md:inline">Source code</span>
      <Image
        src="/social/github.png"
        alt=""
        width={25}
        height={25}
        className="w-auto"
      />
    </a>
  )
}
