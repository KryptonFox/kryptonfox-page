import TechnologyIcon from '@/components/technologies/TechnologyIcon'

export default function Technologies() {
  return (
    <div>
      <h1 className="mb-6 text-center text-2xl font-extrabold md:text-4xl">
        Технологии, которые я применяю или изучаю
      </h1>
      <div className="grid grid-cols-[auto_1fr] rounded-lg border border-zinc-700 *:flex *:flex-wrap *:items-center *:gap-4 *:border-zinc-700 *:p-4">
        <div className="border-b border-r">
          <TechnologyIcon
            name={'TypeScript'}
            homepageHref={'https://www.typescriptlang.org/'}
            imageSrc={'/technologies/ts.svg'}
            highlightColor="#4287f5"
          />
        </div>
        <div className="border-b">
          <TechnologyIcon
            name={'Next.js'}
            homepageHref={'https://nextjs.org/'}
            imageSrc={'/technologies/next.svg'}
            highlightColor="#f0f6ff"
          />
          <TechnologyIcon
            name={'Prisma.js'}
            homepageHref={'https://www.prisma.io/'}
            imageSrc={'/technologies/prisma.svg'}
            highlightColor="#5a67d8"
          />
          <TechnologyIcon
            name={'Node.js'}
            homepageHref={'https://nodejs.org/en'}
            imageSrc={'/technologies/node.svg'}
            highlightColor="#56a645"
          />
        </div>
        <div className="border-r">
          <TechnologyIcon
            name={'Rust'}
            homepageHref={'https://www.rust-lang.org/'}
            imageSrc={'/technologies/rust.svg'}
            highlightColor="#ef4a00"
          />
        </div>
        <div>
          <TechnologyIcon
            name={'Crates.io'}
            homepageHref={'https://crates.io/'}
            imageSrc={'/technologies/crates.png'}
            highlightColor="#c8a074"
          />
          <TechnologyIcon
            name={'Actix'}
            homepageHref={'https://actix.rs/'}
            imageSrc={'/technologies/actix.png'}
            highlightColor="#e26af2"
          />
          <TechnologyIcon
            name={'SeaORM'}
            homepageHref={'https://www.sea-ql.org/SeaORM/'}
            imageSrc={'/technologies/sea-orm.png'}
            highlightColor="#7fd2f5"
          />
        </div>
      </div>
    </div>
  )
}
