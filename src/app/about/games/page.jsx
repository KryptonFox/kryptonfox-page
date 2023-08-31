import Image from 'next/image';

export default function page() {
  return (
    <>
      <h1 className="text-xl md:text-[2.5rem] mb-8 font-extrabold">
        Игры в которые я играю
      </h1>
      <h2 className="text-lg md:text-3xl font-extrabold mb-4">
        1. Майнкраааафффт!
      </h2>
      <Image src="/minecraft.png" alt="minecraft" width="800" height="450" />
      <h2 className="text-lg md:text-3xl font-extrabold mt-8 mb-4">
        2. А больше собственно и не придумал...
      </h2>
      <p>Просто играть вообще ни во что не хочется(</p>
    </>
  );
}
