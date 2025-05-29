interface Link {
  name: string
  href: string
}

export const linkList: Link[] = [
  { name: 'Обо мне', href: '/about' },
  { name: 'Мой персонаж', href: '/about/fursona' },
  { name: 'Проекты', href: '/about/projects' },
  { name: 'Навыки', href: '/about/technologies' },
  { name: 'Контакты', href: '/about/socials' },
  { name: 'Игры', href: '/about/games' },
  // { name: 'Факты', href: '/about/facts' },
  { name: 'empty', href: '/about/empty' },
]
