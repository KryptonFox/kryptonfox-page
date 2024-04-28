import LinkButton from '@/components/LinkButton';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh]">
      <h1 className="text-[2rem] md:text-[3.5rem] font-extrabold after:content-['Fox🦊'] after:text-orange-600">
        Hi, i`m Krypton
      </h1>
      <div className="flex flex-wrap justify-center text-center text-sm md:text-base space-x-2">
        <LinkButton href="/about">Обо мне</LinkButton>
        <LinkButton href="/about/socials">Контакты</LinkButton>
        <LinkButton href="/url-shortener">Сокращатель ссылок</LinkButton>
      </div>
    </div>
  );
}
