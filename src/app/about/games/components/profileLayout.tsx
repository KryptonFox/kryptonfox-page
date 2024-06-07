import React from 'react';
import Skin from './skin';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

export default function ProfileLayout() {
  return (
    <div className="border border-zinc-800 rounded-xl text-center">
      <div className="bg-zinc-900 rounded-t-xl py-3">Мой персонаж
      <a
        className="hover:underline hover:text-zinc-300 transition flex items-center justify-center"
        href="https://ru.namemc.com/profile/TheKryptonFox"
        target='blank'
      >
        <span>TheKryptonFox</span>
        <ArrowTopRightOnSquareIcon className="ml-1 w-5 h-5" />
      </a></div>
      <div className="h-[380px] w-[300px] bg-zinc-800/30">
        <Skin />
      </div>
    </div>
  );
}
