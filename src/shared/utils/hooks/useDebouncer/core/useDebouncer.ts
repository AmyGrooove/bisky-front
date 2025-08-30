import { useCallback, useEffect, useRef } from 'react'

const useDebouncer = (callback: () => void, delay = 250) => {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const debounceCall = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      callbackRef.current()
    }, delay)
  }, [delay])

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => cancel, [cancel])

  return { debounceCall, cancel }
}

export { useDebouncer }
