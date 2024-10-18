import React from 'react'
import Skin from './skin'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export default function ProfileLayout() {
  return (
    <div className="text-center rounded-xl border border-zinc-800">
      <div className="py-3 rounded-t-xl bg-zinc-900">
        Мой персонаж
        <a
          className="flex justify-center items-center transition hover:underline hover:text-zinc-300"
          href="https://ru.namemc.com/profile/TheKryptonFox"
          target="blank"
        >
          <span>TheKryptonFox</span>
          <ArrowTopRightOnSquareIcon className="ml-1 w-5 h-5" />
        </a>
      </div>
      <div className="h-[380px] w-[300px] bg-zinc-800/30">
        <Skin />
      </div>
    </div>
  )
}
