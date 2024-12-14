import type { ReactNode } from 'react'

const Emoji = ({ children }: { children: ReactNode }) => (
  <span className={`font-emoji text-[1.2em]`}>{children}</span>
)

export default Emoji
