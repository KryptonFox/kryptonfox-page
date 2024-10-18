import GithubLink from '@/components/GithubLink'

export default function Footer() {
  return (
    <footer className="z-0 p-4 w-full border-t bg-zinc-900/30 border-zinc-800 h-[72px] backdrop-blur-3xl">
      <div className="container flex justify-between items-center mx-auto h-full">
        <span>made by @KryptonFox, 2024</span>
        <GithubLink />
      </div>
    </footer>
  )
}
