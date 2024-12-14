import Skin from './skin'
import { SquareArrowOutUpRight } from 'lucide-react'

export default function ProfileLayout() {
  return (
    <div className="rounded-xl border border-zinc-800 text-center">
      <div className="rounded-t-xl bg-zinc-900 py-3">
        Мой персонаж
        <a
          className="flex items-center justify-center transition hover:text-zinc-300 hover:underline"
          href="https://ru.namemc.com/profile/TheKryptonFox"
          target="blank"
        >
          <span>TheKryptonFox</span>
          <SquareArrowOutUpRight className="ml-1 h-5 w-5" />
        </a>
      </div>
      <div className="h-[380px] w-[300px] bg-zinc-800/30">
        <Skin />
      </div>
    </div>
  )
}
