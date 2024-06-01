import LinkButton from '@/components/LinkButton';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh]">
      <h1 className="text-[2rem] md:text-[3.5rem] font-extrabold">
        Hi, i`m Krypton<a className="text-orange-600">Fox🦊</a>
      </h1>
      <div className="flex flex-wrap justify-center text-center text-sm md:text-base space-x-2">
        <LinkButton href="/about">Обо мне</LinkButton>
        <LinkButton href="/about/socials">Контакты</LinkButton>
        <LinkButton href="/url-shortener">Сокращатель ссылок</LinkButton>
      </div>
    </div>
  );
}
