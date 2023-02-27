async function http<T>(url: string): Promise<T> {
  const response = await fetch(url)
  const body = await response.json()
  return body
}

const getRandomValue = (until: number) => {
  return Math.floor(Math.random() * (until + 1))
}

export { http, getRandomValue }
