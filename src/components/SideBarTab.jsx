import Link from 'next/link';

export default function SideBarTab({ name, href }) {
  return (
    <Link
      className="hover:bg-zinc-700 px-4 py-1.5 rounded-lg my-1 font-semibold text-lg transition duration-300"
      href={href}
    >
      {name}
    </Link>
  );
}
