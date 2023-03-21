import useDebounce from './useDebounce'

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

const dateFormat = (date: Date | null) =>
  date !== null
    ? new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
      .format(new Date(date))
      .replace(/\u202F/g, ' ')
    : null

export { useDebounce, swiperGridArrays, debounce, dateFormat }
