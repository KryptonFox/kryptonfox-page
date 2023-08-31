import React from 'react';

export default function facts() {
  return (
    <div className="flex flex-col items-center py-2">
      <h1 className="text-[2.5rem] font-extrabold mb-4">Интересные факты</h1>
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/PkT0PJwy8mI?controls=0"
        title="Ты думал здесь что-то будет?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
