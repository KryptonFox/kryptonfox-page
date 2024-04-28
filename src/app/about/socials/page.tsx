import SocialLink from './socialLink';

export default function about() {
  return (
    <>
      <h1 className="text-4xl text-center font-extrabold">Социальные сети</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <SocialLink
          title="@Krypt0nF"
          href="https://t.me/Krypt0nF"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
        />
        <SocialLink
          title="KryptonFox"
          href="https://github.com/KryptonFox"
          imgSrc="/social/github.png"
        />
        <SocialLink
          title="Kirik_Lit"
          href="https://steamcommunity.com/id/kryptonfox/"
          imgSrc="/social/steam.png"
        />
        <SocialLink
          title="kryptonfox"
          href=" https://discordapp.com/users/400289522367070209"
          imgSrc="/social/discord-white.svg"
        />
      </div>
    </>
  );
}
