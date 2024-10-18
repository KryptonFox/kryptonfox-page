'use client'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function MobileMenu() {
  return (
    <Menu as="div" className="relative h-6">
      <Menu.Button>
        <Bars3Icon className="w-6 text-white h6" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex absolute right-0.5 flex-col p-2 rounded-lg border border-yellow-400 bg-zinc-900">
          <Menu.Item>
            <Link
              className="p-2 w-40 rounded-lg transition-colors hover:bg-zinc-800 active:bg-zinc-700"
              href="/news"
            >
              Новости
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="p-2 w-40 rounded-lg transition-colors hover:bg-zinc-800 active:bg-zinc-700"
              href="/about"
            >
              Обо мне
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
