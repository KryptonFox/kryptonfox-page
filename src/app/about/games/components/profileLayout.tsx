import React from 'react';
import Skin from './skin';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

export default function ProfileLayout() {
  return (
    <div className="border border-zinc-700 rounded-xl text-center">
      <div className="bg-zinc-800 rounded-t-xl py-3">Мой профиль</div>
      <div className="h-[380px] w-[220px] bg-zinc-800/30">
        <Skin />
      </div>
      <div className="bg-zinc-800 rounded-b-xl py-3 w-full">
        <a
          className="hover:underline hover:text-zinc-300 transition flex items-center justify-center"
          href="https://ru.namemc.com/profile/TheKryptonFox"
        >
          <span>TheKryptonFox</span>
          <ArrowTopRightOnSquareIcon className="ml-1 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
