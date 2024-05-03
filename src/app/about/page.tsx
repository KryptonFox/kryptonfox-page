import Emoji from '@/components/Emoji';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className="px-4 py-3 flex flex-col items-center animate-introTop">
        <h1 className="text-[2.5rem] font-extrabold">About me🦊</h1>
        <div className="mt-8 px-8 py-4 border border-zinc-700 rounded-xl ">
          <ul className="list-[square] font-mono text-lg space-y-2 w-[280px]">
            <li>
              16 y.o. <Emoji>👨‍🎓</Emoji>
            </li>
            <li>
              <Emoji>🎂</Emoji> 04th October
            </li>
            <li>
              <Emoji>🇷🇺</Emoji>, Saint-Petersburg
            </li>
            <li>
              Loves programming <Emoji>💻</Emoji> and hiking <Emoji>🏕🏔</Emoji>
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
                className="flex justify-center items-center hover:underline transition"
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
    </>
  );
}
