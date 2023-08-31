import Link from 'next/link';

export default function Tab({ href, name }) {
  return (
    <Link
      href={href}
      className="hidden text-[1.25rem] font-semibold rounded-full py-2 px-6 hover:bg-zinc-800 transition md:inline"
    >
      {name}
    </Link>
  );
}
