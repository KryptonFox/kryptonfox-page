import ProfileLayout from '@/app/about/games/components/profileLayout'

export default function page() {
  return (
    <>
      <h1 className="mb-3 text-center text-4xl font-extrabold md:text-start">
        Игры
      </h1>
      <div className="flex flex-wrap justify-center space-x-4 md:justify-between">
        <p className="min-w-[220px] flex-1 pb-4 text-justify text-lg">
          Я вообще ни во что не играю часто. Мне просто лень, да и время в
          основном уходит на учёбу и программирование. Но иногда с друзьяшками
          на СП в майкрафте сижу
        </p>
        <ProfileLayout />
      </div>
    </>
  )
}
