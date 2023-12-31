import React from 'react';

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-extrabold">Обновление 1.0.0 [31.12.23]</h1>
      <p className="text-2xl font-extrabold my-2">
        С новым годом вас всех!!!!!
      </p>
      <p>Список изменений: </p>
      <ul className="list-disc ml-5">
        <li>Добавлен раздел «Новости»</li>
        <li>Next.js обновлён до версии 14.0.4</li>
        <li>Сайт оптимизирован под телефоны (сделаны мобильные меню)</li>
        <li>Заменена иконка сайта</li>
        <li>Заменена модель скина в разделе Обо мне {'>'} игры</li>
        <li>Изменена версия проекта в package.json</li>
        <li>Мелкие стилистические изменения и исправления багов</li>
      </ul>
    </>
  );
}
