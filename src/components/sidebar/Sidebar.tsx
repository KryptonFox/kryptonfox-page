import React from 'react'
import SidebarMobile from './SidebarMobile'
import SidebarDesktop from './SidebarDesktop'

export default function Sidebar() {
  return (
    <>
      <aside className="hidden border-r border-indigo-950/60 p-4 md:block">
        <nav className="sticky top-28 flex-col md:flex">
          <SidebarDesktop />
        </nav>
      </aside>
      <aside className="fixed top-20 z-20 m-1 md:hidden">
        <nav className="relative h-6">
          <SidebarMobile />
        </nav>
      </aside>
    </>
  )
}
