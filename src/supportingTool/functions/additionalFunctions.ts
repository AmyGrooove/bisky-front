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

const dateFormat = (date: string) =>
  new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
    .format(new Date(date))
    .replace(/\u202F/g, ' ')

export {
  httpGet,
  getRandomValue,
  useDebounce,
  swiperGridArrays,
  removeDuplicates,
  debounce,
  dateFormat,
}
