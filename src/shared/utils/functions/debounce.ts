const debounce = (func: (...args: any) => void, wait = 200) => {
  let timeout: NodeJS.Timeout

  return (...args: any[]) => {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export { debounce }
