import Image from 'next/image';

interface props {
  title: string;
  href: string;
  imgSrc: string;
}

export default function SocialLink({ title, href, imgSrc }: props) {
  return (
    <a
      className="flex flex-col items-center w-[85px] px-2 py-4 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition box-content"
      target="_blank"
      href={href}
    >
      <div className="h-[50px] w-[50px] flex items-center">
        <Image src={imgSrc} alt="" width={50} height={50} />
      </div>
      <span className="mt-2">{title}</span>
    </a>
  );
}
