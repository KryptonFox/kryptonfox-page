import SidebarTab from '@/components/SidebarTab'
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { linkList } from './sidebarList'

export default function Sidebar() {
  return (
    <>
      <aside className="w-1/4 xl:w-1/5 p-4 my-4 hidden md:flex flex-col h-[calc(100vh-var(--header-h)-32px)] sticky top-[calc(var(--header-h)+16px)] border-r border-zinc-800">
        <nav className="md:flex flex-col sticky top-[calc(var(--header-h)+32px)]">
          {linkList.map(({ name, href }, i) => (
            <SidebarTab name={name} href={href} key={i} />
          ))}
        </nav>
      </aside>
      <aside className="z-50 w-2 md:hidden">
        <MobileSidebar />
      </aside>
    </>
  )
}
