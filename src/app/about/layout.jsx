import SideBarTab from '@/components/SideBarTab';

export default function layout({ children }) {
  return (
    <div className="flex">
      <aside className="w-1/4 h-full p-4 my-4 hidden md:flex flex-col sticky top-[92px] border-r border-zinc-800">
        <SideBarTab name="Обо мне" href="/about" />
        <SideBarTab name="Контакты" href="/about/contacts" />
        <SideBarTab name="Игры" href="/about/games" />
        <SideBarTab name="Пустая страница" href="/about/empty" />
      </aside>
      <article className="w-3/4 px-10 py-6">{children}</article>
    </div>
  );
}
