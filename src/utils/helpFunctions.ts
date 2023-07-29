export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay = 500,
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function (this: any, ...args: Parameters<T>) {
    const context = this

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

export const cl = (...args: (string | undefined | false)[]) => {
  return args.filter((el) => el !== undefined && el !== false).join(" ")
}

export const hasOnlyDigits = (str: string) => /^-?\d+$/.test(str)

export const getRandomValue = (max = 100, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min)
