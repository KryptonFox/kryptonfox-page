import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Ты думал здесь что-то будет?',
}

export default function facts() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-extrabold">Интересные факты</h1>
      <div className="aspect-video w-[90%] lg:w-4/5">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PkT0PJwy8mI?controls=0"
          title="Ты думал здесь что-то будет?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
