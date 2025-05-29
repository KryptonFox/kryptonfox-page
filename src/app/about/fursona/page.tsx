import Image from 'next/image'

export default function Fursona() {
  return (
    <a href="https://krfx.ru/ref" className="p-6">
      <Image
        src="https://cdn.krfx.ru/ref.jpg"
        alt="Fursona reference"
        height={4960}
        width={7016}
      ></Image>
    </a>
  )
}
