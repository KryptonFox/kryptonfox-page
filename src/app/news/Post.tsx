import React from 'react'

interface PostProps {
  header: String;
  date: String;
  children: string | React.JSX.Element | React.JSX.Element[];
}

export default function Post(props: PostProps) {
  return (
    <div className="border-2 border-yellow-600 rounded-xl w-[500px] p-4">
      <h1 className="text-4xl text-center font-bold">{props.header}</h1>
      <p className="font-bold text-lg text-zinc-300">От {props.date}</p>
      <p className="font-bold text-xl text-zinc-200">Список изменений: </p>
      {props.children}
    </div>
  );
}
