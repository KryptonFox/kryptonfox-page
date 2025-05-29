'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Link as LinkIcon } from 'lucide-react'

interface Props {
  name: string
  homepageHref: string
  imageSrc: string
  highlightColor: string
}

export default function TechnologyIcon({
  name,
  homepageHref,
  imageSrc,
  highlightColor,
}: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: `0px 0px ${isHovered ? '12px' : '0px'} ${highlightColor}`,
        }}
        className={`w-14 cursor-pointer rounded-xl border border-zinc-800 md:w-32`}
      >
        <Link href={homepageHref} className="block p-2 md:p-4">
          <Image
            src={imageSrc}
            alt={name}
            height={96}
            width={96}
            className="aspect-square"
          />
        </Link>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, translateX: '-50%' }}
            whileHover={{ scale: 1.1 }}
            animate={{ height: 'auto', translateY: 5 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute left-1/2 z-20 box-border origin-center -translate-x-1/2 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900"
          >
            <Link
              href={homepageHref}
              className="flex items-center gap-0.5 p-2 text-xs"
            >
              <LinkIcon height={20} />
              {name}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
