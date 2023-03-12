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

const nextEpisode = (date: string) => {
  let normalDate = (new Date(date).getTime() - Date.now()) / 3600000
  console.log(normalDate)

  if (normalDate >= 24) {
    normalDate = Math.floor(normalDate / 24)

    switch (normalDate % 10) {
    case 1:
      return normalDate + ' день'
    case 2:
    case 3:
    case 4:
      return normalDate + ' дня'
    default:
      return normalDate + ' дней'
    }
  } else {
    normalDate = Math.floor(normalDate)

    switch (normalDate % 10) {
    case 1:
      return normalDate + ' час'
    case 2:
    case 3:
    case 4:
      return normalDate + ' часа'
    case 0:
      return '<1 часа'
    default:
      return normalDate + ' часов'
    }
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

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 100,
  immediate = false,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined

  return function debounced(this: any, ...args: Parameters<T>): void {
    const context = this

    const later = function (): void {
      timeout = undefined
      if (!immediate) {
        func.apply(context, args)
      }
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) {
      func.apply(context, args)
    }
  }
}

export {
  httpGet,
  getRandomValue,
  useDebounce,
  getNormalKind,
  getRating,
  swiperGridArrays,
  removeDuplicates,
  nextEpisode,
  debounce,
}
