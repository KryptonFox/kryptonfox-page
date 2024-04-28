import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  children: string;
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className='bg-yellow-800/10 border border-yellow-900 font-semibold rounded-md py-2 px-4 hover:bg-yellow-800/30 transition duration-300 text-zinc-400'
    >
      {children}
    </Link>
  );
}
