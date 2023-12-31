import ProfileLayout from '@/app/about/games/components/profileLayout';

export default function page() {
  return (
    <>
      <h1 className="text-4xl mb-3 font-extrabold">Игры в которые я играю</h1>
      <h2 className="text-3xl font-bold mb-4">Майнкраааафффт!</h2>
      <div className="flex flex-wrap justify-center md:justify-between">
        <p className="flex-1 min-w-[220px] pr-8 pb-4 text-lg text-justify">
          Классная игра. Одна из первых игр в которые я начал играть. Играю в
          неё до сих пор. Играю в основном на лицензионных серверах с
          мини-играми, а также на приватных
        </p>
        <ProfileLayout />
      </div>
      <p className="py-2 text-xl">
        Иногда играю во что-то другое по настроению :)
      </p>
    </>
  );
}
