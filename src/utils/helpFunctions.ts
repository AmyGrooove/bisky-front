function debounce<T extends (...args: any[]) => any>(func: T, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function (this: any, ...args: Parameters<T>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
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

export { debounce, cl }
