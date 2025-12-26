import Image from 'next/image'

export default function Fursona() {
  return (
    <>
      <a href="https://krfx.ru/ref" className="p-6">
        <Image
          src="https://cdn.krfx.ru/ref.jpg"
          alt="Fursona reference"
          height={4960}
          width={7016}
        ></Image>
      </a>
      <p>
        TODO: обязательно сделаю галерею артов, описание, фотки сьюта и т.д.....
        Когда-то....
      </p>
    </>
  )
}
