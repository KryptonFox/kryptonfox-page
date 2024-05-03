'use client';
import React, { useEffect, useState } from 'react';

export default function CreateLinkForm() {
  const [statusCode, setStatusCode] = useState(0);
  const [shortlink, setShortlink] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    switch (statusCode) {
      case 220:
        setStatusMessage('Короткая ссылка создана успешно!');
        break;
      case 221:
        setStatusMessage('Неправильное короткое имя ссылки!');
        setShortlink('');
        break;
      case 222:
        setStatusMessage('Несуществующая ссылка!');
        setShortlink('');
        break;
      default:
        setStatusMessage('');
        setShortlink('');
        break;
    }
  }, [statusCode]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url: String = e.target[0].value;
    const shortname: String = e.target[1].value;

    if (!url) {
      setStatusMessage('Введите ссылку!');
      setShortlink('');
      return;
    }

    fetch(
      `https://krfx.ru/api/shortlink?url=${url}${
        shortname ? '&shortname=' + shortname : ''
      }`,
      {
        method: 'PUT',
      },
    )
      .then((res) => res.json())
      .then((res) => {
        setStatusCode(res.code);
        setShortlink(res.url);
      });
  }

  return (
    <div className="md:w-[900px] mx-auto p-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 border-b border-zinc-800 pb-4 mb-4"
      >
        <label className="flex flex-wrap justify-between text-2xl font-extrabold">
          Ссылка -
          <input
            id="url"
            type="text"
            placeholder="прим. https://example.com, example.com"
            className="text-zinc-200 outline-none w-full md:w-[70%] font-semibold text-base rounded-xl border-2 border-yellow-800 bg-zinc-900 px-4 py-1"
          />
        </label>
        <label className="flex flex-wrap items-center justify-between text-xl font-extrabold">
          Короткое имя ссылки* -
          <input
            id="shortname"
            type="text"
            pattern="^[A-Za-z0-9]+$"
            placeholder="только английские буквы и цифры"
            className="text-zinc-200 outline-none w-full md:w-[70%] font-semibold text-base rounded-xl border-2 border-yellow-800 bg-zinc-900 px-4 py-1"
          />
        </label>
        <button
          type="submit"
          className="transition text-zinc-200 outline-none cursor-pointer font-extrabold text-xl rounded-xl border-2 border-yellow-800 bg-zinc-900 active:bg-zinc-950 hover:bg-zinc-800 py-1"
        >
          Создать короткую ссылку
        </button>
      </form>
      <div className="flex flex-col items-center">
        <p className="text-center font-extrabold text-2xl">{statusMessage}</p>
        {shortlink ? (
          <a
            className="underline text-zinc-400 hover:text-zinc-500"
            target="blank"
            href={shortlink}
          >
            {shortlink}
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
