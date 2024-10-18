import LinkButton from '@/components/LinkButton'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[75vh]">
      <h1 className="font-extrabold text-[2rem] md:text-[3.5rem]">
        Hi, i`m Krypton<span className="text-orange-600">Fox🦊</span>
      </h1>
      <div className="flex flex-wrap justify-center space-x-2 text-sm text-center md:text-base">
        <LinkButton href="/about">Обо мне</LinkButton>
        <LinkButton href="/about/socials">Контакты</LinkButton>
        <LinkButton href="/url-shortener">Сокращатель ссылок</LinkButton>
      </div>
    </div>
  )
}
