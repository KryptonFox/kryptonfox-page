import Project from '@/components/projects/Project'

export default function Projects() {
  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold">Мои проекты</h1>
      <p className="py-4 font-bold">
        Мои небольшие проекты, которые я пишу для изучения. С основными
        используемыми технологиями можно ознакомиться в разделе ниже
      </p>
      <div className="space-y-4">
        <Project
          heading="KryptonFox Page"
          imageSrc="/projects/kryptonfox-page.png"
          repoUrl="https://github.com/KryptonFox/kryptonfox-page"
          projectUrl="https://kryptonfox.ru/"
        >
          <p className="text-justify">
            Тот самый сайт, на котором вы сейчас находитесь. Сделан пару лет
            назад с целью применения моих навыков веб-разработки. Является моей
            визиткой с небольшой информацией обо мне
          </p>
        </Project>
        <Project
          heading="Krfx URL Shortener"
          imageSrc="/projects/krfx.png"
          repoUrl="https://github.com/KryptonFox/krfx"
          projectUrl="https://krfx.ru/"
        >
          <p className="text-justify">
            Бесплатный сервис для сокращения ссылок и загрузки файлов. Бэкенд
            написан на Rust (скоро), а фронтенд на Next.js
          </p>
        </Project>
      </div>
    </div>
  )
}
