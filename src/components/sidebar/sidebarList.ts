interface Link {
  name: string
  href: string
}

export let linkList: Link[] = [
  { name: 'Обо мне', href: '/about' },
  { name: 'Проекты', href: '/about/projects' },
  { name: 'Контакты', href: '/about/socials' },
  { name: 'Игры', href: '/about/games' },
  { name: 'Факты', href: '/about/facts' },
  { name: 'empty', href: '/about/empty' },
]
