import Emoji from '@/components/common/Emoji'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import * as motion from 'motion/react-client'

export default function page() {
  return (
    <motion.div
      initial={{ translateY: '-50vh' }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.8, type: 'keyframes', ease: 'easeInOut' }}
      className="flex flex-col items-center px-4 py-3"
    >
      <h1 className="text-[2.5rem] font-extrabold">Обо мне🦊</h1>
      <div className="mt-8 rounded-xl border border-zinc-700 px-8 py-4">
        <ul className="max-w-max list-[square] space-y-2 font-mono text-lg">
          <li>
            18 годиков <Emoji>🎂</Emoji> 04 октября
          </li>
          <li>
            <Emoji>🇷🇺</Emoji>, Санкт-Петербург
          </li>
          <li>
            ITMO SE Student <Emoji>👨‍🎓</Emoji>
          </li>
          <li>
            Начинающий разработчик <Emoji>💻🦀</Emoji>
          </li>
          <li>
            <Emoji>🐾</Emoji> Basic Furry Fox <Emoji>🦊</Emoji>
          </li>
          <li className="list-none text-center">
            <Link
              href={'/about/socials'}
              className="flex items-center justify-center transition hover:underline"
            >
              <span>
                Где я обитаю <Emoji>👀</Emoji>
              </span>
              <SquareArrowOutUpRight className="ml-1 h-5 w-5" />
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
    </motion.div>
  )
}
