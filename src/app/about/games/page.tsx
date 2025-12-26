import ProfileLayout from '@/app/about/games/components/profileLayout'

export default function page() {
  return (
    <>
      <h1 className="mb-3 text-center text-4xl font-extrabold md:text-start">
        Игры
      </h1>
      <div className="flex flex-wrap justify-center space-x-4 md:justify-between">
        <p className="min-w-55 flex-1 pb-4 text-justify text-lg">
          <p className="text-2xl">Учусь, отдыхаю, а играть леньь...</p>
          Иногда играю во всякие онлайн штуки по типу Minecraft, Helldivers 2,
          etc.. Также обзавёлся VR шлемом, чтобы в ближайшее время стать жёстким
          VRChat Furry {'>'}:3
        </p>
        <ProfileLayout />
      </div>
    </>
  )
}
