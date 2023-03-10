import { API_URL } from '../constatns'
import { PosterAnime } from '../types'

import useDebounce from './useDebounce'

async function httpGet<T>(url: string, body?: Record<string, any>): Promise<T> {
  return fetch(API_URL + url, {
    headers: {
      accept: 'application/json',
    },
    body: JSON.stringify(body),
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
    return 'score_medium'
  default:
    return 'score_low'
  }
}

function swiperGridArrays(arr: any[]): {
  firstArr: any[];
  secondArr: any[];
} {
  const firstArr: any[] = []
  const secondArr: any[] = []
  let change = true

  arr.forEach((el) => {
    if (change) {
      firstArr.push(el)
      change = false
    } else {
      secondArr.push(el)
      change = true
    }
  })

  return { firstArr, secondArr }
}

function removeDuplicates(arr: PosterAnime[]): PosterAnime[] {
  const uniqueArr: PosterAnime[] = []
  const seenIds: Set<number> = new Set()

  for (const element of arr) {
    if (!seenIds.has(element.shiki_id)) {
      seenIds.add(element.shiki_id)
      uniqueArr.push(element)
    }
  }

  return uniqueArr
}

export {
  httpGet,
  getRandomValue,
  useDebounce,
  getNormalKind,
  getRating,
  swiperGridArrays,
  removeDuplicates,
}
