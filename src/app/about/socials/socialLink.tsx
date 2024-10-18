import Image from 'next/image'

interface props {
  title: string
  href: string
  imgSrc: string
}

export default function SocialLink({ title, href, imgSrc }: props) {
  return (
    <a
      className="box-content flex flex-col items-center py-4 px-2 rounded-xl border transition w-[85px] border-zinc-800 hover:bg-zinc-800"
      target="_blank"
      href={href}
    >
      <div className="flex items-center h-[50px] w-[50px]">
        <Image src={imgSrc} alt="" width={50} height={50} />
      </div>
      <span className="mt-2">{title}</span>
    </a>
  )
}
