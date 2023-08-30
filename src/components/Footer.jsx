import GithubLink from "./GithubLink";

export default function Footer() {
  return (
    <footer className='bg-zinc-800/30 border-t border-zinc-800 p-4 w-full'>
      <div className="container mx-auto flex justify-between items-center">
        <span>made by @KryptonFox, 2023</span>
        <GithubLink/>
      </div>
    </footer>
  )
}
