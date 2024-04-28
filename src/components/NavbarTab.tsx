import Link from 'next/link';

interface NavbartabProps {
  name: string;
  href: string;
}

export default function Tab({ href, name }: NavbartabProps) {
  return (
    <Link
      href={href}
      className="text-[1.25rem] font-semibold rounded-full py-2 px-6 hover:bg-zinc-800 transition duration-300"
    >
      {name}
    </Link>
  );
}
