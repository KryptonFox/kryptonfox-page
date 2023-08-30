import SideBarTab from "@/components/SideBarTab";

export default function layout({ children }) {
    return (
        <div className="flex">
            <div className="w-1/4 h-[200px] p-4 hidden md:flex flex-col sticky top-[92px]">
                <SideBarTab name='Обо мне' href='/about' />
                <SideBarTab name='Контакты' href='/about/contacts' />
                <SideBarTab name='Игры' href='/about/games' />
                <SideBarTab name='Пустая страница' href='/about/empty' />
            </div>
            <article className="w-3/4 px-10 py-6">{children}</article>
        </div>
    )
}
