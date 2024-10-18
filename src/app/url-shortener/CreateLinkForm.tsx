'use client'
import { createShortlink } from '../actions/create-shortlink'
import { useFormState } from 'react-dom'
import ShortlinkPreview from './shortlink-preview'

export default function CreateLinkForm() {
  const [state, formAction] = useFormState(createShortlink, undefined)

  return (
    <div className="p-2 mx-auto md:w-[900px]">
      <form action={formAction} className="flex flex-col space-y-4">
        <label className="flex flex-wrap justify-between text-2xl font-extrabold">
          Ссылка -
          <input
            id="url"
            name="url"
            type="text"
            placeholder="прим. https://example.com, example.com"
            className="text-zinc-200 outline-none w-full md:w-[70%] font-semibold text-base rounded-xl border-2 border-yellow-800 bg-zinc-900 px-4 py-1"
          />
        </label>
        <label className="flex flex-wrap justify-between items-center text-xl font-extrabold">
          Короткое имя ссылки* -
          <input
            id="shortname"
            name="shortname"
            type="text"
            pattern="^[a-z0-9_-]+$"
            placeholder="только английские буквы и цифры"
            className="text-zinc-200 outline-none w-full md:w-[70%] font-semibold text-base rounded-xl border-2 border-yellow-800 bg-zinc-900 px-4 py-1"
          />
        </label>
        <button
          type="submit"
          className="py-1 text-xl font-extrabold rounded-xl border-2 border-yellow-800 transition cursor-pointer outline-none text-zinc-200 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950"
        >
          Создать короткую ссылку
        </button>

        <div className="pt-4 text-2xl font-extrabold text-center border-t border-zinc-800">
          {state?.message}
          {state?.url !== undefined && (
            <ShortlinkPreview shortlink={state?.url} />
          )}
        </div>
      </form>
    </div>
  )
}
