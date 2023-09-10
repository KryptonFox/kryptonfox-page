import SideBarTab from '@/components/SideBarTab';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Обо мне"
}

export default function layout({ children }) {
  return (
    <div className="flex">
      <aside className="w-1/5 p-4 my-4 hidden md:flex flex-col h-[calc(100vh-var(--header-h)-32px)] sticky top-[calc(var(--header-h)+16px)] border-r border-zinc-800">
        <nav className="md:flex flex-col sticky top-[calc(var(--header-h)+32px)]">
          <SideBarTab name="Обо мне" href="/about" />
          <SideBarTab name="Контакты" href="/about/contacts" />
          <SideBarTab name="Игры" href="/about/games" />
          <SideBarTab name="Пустая страница" href="/about/empty" />
        </nav>
      </aside>
      <article className="md:w-4/5 px-2 md:px-10 py-6">{children}</article>
    </div>
  );
}
