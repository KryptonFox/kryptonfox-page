import Image from "next/image";

export default function Page() {
  return (
    <div className="p-4 mt-2 space-y-2">
      <h1 className="text-[2rem] font-extrabold">Добро пожаловать</h1>
      <p>Это мой сайт, точнее его начало. Буду его доделывать по мере своих умений и идей что сюда добавить. И да, он не оптимизирован под телефоны</p>
      <Image src='/kotek.png' alt='kotek' width='238' height='252'/>
    </div>
  )
}
