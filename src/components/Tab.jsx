import Link from "next/link";

export default function Tab({href, name}) {
  return (
    <Link href={href} className='hidden text-[1.25rem] font-[500] rounded-full py-2 px-4 hover:bg-zinc-800 transition md:inline'>{name}</Link>
  )
}
