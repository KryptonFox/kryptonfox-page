import React from 'react';
import CreateLinkForm from './CreateLinkForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Сокращатель ссылок | KryptonFox' },
  description: 'Fast and simple link shortener. Made with <3 by KryptonFox',
  openGraph: {
    title: 'Link shortener krfx.ru',
    url: 'https://krfx.ru/',
    type: 'website',
    description: 'Fast and simple link shortener. Made with <3 by KryptonFox',
  },
};

export default function page() {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold my-4">
        Сокращатель ссылок
      </h1>
      <CreateLinkForm />
    </div>
  );
}
