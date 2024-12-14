import GithubLink from '@/components/footer/GithubLink'

export default function Footer() {
  return (
    <footer className="z-0 h-[72px] w-full border-t border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur-3xl">
      <div className="container mx-auto flex h-full items-center justify-between">
        <span>made by @KryptonFox, 2024</span>
        <GithubLink />
      </div>
    </footer>
  )
}
