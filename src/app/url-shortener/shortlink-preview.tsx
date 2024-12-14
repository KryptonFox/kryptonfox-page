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
        className="text-zinc-400 underline hover:text-zinc-500"
        target="blank"
        href={shortlink}
      >
        {shortlink}
      </a>
      <button
        className="mt-3 cursor-pointer rounded-xl border-2 border-yellow-800 bg-zinc-900 px-16 py-1 transition hover:bg-zinc-800 active:bg-zinc-950"
        onClick={handleClick}
      >
        скопировать
      </button>
    </div>
  )
}
