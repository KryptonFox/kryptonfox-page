import GithubLink from '@/components/footer/GithubLink'

const BuildHash = () => (
  <>
    <span>@</span>
    <a
      target="_blank"
      className="text-blue-400/60 hover:text-blue-500 hover:underline"
      href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}/tree/${process.env.VERCEL_GIT_COMMIT_SHA}`}
    >
      {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}
    </a>
  </>
)

export default function Footer() {
  return (
    <footer className="h-[72px] w-full border-t border-zinc-800 bg-zinc-900/30 p-4">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div>
          <p>made by @KryptonFox, 2025</p>
          <p className="text-xs text-zinc-500">
            build
            {process.env.VERCEL && <BuildHash />}
            <span> from </span>
            <span>
              {new Intl.DateTimeFormat('ru-RU', {
                dateStyle: 'short',
                timeStyle: 'medium',
                timeZone: 'Europe/Moscow',
              }).format(new Date())}
            </span>
          </p>
        </div>
        <GithubLink />
      </div>
    </footer>
  )
}
