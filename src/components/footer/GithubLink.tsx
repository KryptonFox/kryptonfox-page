import Image from 'next/image'

export default function GithubLink() {
  return (
    <a
      className="flex items-center gap-2 rounded-lg border border-white px-3 py-1.5 transition-colors hover:bg-zinc-900"
      href="https://github.com/KryptonFox/kryptonfox-page"
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
