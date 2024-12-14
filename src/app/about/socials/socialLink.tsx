import Image from 'next/image'

interface props {
  title: string
  href: string
  imgSrc: string
}

export default function SocialLink({ title, href, imgSrc }: props) {
  return (
    <a
      className="box-content flex w-[85px] flex-col items-center rounded-xl border border-zinc-800 px-2 py-4 transition hover:bg-zinc-800"
      target="_blank"
      href={href}
    >
      <div className="flex h-[50px] w-[50px] items-center">
        <Image src={imgSrc} alt="" width={50} height={50} />
      </div>
      <span className="mt-2">{title}</span>
    </a>
  )
}
