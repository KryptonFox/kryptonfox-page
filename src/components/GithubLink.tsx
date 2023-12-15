import Image from 'next/image';

export default function GithubLink() {
  return (
    <a
      className="flex items-center gap-2 border py-1.5 px-3 border-white rounded-lg hover:bg-zinc-900 transition-colors"
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
  );
}
