import { API_URL } from '../constatns'

import useDebounce from './useDebounce'

async function httpGet<T>(url: string): Promise<T> {
  return fetch(API_URL + url, {
    headers: {
      accept: 'application/json',
    },
  }).then((response) => response.json())
}

function getRandomValue(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
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
