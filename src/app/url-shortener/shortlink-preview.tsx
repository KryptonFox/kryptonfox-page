'use client'
import React from 'react'

export default function ShortlinkPreview({ shortlink }: { shortlink: string }) {
  function handleClick(e) {
    e.preventDefault()
    navigator.clipboard.writeText(shortlink)
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
        className="py-1 px-16 mt-3 rounded-xl border-2 border-yellow-800 transition cursor-pointer bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950"
        onClick={handleClick}
      >
        скопировать
      </button>
    </div>
  )
}
