'use client'
import SidebarTab from '@/components/SidebarTab'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { linkList } from './sidebarList'

export default function MobileSidebar() {
  return (
    <Menu>
      <Menu.Button
        as="div"
        className="sticky top-[calc(var(--header-h)+8px)] left-2 cursor-pointer z-10"
      >
        {({ open }) =>
          open ? (
            <XMarkIcon className="mx-2 w-6 text-red-400" />
          ) : (
            <Bars3Icon className="mx-2 w-6 text-white" />
          )
        }
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="translate-x-[-100%] opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100"
        leaveTo="translate-x-[-100%] opacity-0"
      >
        <Menu.Items className="pt-8 p-2 flex flex-col w-[250px] h-[calc(100vh-var(--header-h))] fixed top-[var(--header-h)] bg-zinc-950/50 border-r backdrop-blur-lg border-yellow-400">
          {linkList.map(({ name, href }, i) => (
            <Menu.Item key={i}>
              <SidebarTab name={name} href={href} />
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
