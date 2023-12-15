import SideBarTab from '@/components/SideBarTab';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-1/4 lg:w-1/5 p-4 my-4 hidden md:flex flex-col h-[calc(100vh-var(--header-h)-32px)] sticky top-[calc(var(--header-h)+16px)] border-r border-zinc-800">
      <nav className="md:flex flex-col sticky top-[calc(var(--header-h)+32px)]">
        <SideBarTab name="Обо мне" href="/about" />
        <SideBarTab name="Интересные факты" href="/about/facts" />
        <SideBarTab name="Соц. сети" href="/about/socials" />
        <SideBarTab name="Игры" href="/about/games" />
        <SideBarTab name="Хобби" href="/about/hobbies" />
        <SideBarTab name="Пустая страница" href="/about/empty" />
      </nav>
    </aside>
  );
}
