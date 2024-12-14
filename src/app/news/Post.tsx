import type { ReactNode } from 'react'

interface PostProps {
  header: String
  date: String
  children: ReactNode
}

export default function Post({
  header,
  date,
  children,
}: PostProps): JSX.Element {
  return (
    <div className="mx-3 space-y-1 rounded-xl border-2 border-indigo-900 p-6">
      <h1 className="text-center text-4xl font-extrabold">{header}</h1>
      <p className="text-lg font-bold text-zinc-300">От {date}</p>
      <p className="text-xl font-bold text-zinc-200">Список изменений: </p>
      <ul className="ml-6 list-disc text-zinc-400">{children}</ul>
    </div>
  )
}
