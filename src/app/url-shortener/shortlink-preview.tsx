'use client'
import React, { MouseEventHandler } from 'react';


export default function ShortlinkPreview({ shortlink }: { shortlink: string }) {
  function handleClick(e) {
    e.preventDefault()
    navigator.clipboard.writeText(shortlink);
  }
  return (
    <div className="flex flex-col items-center">
      <a
        className="underline text-zinc-400 hover:text-zinc-500"
        target="blank"
        href={shortlink}
      >
        {shortlink}
      </a>
      <button
        className="transition py-1 mt-3 w-1/3 bg-zinc-900 rounded-xl cursor-pointer border-2 border-yellow-800 active:bg-zinc-950 hover:bg-zinc-800"
        onClick={handleClick}
      >
        копировать
      </button>
    </div>
  );
}
