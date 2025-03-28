import React from 'react'
import Post from './Post'

export default function page() {
  return (
    <div className="mx-auto grid max-w-[500px] items-center gap-4 py-4">
      <Post header="Обновление 2.0.0" date="15.12.24">
        <li>Изменена цветовая гамма сайта</li>
        <li>Переделаны мобильные меню</li>
        <li>Изменены и обновлены некоторые библиотеки</li>
        <li>Добавлены анимации в сайдбере на /about</li>
        <li>/about/projects в разработке</li>
        <li>Многие незначительные доработки</li>
      </Post>
      <Post header="Обновление 1.2.0" date="07.06.24">
        <li>
          Обновлена логика сокращателя ссылок и добавленка кнопка копирования
          для короткой ссылки
        </li>
        <li>Обновлен раздел /about для мобильных устройств</li>- Исправлена баг
        размытия меню для мобильных устройств при открытии /about/games и /about
        <li>Частично изменена прозрачность и размытие в некоторых местах</li>
        <li>Обновлён раздел /about/games</li>
        <li>Добавлена поддержка OpenGraph</li>
      </Post>
      <Post header="Обновление 1.1.0" date="28.04.24">
        <li>Добавлен сокращатель ссылок {'"krfx"'}</li>
        <li>Переделана главная страница</li>
        <li>Немного изменена цветовая окраска сайта</li>
        <li>Новости теперь красивые!</li>
        <li>Многие незначительные доработки</li>
      </Post>
      <Post header="Обновление 1.0.0" date="31.12.23">
        <li>Добавлен раздел «Новости»</li>
        <li>Next.js обновлён до версии 14.0.4</li>
        <li>Сайт оптимизирован под телефоны (сделаны мобильные меню)</li>
        <li>Заменена иконка сайта</li>
        <li>Заменена модель скина в разделе Обо мне {'>'} игры</li>
        <li>Изменена версия проекта в package.json</li>
        <li>Мелкие стилистические изменения и исправления багов</li>
      </Post>
    </div>
  )
}
