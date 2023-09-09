import GithubLink from '../components/GithubLink';

export default function Footer() {
  return (
    <footer className="bg-zinc-800/30 border-t border-zinc-800 w-full p-4 h-[72px]">
      <div className="container mx-auto flex justify-between items-center h-full">
        <span>made by @KryptonFox, 2023</span>
        <GithubLink />
      </div>
    </footer>
  );
}
