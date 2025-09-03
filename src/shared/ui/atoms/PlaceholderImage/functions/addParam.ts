const addParam = (url: string, key: string, val: string | number) =>
  `${url}${url.includes('?') ? '&' : '?'}${key}=${encodeURIComponent(String(val))}`

export { addParam }
