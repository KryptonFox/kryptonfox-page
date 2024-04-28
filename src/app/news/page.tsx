import React from 'react';
import Post from './Post';

export default function page() {
  return (
    <div className="flex flex-col items-center space-y-4 py-4">
      <Post header="Обновление 1.1.0" date="28.04.24">
        <ul className="list-disc ml-5">
          <li>Добавлен сокращатель ссылок {'"krfx"'}</li>
          <li>Переделана главная страница</li>
          <li>Немного изменена цветовая окраска сайта</li>
          <li>Новости теперь красивые!</li>
          <li>Многие незначительные доработки</li>
        </ul>
      </Post>
      <Post header="Обновление 1.0.0" date="31.12.23">
        <ul className="list-disc ml-5">
          <li>Добавлен раздел «Новости»</li>
          <li>Next.js обновлён до версии 14.0.4</li>
          <li>Сайт оптимизирован под телефоны (сделаны мобильные меню)</li>
          <li>Заменена иконка сайта</li>
          <li>Заменена модель скина в разделе Обо мне {'>'} игры</li>
          <li>Изменена версия проекта в package.json</li>
          <li>Мелкие стилистические изменения и исправления багов</li>
        </ul>
      </Post>
    </div>
  );
}
