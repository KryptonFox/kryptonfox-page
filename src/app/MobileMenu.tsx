'use client';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function MobileMenu() {
  return (
    <Menu as="div" className="relative h-6">
      <Menu.Button>
        <Bars3Icon className="h6 w-6 text-white" />
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
        <Menu.Items className="absolute right-0.5 flex flex-col bg-zinc-900 rounded-lg p-2 border border-yellow-400">
          <Menu.Item>
            <Link
              className="hover:bg-zinc-800 active:bg-zinc-700 transition-colors rounded-lg p-2 w-40"
              href="/news"
            >
              Новости
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="hover:bg-zinc-800 active:bg-zinc-700 transition-colors rounded-lg p-2 w-40"
              href="/about"
            >
              Обо мне
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
