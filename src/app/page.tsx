import LinkButton from '@/components/layout/LinkButton'
import Image from 'next/image'
import KryptonIcon from '@public/krypton-icon.png'
import { SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'
import { NewYearTimer } from '@/components/temporary/NewYearTimer'

export default function Page() {
  return (
    <div className="mt-[30vh] flex flex-col items-center justify-center">
      <h1 className="mb-2 flex items-center text-3xl font-extrabold md:text-6xl">
        <span>Hi, i`m Krypton</span>
        <span className="text-blue-900/90">Fox</span>
        <Image
          className="inline h-10 w-10 md:h-max md:w-max"
          src={KryptonIcon}
          alt={'krypton icon'}
          height={96}
          width={96}
        />
      </h1>
      <div className="grid grid-cols-2 gap-2 text-center text-sm md:grid-cols-3 md:text-base">
        <LinkButton href="/about">Обо мне</LinkButton>
        <LinkButton href="/about/socials">Контакты</LinkButton>
        <LinkButton
          className="col-span-2 flex items-center justify-center gap-1 md:col-auto"
          href="https://web.krfx.ru"
          target="_blank"
        >
          <span>Сокращатель</span>
          <SquareArrowOutUpRight className="h-5" />
        </LinkButton>
      </div>
      <NewYearTimer />
    </div>
  )
}
