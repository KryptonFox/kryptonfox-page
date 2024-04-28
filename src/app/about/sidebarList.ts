interface Link {
  name: string;
  href: string;
}

export let linkList: Link[] = [
  { name: 'Обо мне', href: '/about' },
  { name: 'Соцсети', href: '/about/socials' },
  { name: 'Интересные факты', href: '/about/facts' },
  { name: 'Игры', href: '/about/games' },
  { name: 'empty', href: '/about/empty' },

];
