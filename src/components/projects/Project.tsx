import Image from 'next/image'
import { JSX, ReactNode } from 'react'
import { FolderGit2, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

interface Props {
  heading: string
  imageSrc: string
  repoUrl: string
  projectUrl?: string
  children?: ReactNode
}

export default function Project({
  heading,
  imageSrc,
  repoUrl,
  projectUrl,
  children,
}: Props): JSX.Element {
  return (
    <div className="grid grid-cols-1 rounded-lg border border-zinc-700 p-4 lg:grid-cols-[max-content_1fr]">
      <div className="overflow-hidden rounded-lg border border-zinc-800 p-4">
        <Image src={imageSrc} alt={heading} height={400} width={400} />
      </div>
      <div className="flex flex-col justify-between gap-4 p-4 lg:gap-0 lg:p-0 lg:pl-6">
        <div>
          <h2 className="mb-2 text-center font-extrabold md:text-2xl">
            {heading}
          </h2>
          {children}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={repoUrl} className="flex gap-2">
            <FolderGit2 />
            <span>Репозиторий</span>
          </Link>
          {projectUrl && (
            <Link href={projectUrl} className="flex gap-2">
              <LinkIcon />
              <span>Ссылка</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
