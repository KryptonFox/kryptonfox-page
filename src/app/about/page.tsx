import Emoji from '@/components/Emoji'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex flex-col items-center py-3 px-4 animate-introTop">
      <h1 className="font-extrabold text-[2.5rem]">About me🦊</h1>
      <div className="py-4 px-8 mt-8 rounded-xl border border-zinc-700">
        <ul className="space-y-2 font-mono text-lg list-[square] w-[280px]">
          <li>
            17 y.o. <Emoji>👨‍🎓</Emoji>
          </li>
          <li>
            <Emoji>🎂</Emoji> 04th October
          </li>
          <li>
            <Emoji>🇷🇺</Emoji>, Saint-Petersburg
          </li>
          <li>
            Loves programming <Emoji>💻</Emoji>
          </li>
          <li>
            Playing Minecraft <Emoji>⛏</Emoji>
          </li>
          <li>
            <Emoji>🐾</Emoji> Furry Fox <Emoji>🦊</Emoji>
          </li>
          <li className="list-none text-center">
            <Link
              href={'/about/socials'}
              className="flex justify-center items-center transition hover:underline"
            >
              <span>Socials</span>
              <ArrowTopRightOnSquareIcon className="ml-1 w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
      <Image
        src="/kotek.png"
        alt="kotek"
        width="238"
        height="252"
        className="my-8"
      />
    </div>
  )
}
