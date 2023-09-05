'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SideBarTab({ name, href }) {
  const pathname = usePathname();
  return (
    <Link
      className={
        href === pathname
          ? 'hover:bg-zinc-800 px-4 py-1.5 rounded-lg my-1 transition duration-300 text-lg font-extrabold text-yellow-400 bg-yellow-600/10'
          : 'hover:bg-zinc-800 px-4 py-1.5 rounded-lg my-1 transition duration-300 text-lg font-semibold'
      }
      href={href}
    >
      {name}
    </Link>
  );
}
