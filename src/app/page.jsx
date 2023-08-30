import Image from "next/image";

export default function Page() {
  return (
    <div className="p-8 space-y-2">
      <h1 className="text-[2rem] font-extrabold">Добро пожаловать</h1>
      <p>Это мой сайт, точнее его начало. Буду его доделывать по мере своих умений и идей что сюда добавить. И да, он не оптимизирован под телефоны</p>
      <Image src='/kotek.png' alt='kotek' width='238' height='252'/>
      <p className="text-lg text-red-600">{'UPD!: 31.08.2023 - обновлён раздел "обо мне", а также мелкие улучшения!'}</p>
    </div>
  )
}
