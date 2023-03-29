import useDebounce from './useDebounce'

function swiperGridArrays<T>(arr: T[]): {
  first: T[];
  second: T[];
} {
  const first: T[] = []
  const second: T[] = []
  let change = true

  arr.forEach((el) => {
    if (change) {
      first.push(el)
      change = false
    } else {
      second.push(el)
      change = true
    }
  })

  return { first, second }
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

const dateFormat = (date: Date | null) => {
  if (!date) return null

  const normDate = new Date(date)

  if (
    normDate.getFullYear() >= new Date().getFullYear() &&
    normDate.getMonth() + normDate.getDate() === 1
  )
    return 'в ' + normDate.getFullYear() + ' году'

  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
    .format(normDate)
    .replace(/\u202F/g, ' ')
}

export { useDebounce, swiperGridArrays, debounce, dateFormat }
