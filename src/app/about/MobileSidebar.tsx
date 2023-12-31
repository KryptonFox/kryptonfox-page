'use client';
import SideBarTab from '@/components/SideBarTab';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

export default function MobileSidebar() {
  return (
    <Menu>
      <Menu.Button
        as="div"
        className="sticky top-[calc(var(--header-h)+8px)] left-2 cursor-pointer z-10"
      >
        {({ open }) =>
          open ? (
            <XMarkIcon className="text-red-400 relative left-[210px] w-6 mx-2" />
          ) : (
            <Bars3Icon className="h6 mx-2 w-6 text-white" />
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
        <Menu.Items className="pt-8 p-2 flex flex-col w-[250px] h-[calc(100vh-var(--header-h))] fixed top-[var(--header-h)] bg-zinc-950/40 border-r backdrop-blur-md border-yellow-400">
          <Menu.Item>
            <SideBarTab name="Обо мне" href="/about" />
          </Menu.Item>
          <Menu.Item>
            <SideBarTab name="Интересные факты" href="/about/facts" />
          </Menu.Item>
          <Menu.Item>
            <SideBarTab name="Соц. сети" href="/about/socials" />
          </Menu.Item>
          <Menu.Item>
            <SideBarTab name="Игры" href="/about/games" />
          </Menu.Item>
          <Menu.Item>
            <SideBarTab name="Хобби" href="/about/hobbies" />
          </Menu.Item>
          <Menu.Item>
            <SideBarTab name="Пустая страница" href="/about/empty" />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
