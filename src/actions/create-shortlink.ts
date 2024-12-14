'use server'

const status = {
  'URL is invalid': 'Неправильная ссылка!',
  'Restricted characters': 'Неправильное короткое имя ссылки!',
  'The name is too short': 'Слишком короткое имя ссылки',
  'Name is used': 'Эта ссылка уже занята',
}

export async function createShortlink(
  prevState: any,
  formData: FormData,
): Promise<{ message: string | undefined; url?: string }> {
  const url = formData.get('url')
  const name = formData.get('shortname')

  if (!url)
    return {
      message: 'Введите ссылку!',
    }

  if (name)
    if (!/^[a-zA-Z0-9_-]+$/.test(String(name)))
      return {
        message: 'Неправильный формат имени короткой ссылки!',
      }

  const response = await fetch(`https://krfx.ru/api/links/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, name }),
  })

  const json = await response.json()
  console.log(json)
  return {
    message: status[json.error],
    url: json.url,
  }
}
