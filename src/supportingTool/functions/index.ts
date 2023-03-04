import { API_URL } from '../constatns'

import useDebounce from './useDebounce'

async function httpGet<T>(url: string): Promise<T> {
  return fetch(API_URL + url, {
    headers: {
      accept: 'application/json',
    },
  }).then((response) => response.json())
}

function getRandomValue(max: number, min = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getNormalKind = (value: string): string => {
  const normalKinds: { [key: string]: string } = {
    tv: 'Сериал',
    movie: 'Фильм',
    default: 'anime',
  }
  return normalKinds[value] || normalKinds.default
}

const getRating = (score: number) => {
  switch (true) {
  case score >= 7:
    return 'score_high'
  case score >= 5:
    return 'score_meduim'
  default:
    return 'score_low'
  }
}

export { httpGet, getRandomValue, useDebounce, getNormalKind, getRating }
