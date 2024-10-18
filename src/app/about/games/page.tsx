import ProfileLayout from '@/app/about/games/components/profileLayout'

export default function page() {
  return (
    <>
      <h1 className="mb-3 text-4xl font-extrabold text-center">Игры</h1>
      <h2 className="mb-4 text-3xl font-bold text-center">Майнкрафт!</h2>
      <div className="flex flex-wrap justify-center space-x-4 md:justify-between">
        <p className="flex-1 pb-4 text-lg text-justify min-w-[220px]">
          Одна из первых моих игр и играю в неё до сих пор. Очень уж нравится
          мне тут проводить время с друзьями. Играю обычно на СП, а также других
          приватных серверах
        </p>
        <ProfileLayout />
      </div>
      <p className="py-2 text-justify">
        Иногда играю во что-то другое по настроению, но это очень редко т.к. я
        нахожу себе занятие поинтереснее :)
      </p>
    </>
  )
}
