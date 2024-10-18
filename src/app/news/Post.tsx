import React from 'react'

interface PostProps {
  header: String
  date: String
  children: string | React.JSX.Element | React.JSX.Element[]
}

export default function Post(props: PostProps) {
  return (
    <div className="p-4 rounded-xl border-2 border-yellow-600 w-[500px]">
      <h1 className="text-4xl font-bold text-center">{props.header}</h1>
      <p className="text-lg font-bold text-zinc-300">От {props.date}</p>
      <p className="text-xl font-bold text-zinc-200">Список изменений: </p>
      {props.children}
    </div>
  )
}
