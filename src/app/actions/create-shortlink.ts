'use server'

const status = {
  221: 'Неправильное короткое имя ссылки!',
  222: 'Несуществующая ссылка!',
  224: 'Эта ссылка уже занята',
}

export async function createShortlink(
  prevState: any,
  formData: FormData,
): Promise<{ message: string | undefined; url?: string }> {
  const url = formData.get('url')
  const shortname = formData.get('shortname')

  if (!url)
    return {
      message: 'Введите ссылку!',
    }

  if (shortname)
    if (!/^[a-z0-9_-]+$/.test(String(shortname)))
      return {
        message: 'Неправильный формат имени короткой ссылки!',
      }

  const response = await fetch(
    `https://krfx.ru/api/shortlink?url=${url}${
      shortname ? '&shortname=' + shortname : ''
    }`,
    { method: 'PUT' },
  )
  const json = await response.json()
  return {
    message: status[json.code],
    url: json.url,
  }
}
