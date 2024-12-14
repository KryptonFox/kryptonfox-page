'use client'
import { createShortlink } from '@/actions/create-shortlink'
import { useFormState } from 'react-dom'
import ShortlinkPreview from './shortlink-preview'

export default function CreateLinkForm() {
  const [state, formAction] = useFormState(createShortlink, undefined)

  return (
    <div className="mx-auto p-2 md:w-[900px]">
      <form action={formAction} className="flex flex-col space-y-4">
        <label className="flex flex-wrap justify-between text-2xl font-extrabold">
          Ссылка -
          <input
            id="url"
            name="url"
            type="text"
            placeholder="прим. https://example.com, example.com"
            className="w-full rounded-xl border-2 border-yellow-800 bg-zinc-900 px-4 py-1 text-base font-semibold text-zinc-200 outline-none md:w-[70%]"
          />
        </label>
        <label className="flex flex-wrap items-center justify-between text-xl font-extrabold">
          Короткое имя ссылки* -
          <input
            id="shortname"
            name="shortname"
            type="text"
            pattern="^[a-z0-9_-]+$"
            placeholder="только английские буквы и цифры"
            className="w-full rounded-xl border-2 border-yellow-800 bg-zinc-900 px-4 py-1 text-base font-semibold text-zinc-200 outline-none md:w-[70%]"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer rounded-xl border-2 border-yellow-800 bg-zinc-900 py-1 text-xl font-extrabold text-zinc-200 outline-none transition hover:bg-zinc-800 active:bg-zinc-950"
        >
          Создать короткую ссылку
        </button>

        <div className="border-t border-zinc-800 pt-4 text-center text-2xl font-extrabold">
          {state?.message}
          {state?.url !== undefined && (
            <ShortlinkPreview shortlink={state?.url} />
          )}
        </div>
      </form>
    </div>
  )
}
