import ProfileLayout from '@/app/about/games/components/profileLayout';

export default function page() {
  return (
    <>
      <h1 className="text-xl md:text-4xl mb-8 font-extrabold">
        Игры в которые я играю
      </h1>
      <h2 className="text-lg md:text-3xl font-extrabold mb-4">
        Майнкраааафффт!
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start">
        <p className="flex-1 min-w-[220px] max-w-[600px] px-4 pb-4 text-lg">
          Классная игра. Одна из первых игр в которые я начал играть. Играю в
          неё до сих пор. Играю в основном на лицензионных серверах с
          мини-играми ( Hypixel и т.д. ), а также на приватных
          ( <a href="http://pepeland.net" className='underline'>Pepeland</a> ). Если хочешь можешь поиграть со мной)
        </p>
        <ProfileLayout />
      </div>
      <p className='p-4 text-xl'>Желания играть во что-то другое неть, мне лень ._.</p>
    </>
  );
}
