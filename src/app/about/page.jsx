export default function about() {
  return (
    <div className="p-4 mt-2 space-y-2">
      <h1 className="text-[2rem] font-bold">Информация обо мне</h1>
      <ul className="list-[square] ml-6 text-xl">
        <li className="pl-1">Discord <a className="bg-zinc-800 rounded-lg p-1">kryptonfox</a></li>
        <li><a className="hover:bg-zinc-800 rounded-lg p-1 transition" href="https://steamcommunity.com/id/kryptonfox/">Steam</a></li>
        <li className="pl-1">Telegram <a className="bg-zinc-800 rounded-lg p-1" href="https://t.me/Krypt0nF">@Krypt0nF</a></li>
      </ul>
      <p className="!mt-4 text-indigo-500">Just a little cute fox ._.</p>
      <p className="text-indigo-500 font-bold">OwO</p>
    </div>
  )
}
