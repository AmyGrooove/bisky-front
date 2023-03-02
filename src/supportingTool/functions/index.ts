import { API_URL } from '../constatns'

import useDebounce from './useDebounce'

async function httpGet<T>(url: string): Promise<T> {
  return fetch(API_URL + url, {
    headers: {
      accept: 'application/json',
    },
  }).then((response) => response.json())
}

const getRandomValue = (until: number) => {
  return Math.floor(Math.random() * (until + 1))
}

const getNormalKind = (value: string) => {
  switch (value) {
  case 'tv':
    return 'Сериал'
  case 'movie':
    return 'Фильм'
  default:
    return 'anime'
  }
}

export { httpGet, getRandomValue, useDebounce, getNormalKind }
