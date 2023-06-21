function debounce<T extends (...args: any[]) => any>(func: T, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function (this: any, ...args: Parameters<T>) {
    const context = this

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

const cl = (...args: (string | undefined | false)[]) => {
  return args.filter((el) => el !== undefined && el !== false).join(" ")
}

function hasOnlyDigits(str: string) {
  return /^-?\d+$/.test(str)
}

export { debounce, cl, hasOnlyDigits }
